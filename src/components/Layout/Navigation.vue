<script setup>
import {useRoute} from 'vue-router';
import {HomeIcon, QuestionMarkCircleIcon, ChatBubbleLeftIcon} from '@heroicons/vue/24/outline';

const currentRoute = useRoute();
import {useI18n} from 'vue-i18n';
const { t } = useI18n();
import {ref} from 'vue';
const {locale} = useI18n();

const buttonRef = ref(null);

const changeLocale2 = () => {
  if(locale.value === "de"){
    locale.value = "en";
  }else if(locale.value === "en"){
    locale.value = "de";
  }
};

</script>

<template>
  <nav class="navbar">
    <div class="container-xxl mw-100">
      <ul id="title-pre" class="nav justify-content-start w-350px">
        <li class="nav-item d-flex">
          <RouterLink class="d-flex align-items-center" :to="{name: 'home'}" aria-label="Home">
            <img src="../../assets/logo.png" class="text-black h-40px" alt="Baller Los Brettspiele Logo"/>
          </RouterLink>
          <h1 class="fs-4 w-100 mt-2 heading heading-pre" style="color:white">{{ t('home.title') }} <br></h1>
        </li>
        <h6 class="fs-9 w-100 sub-heading" style="color:white" aria-hidden="true">
          {{ t('home.subtitle') }}
        </h6>
      </ul>
      <ul class="nav nav-fill d-flex flex-row justify-content-start">
        <li class="nav-item" :class="{'nav-item--active': currentRoute.matched.some(({name}) => name === 'home')}">
          <RouterLink class="nav-link" :to="{name: 'home'}" active-class="active" aria-label="Home">
            <HomeIcon class="text-black h-40px" aria-hidden="true"/>
          </RouterLink>
        </li>
        <li class="nav-item" :class="{'nav-item--active': currentRoute.matched.some(({name}) => name === 'about')}">
          <RouterLink class="nav-link" :to="{name: 'about'}" active-class="active" aria-label="About">
            <QuestionMarkCircleIcon class="text-black h-40px" aria-hidden="true"/>
          </RouterLink >
        </li>
        <li class="nav-item" :class="{'nav-item--active': currentRoute.matched.some(({name}) => name === 'contact')}">
          <RouterLink class="nav-link" :to="{name: 'contact'}" active-class="active" aria-label="Contact">
            <ChatBubbleLeftIcon class="text-black h-40px" aria-hidden="true"/>
          </RouterLink>
        </li>
        
        <li class="nav-item">
          <div class="locale-changer mt-1">
            <!-- Sprachmenü -->
            <button
              ref="buttonRef"
              @click="changeLocale2"
              class="locale-btn"
              aria-label="Change Language"
            >
              <div class="nav-link">
                <div v-if="locale === 'de'">
                  <img class="img-flag" style="height: 24px; width: 36px;" src="./../../../public/flags/Germany.svg" alt="Germany Flag" />
                </div>
                <div v-if="locale === 'en'">
                  <img class="img-flag" style="height: 24px; width: 36px;" src="./../../../public/flags/UK.svg.png" alt="UK Flag" />
                </div>
              </div>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">

.heading{
  text-shadow: 2px 2px 5px black;
}

.sub-heading{
  text-shadow: 2px 2px 5px black;
}

@media (max-width: 620px) {
  h6{
    font-size: 15px;
  }
}

.h-40px {
  height: 40px;
}

.w-350px {
  width: 350px;
}

.link-text {
  margin-top: 4px;
  font-weight: bold;
  font-family: "Arial Black", system-ui;
}

@media (max-width: 620px) {
  .w-350px {
    width: 100px;
  }
  img.img-flag {
    vertical-align: bottom;
  }
}

ul.justify-content-start {
    width: fit-content;
}

.locale-changer {
  position: relative;
}

.locale-btn {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.locale-btn span {
  margin-left: 8px;
}

.navbar {
  height: fit-content;
  width: 100%;
  position: fixed;
  z-index: 1;
  background-color:#143b6d;
  box-shadow: 0px 3px 5px 0px #193e73
}

</style>
