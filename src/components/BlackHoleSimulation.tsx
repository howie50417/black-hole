import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import skyTextureUrl from "../assets/sky2.jpg";
import canvasFragmentShader from "../shaders/canvasFragmentShader";
import canvasVertexShader from "../shaders/canvasVertexShader";

const CAMERA_FOV = 75;
const MAX_ITERATIONS = 400;
const MIN_CAMERA_DISTANCE = 3;
const MAX_CAMERA_DISTANCE = 80;
const POLAR_LIMIT_PADDING = 0.01;
const CAMERA_AUTO_ROTATE_SPEED = 0.95;
const DISK_ROTATION_SPEED = 36.0;

const BlackHoleSimulation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const renderCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const orbitCamera = new THREE.PerspectiveCamera(
      CAMERA_FOV,
      width / height,
      0.1,
      1000
    );
    orbitCamera.position.set(0, 0.05, 20);
    orbitCamera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    const drawingBufferSize = new THREE.Vector2();
    renderer.getDrawingBufferSize(drawingBufferSize);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(orbitCamera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = CAMERA_AUTO_ROTATE_SPEED;
    controls.minDistance = MIN_CAMERA_DISTANCE;
    controls.maxDistance = MAX_CAMERA_DISTANCE;
    controls.minPolarAngle = POLAR_LIMIT_PADDING;
    controls.maxPolarAngle = Math.PI - POLAR_LIMIT_PADDING;
    controls.update();

    const createProceduralTexture = () => {
      const fallbackCanvas = document.createElement("canvas");
      fallbackCanvas.width = 1024;
      fallbackCanvas.height = 1024;

      const context = fallbackCanvas.getContext("2d");
      if (!context) return null;

      const gradient = context.createRadialGradient(512, 512, 0, 512, 512, 512);
      gradient.addColorStop(0, "#001a33");
      gradient.addColorStop(1, "#000000");
      context.fillStyle = gradient;
      context.fillRect(0, 0, 1024, 1024);
      context.fillStyle = "white";

      for (let i = 0; i < 200; i += 1) {
        const x = Math.random() * 1024;
        const y = Math.random() * 1024;
        const size = Math.random() * 2 + 0.5;
        context.globalAlpha = Math.random() * 0.8 + 0.2;
        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 1;
      return new THREE.CanvasTexture(fallbackCanvas);
    };

    const textureLoader = new THREE.TextureLoader();
    let fallbackTexture: THREE.Texture | null = null;
    const skyTexture = textureLoader.load(
      skyTextureUrl,
      (texture) => {
        canvasMaterial.uniforms.uCanvasTexture.value = texture;
      },
      undefined,
      () => {
        fallbackTexture = createProceduralTexture();
        if (fallbackTexture) {
          canvasMaterial.uniforms.uCanvasTexture.value = fallbackTexture;
        }
      }
    );

    const canvasMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uAccretionDisk: {
          value: 1.0,
        },
        uResolution: {
          value: drawingBufferSize.clone(),
        },
        uCanvasTexture: {
          value: skyTexture,
        },
        uMaxIterations: {
          value: MAX_ITERATIONS,
        },
        uPov: {
          value: CAMERA_FOV,
        },
        uStepSize: {
          value: 2.5 / MAX_ITERATIONS,
        },
        uCameraPosition: {
          value: orbitCamera.position.clone(),
        },
        uCameraForward: {
          value: new THREE.Vector3(0, 0, -1),
        },
        uCameraRight: {
          value: new THREE.Vector3(1, 0, 0),
        },
        uCameraUp: {
          value: new THREE.Vector3(0, 1, 0),
        },
        uDiskTime: {
          value: 0,
        },
      },
      vertexShader: canvasVertexShader,
      fragmentShader: canvasFragmentShader,
    });

    const screenQuad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      canvasMaterial
    );
    scene.add(screenQuad);

    const syncCameraUniforms = () => {
      orbitCamera.updateMatrixWorld();
      orbitCamera.getWorldDirection(canvasMaterial.uniforms.uCameraForward.value);

      const matrixElements = orbitCamera.matrixWorld.elements;
      canvasMaterial.uniforms.uCameraPosition.value.copy(orbitCamera.position);
      canvasMaterial.uniforms.uCameraRight.value
        .set(matrixElements[0], matrixElements[1], matrixElements[2])
        .normalize();
      canvasMaterial.uniforms.uCameraUp.value
        .set(matrixElements[4], matrixElements[5], matrixElements[6])
        .normalize();
    };

    const clock = new THREE.Clock();
    let animationFrameId = 0;

    const animate = () => {
      controls.update();
      syncCameraUniforms();
      canvasMaterial.uniforms.uDiskTime.value =
        clock.getElapsedTime() * DISK_ROTATION_SPEED;

      renderer.render(scene, renderCamera);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      const nextWidth = container.clientWidth || window.innerWidth;
      const nextHeight = container.clientHeight || window.innerHeight;

      orbitCamera.aspect = nextWidth / nextHeight;
      orbitCamera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
      renderer.getDrawingBufferSize(canvasMaterial.uniforms.uResolution.value);
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      screenQuad.geometry.dispose();
      canvasMaterial.dispose();
      skyTexture.dispose();
      fallbackTexture?.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="simulation-canvas" />;
};

export default BlackHoleSimulation;
