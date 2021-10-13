<template>
  <Navbar
    :displaySize="displaySize"
    :activeMenuItem="activeMenuItem"
    @selectedMenuItem="goToSection" ></Navbar>

  <div     
    id="main" 
    class="parallax"
    :class="displaySize < 3 ? 'scroll-snap-container':'scroll-snap-container'"
    @scroll="globalScroll" >      
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Portfolio :displaySize="displaySize"></Portfolio>
    <Contact></Contact>
  </div>
</template>

<script>

import { computed, provide, reactive, onMounted, ref } from "vue";
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Skills from "@/views/Skills.vue"
import Portfolio from "@/views/Portfolio.vue"
import Contact from "@/views/Contact.vue"
import Navbar from "@/components/Navbar.vue"
import Locale from "@/composables/Locale.js"
import Colors from "@/composables/Colors.js"
export default {
  components: {
    Home,
    About,
    Skills,
    Portfolio,
    Contact,
    Navbar,
  },
  setup() {
    const scrollState = reactive({
      ypos: 0,
      activeSection: 0,
    });

    const displaySize = ref(null)
    const activeMenuItem = ref(null)
    const sectionObserver = ref(null)
    const skillObserver = ref(null)

    onMounted(() => {
      onResize();
      window.addEventListener("resize", onResize);
      initSectionObserver();
      initSkillObserver();
      observeSections();
      observeMySkills();
      Colors.methods.setColorTheme('dark')
    })

    const sections = computed(() => document.querySelectorAll(".section"));
    const mySkills = computed(() => document.querySelectorAll(".my-skills"));
    const sectionContainer = computed(() =>
      document.querySelector("#main")
    );

    provide( "scrollState", computed(() => scrollState))
    provide( "Locale", Locale )
    provide( "Colors", Colors )
    
    function onResize() {
      const ua = navigator.userAgent;
      if (
        /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )
      ) {
        displaySize.value = 0; //mobile
        return;
      }
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        displaySize.value = 1; //tablet
        return;
      }

      if (window.innerWidth <= 480) {
        displaySize.value = 0; //mobile
      } else if (window.innerWidth <= 768) {
        displaySize.value = 1; //tablet
      } else if (window.innerWidth < 992) {
        displaySize.value = 2; //small screen/laptop
      } else if (window.innerWidth <= 1200) {
        displaySize.value = 3; //desktop
      } else displaySize.value = 4; //large screens
      return;
    }
    function observeSections() {
      sections.value.forEach((section) => {
        sectionObserver.value.observe(section);
      });
    }
    function observeMySkills() {
      mySkills.value.forEach((skills) => {
        skillObserver.value.observe(skills);
      });
    }
    function initSectionObserver() {
      const options = {
        threshold: [0.5],
      };
      sectionObserver.value = new IntersectionObserver((entries) => {
        const active = entries.filter((e) => e.isIntersecting); //entry.intersectionRatio
        if (active.length) {
          activeMenuItem.value = active[0].target.id;
        }
      }, options);
    }
    function initSkillObserver() {
      const options = {
        threshold: [0.5],
      };
      skillObserver.value = new IntersectionObserver((entries) => {
        const active = entries.filter((e) => e.isIntersecting); //entry.intersectionRatio
        if (active.length) {
          active.forEach((element) => {
            if (
              element.target.className.includes("my-skills") &&
              element.isIntersecting
            ) {
              document
                .querySelector(".skill-list>ul")
                .classList.add("skill-list-animated");
              element.target.classList.add("my-skills-animated");
              skillObserver.value.unobserve(element.target);
            }
          });
        }
      }, options);
    }
    function goToSection(sectionName) {
      sectionContainer.value.scrollTo({
        top: document.getElementById(sectionName).offsetTop - 100,
        left: 0,
        behavior: "auto",
      });
    }
    function globalScroll(e) {
      scrollState.ypos = e.target.scrollTop;
      scrollState.activeSection = Object.keys(Locale.state.langData.en.navItems).indexOf(
        activeMenuItem.value
      );
    }
    return {
      scrollState,
      displaySize,
      activeMenuItem,
      goToSection,
      globalScroll,
    };
  },
};
</script>

