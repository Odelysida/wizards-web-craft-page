<script setup>
import {ExclamationCircleIcon} from '@heroicons/vue/24/outline/index.js';
import {useI18n} from 'vue-i18n';
const {t} = useI18n();

</script>

<template>
<div class="container">
  <div class="card mt-5" data-bs-theme="light">
    <div class="card-header">
      <h1>{{t('error.title')}}</h1>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-1">
          <ExclamationCircleIcon  class="text-danger"/>
        </div>
        <div class="col-11">
          {{t('error.content')}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>