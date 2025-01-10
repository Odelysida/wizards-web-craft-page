<script setup lang="ts">
import * as THREE from 'three';
import { onMounted, onBeforeUnmount, ref, shallowRef } from 'vue';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const camera1 = shallowRef<THREE.PerspectiveCamera | null>(null);
const camera2 = shallowRef<THREE.PerspectiveCamera | null>(null);
const scene1 = shallowRef<THREE.Scene | null>(null);
const scene2 = shallowRef<THREE.Scene | null>(null);
const renderer1 = shallowRef<THREE.WebGLRenderer | null>(null);
const renderer2 = shallowRef<THREE.WebGLRenderer | null>(null);
const model1 = shallowRef<THREE.Mesh | null>(null);
const model2 = shallowRef<THREE.Mesh | null>(null);
const controls1 = shallowRef<OrbitControls | null>(null);
const controls2 = shallowRef<OrbitControls | null>(null);

const isLoading1 = ref(true);
const isLoading2 = ref(true);
const error = ref<string | null>(null);
const autoRotate = ref(false);
let animationFrameId: number | null = null;

// Gemeinsame Initialisierung für beide Viewers
const init = () => {
  const container1 = document.querySelector('.animation1');
  const container2 = document.querySelector('.animation2');
  if (!container1 || !container2) {
    error.value = 'Container not found!';
    return;
  }

  // Szene 1 (Duck Model)
  scene1.value = new THREE.Scene();
  scene1.value.background = null; // Transparenten Hintergrund festlegen
  
  // Kamera für den ersten Viewer
  const aspect1 = container1.clientWidth / container1.clientHeight;
  camera1.value = new THREE.PerspectiveCamera(75, aspect1, 0.01, 1000);
  camera1.value.position.set(0, 1, 3);
  camera1.value.lookAt(0, 0, 0);

  // Renderer für den ersten Viewer
  renderer1.value = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true // Transparenten Hintergrund aktivieren
  });
  renderer1.value.setPixelRatio(window.devicePixelRatio);
  renderer1.value.setSize(300, 300); 
  renderer1.value.shadowMap.enabled = true;
  renderer1.value.shadowMap.type = THREE.PCFSoftShadowMap;
  container1.appendChild(renderer1.value.domElement);

  // Beleuchtung für den ersten Viewer
  setupLighting(scene1.value);

  // OrbitControls für den ersten Viewer
  if (camera1.value && renderer1.value) {
    controls1.value = new OrbitControls(camera1.value, renderer1.value.domElement);
    setupControls(controls1.value);
  }

  // Szene 2 (Cube Model)
  scene2.value = new THREE.Scene();
  scene2.value.background = null; // Transparenten Hintergrund festlegen

  // Kamera für den zweiten Viewer
  const aspect2 = container2.clientWidth / container2.clientHeight;
  camera2.value = new THREE.PerspectiveCamera(75, aspect2, 0.01, 1000);
  camera2.value.position.set(0, 1, 3);
  camera2.value.lookAt(0, 0, 0);

  // Renderer für den zweiten Viewer
  renderer2.value = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true // Transparenten Hintergrund aktivieren
  });
  renderer2.value.setPixelRatio(window.devicePixelRatio);
  renderer2.value.setSize(300, 300); 
  renderer2.value.shadowMap.enabled = true;
  renderer2.value.shadowMap.type = THREE.PCFSoftShadowMap;
  container2.appendChild(renderer2.value.domElement);

  // Beleuchtung für den zweiten Viewer
  setupLighting(scene2.value);

  // OrbitControls für den zweiten Viewer
  if (camera2.value && renderer2.value) {
    controls2.value = new OrbitControls(camera2.value, renderer2.value.domElement);
    setupControls(controls2.value);
  }

  // Modelle laden
  loadModel(scene1.value, '/stl/duck.stl', model1, isLoading1, 0xFFFF00); // Gelb für Duck
  loadModel(scene2.value, '/stl/cube.stl', model2, isLoading2, 0xFFFFFF); // Weiß für Cube
};

