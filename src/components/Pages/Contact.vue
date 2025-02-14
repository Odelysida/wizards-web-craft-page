<script setup>
import {ref} from 'vue';
import {UserCircleIcon, AtSymbolIcon, ChatBubbleLeftIcon, InformationCircleIcon} from '@heroicons/vue/24/outline/index.js';
import {useI18n} from 'vue-i18n';
import * as emailjs from '@emailjs/browser';

const {t} = useI18n();

const form = ref(null);
const formStatus = ref(null); // Zustand der Formulardaten (Erfolg, Fehler, null)

//für Anzeige senden oder laden
const isLoading = ref(false);

const sendEmail = () => {
  if (isLoading.value) return; // Doppelte Klicks verhindern
  isLoading.value = true; // Ladezustand
  let from_name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let reference = document.getElementById("reference").value; //TODO? reference
  emailjs
    .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
    {
        'from_name': from_name,
        'email': email,
        'message': message,
        'reference': reference
    }, {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    })
    .then(
      () => {
        formStatus.value = { success: true, message: t("contact.message_success") }; // Erfolg

        document.getElementById("name").value= "";
        document.getElementById("email").value= "";
        document.getElementById("message").value= "";
        document.getElementById("reference").value= "";
        document.getElementById("dsgvo").checked = false;

        // Erfolgsmeldung nach 3 Sekunden ausblenden
        setTimeout(() => {
          formStatus.value = null;
        }, 3000);
      },
      (error) => {
        formStatus.value = { success: false, message: t("contact.message_error") }; // Fehler
      }
    ) .finally(() => {
    isLoading.value = false; // Ladezustand zurücksetzen
    });
}
</script>

<template>
  <!-- TODO Sachen die von Bootstrap angezeigt werden sind immer auf Deutsch! -->
  <div class="container">
    <div class="card mt-5" data-bs-theme="dark">
      <div class="card-header">
        <h2>{{ t('contact.title') }}</h2>
      </div>
      <div class="card-body">
        <!-- Formular -->
        <form @submit.prevent="sendEmail" class="container-body" data-bs-theme="dark">
          <!-- Name -->
          <div class="mb-3">
            <div class="input-group">
              <div class="input-group-text" id="name-addon">
                <UserCircleIcon class="text-black h-32px" />
              </div>
              <input
                type="text"
                class="form-control fs-5"
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
                class="form-control fs-5"
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

          <!-- Betreff -->
          <div class="mb-3">
            <div class="input-group">
              <div class="input-group-text" id="reference-div">
                <InformationCircleIcon class="text-black h-32px" />
              </div>
              <input
                  type="text"
                  class="form-control fs-5"
                  id="reference"
                  :placeholder="t('contact.reference')"
                  aria-label="reference"
                  aria-describedby="reference-addon"
                  title="Geben Sie einen Betreff ein."
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
                class="form-control fs-5"
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
          <p>{{t('contact.duty')}}</p>
          <input type="checkbox"
                    id="dsgvo" required
                    aria-required="true"/>
          <span v-html=" t('contact.agreeDSGVO')"></span>
          <!-- Fehler-/Erfolgsmeldung -->
          <div v-if="formStatus" class="alert" :class="{'alert-success': formStatus.success, 'alert-danger': !formStatus.success}" role="alert">
            {{ formStatus.message }}
          </div>

          <!-- Senden-Button -->
          <button type="submit" class="btn btn-primary w-100" :disabled="isLoading">
            <span v-if="!isLoading">{{ t('contact.submit') }}</span>
            <span v-else class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

h2{
  text-shadow: 2px 3px 5px black;
}

.container {
  position: relative;
  top: 100px;
  max-width: 600px;
}

@media (max-width: 1024px) {
  .container{
    top: 120px;
  }
}

.card-body{
  top: 5px;
  background: #224f7d;
}

.card-header{
  background: #224f7d;
}

.input-group-text{
  background: #182d3a;
}

.form-control{
  background: #182d3a;
}

.btn{
  background: #182d3a;
}

.btn-primary{
  --bs-btn-border-color: #477697;
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
