<script setup>
import { ref } from 'vue';
import {UserCircleIcon, AtSymbolIcon, ChatBubbleLeftIcon} from '@heroicons/vue/24/outline/index.js';
import {useI18n} from 'vue-i18n';
const { t } = useI18n();

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = () => {
  if (!name.value || !email.value || !message.value) {
    alert('Bitte füllen Sie alle Felder aus.');
    return;
  }
  
  // Hier kannst du die Formular-Daten verarbeiten (z. B. an eine API senden)
  console.log({
    name: name.value,
    email: email.value,
    message: message.value,
  });

  alert('Ihre Nachricht wurde erfolgreich gesendet!');
  
  // Felder leeren
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="container mt-5">
    <h2 class="mb-4">{{t('contact.title')}}</h2>
    <!-- Name -->
    <div class="mb-3">
      <div class="input-group">
        <div class="input-group-text" id="name-addon">
          <UserCircleIcon class="text-white h-24px" />
        </div>
        <input
          type="text"
          class="form-control"
          id="name"
          :placeholder="t('contact.nameInput')"
          v-model="name"
          aria-label="Name"
          aria-describedby="name-addon"
          required
        />
      </div>
    </div>
    
    <!-- E-Mail -->
    <div class="mb-3">
      <div class="input-group">
        <div class="input-group-text" id="email-addon">
          <AtSymbolIcon class="text-white h-24px"/>
        </div>
        <input
          type="email"
          class="form-control"
          id="email"
          :placeholder="t('contact.emailInput')"
          v-model="email"
          aria-label="Email"
          aria-describedby="email-addon"
          required
        />
      </div>
    </div>
    
    <!-- Nachricht -->
    <div class="mb-3">
      <div class="input-group">
        <div class="input-group-text" id="message-addon">
          <ChatBubbleLeftIcon clas="text-white h-24px" />
        </div>
        <textarea
          class="form-control"
          id="message"
          :placeholder="t('contact.messageInput')"
          v-model="message"
          aria-label="Nachricht"
          aria-describedby="message-addon"
          rows="5"
          required
        ></textarea>
      </div>
    </div>
    
    <!-- Senden-Button -->
    <button type="submit" class="btn btn-primary w-100">Senden</button>
  </form>
</template>

<style scoped>
.container {
  max-width: 600px;
}

h2 {
  text-align: center;
}

button {
  margin-top: 1rem;
}
.h-24px{
  height: 24px!important;
}
</style>
