import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  currentLanguage: string = "hu"
  currentLanguageData: any
  localeData: any = {
    hu: {
      menuItems: [{
        name: 'kezdőlap',
        link: 'home'
      },{
        name: 'rólam',
        link: 'about'
      },{
        name: 'munkáim',
        link: 'portfolio'
      },{
        name: 'kapcsolat',
        link: 'contact'
      }],
      home: { title: 'kezdőlap', t1: 'Üdvözlöm,' , t2: 'Mozvik Attila', t3: 'vagyok' , t4: 'web és szoftverfejlesztő' },
      about: { title: 'rólam', p1: 'A webfejlesztés világa az a hely, ahol ki tudom fejezni a kreativitásomat, és meg tudom mutatni a programozói tudásomat is.', p2: 'Szeretek alkotni, és látni azt, ahogy egy projekt általam kel életre.', p3: "Örömöm lelem animációk és különféle effektusok készítésében, vagy csupán egy probléma megoldásában.", btn: 'önéletrajz' },
      skills: { title: 'készségek', p1: 'Fő szakterületem a front-end fejlesztés, HTML, CSS és JavaScript keretrendszerek. Kisebb, reszponzív web alkalmazásokat, és komponenseket készítek.', p2: 'Ezen felül rendelkezem szerveroldali PHP programnyelv ismeretekkel is.' },
      skillTree: ['HTML, CSS', 'Angular', 'Vue.js', 'PHP', 'C#'],
      portfolio: {
        title: 'munkáim',
        t1: 'munkáim',
        inProgress: 'Folyamatban...',
        projects: [{
          title: 'ngx-mat-file',
          details: 'A népszerű Angular Material komponens könyvtár által nem támogatott fájl input mező megvalósítása.',
          tech: ['Angular 13'],
          techIcon: ['Angular 13'],
          code: 'https://github.com/mozvik/ngx-mat-file',
          demo: 'https://mozvik.github.io/ngx-mat-file/'
        },{
          title: 'Rece-fice Recepttár',
          details: 'A szakdolgozatom. Receptkezelő alkalmazás/weboldal. Folyamatban...',
          tech: ['Angular 13',' Angular Material',' php'],
          techIcon: [''],
          code: 'https://github.com/mozvik/rece-fice',
          demo: 'https://teszt.esoguides.hu/'
        },{
          title: 'Babel Fish',
          details: 'Egyszerű fordító alkalmazás.',
          tech: ['Angular 13',' Ant Design(Ng-Zorro)'],
          techIcon: ['Angular 13'],
          code: 'https://github.com/mozvik/babel-fish',
          demo: 'https://mozvik.github.io/babel-fish/'
        },{
          title: 'BookBro',
          details: 'Könyvkereső, ami a Google Books API-ját használja. Az első Angular munkám:)',
          tech: ['Angular 13'],
          techIcon: ['Angular 13'],
          code: 'https://github.com/mozvik/bookbro',
          demo: 'https://mozvik.github.io/bookbro/'
        },{
          title: 'Kvíz alkalmazás',
          details: 'Egyszerű kvíz alkalmazás Vue.js és Vuex által készítve.',
          tech: ['Vue 3'],
          techIcon: ['Vue 3'],
          code: 'https://github.com/mozvik/vue-quiz',
          demo: 'https://mozvik.github.io/vue-quiz/'
        },{
          title: 'Lídia Galériája',
          details: 'Egy festőművész bemutatkozó oldala. Vue.js frontend és headless Wordpress backend.',
          tech: ['Vue3',' Pinia',' php'],
          techIcon: [''],
          code: 'https://github.com/mozvik/lidia',
          demo: 'https://blog.esoguides.hu/'
        }
        , {
        title: 'EsoGuides',
        details: 'Videójátékos weboldal, magazin. Bootstrap, Javascript és PHP alapokon.',
        tech: ['PHP',' JavaScript',' Bootstrap'],
        techIcon: ['PHP','',''],
        code: '',
        demo: 'https://esoguides.hu'
      }]
      },
      contact: { title: 'kapcsolat', t1:'Küldjön üzenetet', i1: 'Név', i2: 'E-mail', i3: 'Üzenet', btn: 'Küldés', required: 'Kötelező kitölteni', invalidEmail: 'Nem megfelelő e-mail formátum', delivering: "Üzenet küldése folyamatban",
      delivered: "Az üzenet elküldve",
      error: "Hiba történt" },
    },
    en: {
      menuItems: [{
        name: 'home',
        link: 'home'
      },{
        name: 'about',
        link: 'about'
      },{
        name: 'portfolio',
        link: 'portfolio'
      },{
        name: 'contact',
        link: 'contact'
      }],
      home: { title: 'home', t1: 'Hello,' ,  t2: 'I\'m Attila Mozvik', t3: '' , t4: 'web & software developer' },
      about: { title: 'about', p1: 'I have a serious passion for web development, that provides me the opportunity of both creativity and programming.', p2: 'I love experimenting with UI animations and effects, build something, or just solving problems.', p3: "", btn: 'download cv' },
      skills: { title: 'skills', p1: 'My main area of expertise is front-end development, HTML, CSS and JavaScript Frameworks. Building web applications, interactive layouts and components.', p2: 'I also have back-end knowledge of PHP.' },
      skillTree: ['HTML, CSS', 'Angular', 'Vue.js', 'PHP', 'C#'],
      portfolio: {
        title: 'Portfolio',
        t1: 'My Recent Projects',
        inProgress: 'Work in progress...',
        projects: [{
          title: 'ngx-mat-file',
          details: 'File Input component package for Angular Material UI',
          tech: ['Angular 13'],
          techIcon: ['Angular 13'],
          code: 'https://github.com/mozvik/ngx-mat-file',
          demo: 'https://mozvik.github.io/ngx-mat-file/'
        },{
          title: 'Rece-fice Recepttár',
          details: 'My thesis. Recipe manager application/website. Work in progress...',
          tech: ['Angular 13',' Angular Material',' php'],
          techIcon: [''],
          code: 'https://github.com/mozvik/rece-fice',
          demo: 'https://teszt.esoguides.hu/'
        },{
          title: 'Babel Fish',
          details: 'Simple translator application.',
          tech: ['Angular 13',' Ant Design(Ng-Zorro)'],
          techIcon: ['Angular 13'],
          code: 'https://github.com/mozvik/babel-fish',
          demo: 'https://mozvik.github.io/babel-fish/'
        },{
          title: 'BookBro',
          details: 'Book finder that consumes Google Books API. My first Angular project:)',
          tech: ['Angular 13'],
          techIcon: ['Angular 13'],
          code: 'https://github.com/mozvik/bookbro',
          demo: 'https://mozvik.github.io/bookbro/'
        },{
          title: 'Quiz Application',
          details: 'Simple Quiz Application made with Vue.js & Vuex state management.',
          tech: ['Vue 3'],
          techIcon: ['Vue 3'],
          code: 'https://github.com/mozvik/vue-quiz',
          demo: 'https://mozvik.github.io/vue-quiz/'
        },{
          title: "Lídia's Gallery",
          details: 'Artist portfolio page. Vue.js frontend & headless Wordpress backend.',
          tech: ['Vue3',' Pinia',' php'],
          techIcon: [''],
          code: 'https://github.com/mozvik/lidia',
          demo: 'https://blog.esoguides.hu/'
        },{
          title: 'EsoGuides',
          details: 'Gamer magazine. Bootstrap, Javascript and PHP backend.',
          tech: ['PHP',' JavaScript',' Bootstrap'],
          techIcon: ['PHP','',''],
          code: '',
          demo: 'https://esoguides.hu'
        }]
    
    
    
      },
      contact: { title: 'contact', t1:'Get in Touch', i1: 'Name', i2: 'E-mail', i3: 'Message', btn: 'Send', required: 'Required field', invalidEmail: 'Not a valid email', delivering: "Delivering your message",
      delivered: "Your message has been delivered",
      error: "Error occurred", },
    }
  }
    
  setLocaleData() {
    this.currentLanguage == "hu" ?
      this.currentLanguageData = this.localeData.hu :
      this.currentLanguageData = this.localeData.en
    }
}
