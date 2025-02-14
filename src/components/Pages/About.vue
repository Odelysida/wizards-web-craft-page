<script setup>
import {useI18n} from 'vue-i18n';
import {Carousel, Navigation, Slide} from "vue3-carousel";
const { t } = useI18n();
</script>

<template>
  <div class="container-fluid w-100 full-size">
    <!-- Slider Card mit Text daneben -->
    <div class="content-card">
        <!-- Textbereich -->
        <div class="d-flex align-items-center">
          <div class="text-content">
            <div class="text-section">
              <div class="image-section">
                <div class="text-section">
              <h1 class="text-white pt-3" v-html="t('about.title')"/>
                </div>
                <img
                    src="../../assets/Gruppenfoto.jpg"
                    alt="Gruppenfoto der Schüler"
                    class="responsive-image"
                />
              </div>
              <p class="text-white fs-5 pt-2" v-html="t('about.introduction')"/>
              <div class="text-white fs-5 pt-2">
                <ul>
                  <li>
                    <span v-html="t('about.generalInformation')"/>
                  </li>
                  <li>
                    <span v-html="t('about.whatWeDo')" />
                  </li>
                </ul>
              </div>
              <p class="text-white fs-5 pt-2" v-html="t('about.bigText')"/>
             <!-- <p class="text-white fs-5 pt-2" v-html="t('about.pros')"/> -->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

h1{
  text-shadow: 3px 4px 5px black;
}

.container {
  display: block;
}

.image-section {
  text-align: right;
}

.text-section {
  text-align: left;
}

.responsive-image {
  width: 100%;
  max-width: 700px;
  height: auto;
  object-fit: cover;
  margin: 0 auto;
  top:0;
}

/* Responsive Anpassung */
@media (max-width: 620px) {
  .responsive-image {
    max-width: 100%;
  }
}

.container-fluid {
  padding: 0;
  margin: 0;
}

/* Hintergrund-Card */
.content-card {
  position: relative;
  top: 100px;
  background: #224f7d; /* Halbtransparenter weißer Hintergrund */
  box-shadow: 0px 1px 3px 3px #1a232d; /* Schatten */
  border-radius: 15px; /* Abgerundete Ecken */
  padding: 20px; /* Innenabstand */
  margin: 20px auto; /* Zentrierung und äußerer Abstand */
  max-width: 1200px; /* Begrenzte Breite */
}

.text-content {
  padding: 10px;
  color: #fff;
  font-size: 1rem;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .content-card{
    top: 150px;
}
}
</style>
