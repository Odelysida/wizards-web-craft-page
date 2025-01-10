<script setup>
import Carousel from '../../composeables/Carousel.vue';
import {vue3dLoader} from 'vue-3d-loader';
import {ref} from 'vue';
import ModelViewer from '../../composeables/ModelViewer.vue';

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

</script>

<template>
  <div class="container-fluid w-100 full-size">
    <!-- Carousel -->
    <div class="row p-0 m-0">
      <div class="col-12 p-0 m-0 mt-4">
        <center>
          <Carousel class="h-50 w-50" />
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

</style>