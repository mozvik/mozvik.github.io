<template>
  <Navbar
    :navItems="navItems"
    :displaySize="displaySize"
    :activeMenuItem="activeMenuItem"
    :lang="language.selected"
    @selectedMenuItem="goToSection"
    @selectedLanguage="setLanguage"
  ></Navbar>

  <!-- <router-view/> -->
  <div @scroll="globalScroll" id="main" class="parallax"
  :class="displaySize < 3 ? '':'scroll-snap-container'">      
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
import { computed, provide, reactive, onMounted, ref } from "vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Skills from "@/views/Skills.vue";
import Portfolio from "@/views/Portfolio.vue";
import Contact from "@/views/Contact.vue";
import Navbar from "@/components/Navbar.vue";
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
    const language = reactive({
      selected: "hu",
    });
    const navItems = reactive({
      home: {
        name: "Home",
        id: "home",
      },
      about: {
        name: "About",
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
    });
    const displaySize = ref(null);
    const activeMenuItem = ref(null);
    const sectionObserver = ref(null);
    const skillObserver = ref(null);

    onMounted(() => {
      onResize();
      window.addEventListener("resize", onResize);
      initSectionObserver();
      initSkillObserver();
      observeSections();
      observeMySkills();
    });

    const sections = computed(() => document.querySelectorAll(".section"));
    const mySkills = computed(() => document.querySelectorAll(".my-skills"));
    const sectionContainer = computed(() =>
      document.querySelector("#main")
    );

    provide(
      "scrollState",
      computed(() => scrollState)
    );
    provide(
      "language",
      computed(() => language)
    );

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
      console.log('sectionName :>> ', sectionName);
      sectionContainer.value.scrollTo({
        top: document.getElementById(sectionName).offsetTop - 100,
        left: 0,
        behavior: "auto",
      });
    }
    function globalScroll(e) {
      scrollState.ypos = e.target.scrollTop;
      scrollState.activeSection = Object.keys(navItems).indexOf(
        activeMenuItem.value
      );
    }
    return {
      scrollState,
      displaySize,
      activeMenuItem,
      goToSection,
      globalScroll,
      navItems,
      language,
    };
  },
};
</script>

<style>
:root {
  --background: rgb(18, 18, 18, 1);
  --background800: rgb(59, 59, 59, 1);
  --background700: rgb(81, 81, 81, 1);
  --background600: rgb(98, 98, 98, 1);
  --background500: rgb(126, 126, 126, 1);

  --primary: #fa7d09;
  --primary: #fa7d09;
  --primary400: #fb9637;
  --primary900: #fa7d09;
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
  background: transparent;
}
html,
body {
  overflow: hidden; 
  color: var(--light300);
  height: 100%;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  display: grid;
  grid-template-rows: 70px 1fr;
  height: 100%;
}

.scroll-snap-container {
  scroll-snap-destination: 0 100px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height: 100vh;
}
.section {
  height: 100vh;
  min-height: 100vh;
  padding: 1rem;
  background: linear-gradient(
    90deg,
    var(--background) 30%,
    var(--background800)
  );
  position: relative;
  font-weight: bold;
  scroll-snap-align: center;
  z-index: 0;
  user-select: none;

}
h1,
h1 span,
.title {
  font-family: "Oswald", sans-serif;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
}
h3 {
  font-size: 18px;
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
    perspective: 1px;
    perspective-origin: 49.5% 47.5%;
    
  }
  .parallax-group {
    width: 100%;
    position: relative;
    height: 500px; 
    height: 100vh;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    border: 1px solid green;
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
    border: 1px solid white;
    /* background: transparent; */
  }
  .parallax-layer-base {
    transform: translateZ(0.5px) scale(.49);
    font-size:56px;
    z-index: 5;
    border: 1px solid red;

    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
  }
 
  .parallax-layer-deep {
    transform: translateZ(0.3px) scale(0.7);
    z-index: 3;
    border: 1px solid gold;
    
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
  }
  .parallax-layer-deepest {
    transform: translateZ(0.1px) scale(0.9);
    z-index: 2;
    border: 1px solid blue;
  }
  .mouse-scroll-down{
    display: none;
  }
  .back-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .back-title h1 {
    font-size: 150px;
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
  .mouse-scroll-down {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 5rem;
  }
}
/****************************************************** */
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  /* html,
  body {
    overflow: hidden; 
    width: 100%;
    width: 100vw;
    padding: relative;
  } */
  h1,
  h1 span,
  .title {
    font-size: 48px;
  }
  h3 {
    font-size: 24px;
    text-transform: uppercase;
  }
  /* section {
    padding: 0;
    perspective: 2px;
  } */
}
</style>
