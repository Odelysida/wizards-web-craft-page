<script setup>
import {useRoute} from 'vue-router';
import {HomeIcon, QuestionMarkCircleIcon, ChatBubbleLeftIcon, LanguageIcon} from '@heroicons/vue/24/outline';

const currentRoute = useRoute();
import {useI18n} from 'vue-i18n';
import {onBeforeUnmount, onMounted, ref, watch} from 'vue';
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

// Close the dropdown on clicking outside or scrolling
const closeDropdown = () => {
  isDropdownOpen.value = false;
};

// Event listener to detect clicks outside the dropdown
const handleClickOutside = (event) => {
  const dropdown = document.querySelector('.dropdown-list');
  const button = document.querySelector('.locale-btn');
  if (dropdown && !dropdown.contains(event.target) && !button.contains(event.target)) {
    closeDropdown();
  }
};

// Add event listeners on mount and remove them on unmount
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('scroll', closeDropdown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('scroll', closeDropdown);
});
</script>

<template>
  <nav class="navbar">
    <div class="container-xxl mw-100">
      <ul class="nav justify-content-start w-350px">
        <li class="nav-item d-flex">
          <RouterLink class="d-flex align-items-center" :to="{name: 'home'}">
            <img src="../../assets/logo.png" class="text-black h-40px" alt="logo"/>
          </RouterLink>
          <h1 class="fs-4 w-100 mt-2 heading">Baller Los Brettspiele <br> </h1>
        </li>
        <h6 class="fs-9 w-100 sub-heading">Ein Schülerunternehmen der BBS1 Lüneburg
          mit Meerblick</h6>
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
          </div>
            <!-- Dropdown list -->
            <div v-if="isDropdownOpen" class="dropdown-list" style="right: 0;">
              <ul style="right: 0; width: 150px;">
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
        </li>
        <li>
          <div class="text-black fs-2 pl-2">
            <div v-if="locale === 'de'">
              <img style="height: 24px; width: 36px;" src="./../../../public/flags/Germany.svg" alt="germany flag">
            </div>
            <div v-if="locale === 'en'">
              <img style="height: 24px; width: 36px;" src="./../../../public/flags/UK.svg.png" alt="england flag">
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

@media (max-width: 700px) {
  .sub-heading {
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
.navbar {
  height: 100px;
  position: relative;
}

.dropdown-list {
  position: fixed;
  top: 92px;
  right: 16px;
  min-width: 150px;
  max-width: calc(100% - 32px);
  z-index: 1000;
  padding: 8px 0;
  overflow: hidden;
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