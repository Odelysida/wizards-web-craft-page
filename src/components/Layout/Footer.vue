<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h2 class="footer-title">Impressum</h2>
        <div class="school-info">
          <p class="school-name">BBS I Lüneburg</p>
          <p class="school-address">
            Spillbrunnenweg 1<br />
            21337 Lüneburg
          </p>
        </div>
        <div class="representative">
          <p>
            Vertretung<br />
            Oberstudiendirektor Heiko Lüdemann
          </p>
        </div>
      </div>

      <div class="footer-section">
        <h2 class="footer-title">Datenschutz</h2>
        <div class="datenschutz-info">
          <p>
            Sofern innerhalb dieser Homepage die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (E-Mail-Adressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers ausdrücklich auf freiwilliger Basis.
          </p>
          <a
            href="https://www.bbs1-lueneburg.de/datenschutz.html"
            class="privacy-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzbestimmungen
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
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
  color: #ff1200;
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

.privacy-info {
  font-family: Arial, system-ui;
  line-height: 1.6;
}

.privacy-info p {
  margin-bottom: 1.5rem;
}

.privacy-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #ff1200;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-family: Arial, system-ui;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.privacy-button:hover {
  background-color: #d10f00;
  transform: translateY(-2px);
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