// Beleuchtung einrichten
const setupLighting = (scene: THREE.Scene) => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  const frontLight = new THREE.DirectionalLight(0xffffff, 1);
  frontLight.position.set(0, 5, 10);
  frontLight.castShadow = true;
  scene.add(frontLight);

  const leftLight = new THREE.DirectionalLight(0xffffff, 0.5);
  leftLight.position.set(-10, 5, 0);
  scene.add(leftLight);

  const rightLight = new THREE.DirectionalLight(0xffffff, 0.5);
  rightLight.position.set(10, 5, 0);
  scene.add(rightLight);
};

// OrbitControls einrichten
const setupControls = (controls: OrbitControls) => {
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = true;
  controls.zoomSpeed = 1.0;
  controls.enablePan = true;
  controls.minDistance = 2;
  controls.maxDistance = 20;
  controls.maxPolarAngle = Math.PI;
  controls.autoRotate = autoRotate.value;
  controls.autoRotateSpeed = 1.0;
};

// STL-Modell laden
const loadModel = (scene: THREE.Scene, modelPath: string, modelRef: any, loadingRef: any, color: number) => {
  const loader = new STLLoader();
  loader.load(
    modelPath,
    (geometry) => {
      try {
        const material = new THREE.MeshStandardMaterial({
          color: color, // Farbe hier setzen
          metalness: 0.2,
          roughness: 0.6,
          flatShading: true
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        geometry.computeBoundingBox();
        if (geometry.boundingBox) {
          const center = new THREE.Vector3();
          geometry.boundingBox.getCenter(center);
          geometry.translate(-center.x, -center.y, -center.z);
        }
        
        mesh.scale.set(0.13, 0.13, 0.13);
        mesh.rotation.x = -Math.PI / 2;
        
        modelRef.value = mesh;
        scene.add(mesh);
        loadingRef.value = false;
        console.log('Model loaded successfully:', modelPath);
      } catch (e) {
        console.error('Error creating mesh:', e);
        error.value = 'Error creating 3D model';
        loadingRef.value = false;
      }
    },
    (xhr) => {
      const progress = (xhr.loaded / xhr.total) * 100;
      console.log(`${Math.round(progress)}% loaded`);
    },
    (err) => {
      console.error('Error loading STL:', err);
      error.value = 'Failed to load 3D model';
      loadingRef.value = false;
    }
  );
};

// Anpassung der Ansicht bei Resize
const handleResize = () => {
  const container1 = document.querySelector('.animation1');
  const container2 = document.querySelector('.animation2');
  if (!container1 || !container2 || !camera1.value || !renderer1.value || !camera2.value || !renderer2.value) return;

  const width1 = container1.clientWidth;
  const height1 = container1.clientHeight;
  const width2 = container2.clientWidth;
  const height2 = container2.clientHeight;

  camera1.value.aspect = width1 / height1;
  camera1.value.updateProjectionMatrix();
  renderer1.value.setSize(300, 300);

  camera2.value.aspect = width2 / height2;
  camera2.value.updateProjectionMatrix();
  renderer2.value.setSize(300, 300);
};

const animate = () => {
  if (!scene1.value || !camera1.value || !renderer1.value || !controls1.value || !scene2.value || !camera2.value || !renderer2.value || !controls2.value) return;

  animationFrameId = requestAnimationFrame(animate);

  try {
    controls1.value.update();
    renderer1.value.render(scene1.value, camera1.value);
    
    controls2.value.update();
    renderer2.value.render(scene2.value, camera2.value);
  } catch (e) {
    console.error('Error during animation render:', e);
  }
};

onMounted(() => {
  init();
  animate();

  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
});
</script>

<template>
  <div class="animation1" style="width: 300px; height: 300px;"></div>
  <div class="animation2" style="width: 300px; height: 300px;"></div>
</template>

<style scoped>
.animation1, .animation2 {
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;
  background-color: transparent; /* Hintergrund transparent machen */
}
</style>
