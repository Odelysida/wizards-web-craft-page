<template>
  <div class="d-flex flex-column h-100">
    <router-view name="layoutNavbar" />
    <div class="content container-fluid flex-grow-1 main-background">
      <div class="h-100 d-flex" :style="pageContentWrapperStyles">
        <router-view name="page"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  name: "PageContainer",
  components: {Footer},
  props: {
    pageContentWrapperStyles: {
      default: {},
    }
  },
}
</script>

<style scoped>
.main-background {
  background-color: #f1f2f7;
}

</style>