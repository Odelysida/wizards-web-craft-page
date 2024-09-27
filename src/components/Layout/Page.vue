<template>
  <div class="main-content container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Page"
}
</script>

<style scoped>
.main-content {
  padding: 2rem 15px;
}
</style>