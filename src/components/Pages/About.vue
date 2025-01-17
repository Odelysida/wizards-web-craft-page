<script setup>
import {useI18n} from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="container bg-white mt-4 p-5 about-container">
    <div class="text-section">
      <h1 class="text-black pt-3">
        {{ t('about.title') }}
      </h1>
      <p class="text-black fs-4 pt-2">
        {{ t('about.introduction') }}
      </p>
      <div class="text-black fs-4 pt-2">
        <ul>
          <li>
            {{ t('about.generalInformation') }}
          </li>
          <li>
            {{ t('about.whatWeDo') }}
          </li>
        </ul>
      </div>
      <p class="text-black fs-4 pt-2">
        {{ t('about.bigText') }}
      </p>
      <p class="text-black fs-4 pt-2">
        {{ t('about.pros') }}
      </p>
    </div>
    <div class="image-section">
      <img
          src="../../assets/Gruppenfoto.jpg"
          alt="Gruppenfoto der Schüler"
          class="responsive-image"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: block;
}

.text-section {
  margin-bottom: 20px;
}

.image-section {
  text-align: center;
}

.responsive-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  margin: 0 auto;
}

/* Responsive Anpassung */
@media (max-width: 620px) {
  .responsive-image {
    max-width: 100%;
  }
}
</style>
