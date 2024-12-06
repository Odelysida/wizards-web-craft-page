<script setup>
import {useI18n} from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="container bg-white mt-3 p-2 about-container pe-4 ps-4">
    <h1 class="text-black ps-5 pe-5 pt-3">
      {{ t('about.title') }}
    </h1>
    <p class="text-black fs-4 ps-5 pe-5 pt-2">
      {{
        t('about.introduction')
      }}
    </p>
    <div class="text-black fs-4 ps-5 pe-5 pt-2">
      <ul>
        <li>
          {{ t('about.generalInformation') }}
        </li>
        <li>
          {{
            t('about.whatWeDo')
          }}
        </li>
      </ul>
    </div>
    <p class="text-black fs-4 ps-5 pe-5 pt-2">
      {{
        t('about.bigText')
      }}
    </p>
    <p class="text-black fs-4 ps-5 pe-5 pt-2 h-500px">
      {{
        t('about.pros')
      }}
    </p>
  </div>
</template>

<style scoped>
.h-500px {
  height: 500px;
}

@media (max-width: 620px) {
  .about-container {
    height: 1800px;
  }
}
</style>