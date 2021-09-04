<template>
      <Navbar :navItems="navItems" :displaySize="displaySize" :activeMenuItem="activeMenuItem" @selectedMenuItem="goToSection"></Navbar>
      
      <!-- <router-view/> -->
      <div id="main" class="scroll-snap-container parallax"  @scroll="parallaxScrollFunction">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Portfolio></Portfolio>
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
     }
   },
   created(){
     window.addEventListener('resize', this.onResize)
   },
   mounted() {
    this.onResize()
    this.initObserver()
    console.log("Mounted!")
    this.observeSections()
    
  },
  unmounted(){
    window.removeEventListener('resize', this.onResize)
  },
  computed: {
    getSectionsRefs() {
      return document.querySelectorAll('.section')
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
    console.log(this.itemRefs)
    },
    goToSection(sectionName) {
            this.getSectionContainer.scrollTo({
              top: document.getElementById(sectionName).offsetTop - 100,
              left: 0,
              behavior: 'smooth'
            });
    },
    observeSections() {
      this.getSectionsRefs.forEach(section => {
        this.observer.observe(section)
      });
    },
    initObserver() {
      const options = {
         threshold: [0.5]
      }
      this.observer = new IntersectionObserver(entries => {
        const active = entries.filter(e => e.isIntersecting);//entry.intersectionRatio 
        if(active.length) {
          this.activeMenuItem = active[0].target.id
        }
      },options)
    },
    //  parallaxScrollFunction() {
    //   var depth, i, layer, layers, len, movement, topDistance, translate3d, array;
    //   array = document.querySelectorAll('.section')
      
    //   for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    //     topDistance = element.getBoundingClientRect().top +  window.scrollY
    //     layers = element.querySelectorAll("[data-type='parallax']");
    //     for (i = 0, len = layers.length; i < len; i++) {
    //       layer = layers[i];
    //       depth = layer.getAttribute('data-depth');
          
    //       movement = -(topDistance * depth);
    //       translate3d = 'translate3d(0, ' + movement + 'px, 0)';
    //       layer.style['-webkit-transform'] = translate3d;
    //       layer.style['-moz-transform'] = translate3d;
    //       layer.style['-ms-transform'] = translate3d;
    //       layer.style['-o-transform'] = translate3d;
    //       layer.style.transform = translate3d;
    //     }
    //    }
    // },
  },
}


</script>

<style>
:root {
  /**nunito betutipus? */
  --darkest: rgb(18, 18, 18);
  --dark: rgb(47, 47, 47);
  
  
  /* #026CCF
  --darkgreen: #61892f; */
  --light: #cacaca; 
  --lightgrey: #9a9a9a;
  --grey: #8a8a8a;
  --green: #00877a;
  /* --green: #026CCF; */
  --orange-red: #FCB023;
  /* --orange-red: #ba411f; */
}
* { 
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: transparent;
    scroll-behavior: smooth;
    /* font-size: 16px; */
}
html, body{
   overflow: hidden;
   /* width: 100%; 
   width: 100vw; */
   
   height: 100%;
   
}

main{
  width: 100%;
}
.section{
   height: 100vh;
   background: linear-gradient(90deg, rgba(18, 18, 18, 1) 30%,rgba(47,47,47,1) ); 
   color: var(--green);
   user-select: none;
   padding-top: 75px;
   padding: 1rem;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  position: relative;
  display: grid;
  grid-template-rows: 70px 1fr;
/* height: 100vh;  */
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
    /* border: 5px solid deeppink; */
    /* font-size: 30px; */
    font-weight: bold;
    /* padding-top: 70px;  */
    scroll-snap-align: center;
    z-index: 0;
}
h1, h1 span, .title-light{
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
.title-green{

  color: var(--green); 
}
.title-light{
  color: var(--light);
  margin-bottom: 2rem;
}
.randomfadein {
  opacity: 0;
  animation: fadein var(--rnda) var(--rnd) forwards ease;
  /* color: var(--light); */
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
    perspective: 1cm;
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
    font-family: Arial, Helvetica, sans-serif;
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
    color: var(--grey);
    opacity: .1;
  }
/****************************************************** */
/**          TABLET                                   **/
/* @media screen and (min-width: 768px) {
  h1, h1 span, .title-light {
    font-size: 42px;
  }
  #app{
    grid-template-columns: 3fr 5fr;
  }
} */
/****************************************************** */
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {
  h1, h1 span, .title-light {
    font-size: 48px;
  }
  h3{
    font-size: 24px;
    text-transform: uppercase;
  }
  
  #app{
    grid-template-columns: 2fr 6fr;
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
  h1, h1 span, .title-light {
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
  #app{
    grid-template-columns: minmax(auto, 250px) 8fr;
  }
  /* .parallax::after{
    font-size: 300px;
    top: 0vw;
    left: 2vw;

  } */
 .title{
    /* width: 75%; */
  }
  
}
</style>
