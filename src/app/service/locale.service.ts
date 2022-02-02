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
        name: 'készségek',
        link: 'skills'
      },{
        name: 'munkáim',
        link: 'portfolio'
      },{
        name: 'kapcsolat',
        link: 'contact'
      }],
      home: { title: 'kezdőlap', t1: 'üdvözlöm' , t2: ', mozvik attila vagyok' , t3: 'web és szoftverfejlesztő' },
      about: { title: 'rólam', p1: 'Nagy szerelmem a webfejlesztés, ahol egyrészt ki tudom fejezni a kreativitásomat, másrészt meg tudom mutatni a programozói tudásomat is.', p2: 'Szeretek alkotni és látni azt, ahogy egy projekt általam kel életre.', p3: "Örömöm lelem animációk és különféle effektusok készítésében, vagy csupán egy probléma megoldásában.", btn: 'önéletrajz' },
      skills: { title: 'készségek', p1: 'Fő szakterületem a front-end fejlesztés, HTML, CSS és JavaScript keretrendszerek. Kisebb, reszponzív web alkalmazásokat, és komponenseket készítek.', p2: 'Ezen felül rendelkezem szerveroldali PHP programnyelv ismeretekkel is.' },
      skillTree: ['HTML, CSS', 'Angular', 'Vue.js', 'PHP', 'C#'],
      portfolio: {
        title: 'munkáim',
        t1: 'portfólió',
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
          tech: ['Angular 13'],
          techIcon: [''],
          code: 'github.com',
          demo: 'facebook.com'
        },{
          title: 'EsoGuides',
          details: 'Videójátékos weboldal, magazin. Bootstrap, Javascript és PHP alapokon.',
          tech: ['PHP','JavaScript','Bootstrap'],
          techIcon: ['PHP','',''],
          code: 'github.com',
          demo: 'facebook.com'
        }]
    
    
    
      },
      contact: { title: 'küldjön üzenetet', i1: 'név', i2: 'e-mail', i3: 'üzenet', btn: 'küldés' },
      
    },
    en: {
      menuItems: [{
        name: 'home',
        link: 'home'
      },{
        name: 'about',
        link: 'about'
      },{
        name: 'skills',
        link: 'skills'
      },{
        name: 'portfolio',
        link: 'portfolio'
      },{
        name: 'contact',
        link: 'contact'
      }],
      home: { title: 'home', t1: 'hello, i\'m,' ,  t2: 'attila mozvik' , t3: 'web & software developer' },
      about: { title: 'about', p1: 'I have a serious passion for web development, that provides me the opportunity of both creativity and programming.', p2: 'I love experimenting with UI animations and effects, build something, or just solving problems.', p3: "", btn: 'download cv' },
      skills: { title: 'skills', p1: 'My main area of expertise is front-end development, HTML, CSS and JavaScript Frameworks. Building web applications, interactive layouts and components.', p2: 'I also have back-end knowledge of PHP.' },
      skillTree: ['HTML, CSS', 'Angular', 'Vue.js', 'PHP', 'C#'],
      portfolio: {
        title: 'My Recent Projects',
        t1: 'Portfolio',
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
          code: 'github.com',
          demo: 'facebook.com'
        }]
    
    
    
      },
      contact: { title: 'fet in touch', i1: 'name', i2: 'e-mail', i3: 'message', btn: 'send' },
    }
  }
    
  setLocaleData() {
    this.currentLanguage == "hu" ?
      this.currentLanguageData = this.localeData.hu :
      this.currentLanguageData = this.localeData.en
    }
  


}
