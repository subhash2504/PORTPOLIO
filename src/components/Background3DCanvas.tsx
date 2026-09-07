import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 3. Floating 3D Geometric Objects
    const geometries = [
      new THREE.IcosahedronGeometry(0.5, 0),
      new THREE.OctahedronGeometry(0.6, 0),
      new THREE.TetrahedronGeometry(0.7, 0),
      new THREE.SphereGeometry(0.4, 16, 16),
    ];

    const materials = [
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#6366f1'),
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      }),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#06b6d4'),
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      }),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#8b5cf6'),
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      }),
    ];

    const meshCount = 24;
    const meshes: THREE.Mesh[] = [];
    const speedFactors: { rx: number; ry: number; vy: number }[] = [];

    for (let i = 0; i < meshCount; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)];
      const mat = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.x = (Math.random() - 0.5) * 30;
      mesh.position.y = (Math.random() - 0.5) * 30;
      mesh.position.z = (Math.random() - 0.5) * 20 - 5;

      const scale = 0.5 + Math.random() * 1.2;
      mesh.scale.set(scale, scale, scale);

      scene.add(mesh);
      meshes.push(mesh);

      speedFactors.push({
        rx: (Math.random() - 0.5) * 0.01,
        ry: (Math.random() - 0.5) * 0.01,
        vy: 0.005 + Math.random() * 0.008,
      });
    }

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x6366f1, 2, 30);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // 5. Scroll Parallax
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // 6. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      meshes.forEach((mesh, index) => {
        mesh.rotation.x += speedFactors[index].rx;
        mesh.rotation.y += speedFactors[index].ry;

        mesh.position.y += speedFactors[index].vy;
        if (mesh.position.y > 15) {
          mesh.position.y = -15;
          mesh.position.x = (Math.random() - 0.5) * 30;
        }
      });

      // Camera parallax scroll
      camera.position.y = -scrollY * 0.003;
      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-60"
    />
  );
};

export default Background3DCanvas;
