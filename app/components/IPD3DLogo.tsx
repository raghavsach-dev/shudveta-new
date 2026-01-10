"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface IPD3DLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function IPD3DLogo({ width = 200, height = 200, className = '' }: IPD3DLogoProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    if (!mountRef.current) return;

    // Clear any existing content
    mountRef.current.innerHTML = '';

    // Scene setup
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x000000); // Remove this to allow transparency from clearColor
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(3, 3, 3);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Handle high-DPI screens
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace; // Better color accuracy
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.enableZoom = false; // Disable zoom for logo
    controls.enablePan = false; // Disable pan for logo
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2); // Brighter ambient
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.8); // Strong main light
    mainLight.position.set(5, 10, 7.5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x64b5f6, 1.8); // Blue-ish fill light
    fillLight.position.set(-5, 5, 5);
    scene.add(fillLight);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      '/3d_ipdnow.glb',
      (gltf) => {
        const model = gltf.scene;

        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        // Scale model appropriately for logo
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3.2 / maxDim; // Further increased scale for more presence
        model.scale.setScalar(scale);

        // Enable shadows
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        if (!isMounted) return;
        scene.add(model);
      },
      (progress) => {
        console.log('IPD Logo loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error) => {
        console.error('Error loading IPD logo model:', error);
        // Fallback: show text logo
        if (mountRef.current) {
          mountRef.current.innerHTML = `
            <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #3b82f6, #8b5cf6); border-radius: 12px; color: white; font-weight: bold; font-size: 24px;">
              IPD
            </div>
          `;
        }
      }
    );

    // Mount renderer
    mountRef.current.appendChild(renderer.domElement);

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (controlsRef.current) {
        controlsRef.current.update();
      }

      if (rendererRef.current && cameraRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      isMounted = false;
      window.removeEventListener('resize', handleResize);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (controlsRef.current) {
        controlsRef.current.dispose();
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (mountRef.current && rendererRef.current.domElement.parentElement === mountRef.current) {
          mountRef.current.removeChild(rendererRef.current.domElement);
        }
      }

      // Clear scene
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, [width, height]);

  return (
    <div
      ref={mountRef}
      className={`inline-block ${className}`}
      style={{ width, height }}
      title="IPD Now - Interactive 3D Logo"
    />
  );
}
