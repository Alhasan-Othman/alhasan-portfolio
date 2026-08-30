"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function LineWaves() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.set(0, 40, 140);
    camera.lookAt(0, 0, 0);

    // Renderer setup with alpha
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Grid of lines geometry setup - Increased brightness & contrast
    const numLines = 45;
    const pointsPerLine = 100;
    const linesGroup = new THREE.Group();

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xd4d4d8, // Bright Zinc-300 / Silver-White
      transparent: true,
      opacity: 0.75,   // Higher opacity for prominent glow
    });

    const linesData: { line: THREE.Line; initialY: number[] }[] = [];

    for (let i = 0; i < numLines; i++) {
      const points: THREE.Vector3[] = [];
      const initialY: number[] = [];
      const z = (i - numLines / 2) * 9;

      for (let j = 0; j < pointsPerLine; j++) {
        const x = (j - pointsPerLine / 2) * 7;
        const y = Math.sin(j * 0.15) * 6;
        points.push(new THREE.Vector3(x, y, z));
        initialY.push(y);
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, lineMaterial);
      linesGroup.add(line);
      linesData.push({ line, initialY });
    }

    scene.add(linesGroup);

    // Mouse Interaction States
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let count = 0;

    const animate = () => {
      count += 0.02;

      // Smooth Lerp for Mouse movement
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotate lines group subtly based on mouse
      linesGroup.rotation.y = mouseX * 0.25;
      linesGroup.rotation.x = mouseY * 0.15;

      // Wave Math Transformation
      linesData.forEach(({ line }, lineIndex) => {
        const positions = line.geometry.attributes.position;
        const array = positions.array as Float32Array;

        for (let j = 0; j < pointsPerLine; j++) {
          const index = j * 3 + 1; // Y axis
          const distanceToMouse = Math.abs(j - pointsPerLine / 2) * 0.05;

          array[index] =
            Math.sin(j * 0.15 + count + lineIndex * 0.1) * 8 +
            Math.cos(count * 0.5 + lineIndex * 0.2) * 4 +
            mouseY * 10 * Math.exp(-distanceToMouse);
        }

        positions.needsUpdate = true;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-90 z-0 overflow-hidden"
    />
  );
}   