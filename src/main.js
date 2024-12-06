import {createApp} from 'vue';
import App from './App.vue';
import router from './Router/router.js';
import './assets/style.scss';
import Carousel3d from 'vue-carousel-3d';
import {createI18n} from 'vue-i18n';


const i18n = createI18n({
    legacy: false,
    locale: 'de',
    fallbackLocale: 'en',
    messages: {
        en: {
            about: {
                title: 'About us',
                introduction: 'Hi, we are the HA24B and this is our student company “Baller los”,\n' +
                    'which means to go full steam ahead - and that\'s what we do.',
                generalInformation: 'We are 24 students between the ages of 15 and 18.\n' +
                    'We founded this student company as part of the one-year vocational school for business at BBS I Lüneburg.',
                whatWeDo: 'We produce our own game and want to use this game to raise awareness of\n' +
                    'environmental protection, especially with regard to water.',
                bigText: 'It is therefore a matter of course that we produce our game as\n' +
                    'environmentally friendly and high-quality as possible. We use\n' +
                    'a 3D printer with recyclable and even recycled filament to be able to\n' +
                    'produce our figures ourselves. ',
                pros: 'The other materials\n' +
                    'such as the game board and packaging are recyclable or made from\n' +
                    'recycled material. We are also investigating the pollution of the\n' +
                    'Ilmenau (this river flows through Lüneburg) by collecting and counting plastic waste.\n' +
                    'and counting it. For this website we cooperate with the\n' +
                    'Lüneburg IT company “webnetz” and the trainees for the\n' +
                    '3rd year IT specialists from the IT22B class at our school.',
            },
            contact: {
                title: 'Contact',
                nameInput: 'Your name',
                emailInput: 'Your E-Mail',
                messageInput: 'Your message',
                submit: 'Send',
            },
            error: {
                title: 'Error 404! Page not Found!',
                content: 'The Page your requested cant be found or is inexistent!'
            }
        },
        de: {
            about: {
                title: 'Wir über uns',
                introduction: 'Moin, wir sind die HA24B und das ist unsere Schülerfirma „Baller los", was so viel wie mit voller Kraft loslegen bedeutet – und das machen wir.',
                generalInformation: 'Wir sind 24 Schülerinnen und Schüler im Alter von 15 bis 18 Jahren.\n' +
                    'Diese Schülerfirma haben wir im Rahmen der einjährigen Berufsfachschule Wirtschaft an der BBS I Lüneburg gegründet.',
                whatWeDo: 'Wir stellen ein eigenes Spiel her und wollen mit diesem Spiel auf den Umweltschutz, besonders bei den Gewässern, aufmerksam machen.',
                bigText: 'Daher ist es selbstverständlich, dass wir unser Spiel so umweltfreundlich und hochwertig wie möglich produzieren. \n' +
                    'Wir nutzen einen 3D-Drucker mit recyclefähigem und sogar Recycling-Filament, um unsere Figuren selbst herstellen zu können.',
                pros: 'Auch die anderen Materialien wie Spielbrett und Verpackung sind recyclefähig oder bestehen aus recyclingmaterial.\n ' +
                    'Zusätzlich untersuchen wir die Verschmutzung der Ilmenau (dieser Fluss fließt durch Lüneburg), indem wir Plastikmüll einsammeln und zählen. \n' +
                    'Für diese Website kooperieren wir mit dem Lüneburger IT-Unternehmen „webnetz“ und den Auszubildenden zum Fachinformatiker im 3. Lehrjahr aus der Klasse IT22B von unserer Schule.',
            },
            contact: {
                title: 'Kontaktformular',
                nameInput: 'Ihr Name',
                emailInput: 'Ihre E-Mail',
                messageInput: 'Ihre Nachricht',
                submit: 'Senden',
            },
            error: {
                title: 'Fehler 404, Seite nicht gefunden!',
                content: 'Die Seite welche Sie versucht haben zu erreichen konnte nicht gefunden werden, oder Existiert nicht!'
            }
        },
    },
});

i18n.global.locale.value = 'de'

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(Carousel3d);

app.mount('#app');
