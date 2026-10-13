import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Activity, RotateCcw, Sparkles } from 'lucide-react';

interface Hero3DSceneProps {
  className?: string;
}

export const Hero3DScene: React.FC<Hero3DSceneProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check WebGL availability
    const checkWebGL = () => {
      try {
        const testCanvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl'))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      setHasWebGLError(true);
      return;
    }

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;

    try {
      scene = new THREE.Scene();

      const width = container.clientWidth;
      const height = container.clientHeight;

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 7.5);

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Handle context lost
      const handleContextLost = (e: Event) => {
        e.preventDefault();
        setHasWebGLError(true);
      };
      canvas.addEventListener('webglcontextlost', handleContextLost, false);

      // Scene Root Group
      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // --- Lighting Setup ---
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
      scene.add(ambientLight);

      const cyanKeyLight = new THREE.DirectionalLight(0x06b6d4, 2.8);
      cyanKeyLight.position.set(5, 5, 5);
      scene.add(cyanKeyLight);

      const navyRimLight = new THREE.DirectionalLight(0x0284c7, 2.2);
      navyRimLight.position.set(-5, -3, -4);
      scene.add(navyRimLight);

      const topHighlight = new THREE.PointLight(0xffffff, 1.8, 20);
      topHighlight.position.set(0, 4, 2);
      scene.add(topHighlight);

      // --- Central Geometric Core (Clinical Precision Core) ---
      const coreGeometry = new THREE.IcosahedronGeometry(1.4, 1);
      const coreMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x0f2744,
        emissive: 0x082f49,
        emissiveIntensity: 0.35,
        roughness: 0.25,
        metalness: 0.65,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2,
        wireframe: false,
      });
      const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
      mainGroup.add(coreMesh);

      // Inner Wireframe Lattice
      const wireframeGeometry = new THREE.IcosahedronGeometry(1.42, 1);
      const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
      mainGroup.add(wireframeMesh);

      // --- Interlocking Orbital Rings (Coordination Circuits) ---
      // Ring 1: Primary Equatorial Ring
      const ring1Geometry = new THREE.TorusGeometry(2.35, 0.045, 16, 100);
      const ring1Material = new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        metalness: 0.8,
        roughness: 0.2,
      });
      const ring1Mesh = new THREE.Mesh(ring1Geometry, ring1Material);
      ring1Mesh.rotation.x = Math.PI / 3;
      mainGroup.add(ring1Mesh);

      // Ring 2: Polar Orbital Ring
      const ring2Geometry = new THREE.TorusGeometry(2.65, 0.035, 16, 100);
      const ring2Material = new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        metalness: 0.85,
        roughness: 0.15,
      });
      const ring2Mesh = new THREE.Mesh(ring2Geometry, ring2Material);
      ring2Mesh.rotation.y = Math.PI / 4;
      ring2Mesh.rotation.x = -Math.PI / 5;
      mainGroup.add(ring2Mesh);

      // Ring 3: Outer Horizon Ring
      const ring3Geometry = new THREE.TorusGeometry(2.95, 0.025, 16, 120);
      const ring3Material = new THREE.MeshStandardMaterial({
        color: 0x93c5fd,
        metalness: 0.7,
        roughness: 0.3,
        transparent: true,
        opacity: 0.7,
      });
      const ring3Mesh = new THREE.Mesh(ring3Geometry, ring3Material);
      ring3Mesh.rotation.x = -Math.PI / 2.6;
      mainGroup.add(ring3Mesh);

      // --- Floating Satellite Care Nodes (Representing 6 Core VMA Functions) ---
      const nodeCount = 6;
      const nodeMeshes: THREE.Mesh[] = [];
      const nodeLabels = [
        'Patient Comms',
        'Admin Flow',
        'Clinical Charting',
        'Receptionist',
        'Telehealth',
        'RCM Support',
      ];
      console.debug('Initializing 3D care nodes for', nodeLabels.length, 'services');

      const nodeGeometry = new THREE.SphereGeometry(0.16, 24, 24);
      const nodeMaterial = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.6,
        metalness: 0.5,
        roughness: 0.2,
      });

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const radius = 2.4;
        const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
        mesh.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * 0.9,
          Math.sin(angle) * radius * 0.7
        );
        mainGroup.add(mesh);
        nodeMeshes.push(mesh);
      }

      // --- Floating Particle Field ---
      const particleCount = 120;
      const particleGeometry = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        particlePositions[i] = (Math.random() - 0.5) * 8;
        particlePositions[i + 1] = (Math.random() - 0.5) * 8;
        particlePositions[i + 2] = (Math.random() - 0.5) * 8;
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      const particleMaterial = new THREE.PointsMaterial({
        color: 0x38bdf8,
        size: 0.045,
        transparent: true,
        opacity: 0.55,
      });
      const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
      mainGroup.add(particleSystem);

      // --- Interactive Mouse & Motion Tracking ---
      let targetRotationX = 0;
      let targetRotationY = 0;
      let currentRotationX = 0;
      let currentRotationY = 0;
      let isPointerDown = false;
      let previousPointerX = 0;
      let previousPointerY = 0;

      const handlePointerMove = (e: MouseEvent | TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        const rect = container.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((clientY - rect.top) / rect.height) * 2 - 1);

        if (isPointerDown) {
          const deltaX = clientX - previousPointerX;
          const deltaY = clientY - previousPointerY;
          targetRotationY += deltaX * 0.008;
          targetRotationX += deltaY * 0.008;
          previousPointerX = clientX;
          previousPointerY = clientY;
        } else {
          // Subtle mouse follow
          targetRotationX = y * 0.35;
          targetRotationY = x * 0.55;
        }
      };

      const handlePointerDown = (e: MouseEvent | TouchEvent) => {
        isPointerDown = true;
        setIsInteracting(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        previousPointerX = clientX;
        previousPointerY = clientY;
      };

      const handlePointerUp = () => {
        isPointerDown = false;
        setIsInteracting(false);
      };

      container.addEventListener('mousemove', handlePointerMove);
      container.addEventListener('mousedown', handlePointerDown);
      window.addEventListener('mouseup', handlePointerUp);
      container.addEventListener('touchmove', handlePointerMove, { passive: true });
      container.addEventListener('touchstart', handlePointerDown, { passive: true });
      window.addEventListener('touchend', handlePointerUp);

      // --- Resize Observer ---
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);

      // --- Animation Loop ---
      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const delta = clock.getDelta();
        const elapsedTime = clock.getElapsedTime();

        // Smooth damping towards mouse position
        currentRotationX += (targetRotationX - currentRotationX) * 0.05;
        currentRotationY += (targetRotationY - currentRotationY) * 0.05;

        // Base autonomous rotation with speed multiplier
        const baseSpeed = 0.35 * rotationSpeed;
        mainGroup.rotation.y = currentRotationY + elapsedTime * baseSpeed * 0.5;
        mainGroup.rotation.x = currentRotationX + Math.sin(elapsedTime * 0.4) * 0.08;

        // Counter-rotating rings
        ring1Mesh.rotation.z += delta * 0.3 * rotationSpeed;
        ring2Mesh.rotation.y += delta * 0.4 * rotationSpeed;
        ring3Mesh.rotation.z -= delta * 0.25 * rotationSpeed;

        // Floating core pulse
        const scale = 1 + Math.sin(elapsedTime * 1.8) * 0.025;
        coreMesh.scale.set(scale, scale, scale);
        wireframeMesh.scale.set(scale * 1.01, scale * 1.01, scale * 1.01);

        // Orbital Care Nodes oscillation
        nodeMeshes.forEach((mesh, index) => {
          const orbitAngle = (index / nodeCount) * Math.PI * 2 + elapsedTime * 0.35 * rotationSpeed;
          const r = 2.45 + Math.sin(elapsedTime * 1.2 + index) * 0.08;
          mesh.position.x = Math.cos(orbitAngle) * r;
          mesh.position.y = Math.sin(orbitAngle * 1.5) * 0.75;
          mesh.position.z = Math.sin(orbitAngle) * r;
        });

        // Gentle particle rotation
        particleSystem.rotation.y = -elapsedTime * 0.05 * rotationSpeed;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        resizeObserver.disconnect();
        container.removeEventListener('mousemove', handlePointerMove);
        container.removeEventListener('mousedown', handlePointerDown);
        window.removeEventListener('mouseup', handlePointerUp);
        container.removeEventListener('touchmove', handlePointerMove);
        container.removeEventListener('touchstart', handlePointerDown);
        window.removeEventListener('touchend', handlePointerUp);
        canvas.removeEventListener('webglcontextlost', handleContextLost);

        // Cleanup Three.js resources
        coreGeometry.dispose();
        coreMaterial.dispose();
        wireframeGeometry.dispose();
        wireframeMaterial.dispose();
        ring1Geometry.dispose();
        ring1Material.dispose();
        ring2Geometry.dispose();
        ring2Material.dispose();
        ring3Geometry.dispose();
        ring3Material.dispose();
        nodeGeometry.dispose();
        nodeMaterial.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
        renderer.dispose();
      };
    } catch (err) {
      console.error('WebGL initialization error:', err);
      setHasWebGLError(true);
    }
  }, [rotationSpeed]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[380px] lg:min-h-[480px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-900 border border-slate-800/80 shadow-2xl backdrop-blur-md select-none ${className}`}
    >
      {/* Background radial ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.18) 0%, rgba(2, 132, 199, 0.08) 45%, transparent 75%)',
        }}
      />

      {/* Decorative Grid Mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Three.js Canvas */}
      {!hasWebGLError ? (
        <canvas
          ref={canvasRef}
          className="relative z-10 w-full h-full block cursor-grab active:cursor-grabbing touch-none"
          aria-label="Interactive 3D model representing virtual medical assistance coordination network"
        />
      ) : (
        /* Graceful Fallback Container when WebGL is unavailable */
        <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center text-slate-300">
          <div className="w-20 h-20 mb-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-950/50">
            <Activity className="w-10 h-10 animate-pulse text-cyan-400" />
          </div>
          <p className="text-base font-semibold text-white">Virtual Medical Coordination Core</p>
          <p className="text-xs text-slate-400 max-w-xs mt-1.5 leading-relaxed">
            Integrated administrative, clinical, and telehealth assistance optimized for US healthcare practices.
          </p>
        </div>
      )}

      {/* Subtle Floating Interactive Overlay & HUD */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 pointer-events-auto">
        <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-300 bg-slate-900/80 border border-cyan-500/20 px-2.5 py-1 rounded-md backdrop-blur-md flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          Care Engine Visualizer
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-xs pointer-events-auto">
        <div className="text-[11px] text-slate-400 bg-slate-900/70 border border-slate-800 px-3 py-1.5 rounded-md backdrop-blur-md">
          {isInteracting ? 'Dragging 3D Coordinate Space' : 'Drag or hover to rotate'}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setRotationSpeed((prev) => (prev === 1 ? 0.3 : prev === 0.3 ? 1.8 : 1))}
            className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/60 px-2.5 py-1.5 rounded-md transition-colors"
            title="Toggle Rotation Speed"
            aria-label="Toggle Rotation Speed"
          >
            <RotateCcw className="w-3 h-3 text-cyan-400" />
            <span>Speed: {rotationSpeed === 1 ? '1x' : rotationSpeed === 0.3 ? '0.3x' : '1.8x'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
