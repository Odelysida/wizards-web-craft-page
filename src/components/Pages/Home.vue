<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';
import ModelViewer from '../../composeables/ModelViewer.vue';
import imgUrl1 from "../../assets/1-drucker_allein.png";
import imgUrl2 from "../../assets/2-IMG_2575.jpg";
import imgUrl3 from "../../assets/3-IMG_2576.jpg";
import imgUrl4 from "../../assets/4-IMG_2572.jpg";
import imgUrl5 from "../../assets/5-IMG_2571.jpg";
import imgUrl6 from "../../assets/besser-image.png";
import {useI18n} from "vue-i18n";
import Swiper from "../../composeables/Swiper.vue";

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
const { t } = useI18n();

const images = [imgUrl2, imgUrl3, imgUrl4, imgUrl5, imgUrl6];
</script>

<template>
  <div class="container-fluid w-100 full-size">
    <!-- Slider Card mit Text daneben -->
    <div class="content-card">
      <div class="row p-0 m-0">
        <div class="col-md-6 p-0 m-0 mt-4">
       <Swiper></Swiper>
        </div>

        <!-- Textbereich -->
        <!-- TODO Text zum swiper anpassen -->
        <div class="col-md-6 d-flex align-items-center">
          <div class="text-content">
            <h4>Baller Los!</h4>
            <span v-html="t('home.welcome')">
            </span>
            <p>
              <RouterLink to="/about">{{ t('home.link') }}</RouterLink> {{ t('home.textAfterLink')}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Spielbrett mit Regeln -->
    <div class="content-card">
      <div class="row p-0 m-0">
        <!-- Carousel -->
        <div class="col-md-6 p-0 m-0 mt-4">
          <img class="rules-image" src="../../assets/Spielbrett_und_Figuren.jpeg" alt="Spielbrett_und_Figuren"/>
        </div>

        <!-- Textbereich -->
        <div class="col-md-6 d-flex align-items-center">
          <div class="text-content">
            <h4 v-html="t('home.rulesTitle')">
            </h4>
            <span v-html="t('home.rulesText')">
            </span>
            </div>
        </div>
        <div class="sequenceText">
          <h5 v-html="t('home.sequenceTitle')">
          </h5>
          <span v-html="t('home.sequenceText')">
            </span>
          <span v-html="t('home.footerText')">
            </span>
        </div>
      </div>
    </div>

    <!-- 3D Model Viewer Card -->
    <div class="content-card">
      <h4 class="card-title">3D Model Viewer</h4>
      <div class="model-viewer-grid">
        <!-- Linkes Modell (Ente) -->
        <div class="model-viewer-border">
          <ModelViewer :rotation="rotation" class="model-viewer-container" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.collage{
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  border-radius: 10px;
}

h4{
  text-shadow: 6px 1px 8px black
}

h5{
  font-size: 1.25rem;
  text-shadow: 1px 1px 5px black;
}

.container-fluid {
  padding: 0;
  margin: 0;
}

.swiper {
  max-width: 400px;
  height: 500px;
  margin: auto;
  border-radius: 10px;
  object-fit: contain;
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

.rules-image {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  border-radius: 10px;
}

/* Hintergrund-Card */
.content-card {
  position: relative;
  top: 100px;
  background: #546474; /* Halbtransparenter weißer Hintergrund */
  box-shadow: 0px 1px 3px 3px #1a232d; /* Schatten */
  border-radius: 15px; /* Abgerundete Ecken */
  padding: 20px; /* Innenabstand */
  margin: 20px auto; /* Zentrierung und äußerer Abstand */
  max-width: 1200px; /* breite */
}

/* Kartenabschnitte */
.card-title {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
}

.text-content {
  padding: 10px;
  color: #fff;
  font-size: 1rem;
  line-height: 1.5;
}

/* 3D Model Viewer Grid */
.model-viewer-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

/* Styling für jedes Modell */
.model-viewer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  max-width: 600px;
  margin: auto;
}

/* Rahmen um den ModelViewer */
.model-viewer-border {
  flex-wrap: wrap;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 10px;
}

/* Responsives Design */
@media (max-width: 1034px) {
  .model-viewer-grid {
    gap: 15px; /* Weniger Abstand zwischen Elementen */
  }

  .model-viewer-container {
    flex-wrap: wrap;
    height: 600px; /* Geringere Höhe für kleinere Bildschirme */
    max-width: 90%; /* Breite auf 90% des Bildschirms begrenzen */
  }

  .model-viewer-border {
    padding: 8px; /* Weniger Innenabstand */
  }

  .content-card{
    top: 150px;
  }
}

@media (max-width: 768px) {
  .model-viewer-grid {
    flex-direction: column; /* Vertikales Layout für schmale Bildschirme */
    gap: 10px;
  }

  .model-viewer-container {
    flex-wrap: wrap;
    height: 600px; /* Noch kleinere Höhe */
  }

  .model-viewer-border {
    padding: 5px; /* Minimaler Innenabstand */
    border-radius: 5px; /* Kleinere Rundung */
  }

  .rules-image{
    height: 350px;
    width: 350px;
  }

  .collage{
    height: 350px;
    width: 350px;
  }
}
</style>

