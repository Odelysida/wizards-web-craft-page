<script setup>
import { Swiper, SwiperSlide} from 'swiper/vue';
import { EffectCube, Pagination } from 'swiper/modules';
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css";
import imgUrl2 from "../assets/Schuelerfirma-Bilder-1.png";
import imgUrl3 from "../assets/4-IMG_2572.jpg";
import imgUrl4 from "../assets/3-IMG_2576.jpg";
import imgUrl5 from "../assets/5-IMG_2571.jpg";

const images = [imgUrl2 , imgUrl3 , imgUrl4, imgUrl5];

</script>

<template>
    <Swiper :modules="[EffectCube, Pagination]" effect="cube" :grabCursor="true" :loop="true"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }"
    :pagination="true">
      <SwiperSlide v-for="image in images">
        <img :src="`${image}`" class="card-img" alt="Figuren"/>
      </SwiperSlide>
    </Swiper>

</template>

<style scoped>
@import "https://fonts.googleapis.com/css2?family=Rubik&display=swap";

*{
  z-index: 0;
  margin: 0;
  padding: 0;
  bottom: 5px;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
}

.swiper-slide img{
  width: 100%;
  height: 100%;
}

</style>