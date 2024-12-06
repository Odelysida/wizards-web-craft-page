<script setup>
import { ref } from 'vue';

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
    <h2 class="mb-4">Kontaktformular</h2>
    
    <!-- Name -->
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <div class="input-group">
        <span class="input-group-text" id="name-addon">
          <i class="bi bi-person"></i>
        </span>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Ihr Name"
          v-model="name"
          aria-label="Name"
          aria-describedby="name-addon"
          required
        />
      </div>
    </div>
    
    <!-- E-Mail -->
    <div class="mb-3">
      <label for="email" class="form-label">E-Mail</label>
      <div class="input-group">
        <span class="input-group-text" id="email-addon">
          <i class="bi bi-envelope"></i>
        </span>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Ihre E-Mail-Adresse"
          v-model="email"
          aria-label="Email"
          aria-describedby="email-addon"
          required
        />
      </div>
    </div>
    
    <!-- Nachricht -->
    <div class="mb-3">
      <label for="message" class="form-label">Nachricht</label>
      <div class="input-group">
        <span class="input-group-text" id="message-addon">
          <i class="bi bi-chat-left-text"></i>
        </span>
        <textarea
          class="form-control"
          id="message"
          placeholder="Ihre Nachricht"
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
</style>