<style>
:root {
  /* --background: rgb(18, 18, 18, 1);
  --background800: rgb(59, 59, 59, 1);
   */

  /* blue gray #102a43*/
  /* --background: #102a43;
   --background800: rgb(36, 59, 83, 1);
  
     */
/*TERRA https://www.colourlovers.com/palette/292482/Terra
*/


  /* cool gray #102a43*/
  /* --background: rgb(31, 41, 51, 1);
  --background800: rgb(50, 63, 75, 1);
  -
   */

  /* warm gray #102a43*/
  /* --background: #27241d;
     */
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: transparent;
}
html,
body {
  overflow: hidden; 
  color: var(--light); 
  height: 100%;
  scroll-behavior: smooth;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  display: grid;
  grid-template-rows: 70px 1fr;
  height: 100%;
  background: var(--background);
}

.scroll-snap-container {
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  
  height: 100vh;
  
}
.section {
  height: 100vh;
  min-height: 100vh;
  padding: 1rem;
  /* background: linear-gradient(
    90deg,
    var(--background) 30%,
    var(--background800)
  ); */
  background: var(--background);
  position: relative;
  font-weight: bold;
  scroll-snap-align: center;
  /* scroll-snap-stop: always; */
  z-index: 0;
  user-select: none;

}
h1,
h1 span,
.title {
  font-family: "Oswald", sans-serif;
  font-size: 38px;
  font-weight: 600;
  text-transform: uppercase;
}
h3 {
  font-size: 22px;
  text-transform: uppercase;
}
p {
  padding: 0.5rem 0;
  font-size: 18px;
}
.light-stroke span{
  color: transparent;
 -webkit-text-stroke: 1px var(--light);
}

.light{
  color: var(--light);
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
    perspective: 1px;
    /* perspective-origin: 49.5% 47.5%; */
    perspective-origin: center;
  }
  .parallax-group {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    height: 500px; 
    height: 100vh;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    /* border: 1px solid green; */
  } 
  .parallax-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  } 
  .parallax-layer-front {
    transform: translateZ(0.7px) scale(.30);
    z-index: 4;
    /* border: 1px solid white; */
    /* background: transparent; */
  }
  .parallax-layer-base {
    transform: translateZ(0.445px) scale(.475);
    z-index: 5;
    /* border: 1px solid red; */

    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
  }
 
  .parallax-layer-deep {
    transform: translateZ(0.2px) scale(0.67);
    z-index: 3;
    /* border: 1px solid gold; */
    
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
  }
  .parallax-layer-deepest {
    transform: translateZ(0.1px) scale(0.86);
    z-index: 2;
    /* border: 1px solid blue; */
  }
 
  .back-title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  
  .back-title h1 {
    font-size: 150px;
    color: var(--light);
    /* color: rgb(51, 78, 104, 1); */
    /* color: transparent; */
    opacity: .05;
    /* -webkit-text-stroke: 5px var(--light); */
  }
  .vueperslides__arrow {
  color: var(--secondary);

  }
  .vueperslides__arrow svg {
  stroke-width: 3;
  font-size: 10px;} 
 
  

/****************************************************** */
/**          TABLET                                   **/
/* @media screen and (min-width: 768px) {
  
} */
/****************************************************** */
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {
  h1,
  h1 span,
  .title {
    font-size: 48px;
  }
  h3 {
    font-size: 24px;
    text-transform: uppercase;
  }

  #app {
    grid-template-columns: minmax(auto, 250px) 8fr;
  }
  
}
/****************************************************** */
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  
  h1,
  h1 span,
  .title {
    font-size: 60px;
  }
  h3 {
    font-size: 32px;
    text-transform: uppercase;
  }
  .back-title h1 {
    font-size: 300px;
  }
  .vueperslides__arrow svg {
  padding-top: 28rem;
  } 
}
</style>
