<script setup>
import {useRoute} from 'vue-router';
import {HomeIcon, QuestionMarkCircleIcon, ChatBubbleLeftIcon, LanguageIcon} from '@heroicons/vue/24/outline';

const currentRoute = useRoute();
import {useI18n} from 'vue-i18n';
import {ref, watch} from 'vue';
// Get access to i18n locale and availableLocales
const {locale, availableLocales} = useI18n();

const isDropdownOpen = ref(false);

// State to manage the current locale
const currentLocale = ref(locale.value);

// Toggle the dropdown visibility
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Change the locale when an option is clicked
const changeLocale = (newLocale) => {
  locale.value = newLocale;
  currentLocale.value = newLocale;
  isDropdownOpen.value = false; // Close dropdown after selection
};

</script>

<template>
  <nav class="navbar">
    <div class="container-xxl mw-100">
      <ul class="nav justify-content-start w-350px">
        <li class="nav-item d-flex">
          <RouterLink class="d-flex align-items-center" :to="{name: 'home'}">
            <img src="../../assets/logo.png" class="text-black h-40px" alt="logo"/>
          </RouterLink>
          <h1 class="fs-4 w-100 mt-2 heading">Baller Los Brettspiele</h1>
        </li>
      </ul>
      <ul class="nav nav-fill d-flex flex-row justify-content-start">
        <li class="nav-item" :class="{'nav-item--active': currentRoute.matched.some(({name}) => name === 'home')}">
          <RouterLink class="nav-link" :to="{name: 'home'}" active-class="active">
            <HomeIcon class="text-black h-40px"/>
          </RouterLink>
        </li>
        <li class="nav-item" :class="{'nav-item--active': currentRoute.matched.some(({name}) => name === 'about')}">
          <RouterLink class="nav-link" :to="{name: 'about'}" active-class="active">
            <QuestionMarkCircleIcon class="text-black h-40px"/>
          </RouterLink>
        </li>
        <li class="nav-item" :class="{'nav-item--active': currentRoute.matched.some(({name}) => name === 'contact')}">
          <RouterLink class="nav-link" :to="{name: 'contact'}" active-class="active">
            <ChatBubbleLeftIcon class="text-black h-40px"/>
          </RouterLink>
        </li>
        <li class="nav-item">
          <div class="locale-changer mt-1">
            <button @click="toggleDropdown" class="locale-btn">
              <LanguageIcon class="text-black h-40px"/>
            </button>

            <!-- Dropdown list -->
            <div v-if="isDropdownOpen" class="dropdown-list">
              <ul style="padding-left: 0; width: 200px; right: 0;">
                <li
                    v-for="locale in availableLocales"
                    :key="locale"
                    @click="changeLocale(locale)"
                    class="dropdown-item d-flex flex-row justify-content-start w-100"
                >


                  <div class="language-name fs-2 pl-4 ml-2 mr-4" style="width: 64px;">
                        {{ locale }}
                  </div>
                  <img v-if="locale === 'de'" style="height: 24px; width: 32px; margin-top: 10px;" src="./../../../public/flags/Germany.svg"
                       alt="germany flag">
                  <img v-else-if="locale === 'en'" style="height: 24px; width: 32px; margin-top: 10px;" src="./../../../public/flags/UK.svg.png"
                       alt="england flag">
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="text-black fs-2 pl-2">
            <div v-if="locale === 'de'">
              <img style="height: 24px;" src="./../../../public/flags/Germany.svg" alt="germany flag">
            </div>
            <div v-if="locale === 'en'">
              <img style="height: 24px;" src="./../../../public/flags/UK.svg.png" alt="england flag">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">
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
  .heading {
    display: none;
  }

  .w-350px {
    width: 100px;
  }
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

.dropdown-list {
  position: absolute;
  top: 100%;
  right: 14px;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  margin: 16px;
}

.dropdown-item {
  cursor: pointer;
  transition: background 0.3s;
  font-size: 16px;
  width: 100%;
  background: white;
}

.dropdown-item:hover {
  background-color: #182d3a;
  color: white;
  text-decoration: underline;
  .language-name {
    color: white;
  }
}
</style>