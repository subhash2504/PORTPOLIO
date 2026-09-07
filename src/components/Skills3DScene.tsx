import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const skillsList = [
  'Python', 'Machine Learning', 'Deep Learning', 'Generative AI',
  'PyTorch', 'TensorFlow', 'React', 'TypeScript', 'Node.js',
  'SQL', 'Tailwind', 'REST API', 'C++', 'Java', 'Git'
];

const Skills3DScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Central Wireframe Sphere
    const sphereGeo = new THREE.SphereGeometry(2.2, 24, 24);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#6366f1'),
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const centralSphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(centralSphere);

    // 4. Orbiting Skill Nodes (Spheres + Sprite Labels)
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#06b6d4'),
      emissive: new THREE.Color('#06b6d4'),
      emissiveIntensity: 0.6,
      roughness: 0.2,
    });

    const count = skillsList.length;
    skillsList.forEach((skill, index) => {
      // Golden spiral distribution on sphere
      const phi = Math.acos(-1 + (2 * index) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const radius = 2.4;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, y, z);
      nodeGroup.add(nodeMesh);

      // Create Canvas Text Texture for Skill Label
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, 256, 64);
        ctx.font = 'Bold 22px system-ui, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill, 128, 32);
      }

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(x * 1.25, y * 1.25, z * 1.25);
      sprite.scale.set(1.4, 0.35, 1);
      nodeGroup.add(sprite);
    });

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x8b5cf6, 3, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // 6. Interactive Drag & Rotate
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      nodeGroup.rotation.y += deltaX * 0.008;
      nodeGroup.rotation.x += deltaY * 0.008;
      centralSphere.rotation.y += deltaX * 0.008;
      centralSphere.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.style.cursor = 'grab';
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // 7. Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isDragging) {
        nodeGroup.rotation.y += 0.004;
        nodeGroup.rotation.x += 0.002;
        centralSphere.rotation.y += 0.004;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      sphereGeo.dispose();
      sphereMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[350px] md:h-[450px] relative rounded-2xl overflow-hidden bg-surface-900/40 backdrop-blur-xl border border-white/5"
    />
  );
};

export default Skills3DScene;
