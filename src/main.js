import { createApp } from 'vue';
import App from './App.vue';
import router from './Router/router.js';
import './assets/style.scss';
import Carousel3d from 'vue-carousel-3d';
import { createI18n } from 'vue-i18n';
import * as MarmosetViewer from 'vue-marmoset-viewer';

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
                    'produce our figures ourselves.',
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
                nameInput: 'name*',
                emailInput: 'e-mail*',
                messageInput: 'message*',
                submit: 'Send',
                message_success: 'Your message has been successfully sent.',
                message_error: 'Error while processing your message. Please contact this page\'s administrator.',
                duty: 'Fields marked with * are required!',
                reference:'subject',
                agreeDSGVO:'I have read and agree to the <a href="https://www.bbs1-lueneburg.de/datenschutz.html">Privacy Policy</a>'
            },
            home: {
                title:'Baller Los Brettspiele',
                subtitle: 'Ein Schülerunternehmen der BBS1 Lüneburg mit Meerblick',
                welcome: 'Welcome to our page! Here we present you  our product. \n' +
                    'Each image showcases a part of the process behind the development of our board game.',
                link: 'Here',
                textAfterLink: 'you can find more information about our project and us!',
            },
            footer: {
                representativeTitle: 'Representation',
                representative: 'Principal Heiko Lüdemann',
                title: 'Data Protection',
                info: 'Data Protection: If this website provides the opportunity to enter personal or business data (email addresses, names, addresses), the disclosure of this data by the user is explicitly voluntary.\n',
                button: 'Privacy Policy',
            },
            error: {
                title: 'Error 404! Page not Found!',
                content: 'The page you requested can\'t be found or is inexistent!'
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
                nameInput: 'Name*',
                emailInput: 'E-Mail*',
                messageInput: 'Nachricht*',
                submit: 'Senden',
                message_success: 'Ihre Nachricht wurde erfolgreich übermittelt.',
                message_error: 'Fehler bei der Nachrichtenübermittlung. Bitte kontaktieren Sie den Administrator der Website.',
                duty: 'Mit * markierte Felder sind Pflichtfelder!',
                reference:'Betreff',
                agreeDSGVO:'Ich habe die <a href="https://www.bbs1-lueneburg.de/datenschutz.html">Datenschutzerkärung</a> gelesen und bin einverstanden'
            },
            home: {
                title:'Baller Los Brettspiele',
                subtitle: 'Ein Schülerunternehmen der BBS1 Lüneburg mit Meerblick',
                welcome: 'Willkommen zu unserer Seite! Hier präsentieren wir Ihnen unser Produkt. \n' +
                    'Jedes Bild zeigt einen teil im Prozess unserer Entwicklung eines Brettspiels',
                link: 'Hier',
                textAfterLink: 'finden sie weiter Informationen zu unserem Projekt und uns!',
                rulesTitle: 'Regel',
                rulesText: 'Spielanleitung für "Maximal sechs"\n' +
                    'Spieleranzahl: 2 bis 6 Spieler\n' +
                    'Alter: 12 bis 99 Jahre\n' +
                    'Spieldauer: 10 bis 15 Minuten\n' +
                    '\n' +
                    'Spielmaterialien:\n' +
                    'Spielbrett mit Feldern (Fragefelder mit Fragezeichen, Ereignisfelder mit Ausrufezeichen)\n' +
                    'Spielfiguren für jeden Spieler\n' +
                    'Fragen- und Ereigniskarten\n' +
                    'Würfel\n' +
                    'Spielvorbereitung\n' +
                    'Die Spieler wählen eine Spielfigur und stellen sie auf das Startfeld der Plattform.\n' +
                    'Die Karten für Fragen und Ereignisse werden gemischt und bereitgelegt.',
                sequenceTitle:'Spielablauf',
                sequenceText:'Spielablauf\n' +
                    'Die Spieler würfeln reihum und ziehen ihre Spielfigur entsprechend der Augenzahl des Würfels.\n' +
                    'Landet ein Spieler auf einem Fragefeld, zieht er eine Fragekarte und muss die Frage beantworten.\n' +
                    'Bei richtiger Antwort darf der Spieler ggf. ein paar Felder vor ziehen.\n' +
                    'Bei falscher Antwort muss der Spieler ggf. zurück ziehen.\n' +
                    'Landet ein Spieler auf einem Ereignisfeld, zieht er eine Ereigniskarte und muss die Aufgabe erfüllen.\n' +
                    'Wird die Aufgabe erfolgreich erledigt, darf der Spieler ggf. ein paar Felder weiterziehen.\n' +
                    'Bei Nichterfüllung muss der Spieler ebenfalls zurück ziehen.\n' +
                    'Das Spiel wird fortgesetzt, bis ein Spieler das letzte Feld des Spielbretts erreicht.\n' +
                    'Ziel des Spieles\n' +
                    'Der Spieler, der als erster das letzte Feld erreicht, gewinnt das Spiel und hat somit die anderen Spieler überlistet.',
                footerText:'Viel Spaß beim Spielen!'
            },
            footer: {
                representativeTitle:'Vertretung',
                representative:'Oberstudiendirektor Heiko Lüdemann',
                title:'Datenschutz',
                info:'Datenschutz: Sofern innerhalb dieser Homepage die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (E-Mail-Adressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers ausdrücklich auf freiwilliger Basis.\n',
                button:'Datenschutzbestimmungen',
            },
            error: {
                title: 'Fehler 404, Seite nicht gefunden!',
                content: 'Die Seite welche Sie versucht haben zu erreichen konnte nicht gefunden werden, oder Existiert nicht!'
            }
        },
    },
});

i18n.global.locale.value = 'de';

const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(Carousel3d);
app.use(MarmosetViewer.MarmosetViewer);

app.mount('#app');
