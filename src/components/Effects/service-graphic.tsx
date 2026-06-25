"use client";
import React, { useEffect, useRef } from "react";

interface ServiceGraphicProps {
  id: string;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}

type Edge = [number, number];

function getShapeData(id: string): { points: Point3D[]; edges: Edge[] } {
  const points: Point3D[] = [];
  const edges: Edge[] = [];

  if (id === "01") {
    // 1. Brand Strategy: Sphere
    const rings = 6;
    const pointsPerRing = 8;
    const radius = 45;
    for (let r = 0; r < rings; r++) {
      const theta = (r * Math.PI) / (rings - 1);
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);
      for (let p = 0; p < pointsPerRing; p++) {
        const phi = (p * 2 * Math.PI) / pointsPerRing;
        points.push({
          x: radius * sinTheta * Math.cos(phi),
          y: radius * cosTheta,
          z: radius * sinTheta * Math.sin(phi),
        });
        const curr = points.length - 1;
        edges.push([curr, r * pointsPerRing + ((p + 1) % pointsPerRing)]);
        if (r > 0) {
          edges.push([curr, (r - 1) * pointsPerRing + p]);
        }
      }
    }
  } else if (id === "02") {
    // 2. Web Development: Torus (Donut)
    const majorR = 35;
    const minorR = 15;
    const majorSteps = 8;
    const minorSteps = 6;
    for (let i = 0; i < majorSteps; i++) {
      const u = (i * 2 * Math.PI) / majorSteps;
      for (let j = 0; j < minorSteps; j++) {
        const v = (j * 2 * Math.PI) / minorSteps;
        points.push({
          x: (majorR + minorR * Math.cos(v)) * Math.cos(u),
          y: (majorR + minorR * Math.cos(v)) * Math.sin(u),
          z: minorR * Math.sin(v),
        });
        const curr = points.length - 1;
        edges.push([curr, i * minorSteps + ((j + 1) % minorSteps)]);
        edges.push([curr, ((i + 1) % majorSteps) * minorSteps + j]);
      }
    }
  } else if (id === "03") {
    // 3. Brand Identity: 3D Grid Wave
    const rows = 5;
    const cols = 5;
    const spacing = 18;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const dx = (c - (cols - 1) / 2) * spacing;
        const dz = (r - (rows - 1) / 2) * spacing;
        const dy = Math.sin(Math.sqrt(dx * dx + dz * dz) * 0.05) * 15;
        points.push({ x: dx, y: dy, z: dz });
        const curr = points.length - 1;
        if (c < cols - 1) edges.push([curr, curr + 1]);
        if (r < rows - 1) edges.push([curr, curr + cols]);
      }
    }
  } else if (id === "04") {
    // 4. eCommerce: Cylinder
    const radius = 30;
    const height = 70;
    const segments = 8;
    for (let i = 0; i < segments; i++) {
      const angle = (i * 2 * Math.PI) / segments;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      // Top ring
      points.push({ x: radius * cosA, y: -height / 2, z: radius * sinA });
      // Bottom ring
      points.push({ x: radius * cosA, y: height / 2, z: radius * sinA });
      const curr = points.length - 2;
      edges.push([curr, curr + 1]); // Vertical connector
      edges.push([curr, ((i + 1) % segments) * 2]); // Top ring connector
      edges.push([curr + 1, ((i + 1) % segments) * 2 + 1]); // Bottom ring connector
    }
  } else if (id === "05") {
    // 5. User Experience Design: Cube
    const size = 30;
    for (let x of [-1, 1]) {
      for (let y of [-1, 1]) {
        for (let z of [-1, 1]) {
          points.push({ x: x * size, y: y * size, z: z * size });
        }
      }
    }
    edges.push(
      [0, 1], [1, 3], [3, 2], [2, 0], // Back face
      [4, 5], [5, 7], [7, 6], [6, 4], // Front face
      [0, 4], [1, 5], [2, 6], [3, 7]  // Connectors
    );
  } else if (id === "06") {
    // 6. Web & Mobile Applications: Double Helix (DNA)
    const pointsCount = 16;
    for (let i = 0; i < pointsCount; i++) {
      const t = (i / (pointsCount - 1)) * Math.PI * 3;
      const y = (i - pointsCount / 2) * 6;
      // Strand A
      points.push({ x: Math.cos(t) * 25, y, z: Math.sin(t) * 25 });
      // Strand B
      points.push({ x: -Math.cos(t) * 25, y, z: -Math.sin(t) * 25 });
      const idx = points.length - 2;
      edges.push([idx, idx + 1]); // Rung connecting the two strands
      if (i < pointsCount - 1) {
        edges.push([idx, idx + 2]); // Strand A connector
        edges.push([idx + 1, idx + 3]); // Strand B connector
      }
    }
  } else if (id === "07") {
    // 7. Visual Content: Pyramid
    points.push(
      { x: 0, y: -45, z: 0 },
      { x: -35, y: 25, z: -35 },
      { x: 35, y: 25, z: -35 },
      { x: 35, y: 25, z: 35 },
      { x: -35, y: 25, z: 35 }
    );
    edges.push(
      [0, 1], [0, 2], [0, 3], [0, 4],
      [1, 2], [2, 3], [3, 4], [4, 1]
    );
  } else {
    // 8. Embedded & Hardware: Mobius Strip / Knot
    const steps = 24;
    const r = 35;
    for (let i = 0; i < steps; i++) {
      const theta = (i * 2 * Math.PI) / steps;
      const x = r * Math.sin(theta) + 2 * r * Math.sin(2 * theta);
      const y = r * Math.cos(theta) - 2 * r * Math.cos(2 * theta);
      const z = -r * Math.sin(3 * theta);
      points.push({ x: x * 0.5, y: y * 0.5, z: z * 0.5 });
      const curr = points.length - 1;
      edges.push([curr, (curr + 1) % steps]);
    }
  }

  return { points, edges };
}

export default function ServiceGraphic({ id }: ServiceGraphicProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angleX = 0;
    let angleY = 0;
    const { points, edges } = getShapeData(id);
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const focalLength = 200;
      // Project points
      const projected: { x: number; y: number }[] = [];
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      for (const p of points) {
        // Rotate around Y-axis
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.x * sinY + p.z * cosY;
        // Rotate around X-axis
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;
        // Perspective scaling
        const scale = focalLength / (focalLength + z2);
        projected.push({
          x: centerX + x1 * scale,
          y: centerY + y2 * scale,
        });
      }
      // Draw edges
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1.2;
      for (const edge of edges) {
        const p1 = projected[edge[0]];
        const p2 = projected[edge[1]];
        if (p1 && p2) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
      // Update rotation speed
      angleX += 0.006;
      angleY += 0.008;
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [id]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute right-[-1vw] bottom-[-1vw] w-[8vw] h-[8vw] pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity duration-500"
      width={200}
      height={200}
    />
  );
}
