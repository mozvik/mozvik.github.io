<template>
  <Navbar
    :displaySize="displaySize"
    :activeMenuItem="activeMenuItem"
    @selectedMenuItem="goToSection" ></Navbar>

  <div 
        
    id="main" 
    class="scroll-snap-container"
    @scroll="globalScroll"
    
    >
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
        threshold: [.05],
      };
      sectionObserver.value = new IntersectionObserver((entries) => {
        const active = entries.filter((e) => e.isIntersecting ); 
        const inActive = entries.filter((e) => !e.isIntersecting ); 
         if (inActive.length) {
          const backTitle = document.querySelector('#' + inActive[0].target.id + ' .back-title > h1')
          if (backTitle) {
            backTitle.classList.remove("btitle-float-up")
            backTitle.classList.remove("btitle-float-down")
          }
           
        }
        if (active.length) {
          activeMenuItem.value = active[0].target.id
          const backTitle = document.querySelector('#' + active[0].target.id + ' .back-title > h1')

          if(backTitle) {
            if(active[0].boundingClientRect.y >= 0){
              replaceClass(backTitle,"btitle-float-down","btitle-float-up")
            }
            else if(active[0].boundingClientRect.y < 0 ||  active[0].target.id == 'contact') {
              replaceClass(backTitle,"btitle-float-up","btitle-float-down")
            }
          }
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
        behavior: "smooth",
      });
    }
    function globalScroll(e) {
      scrollState.ypos = e.target.scrollTop;
      scrollState.activeSection = Object.keys(Locale.state.langData.en.navItems).indexOf(activeMenuItem.value)
    }
    function replaceClass(element, delClass, insClass){
      element.classList.remove(delClass)
      element.classList.add(insClass)
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
  
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}

html,
body {
  font-size: 18px;
  color: var(--light); 
  scroll-behavior: smooth;
  background: var(--background);
  height: 100vh;
  overflow: hidden;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}

#app {
  font-family: "Roboto", sans-serif;
  position: relative;
  display: grid;
 
  grid-template-rows: 70px 1fr;
  width: 100vw;
  height: 100vh;
  background: var(--background);
}

.scroll-snap-container {
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  /* scroll-padding-top: 50px; */
  
  height: 100vh;
  margin: 0 auto;

}  
 
::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
} 
.section {
  position: relative;
  scroll-snap-align: end;
  scroll-snap-stop: always;
  height: 100vh;  
  user-select: none;
  z-index: 1;

}
h1,
h1 span,
.title {
  font-family: "Oswald", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
}
h3 {
  font-size: 1.15rem;
  text-transform: uppercase;
}
p {
  padding: 0.5rem 0;
  font-size: 20px;
}

.light{
  color: var(--light);
  filter: sepia(.4);
}

.title{
  /* margin-bottom: 2rem; */
}
.randomfadein {
  opacity: 0;
  animation: fadein var(--rnda) var(--rnd) forwards ease;
}
@keyframes fadein {
  0% {opacity:0}
  100% {opacity:1}
}

  .back-title{
    position: absolute;
    bottom: 15%;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end; 
    pointer-events: none;
    z-index: -2;
  }
  
  .back-title h1 {
    font-size: 150px;
    color: var(--light);
    opacity: 0.05;
  }
  /* .btitle-hide{
    opacity: 0;
  }
  .btitle-show{
    opacity: 0.05;
  } */
  .btitle-float-up{
    /* transform: translateY(-50px);
    opacity: .05;
    transition: all 2s ease-in-out; */
    animation: btitlefloatup 1.5s ease-in-out forwards;
  }
  .btitle-float-down{
    animation: btitlefloatdown 1.5s ease-in-out forwards;
    /* transform: translateY(50px);
    transition: transform 2s ease-in-out; */
  }
  @keyframes btitlefloatup {
  0% {opacity:0; transform: translateY(25px)}
  35% {opacity:0; transform: translateY(25px)}
  75% {opacity:.05; transform: translateY(-25px)}
  100% {opacity:.05; transform: translateY(-25px)}
  }
  @keyframes btitlefloatdown {
  0% {opacity:0; transform: translateY(-125px)}
  25% {opacity:0; transform: translateY(-125px)}
  75% {opacity:.05; transform: translateY(25px)}
  100% {opacity:.05; transform: translateY(25px)}
  }
  .vueperslides__arrow {
  color: var(--secondary);
  /* transform: translateY(calc(-100% - 100px)); */
  }
  .vueperslides__arrow:hover {
  color: var(--light);
  /* transform: translateY(calc(-100% - 100px)); */
  }
  .vueperslides__arrow svg, .vueperslides__arrow svg:hover {
  stroke-width: 3;
  font-size: 10px;} 
 
  

/****************************************************** */
/**          TABLET                                   **/
@media screen and (min-width: 768px) {
 #main{
    width: calc(100% );
 } 
 .section{
    width: 100%;
    max-width: 960px;
 }
}
/****************************************************** */
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {
  h1,
  h1 span,
  .title {
    font-size: 3rem;
  }
  h3 {
    padding-top: 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  #app {
    grid-template-columns: minmax(auto, 250px) 8fr;
  }
  .section {
    /* width: calc(100% - 250px); */
  }
  .back-title{
   
    bottom: 0%;
    
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
  .section {
    max-width: 1000px;
    margin: 0 auto;
  }
  .back-title h1 {
    font-size: 300px;
  }
  .vueperslides__arrow svg {
  padding-top: 28rem;
  } 
}
</style>
