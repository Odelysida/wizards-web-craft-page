<script setup>
import {useRoute} from 'vue-router';
import {HomeIcon, QuestionMarkCircleIcon, ChatBubbleLeftIcon} from '@heroicons/vue/24/outline';

const currentRoute = useRoute();
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <ul class="nav nav-fill d-flex flex-row justify-content-start">
        <li class="nav-item" :class="{'nav-item--active': currentRoute.matched.some(({name}) => name === 'home')}">
          <RouterLink class="nav-link" :to="{name: 'home'}" active-class="active">
            <HomeIcon class="text-black h-50px"/>
            <span class="link-text">Home</span>
          </RouterLink>
        </li>
        <li class="nav-item" :class="{'nav-item--active': currentRoute.matched.some(({name}) => name === 'about')}">
          <RouterLink class="nav-link" :to="{name: 'about'}" active-class="active">
            <QuestionMarkCircleIcon class="text-black h-50px"/>
            <span class="link-text">Über Uns</span>
          </RouterLink>
        </li>
        <li class="nav-item" :class="{'nav-item--active': currentRoute.matched.some(({name}) => name === 'contact')}">
          <RouterLink class="nav-link" :to="{name: 'contact'}" active-class="active">
            <ChatBubbleLeftIcon class="text-black h-50px"/>
            <span class="link-text">Kontakt</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.h-50px{
  height: 50px;
}
</style>