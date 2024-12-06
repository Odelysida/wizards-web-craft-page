<template>
  <Carousel v-bind="config">
    <Slide :index="0">
      <div class="carousel__item">
        <img src="../assets/2-IMG_2575.jpg" class="card-img" alt="Figuren"/>
      </div>
    </Slide>
    <Slide :index="1">
      <div class="carousel__item">
        <img src="../assets/besser-image.png" class="card-img" alt="Figuren"/>
      </div>
    </Slide>
    <Slide :index="2">
      <div class="carousel__item">
        <img src="../assets/1-drucker_allein.png" class="card-img" alt="3D Drucker"/>
      </div>
    </Slide>

    <template #addons>
      <Navigation/>
    </template>
  </Carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Navigation} from 'vue3-carousel';

const config = {
  autoplay: 2000,
  pauseAutoplayOnHover: true,
};
</script>