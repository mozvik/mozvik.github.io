<template>
  <Navbar :navItems="navItems" :displaySize="displaySize" @selectedMenuItem="goToSection"></Navbar>
  {{}}
  <!-- <router-view/> -->
  <div id="main" class="scroll-snap-container"  @scroll="parallaxScrollFunction">
    <Home></Home>
    <About :ref="setItemRef"></About>
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
       currentSection: null,
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
      if (window.innerWidth <= 480) {
        this.displaySize = 0 //mobile
      } else if (window.innerWidth <= 768){
        this.displaySize = 1 //tablet
      } else if (window.innerWidth <= 1024){
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
    setActiveSection(section) {
      this.currentSection = section;
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
    }
  },
}


</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: transparent;
    scroll-behavior: smooth;
}

.section{
  height: 100vh;
   
   user-select: none;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

img {
    height: auto;
    max-width: 100%;
    display: block;
    margin: auto;
}

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
    border: 5px solid deeppink;
    font-size: 30px;
    font-weight: bold;
    padding-top: 70px; 
    scroll-snap-align: center;

}

</style>
