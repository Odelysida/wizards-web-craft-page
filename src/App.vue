<script setup lang="ts">
</script>

<template>
  <div class="app-container">
    <!-- Hauptinhalt der App -->
    <router-view></router-view>
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
