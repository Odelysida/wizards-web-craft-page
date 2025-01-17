<script setup>
import {useRoute} from 'vue-router';
import {HomeIcon, QuestionMarkCircleIcon, ChatBubbleLeftIcon, LanguageIcon} from '@heroicons/vue/24/outline';

const currentRoute = useRoute();
import {useI18n} from 'vue-i18n';
import {onBeforeUnmount, onMounted, ref, watch, nextTick} from 'vue';
const {locale, availableLocales} = useI18n();

const isDropdownOpen = ref(false);
const currentLocale = ref(locale.value);

// Fokussiert den Button beim Laden der Seite und ermöglicht Tab-Navigation
const buttonRef = ref(null);

// Funktionen für Dropdown und Lokalisierung
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const changeLocale = (newLocale) => {
  locale.value = newLocale;
  currentLocale.value = newLocale;
  isDropdownOpen.value = false;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const handleClickOutside = (event) => {
  const dropdown = document.querySelector('.dropdown-list');
  const button = document.querySelector('.locale-btn');
  if (dropdown && !dropdown.contains(event.target) && !button.contains(event.target)) {
    closeDropdown();
  }
};

// Den Button zum Sprachwechsel fokussieren, damit er beim Laden der Seite direkt mit Tab erreichbar ist
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('scroll', closeDropdown);

  // Fokussiert den Sprachwechsel-Button nach dem Laden
  nextTick(() => {
    if (buttonRef.value) {
      buttonRef.value.focus();
    }
  });
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('scroll', closeDropdown);
});

// Für Enter Keydown im Dropdown
const handleKeydown = (event, locale) => {
  if (event.key === 'Enter' || event.key === 'Space') {
    changeLocale(locale);
  }
};
</script>

<template>
  <nav class="navbar">
    <div class="container-xxl mw-100">
      <ul class="nav justify-content-start w-350px">
        <li class="nav-item d-flex">
          <RouterLink class="d-flex align-items-center" :to="{name: 'home'}" aria-label="Home">
            <img src="../../assets/logo.png" class="text-black h-40px" alt="Baller Los Brettspiele Logo"/>
          </RouterLink>
          <h1 class="fs-4 w-100 mt-2 heading">Baller Los Brettspiele <br></h1>
        </li>
        <h6 class="fs-9 w-100 sub-heading" style="color:grey" aria-hidden="true">
          Ein Schülerunternehmen der BBS1 Lüneburg mit Meerblick
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
        
        <!-- Sprachauswahl Dropdown -->
        <li class="nav-item">
          <div class="locale-changer mt-1">
            <!-- Der Button zum Öffnen des Sprachmenüs -->
            <button
              ref="buttonRef"
              @click="toggleDropdown"
              class="locale-btn"
              aria-haspopup="true"
              :aria-expanded="isDropdownOpen.toString()"
              aria-label="Change Language"
            >
              <LanguageIcon class="text-black h-40px" aria-hidden="true"/>
            </button>
          </div>

          <!-- Dropdown-Menü -->
          <div v-if="isDropdownOpen" class="dropdown-list" role="listbox" aria-label="Language Options" tabindex="0">
            <ul>
              <li
                v-for="locale in availableLocales"
                :key="locale"
                @click="changeLocale(locale)"
                @keydown="handleKeydown($event, locale)"
                class="dropdown-item d-flex flex-row justify-content-start w-100"
                role="option"
                :aria-selected="locale === currentLocale ? 'true' : 'false'"
                :tabindex="isDropdownOpen ? 0 : -1"
              >
                <div class="language-name fs-2 pl-4 ml-2 mr-4" style="width: 64px;">
                  {{ locale }}
                </div>
                <img v-if="locale === 'de'" style="height: 24px; width: 32px;" src="./../../../public/flags/Germany.svg" alt="Deutsch">
                <img v-else-if="locale === 'en'" style="height: 24px; width: 32px;" src="./../../../public/flags/UK.svg.png" alt="English">
              </li>
            </ul>
          </div>
        </li>

        <!-- Aktuelle Sprache als Flagge anzeigen -->
        <li>
          <div class="text-black fs-2 pl-2">
            <div v-if="locale === 'de'">
              <img class="img-flag" style="height: 24px; width: 36px;" src="./../../../public/flags/Germany.svg" alt="Germany Flag" />
            </div>
            <div v-if="locale === 'en'">
              <img class="img-flag" style="height: 24px; width: 36px;" src="./../../../public/flags/UK.svg.png" alt="UK Flag" />
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
  }*
  img.img-flag {
    vertical-align: bottom;
  }
  .navbar {
    height: 65px !important;
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
