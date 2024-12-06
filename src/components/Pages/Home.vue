<script setup>
import Carousel from '../../composeables/Carousel.vue';
import {vue3dLoader} from 'vue-3d-loader';
import {ref} from 'vue';

const rotation = ref();
rotation.value = {
  x: -Math.PI / 2,
  y: 0,
  z: 0,
};

function onLoad() {
  rotate();
}

function rotate() {
  requestAnimationFrame(rotate);
  rotation.value.z -= 0.01;
}

</script>

<template>
  <div class="container-fluid w-100 full-size">
    <div class="row p-0 m-0">
      <div class="col-12 p-0 m-0 mt-4">
        <center>
          <Carousel class="h-50 w-50"/>
        </center>
      </div>
    </div>
    <div class="row p-0 m-0">
      <div class="col-12 p-0 m-0 mt-4">
        <vue3dLoader
            :height="500"
            :width="500"
            :showFps="true"
            filePath="../../assets/obj/cube.obj"
            :backgroundColor="0x000000"
            :rotation="rotation"
            @load="onLoad()"
        />
      </div>
    </div>
  </div>
  <!-- <div class="row p-0 m-0">
     <div class="col-12 p-0 m-0">
       <img src="https://picsum.photos/1920/600" class="card-img"/>
     </div>
   </div>
   <div class="row p-0 m-0">
     <div class="col-12 p-0 m-0">
       <img src="https://picsum.photos/1920/600" class="card-img"/>
     </div>
   </div>
   <div class="row p-0 m-0">
     <div class="col-12 p-0 m-0">
       <img src="https://picsum.photos/1920/600" class="card-img"/>
     </div>
   </div> -->
</template>

<style scoped>

</style>