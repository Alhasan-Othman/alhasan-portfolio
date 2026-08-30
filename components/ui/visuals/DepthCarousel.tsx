"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export interface DepthItem {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  features: string[];
  image: string;
}

interface DepthCarouselProps {
  items: DepthItem[];
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  spread?: number;
  tilt?: number;
  duration?: number;
  ease?: string;
  loop?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

export default function DepthCarousel({
  items = [],
  cardWidth = 520,
  cardHeight = 520,
  radius = 20,
  spread = 280,
  tilt = 14,
  duration = 400,
  ease = 'power2.out',
  loop = true,
  showControls = true,
  showIndicators = true,
  className = ''
}: DepthCarouselProps) {
  const count = items.length;

  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const posRef = useRef(0);
  const focusRef = useRef(0);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const scaleRef = useRef(1);
  const responsiveSpreadRef = useRef(spread);
  const cfgRef = useRef<any>({});

  const dragRef = useRef<any>(null);
  const [active, setActive] = useState(0);

  cfgRef.current = {
    count,
    spread,
    tilt,
    duration,
    ease,
    loop,
    cardWidth
  };

  const layout = useCallback((pos: number) => {
    const cfg = cfgRef.current;
    const n = cfg.count;
    if (!n) return;
    const sc = scaleRef.current;
    const currentSpread = responsiveSpreadRef.current;

    for (let i = 0; i < n; i++) {
      const el = cardRefs.current[i];
      if (!el) continue;

      let d = i - pos;
      if (cfg.loop && n > 1) {
        d = ((d % n) + n) % n;
        if (d > n / 2) d -= n;
      }

      const absD = Math.abs(d);
      const shown = absD <= 2.5;

      const tx = currentSpread * d;
      const ry = -cfg.tilt * Math.sign(d) * Math.min(absD, 1);
      
      const cardScale = absD < 0.1 ? 1 : Math.max(0.82, 1 - absD * 0.12);
      const finalScale = cardScale * sc;

      let opacity = 1 - (absD * 0.25);
      if (!shown) opacity = 0;

      const zi = Math.round(1000 - absD * 100);

      el.style.transform = `translate(-50%, -50%) translateX(${tx.toFixed(2)}px) scale(${finalScale.toFixed(4)}) rotateY(${ry.toFixed(2)}deg)`;
      el.style.opacity = opacity.toFixed(3);
      el.style.zIndex = String(zi);
      el.style.pointerEvents = shown && opacity > 0.1 ? 'auto' : 'none';

      const ov = overlayRefs.current[i];
      if (ov) {
        ov.style.opacity = clamp(absD * 0.45, 0, 0.8).toFixed(3);
      }
    }
  }, []);

  const tweenTo = useCallback(
    (target: number, animate: boolean) => {
      tweenRef.current?.kill();
      const cfg = cfgRef.current;
      const proxy = { p: posRef.current };
      const dur = animate ? cfg.duration / 1000 : 0;
      tweenRef.current = gsap.to(proxy, {
        p: target,
        duration: dur,
        ease: cfg.ease,
        onUpdate: () => {
          posRef.current = proxy.p;
          layout(proxy.p);
        },
        onComplete: () => {
          const n = cfg.count;
          if (n > 0) posRef.current = ((posRef.current % n) + n) % n;
          layout(posRef.current);
        }
      });
    },
    [layout]
  );

  const setFocus = useCallback(
    (rawIndex: number, animate = true) => {
      const cfg = cfgRef.current;
      const n = cfg.count;
      if (!n) return;
      const idx = cfg.loop ? ((rawIndex % n) + n) % n : clamp(rawIndex, 0, n - 1);
      let delta = idx - posRef.current;
      if (cfg.loop && n > 1) {
        delta = ((delta % n) + n) % n;
        if (delta > n / 2) delta -= n;
      }
      tweenTo(posRef.current + delta, animate);
      if (idx !== focusRef.current) {
        focusRef.current = idx;
        setActive(idx);
      }
    },
    [tweenTo]
  );

  const navigateBy = useCallback((step: number) => setFocus(focusRef.current + step, true), [setFocus]);

  // Dynamic Auto-Scaling for Mobile screens
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ro = new ResizeObserver(entries => {
      const containerWidth = entries[0].contentRect.width;
      const cfg = cfgRef.current;

      if (containerWidth < 640) {
        // Mobile screen adjustments
        const targetWidth = containerWidth * 0.88;
        scaleRef.current = clamp(targetWidth / cfg.cardWidth, 0.5, 0.95);
        responsiveSpreadRef.current = cfg.spread * 0.65;
      } else {
        // Desktop / Tablet adjustments
        const needed = cfg.cardWidth + Math.abs(cfg.spread) * 1.8;
        scaleRef.current = clamp(containerWidth / needed, 0.65, 1);
        responsiveSpreadRef.current = cfg.spread;
      }

      layout(posRef.current);
    });

    ro.observe(root);
    return () => ro.disconnect();
  }, [layout]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const cfg = cfgRef.current;
    if (cfg.count < 2) return;
    tweenRef.current?.kill();
    dragRef.current = {
      x: e.clientX,
      startPos: posRef.current,
      lastX: e.clientX,
      lastT: performance.now(),
      v: 0,
      moved: false,
      id: e.pointerId
    };
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      const drag = dragRef.current;
      if (!drag) return;
      const cfg = cfgRef.current;
      const stepPx = Math.max(cfg.cardWidth * 0.4 * scaleRef.current, 30);
      const dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) > 4) {
        drag.moved = true;
        rootRef.current?.setPointerCapture(drag.id);
      }
      if (!drag.moved) return;
      const now = performance.now();
      const dt = Math.max(now - drag.lastT, 1);
      drag.v = (e.clientX - drag.lastX) / dt;
      drag.lastX = e.clientX;
      drag.lastT = now;
      posRef.current = drag.startPos - dx / stepPx;
      layout(posRef.current);
    },
    [layout]
  );

  const onPointerEnd = useCallback(() => {
    const drag = dragRef.current;
    if (!drag) return;
    dragRef.current = null;
    if (!drag.moved) return;
    const cfg = cfgRef.current;
    const stepPx = Math.max(cfg.cardWidth * 0.4 * scaleRef.current, 30);
    const projected = posRef.current - (drag.v * 160) / stepPx;
    setFocus(Math.round(projected), true);
  }, [setFocus]);

  useEffect(() => {
    layout(posRef.current);
  }, [layout, spread, tilt, cardWidth, cardHeight, radius, count]);

  return (
    <div
      ref={rootRef}
      className={`relative w-full h-[520px] sm:h-[580px] flex items-center justify-center outline-none select-none cursor-grab active:cursor-grabbing overflow-hidden ${className}`}
      style={{ perspective: '1000px' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
    >
      <div className="absolute inset-0 [transform-style:preserve-3d]">
        {items.map((item, i) => (
          <div
            key={item.id || i}
            ref={el => { cardRefs.current[i] = el; }}
            style={{ 
              width: cardWidth, 
              height: cardHeight, 
              borderRadius: radius,
              backfaceVisibility: 'hidden'
            }}
            className="absolute top-1/2 left-1/2 overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl transition-shadow duration-300"
            onClick={() => {
              if (!dragRef.current?.moved) setFocus(i, true);
            }}
          >
            {/* Card Content */}
            <article className="w-full h-full flex flex-col justify-between text-left p-5 sm:p-6 space-y-3 sm:space-y-4 bg-zinc-950 text-zinc-100">
              
              {/* Image Banner */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-40 sm:h-48 rounded-xl overflow-hidden group border border-zinc-800 bg-zinc-900 shrink-0"
                onClick={(e) => {
                  if (active !== i) e.preventDefault();
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-zinc-950/90 text-emerald-400 border border-emerald-500/30 text-[11px] sm:text-xs font-mono px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md font-medium">
                  {item.category}
                </span>

                <span className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-white font-semibold gap-2">
                  View Live Project ↗
                </span>
              </a>

              {/* Text Info */}
              <div className="flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                <div className="space-y-1 sm:space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-normal leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-1 sm:space-y-1.5 pt-2 sm:pt-3 border-t border-zinc-900">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Highlights:
                  </p>
                  <ul className="space-y-1">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-[11px] sm:text-xs font-mono text-zinc-200 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </article>

            {/* Darken Overlay for non-active cards */}
            <span
              ref={el => { overlayRefs.current[i] = el; }}
              className="absolute inset-0 opacity-0 pointer-events-none bg-black transition-opacity duration-300"
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls Bar */}
      {count > 1 && (
        <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-800 shadow-2xl">
          {showControls && (
            <button
              type="button"
              onClick={() => navigateBy(-1)}
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-emerald-500/50 transition-all font-mono text-xs"
              aria-label="Previous Slide"
            >
              ←
            </button>
          )}

          {showIndicators && (
            <div className="flex items-center gap-1.5">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setFocus(i, true)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i ? "w-5 sm:w-6 bg-emerald-400" : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}

          {showControls && (
            <button
              type="button"
              onClick={() => navigateBy(1)}
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-emerald-500/50 transition-all font-mono text-xs"
              aria-label="Next Slide"
            >
              →
            </button>
          )}
        </div>
      )}
    </div>
  );
}