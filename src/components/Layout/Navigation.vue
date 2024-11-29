<script setup>
import {useRoute} from 'vue-router';
import {HomeIcon, QuestionMarkCircleIcon, ChatBubbleLeftIcon} from '@heroicons/vue/24/outline';

const currentRoute = useRoute();
</script>

<template>
  <nav class="navbar">
    <div class="container-xxl mw-100">
      <ul class="nav justify-content-start w-350px">
        <li class="nav-item d-flex">
          <img src="../../assets/logo.png" class="text-black h-40px" alt="logo"/>
          <h1 class="fs-4 w-100 mt-2 heading" >Baller Los Brettspiele</h1>
        </li>
      </ul>
      <ul class="nav nav-fill d-flex flex-row justify-content-start">

        <li class="nav-item" :class="{'nav-item--active': currentRoute.matched.some(({name}) => name === 'home')}">
          <RouterLink class="nav-link" :to="{name: 'home'}" active-class="active">
            <HomeIcon class="text-black h-40px" />
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
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.h-40px {
  height: 40px;
}
.w-350px{
  width: 350px;
}
.link-text{
  margin-top: 4px;
  font-weight: bold;
  font-family: "Arial Black",system-ui;
}

@media(max-width: 620px){
  .heading{
    display: none;
  }
  .w-350px{
    width: 100px;
  }
}


</style>