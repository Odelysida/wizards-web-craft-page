<script setup>
import {ref} from 'vue';
import {UserCircleIcon, AtSymbolIcon, ChatBubbleLeftIcon} from '@heroicons/vue/24/outline/index.js';
import {useI18n} from 'vue-i18n';
import * as emailjs from '@emailjs/browser';

const {t} = useI18n();

const form = ref(null);
const formStatus = ref(null); // Zustand der Formulardaten (Erfolg, Fehler, null)

const sendEmail = () => {
  let from_name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  emailjs
    .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
    {
        'from_name': from_name,
        'email': email,
        'message': message
    }, {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    })
    .then(
      () => {
        formStatus.value = { success: true, message: t("contact.message_success") }; // Erfolg
      },
      (error) => {
        formStatus.value = { success: false, message: t("contact.message_error") }; // Fehler
      }
    );
}
</script>

<template>
  <div class="container">
    <div class="card mt-5" data-bs-theme="light">
      <div class="card-header">
        <h2>{{ t('contact.title') }}</h2>
      </div>
      <div class="card-body">
        <!-- Formular -->
        <form @submit.prevent="sendEmail" class="container" data-bs-theme="light">
          <!-- Name -->
          <div class="mb-3">
            <div class="input-group">
              <div class="input-group-text" id="name-addon">
                <UserCircleIcon class="text-black h-32px" />
              </div>
              <input
                type="text"
                class="form-control fs-2"
                id="name"
                :placeholder="t('contact.nameInput')"
                aria-label="Name"
                aria-describedby="name-addon"
                required
                autofocus
                aria-required="true"
              />
            </div>
          </div>

          <!-- E-Mail -->
          <div class="mb-3">
            <div class="input-group">
              <div class="input-group-text" id="email-addon">
                <AtSymbolIcon class="text-black h-32px" />
              </div>
              <input
                type="email"
                class="form-control fs-2"
                id="email"
                :placeholder="t('contact.emailInput')"
                aria-label="Email"
                aria-describedby="email-addon"
                required
                aria-required="true"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="Geben Sie eine gültige E-Mail-Adresse ein."
              />
            </div>
          </div>

          <!-- Nachricht -->
          <div class="mb-3">
            <div class="input-group">
              <div class="input-group-text" id="message-addon">
                <ChatBubbleLeftIcon class="text-black h-32px" />
              </div>
              <textarea
                class="form-control fs-2"
                id="message"
                :placeholder="t('contact.messageInput')"
                aria-label="Nachricht"
                aria-describedby="message-addon"
                rows="5"
                required
                aria-required="true"
              ></textarea>
            </div>
          </div>

          <!-- Fehler-/Erfolgsmeldung -->
          <div v-if="formStatus" class="alert" :class="{'alert-success': formStatus.success, 'alert-danger': !formStatus.success}" role="alert">
            {{ formStatus.message }}
          </div>

          <!-- Senden-Button -->
          <button type="submit" class="btn btn-primary w-100">{{ t('contact.submit') }}</button>
        </form>
      </div>
    </div>
  </div>
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

.h-32px {
  height: 32px !important;
}
</style>
