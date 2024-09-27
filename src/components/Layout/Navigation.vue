<script setup>


import {useRoute} from 'vue-router';

const currentRoute = useRoute();
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <ul class="nav">
        <li class="nav-item" :class="{'nav-item--active': currentRoute.matched.some(({name}) => name === 'home')}">
          <RouterLink class="nav-link" :to="{name: 'home'}" active-class="active">
            <span>Startseite</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

</style>