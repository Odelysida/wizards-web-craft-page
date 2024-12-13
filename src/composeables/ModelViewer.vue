<script setup>
import * as THREE from 'three';
import { onMounted, ref } from 'vue';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'; // Correct OBJLoader import

let camera, scene, renderer;

const init = () => {
  // Initialize the scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  // Set up the camera
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 500);
  camera.position.set(0, 0, 4);

  // Set up the renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Append renderer to DOM
  const container = document.querySelector('.animation');
  container.appendChild(renderer.domElement);

  // Load and add the OBJ model
  const objLoader = new OBJLoader();
  objLoader.load('/obj/duck.obj', (mesh) => {
    scene.add(mesh);
  }, undefined, (error) => {
    console.error('Error loading OBJ:', error);
  });

  // Adjust camera aspect ratio and renderer size
  resize();
};

const resize = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
};

// Animation loop
const animate = () => {
  requestAnimationFrame(animate);
  render();
};

// Render the scene
const render = () => {
  renderer.render(scene, camera);
};

// Initialize the scene and start animation when mounted
onMounted(() => {
  init();
  animate();

  // Handle window resizing
  window.addEventListener('resize', resize);
});

</script>

<template>
  <div class="animation">
  </div>
</template>

<style scoped>
.animation{
  position: fixed;
}
</style>