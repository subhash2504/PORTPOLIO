import React, { useEffect, useRef, useCallback } from 'react';

// Interfaces for our drawing objects
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const particles = useRef<Particle[]>([]);
  const orbs = useRef<Orb[]>([]);
  const mousePosition = useRef({ x: -1000, y: -1000 }); // Start far offscreen

  const initParticles = useCallback((width: number, height: number) => {
    const isMobile = width < 768;
    const particleCount = isMobile ? 60 : 80;
    const colors = [
      { r: 99, g: 102, b: 241 }, // Indigo 500
      { r: 14, g: 165, b: 233 }, // Sky 500
    ];

    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const colorDef = colors[Math.floor(Math.random() * colors.length)];
      const alpha = 0.2 + Math.random() * 0.4;
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: `${colorDef.r}, ${colorDef.g}, ${colorDef.b}`,
        alpha,
      });
    }
    particles.current = newParticles;

    // Initialize background gradient orbs
    orbs.current = [
      {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 200 + 200,
        color: '147, 51, 234', // Purple
      },
      {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 200 + 200,
        color: '59, 130, 246', // Blue
      },
      {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 200 + 200,
        color: '20, 184, 166', // Teal
      },
    ];
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);

    // Draw Orbs first (background)
    orbs.current.forEach((orb) => {
      orb.x += orb.vx;
      orb.y += orb.vy;

      // Wrap orbs
      if (orb.x < -orb.radius) orb.x = width + orb.radius;
      if (orb.x > width + orb.radius) orb.x = -orb.radius;
      if (orb.y < -orb.radius) orb.y = height + orb.radius;
      if (orb.y > height + orb.radius) orb.y = -orb.radius;

      const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
      gradient.addColorStop(0, `rgba(${orb.color}, 0.05)`);
      gradient.addColorStop(1, `rgba(${orb.color}, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.lineWidth = 0.5;

    // Process and draw particles
    for (let i = 0; i < particles.current.length; i++) {
      const p1 = particles.current[i];
      
      // Update position
      p1.x += p1.vx;
      p1.y += p1.vy;

      // Mouse interaction
      const dxMouse = mousePosition.current.x - p1.x;
      const dyMouse = mousePosition.current.y - p1.y;
      const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      
      if (distMouse < 200) {
        // Attract particle towards mouse
        const force = (200 - distMouse) / 200;
        p1.vx += (dxMouse / distMouse) * force * 0.02;
        p1.vy += (dyMouse / distMouse) * force * 0.02;

        // Draw connection to mouse (brighter)
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(mousePosition.current.x, mousePosition.current.y);
        ctx.strokeStyle = `rgba(99, 102, 241, ${force * 0.25})`;
        ctx.stroke();
      }

      // Apply friction so they don't accelerate indefinitely
      p1.vx *= 0.99;
      p1.vy *= 0.99;
      
      // Enforce minimum velocity
      if (Math.abs(p1.vx) < 0.1) p1.vx = p1.vx > 0 ? 0.1 : -0.1;
      if (Math.abs(p1.vy) < 0.1) p1.vy = p1.vy > 0 ? 0.1 : -0.1;

      // Screen wrapping
      if (p1.x < 0) p1.x = width;
      else if (p1.x > width) p1.x = 0;
      
      if (p1.y < 0) p1.y = height;
      else if (p1.y > height) p1.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p1.color}, ${p1.alpha})`;
      ctx.fill();

      // Draw connections to other particles
      for (let j = i + 1; j < particles.current.length; j++) {
        const p2 = particles.current[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        
        // Fast early distance check
        if (Math.abs(dx) > 150 || Math.abs(dy) > 150) continue;
        
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          const opacity = (1 - dist / 150) * 0.15;
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.stroke();
        }
      }
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    initParticles(width, height);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles(width, height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePosition.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      draw(ctx, width, height);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [draw, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="neural-bg fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default ParticleBackground;
