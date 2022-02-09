import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
        projects: [{
          title: 'ngx-mat-file',
          details: 'A népszerű UI komponens könyvtár által nem támogatott fájl input mező megvalósítása.',
          tech: ['Angular 13'],
          techIcon: ['Angular 13'],
          code: 'github.com',
          demo: 'facebook.com'
        },{
          title: 'BookBro',
          details: 'Könyvkereső, ami a Google Books API-ját használja. Az első Angular munkám:)',
          tech: ['Angular 13'],
          techIcon: ['Angular 13'],
          code: 'github.com',
          demo: 'facebook.com'
        },{
          title: 'Kvíz alkalmazás',
          details: 'Egyszerű kvíz alkalmazás Vue.js és Vuex által készítve',
          tech: ['Vue 3'],
          techIcon: ['Vue 3'],
          code: 'github.com',
          demo: 'facebook.com'
        },{
          title: 'Rece-fice Recepttár',
          details: 'A szakdolgozatom. Receptkezelő alkalmazás/weboldal.',
          tech: ['Angular 13','php'],
          techIcon: [''],
          code: 'github.com',
          demo: 'facebook.com'
        },{
          title: 'EsoGuides',
          details: 'Videójátékos weboldal, magazin. Bootstrap, Javascript és PHP alapokon.',
          tech: ['PHP','JavaScript','Bootstrap'],
          techIcon: ['PHP','',''],
          code: '',
          demo: 'facebook.com'
        }]
    
    
    
      },
      contact: { title: 'kapcsolat', t1:'Küldjön üzenetet', i1: 'Név', i2: 'E-mail', i3: 'Üzenet', btn: 'Küldés', required: 'Kötelező kitölteni', invalidEmail: 'Nem megfelelő e-mail formátum' },
      
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
        projects: [{
          title: 'ngx-mat-file',
          details: 'File Input component package for Angular Material UI',
          tech: ['Angular 13'],
          techIcon: ['Angular 13'],
          code: 'github.com',
          demo: 'facebook.com'
        },{
          title: 'BookBro',
          details: 'Book finder that consumes Google Books API. My first Angular project:)',
          tech: ['Angular 13'],
          techIcon: ['Angular 13'],
          code: 'github.com',
          demo: 'facebook.com'
        },{
          title: 'Quiz Application',
          details: 'Simple Quiz Application made with Vue.js &amp; Vuex state management.',
          tech: ['Vue 3'],
          techIcon: ['Vue 3'],
          code: 'github.com',
          demo: 'facebook.com'
        },{
          title: 'Rece-fice Recepttár',
          details: 'My thesis. Recipe manager application/website',
          tech: ['Angular 13'],
          techIcon: [''],
          code: 'github.com',
          demo: 'facebook.com'
        },{
          title: 'EsoGuides',
          details: 'Gamer magazine. Bootstrap, Javascript and PHP backend.',
          tech: ['PHP','JavaScript','Bootstrap'],
          techIcon: ['PHP','',''],
          code: '',
          demo: 'facebook.com'
        }]
    
    
    
      },
      contact: { title: 'contact', t1:'Get in Touch', i1: 'Name', i2: 'E-mail', i3: 'Message', btn: 'Send', required: 'Required', invalidEmail: 'Not a valid email' },
    }
  }
    
  setLocaleData() {
    this.currentLanguage == "hu" ?
      this.currentLanguageData = this.localeData.hu :
      this.currentLanguageData = this.localeData.en
    }
  


}
