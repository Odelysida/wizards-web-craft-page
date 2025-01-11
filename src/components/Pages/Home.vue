<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';
import ModelViewer from '../../composeables/ModelViewer.vue';

// Rotation setup for the 3D model
const rotation = ref({
  x: -Math.PI / 2,
  y: 0,
  z: 0,
});

function rotate() {
  requestAnimationFrame(rotate);
  rotation.value.z -= 0.01;
}
rotate();

// Image list for the carousel
const images = [
  'src/assets/1-drucker_allein.png',
  'src/assets/2-IMG_2575.jpg',
  'src/assets/3-IMG_2576.jpg',
  'src/assets/4-IMG_2572.jpg',
  'src/assets/5-IMG_2571.jpg',
  'src/assets/besser-image.png'
];
</script>

<template>
  <div class="container-fluid w-100 full-size">
    <!-- Carousel Section -->
    <div class="row p-0 m-0">
      <div class="col-12 p-0 m-0 mt-4">
        <center>
          <Carousel
            :loop="true" 
            :perPage="1" 
            :mouseDrag="true" 
            :touchDrag="true"
            :items-to-scroll="1"
            :wrap-around="true"
            :snap-align="'center'"
            :transition-duration="300" 
            class="h-50 w-50">
            <template #addons>
              <Navigation />
            </template>
            <Slide v-for="(image, index) in images" :key="index">
              <img :src="image" class="carousel-image" :alt="'Image ' + (index + 1)" />
            </Slide>
          </Carousel>
        </center>
      </div>
    </div>

    <!-- 3D Model Viewer -->
    <div class="row p-0 m-0">
      <div class="col-12 p-0 m-0 mt-4">
        <ModelViewer :rotation="rotation" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  padding: 0;
  margin: 0;
}

.carousel {
  max-width: 1000px;
  margin: auto;
  border-radius: 10px;
}

.carousel-image {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  border-radius: 10px;
}
</style>

