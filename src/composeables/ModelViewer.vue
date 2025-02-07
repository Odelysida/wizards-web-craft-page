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
const autoRotate = ref(true);
const wireframe1 = ref(false);
const wireframe2 = ref(false);
let animationFrameId: number | null = null;

const toggleWireframe = (modelNumber: number) => {
  if (modelNumber === 1 && model1.value) {
    wireframe1.value = !wireframe1.value;
    const material = model1.value.material as THREE.MeshStandardMaterial;
    material.wireframe = wireframe1.value;
    if (wireframe1.value) {
      material.wireframeLinewidth = 2;  // Stärkere Drahtgitterlinie
      material.wireframeLinecap = 'round';  // Runde Linienenden
      material.wireframeLinejoin = 'round';
      material.color.set(0xffffff);  // Helles Weiß für das Drahtgitter
    } else {
      material.wireframeLinewidth = 1;
      material.color.set(0xCCCCCC);  // Zurück zur Standardfarbe
    }
  } else if (modelNumber === 2 && model2.value) {
    wireframe2.value = !wireframe2.value;
    const material = model2.value.material as THREE.MeshStandardMaterial;
    material.wireframe = wireframe2.value;
    if (wireframe2.value) {
      material.wireframeLinewidth = 2;  // Stärkere Drahtgitterlinie
      material.wireframeLinecap = 'round';  // Runde Linienenden
      material.wireframeLinejoin = 'round';
      material.color.set(0xffffff);  // Helles Weiß für das Drahtgitter
    } else {
      material.wireframeLinewidth = 1;
      material.color.set(0xCCCCCC);  // Zurück zur Standardfarbe
    }
  }
};

const init = () => {
  const container1 = document.querySelector('.animation1');
  const container2 = document.querySelector('.animation2');
  if (!container1 || !container2) {
    error.value = 'Container not found!';
    return;
  }

  scene1.value = new THREE.Scene();
  scene1.value.background = null;

  const aspect1 = container1.clientWidth / container1.clientHeight;
  camera1.value = new THREE.PerspectiveCamera(75, aspect1, 0.01, 1000);
  camera1.value.position.set(0, 1, 3);

  renderer1.value = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer1.value.setPixelRatio(window.devicePixelRatio);
  renderer1.value.setSize(300, 300);
  renderer1.value.shadowMap.enabled = true;
  container1.appendChild(renderer1.value.domElement);

  setupLighting(scene1.value);

  if (camera1.value && renderer1.value) {
    controls1.value = new OrbitControls(camera1.value, renderer1.value.domElement);
    setupControls(controls1.value);
  }

  scene2.value = new THREE.Scene();
  scene2.value.background = null;

  const aspect2 = container2.clientWidth / container2.clientHeight;
  camera2.value = new THREE.PerspectiveCamera(75, aspect2, 0.01, 1000);
  camera2.value.position.set(0, 1, 3);

  renderer2.value = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer2.value.setPixelRatio(window.devicePixelRatio);
  renderer2.value.setSize(300, 300);
  renderer2.value.shadowMap.enabled = true;
  container2.appendChild(renderer2.value.domElement);

  setupLighting(scene2.value);

  if (camera2.value && renderer2.value) {
    controls2.value = new OrbitControls(camera2.value, renderer2.value.domElement);
    setupControls(controls2.value);
  }

  loadModel(scene1.value, '/stl/duck.stl', model1, isLoading1);
  loadModel(scene2.value, '/stl/cube.stl', model2, isLoading2);
};

const setupLighting = (scene: THREE.Scene) => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  const topLight = new THREE.DirectionalLight(0xffffff, 0.5);
  topLight.position.set(0, 20, 0);
  scene.add(topLight);

  const bottomLight = new THREE.DirectionalLight(0xffffff, 0.3);
  bottomLight.position.set(0, -20, 0);
  scene.add(bottomLight);

  const frontLight = new THREE.DirectionalLight(0xffffff, 0.4);
  frontLight.position.set(0, 0, 20);
  scene.add(frontLight);

  const backLight = new THREE.DirectionalLight(0xffffff, 0.4);
  backLight.position.set(0, 0, -20);
  scene.add(backLight);

  const leftLight = new THREE.DirectionalLight(0xffffff, 0.4);
  leftLight.position.set(-20, 0, 0);
  scene.add(leftLight);

  const rightLight = new THREE.DirectionalLight(0xffffff, 0.4);
  rightLight.position.set(20, 0, 0);
  scene.add(rightLight);
};

const setupControls = (controls: OrbitControls) => {
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = true;
  controls.zoomSpeed = 1.0;
  controls.enablePan = false;
  controls.minDistance = 2;
  controls.maxDistance = 20;
  controls.maxPolarAngle = Math.PI;
  controls.autoRotate = autoRotate.value;
  controls.autoRotateSpeed = 0.5;
};

const loadModel = (scene: THREE.Scene, modelPath: string, modelRef: any, loadingRef: any) => {
  const loader = new STLLoader();
  loader.load(
    modelPath,
    (geometry) => {
      const material = new THREE.MeshStandardMaterial({
        color: 0xCCCCCC,
        metalness: 0.2,
        roughness: 0.6,
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
    },
    undefined,
    (err) => {
      console.error('Error loading STL:', err);
      error.value = 'Failed to load 3D model';
      loadingRef.value = false;
    }
  );
};

const handleResize = () => {
  const container1 = document.querySelector('.animation1');
  const container2 = document.querySelector('.animation2');
  if (!container1 || !container2 || !camera1.value || !renderer1.value || !camera2.value || !renderer2.value) return;

  camera1.value.aspect = container1.clientWidth / container1.clientHeight;
  camera1.value.updateProjectionMatrix();
  renderer1.value.setSize(container1.clientWidth, container1.clientHeight);

  camera2.value.aspect = container2.clientWidth / container2.clientHeight;
  camera2.value.updateProjectionMatrix();
  renderer2.value.setSize(container2.clientWidth, container2.clientHeight);
};

const animate = () => {
  if (!scene1.value || !camera1.value || !renderer1.value || !controls1.value || !scene2.value || !camera2.value || !renderer2.value || !controls2.value) return;

  animationFrameId = requestAnimationFrame(animate);

  controls1.value.update();
  renderer1.value.render(scene1.value, camera1.value);

  controls2.value.update();
  renderer2.value.render(scene2.value, camera2.value);
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
  <div class="animation-container">
    <div class="model-container">
      <div class="animation1"></div>
      <button @click="toggleWireframe(1)" class="wireframe-toggle">
        {{ wireframe1 ? 'Wireframe deaktivieren' : 'Wireframe aktivieren' }}
      </button>
    </div>
    <div class="model-container">
      <div class="animation2"></div>
      <button @click="toggleWireframe(2)" class="wireframe-toggle">
        {{ wireframe2 ? 'Wireframe deaktivieren' : 'Wireframe aktivieren' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.model-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.animation1,
.animation2 {
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;
  background-color: transparent;
}

.wireframe-toggle {
  padding: 8px 16px;
  background-color: #4a5568;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.1s;
}

.wireframe-toggle:hover {
  background-color: #2d3748;
}
</style>
