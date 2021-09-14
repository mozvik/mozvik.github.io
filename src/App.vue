<template>
      <Navbar :navItems="navItems" :displaySize="displaySize" :activeMenuItem="activeMenuItem" @selectedMenuItem="goToSection"></Navbar>
      
      <!-- <router-view/> -->
      <div id="main" class="scroll-snap-container parallax">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Portfolio :displaySize="displaySize"></Portfolio>
        <Contact></Contact>
      </div>
    
</template>

<script>
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Skills from "@/views/Skills.vue";
import Portfolio from "@/views/Portfolio.vue";
import Contact from "@/views/Contact.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  components:{
    Home, About, Skills, Portfolio, Contact, Navbar,
  },
  data() {
     return {
       itemRefs: [],
       navItems: {
         home: {
           name: "Home",
           id: "home",
           },
         about: {
           name:"About",
           id: "about",
         },
         skills: {
           name: "Skills",
           id: "skills",
         },
         portfolio: {
           name: "Portfolio",
           id: "portfolio",
         },
         contact: {
           name: "Contact",
           id: "contact",
         },  
       
       
       },
       displaySize: null,
       activeMenuItem: '',
       observer: null,
       intersectionDirection: 0,
       previousRatio: 0,
       previousY: 0,
     }
   },
   created(){
     window.addEventListener('resize', this.onResize)
   },
   mounted() {
    this.onResize()
    this.initSectionObserver()
    this.initSkillObserver()
    console.log("Mounted!")
    this.observeSections()
    this.observeMySkills()
  },
  unmounted(){
    window.removeEventListener('resize', this.onResize)
  },
  computed: {
    getSectionsRefs() {
      return document.querySelectorAll('.section')
    },
    getMySkillsRefs() {
      return document.querySelectorAll('.my-skills')
    },
    getSectionContainer(){
      return document.querySelector('.scroll-snap-container');
    },
  },
  methods: {
    onResize() {
      const ua = navigator.userAgent;
      if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)){
        this.displaySize = 0 //mobile
        return
      } 
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)){
        this.displaySize = 1 //tablet
        return
      } 

      if (window.innerWidth <= 480) {
        this.displaySize = 0 //mobile
      } else if (window.innerWidth <= 768){
        this.displaySize = 1 //tablet
      } else if (window.innerWidth < 992){
        

        this.displaySize = 2 //small screen/laptop
      } else if (window.innerWidth <= 1200){
        this.displaySize = 3 //desktop
      } else this.displaySize = 4 //large screens
      
    },
    setItemRef(el) {
      if (el && this.itemRefs.indexOf(el) === -1) {
        this.itemRefs.push(el)
      }
    },
    beforeUpdate() {
    this.itemRefs = []
    },
    updated() {
    // console.log(this.itemRefs)
    },
    goToSection(sectionName) {
            console.log('sectionName :>> ', sectionName);
            this.getSectionContainer.scrollTo({
              top: document.getElementById(sectionName).offsetTop - 100,
              left: 0,
              behavior: 'auto'
            });
            
    },
    observeSections() {
      this.getSectionsRefs.forEach(section => {
        this.sectionObserver.observe(section)
      });
    },
    observeMySkills() {
      this.getMySkillsRefs.forEach(skills => {
        this.skillObserver.observe(skills)
      });
    },
    initSectionObserver() {
      const options = {
         threshold: [0.5]
      }
      this.sectionObserver = new IntersectionObserver(entries => {
        const active = entries.filter(e => e.isIntersecting);//entry.intersectionRatio 
        if(active.length) {
          this.activeMenuItem = active[0].target.id
        }
      },options)
    },
    initSkillObserver() {
      const options = {
         threshold: [0.5]
      }
      this.skillObserver = new IntersectionObserver(entries => {
        const active = entries.filter(e => e.isIntersecting);//entry.intersectionRatio 
         if(active.length) {
          active.forEach(element => {
            if (element.target.className.includes('my-skills') && element.isIntersecting) { 
              document.querySelector('.skill-list>ul').classList.add('skill-list-animated')
              element.target.classList.add('my-skills-animated')
              this.skillObserver.unobserve(element.target)
            }
          });
        }
       
        
      },options)
    },

  },
}


</script>

