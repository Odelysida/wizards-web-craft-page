<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h1 class="footer-title">Impressum</h1>
        <div class="school-info">
          <p class="school-name">BBS I Lüneburg</p>
          <p class="school-address">
            Spillbrunnenweg 1<br />
            21337 Lüneburg
          </p>
        </div>
        <div class="representative">
          <p v-html="t('footer.representativeTitle') + t('footer.representative')">
          </p>
        </div>
      </div>

      <div class="footer-section">
        <h1 class="footer-title" v-html="t('footer.title')"></h1>
        <div class="datenschutz-info">
          <p v-html="t('footer.info')">
          </p>
          <a
            href="https://www.bbs1-lueneburg.de/datenschutz.html"
            class="privacy-button"
            target="_blank"
            rel="noopener noreferrer"
            v-html="t('footer.button')"
          >
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  top: 100px;
  background-color: #182d3a;
  color: white;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 3px solid #3E5F8A;
  width: 100%;
  position: relative;
  bottom: 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.footer-section {
  padding: 1rem;
}

.footer-title {
  font-family: "Arial Black", system-ui;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #3E5F8A;
}

.school-info {
  margin-bottom: 1.5rem;
}

.school-name {
  font-family: Arial, system-ui;
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.school-address {
  font-family: Arial, system-ui;
  line-height: 1.5;
}

.representative {
  font-family: Arial, system-ui;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.privacy-info p {
  margin-bottom: 1.5rem;
}

.privacy-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #3E5F8A;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-family: Arial, system-ui;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.privacy-button:hover {
  background-color: #0f1d25;
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .footer {
    top: 150px;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-section {
    text-align: center;
  }

  .privacy-button {
    display: inline-block;
    width: auto;
  }
}
</style>
