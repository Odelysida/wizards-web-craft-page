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

const images = [imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imgUrl6];
</script>

<template>
  <div class="container-fluid w-100 full-size">
    <!-- Slider Card -->
    <div class="content-card">
      <h3 class="card-title">Image Carousel</h3>
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
    </div>

    <!-- 3D Model Viewer Card -->
    <div class="content-card">
      <h3 class="card-title">3D Model Viewer</h3>
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

/* Hintergrund-Card */
.content-card {
  background: #546474; /* Halbtransparenter weißer Hintergrund */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Schatten für Tiefe */
  border-radius: 15px; /* Abgerundete Ecken */
  padding: 20px; /* Innenabstand */
  margin: 20px auto; /* Zentrierung und äußerer Abstand */
  max-width: 1200px; /* Begrenzte Breite */
}

/* Kartenabschnitte */
.card-title {
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 20px;
  text-align: center;
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
  border: 2px solid #000;
  border-radius: 10px;
  padding: 10px;
}

/* Responsives Design */
@media (max-width: 1024px) {
  .model-viewer-grid {
    gap: 15px; /* Weniger Abstand zwischen Elementen */
  }

  .model-viewer-container {
    flex-wrap: wrap;
    height:600px; /* Geringere Höhe für kleinere Bildschirme */
    max-width: 90%; /* Breite auf 90% des Bildschirms begrenzen */
  }

  .model-viewer-border {
    padding: 8px; /* Weniger Innenabstand */
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
}
</style>