<style>
:root {
  /* material black #121212*/
  
  --background: rgb(18, 18, 18, 1);
  --background800: rgb(59, 59, 59, 1);
  --background700: rgb(81, 81, 81, 1);
  --background600: rgb(98, 98, 98, 1);
  --background500: rgb(126, 126, 126, 1);
  

  --primary: #FA7D09;
  --primary: #FA7D09;
  --primary400: #fb9637;
  --primary900: #FA7D09;
  --primary-dark: #c86407;
  --primary-light: #fb973a;

  /* blue gray #102a43*/
  /* --background: rgb(16, 42, 67, 1);
  --background800: rgb(36, 59, 83, 1);
  --background700: rgb(51, 78, 104, 1);
  --background600: rgb(72, 101, 129, 1);
  --background500: rgb(98, 125, 152, 1);
    */
  
  /* cool gray #102a43*/
  /* --background: rgb(31, 41, 51, 1);
  --background800: rgb(50, 63, 75, 1);
  --background700: rgb(62, 76, 89, 1);
  --background600: rgb(82, 96, 109, 1);
  --background500: rgb(97, 110, 124, 1);
   */

/* warm gray #102a43*/
  /* --background: #27241d;
  --background800: #423d33;
  --background700: #504a40;
  --background600: #625d52;
  --background500: #857f72;
   */


--light: #f7f7f7; 
--light100: #e1e1e1; 
--light200: #cfcfcf; 
--light300: #b1b1b1; 



  
  --orange-red: #c62b28;
  
  
  
  --lightgrey: #9a9a9a;
  --background700: #8a8a8a;
  
}
* { 
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: transparent;
    /* scroll-behavior: smooth; */
    /* font-size: 16px; */
}
html, body{
   overflow: hidden;
   color: var(--light300);
   height: 100%;
   
}

main{
  width: 100%;
}
.section{
   height: 100vh;
   background: linear-gradient(90deg, var(--background) 30%,var(--background800) ); 
   user-select: none;
   padding-top: 75px;
   padding: 1rem;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  display: grid;
  grid-template-rows: 70px 1fr;
height: 100%; 
}

 /* img {
    height: auto;
    max-width: 100%;
    display: block;
    margin: auto;
}  */

.scroll-snap-container {

    scroll-snap-destination: 0 100px;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    height: 100vh; 
 
}

.scroll-snap-container .section {

    min-height: 100vh;
    overflow: hidden;
    position: relative;
    font-weight: bold;
    scroll-snap-align: center;
    z-index: 0;
} 
h1, h1 span, .title{
  font-family: 'Oswald', sans-serif;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
}
h3{
    font-size: 18px;
    text-transform: uppercase;
  }
p{
  padding: .5rem 0;
  font-size: 18px;
}
.light-stroke span{
  color: transparent;
 -webkit-text-stroke: 1px var(--light);
}
/* COLORS */
.primary{
  color: var(--primary);
}
.primary-dark{
  color: var(--primary-dark);
}
.primary-light{
  color: var(--primary-light);
}
.light{
  color: var(--light);
}
.light100{
  color: var(--light100);
}
.light200{
  color: var(--light200);
}
.light300{
  color: var(--light300);
}

.title-green{

  color: var(--primary); 
}
.title{
  margin-bottom: 2rem;
}
.randomfadein {
  opacity: 0;
  animation: fadein var(--rnda) var(--rnd) forwards ease;
}
@keyframes fadein {
  0% {opacity:0}
  100% {opacity:1}
}

.parallax {
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: .5cm;
    perspective-origin: center;
    
  }
  .parallax-group {
    width: 100%;
    position: relative;
    height: 500px; /* fallback régi browserek miatt */
    height: 100vh;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    overflow: hidden;
  } 
.parallax-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

  }
  .parallax-layer-base {
    -webkit-transform: translateZ(0cm);
    transform: translateZ(0cm);
    border: 1px solid white;
    font-size:56px;
    /* font-family: Arial, Helvetica, sans-serif; */
    z-index: 5;

  }
  .parallax-layer-back {
    -webkit-transform: translateZ(-0.1cm) scale(1.1);
    transform: translateZ(-0.1cm) scale(1.1);
    z-index: 4;
    border: 1px solid red; 
  }
  .parallax-layer-deep {
    -webkit-transform: translateZ(-.2cm) scale(1.1);
    transform: translateZ(-.2cm) scale(1.2);
    z-index: 3;
    border: 1px solid blue;
    background-repeat: no-repeat;
    background-size: 300px auto;
    background-position: center right;
  }
  .parallax-layer-deepest {
    -webkit-transform: translateZ(-.3cm) scale(1.4);
    transform: translateZ(-.3cm) scale(1.3);
    z-index: 2;
    border: 1px solid green; 
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .back-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .mouse-scroll-down{
    display: none;
  }
  .back-title h1 {
    font-size: 400px;
    color: var(--background700);
    opacity: .1;
  }
  .vueperslides__arrow {
  color: var(--primary);
  }
  .vueperslides__arrow svg {stroke-width: 3;
  font-size: 10px;}

/****************************************************** */
/**          TABLET                                   **/
/* @media screen and (min-width: 768px) {
  
} */
/****************************************************** */
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {
  h1, h1 span, .title {
    font-size: 48px;
  }
  h3{
    font-size: 24px;
    text-transform: uppercase;
  }
  
  #app{
   
    grid-template-columns: minmax(auto, 250px) 8fr;
  }
 .mouse-scroll-down{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 3rem;
  }
}
/****************************************************** */
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  html, body{
   overflow: hidden;
   width: 100%; 
   width: 100vw;
   padding: relative;
}
  h1, h1 span, .title {
    font-size: 48px;
  }
  h3{
    font-size: 24px;
    text-transform: uppercase;
  }
  section {
    padding: 0;
    perspective: 2px;
  }
 
}
</style>
