import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero3DScene: React.FC = () => {
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
    camera.position.z = 7;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 3. Main 3D Geometry: TorusKnot
    const geometry = new THREE.TorusKnotGeometry(1.4, 0.45, 128, 32);

    // Material: Metallic glass reflection
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#6366f1'),
      metalness: 0.7,
      roughness: 0.25,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      wireframe: false,
    });

    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // Outer Wireframe Ring Overlay
    const wireframeGeometry = new THREE.TorusKnotGeometry(1.45, 0.48, 64, 16);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#06b6d4'),
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframeMesh);

    // Outer Floating Ring
    const ringGeometry = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#8b5cf6'),
      emissive: new THREE.Color('#8b5cf6'),
      emissiveIntensity: 0.5,
      roughness: 0.1,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    scene.add(ringMesh);

    // 4. 3D Particle Galaxy Cloud
    const particleCount = 400;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color('#6366f1');
    const color2 = new THREE.Color('#06b6d4');

    for (let i = 0; i < particleCount; i++) {
      const radius = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 3, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 3, 20);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // 6. Mouse Tracking & Smooth Interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 7. Animation Loop
    let animationFrameId: number;

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate 3D Objects
      torusKnot.rotation.x = elapsedTime * 0.3 + targetY * 0.5;
      torusKnot.rotation.y = elapsedTime * 0.4 + targetX * 0.5;

      wireframeMesh.rotation.x = -elapsedTime * 0.2 + targetY * 0.3;
      wireframeMesh.rotation.y = -elapsedTime * 0.25 + targetX * 0.3;

      ringMesh.rotation.z = elapsedTime * 0.2;
      ringMesh.rotation.y = elapsedTime * 0.15;

      particleSystem.rotation.y = elapsedTime * 0.05;
      particleSystem.rotation.x = elapsedTime * 0.03;

      // Floating oscillation
      torusKnot.position.y = Math.sin(elapsedTime * 1.5) * 0.15;
      wireframeMesh.position.y = Math.sin(elapsedTime * 1.5) * 0.15;

      // Camera dynamic parallax
      camera.position.x = targetX * 0.6;
      camera.position.y = targetY * 0.6;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[350px] md:min-h-[500px] relative pointer-events-none"
    />
  );
};

export default Hero3DScene;
