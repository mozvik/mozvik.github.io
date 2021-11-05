<template>
  <nav :class="[displaySize < 3 ? 'nav-mobile' : 'nav-desktop']" class="">
    <div class="mobile-bar" v-if="displaySize < 3">
      <div class="logo">
        <div>
          <img class="svg"
            :src="colors.state.currentColorMode == 'dark' ? '/logo-spinner-white.svg':'/logo-spinner-black.svg'"
            alt="logo"
            width="50"
            height="50"
            @click="$emit('selectedMenuItem', 'home')"
          />
        </div>
      </div>
      <transition name="fade" mode="out-in">
            <i
              v-if="menuActive"
              class="fas fa-times"
              @click="menuActive = !menuActive"
              key="x"
            ></i>

            <i
              v-else
              class="fas fa-bars"
              @click="menuActive = !menuActive"
              key="ham"
            ></i
          ></transition>
    </div>
    <transition name="roll-in" appear>
    <div class="navbar" v-if="menuActive || displaySize > 2">
      

      <div class="logo" v-if="displaySize >= 3">
        <div>
          <img class="svg"
            :src="colors.state.currentColorMode == 'dark' ? '/logo-full-en-white.svg':'/logo-full-en-black.svg'"
            alt="logo"
            width="150"
            height="250"
            @click="$emit('selectedMenuItem', 'home')"
          />
        </div>
      </div>
      
      <div class="nav-items" >
        <ul>
          <li
            v-for="item in languageData.computed.currentLanguageData().navItems"
            class
            :key="item"
            :class="{ 'active-menu-item': item.id == activeMenuItem }"
            @click.prevent="$emit('selectedMenuItem', item.id)"
          >
            <a :href="'#' + item.id">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      
      <div class="social">
        <div class="switch-line">
          <div>
            <Toggle 
            :buttonState="languageData.state.currentLanguage === 'en' ?'left':'right'"
            :options="toggleLanguage" @selectedButton="setLanguage"></Toggle>
          </div>
          <div>
            <Toggle 
            :buttonState="colors.state.currentColorMode === 'dark' ?'left':'right'"
            :options="toggleDarkMode"
            @selectedButton="setScreenMode"></Toggle>
          </div>
        </div>
        <div class="social-icons">
          <div class="social-icon "><i class="lni lni-facebook"></i></div>
          <div class="social-icon"><i class="lni lni-linkedin"></i></div>
          <div class="social-icon"><i class="lni lni-github"></i></div>
        </div>
        
      </div>
      
      <!-- <div class="navbar-bg" @click="menuActive = !menuActive"></div> -->
      

    </div>
    </transition>
  </nav>
</template>

<script>
import { ref, reactive, inject } from "vue"
import Toggle from "@/components/Toggle.vue"

export default {
  name: "Navbar",
  components: {Toggle},
  
  props: {
    displaySize: Number,
    activeMenuItem: String,
  },
  emits: ["selectedMenuItem"],
  setup(){
    const menuActive = ref(false)
    const toggleLanguage = reactive( {
            text1: "EN",
            text2: "HU",
            icon1: "emojione:flag-for-united-kingdom",
            icon1Width:
            "34",
            icon2: "emojione:flag-for-hungary",
            icon2Width:
            "34",
          })
    const toggleDarkMode = reactive( {
            text1: "",
            text2: "",
            icon1: "bi:moon-stars",
            icon1Width:
            "20",
            icon2: "ic:outline-light-mode",
            icon2Width:
            "20",
          })

    const languageData = inject("Locale")
    const colors = inject("Colors")

    function setLanguage(btn){
       if (btn === 'left') {
         languageData.state.currentLanguage = "en"
      } else{ 
        languageData.state.currentLanguage = "hu"
        }
    }

    function setScreenMode(btn) {
      if (btn === 'left') {
        colors.methods.setColorTheme('dark')  
      } else { 
        colors.methods.setColorTheme('light')
      }  
    }

    return {menuActive, toggleLanguage, toggleDarkMode, setScreenMode, setLanguage, languageData, colors
     }
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background: var(--background);
}
nav a {
  font-weight: bold;
  color: var(--light);
}

.nav-mobile i {
  display: block;
}
.svg{
  fill: var(--background);
}
.svg:hover{
  cursor: pointer;
}
.mobile-bar {
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  height: 70px;
  font-size: 2.5rem;
  background: var(--background800);
  color: var(--light);
  border-bottom: 1px solid var(--primary);
  z-index: 2;
}
.nav-items {
  max-width: 100%;
  overflow: hidden;
}
.nav-items > ul{
  margin: 0;
  padding: 0;
}
.nav-items > ul > li > a {
  text-decoration: none;
}

.nav-items > ul > li {
  padding: .60rem 3rem;
  font-size: 20px;
  text-transform: uppercase;
  list-style: none;
  position: relative;
  z-index: 0;
}

.nav-items > ul > li:hover, .nav-mobile i:hover{
  cursor: pointer;
}

 .active-menu-item{
  background: var(--primary);
  transition: all .4s ease-out;
}  

.active-menu-item > a{
  color: var(--light);
  transition: all .4s ease-out;
}
.nav-items .active-menu-item:hover > a{
  color: var(--light);
  opacity: 1; 
}
.nav-items > ul > .active-menu-item::after{
  /* background: var(--primary); */
}
.logo {
  text-align: center;
}
.mobile-bar .logo img{
  padding-top: 8px;
}
.social-icon{
  height: 2.8rem;
  width: 2.8rem;
  border: 2px solid var(--light);
  opacity: .7;
  border-radius: 50%;
  position: relative;
  transition: all .4s ease-out;
}

.social-icon i{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: var(--light);
  font-size: 1.5rem;
  transition: all .4s ease-out;
}
.social{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: 0rem;
  padding-bottom: 5rem;
}
.social .social-icons{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  /* margin-bottom: 1rem; */
}
.social-icon{
  margin-right: .5rem;
}
.switch-line div{
  margin: .25rem;
}
.switch-line{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items:flex-start;
  order: 1;
}
.navbar {
  position:fixed;
  top: 70px;
  left: 0;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 3fr 1fr;
  align-items: start;
  width: 60%;
  height: 100%;
  height: 100vh;
  z-index: 2;
  background: var(--background800);
  border: 1px solid var(--primary);
  overflow: scroll;
}
.navbar-bg {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200vw;
  background: var(--background);
  z-index: -1;
  opacity: .5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: opacity 0.4s;
  opacity: 0;
}
.roll-in-enter-active {
  animation: roll-in .35s ease-out ;
}
.roll-in-leave-active {
  animation: roll-in .35s ease-out reverse;
}

@keyframes roll-in {
   0% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(00%);
  }
}
/****************************************************** */
/**          TABLET                                   **/
@media screen and (min-width: 768px) {
  
}
/****************************************************** */
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {
  .switch-line{
    flex-direction: column;
    position: fixed;
    right: 1rem;
    order: 0;
  }
 .nav-desktop{
  height: 100vh;
}
.navbar {
  grid-template-rows: 3fr 4fr 1fr;
  overflow: hidden;
  width: 250px;
  top: 0;
}
.nav-items a {
  color: var(--light);
  transition: all .4s ease-out;
}
.nav-desktop .nav-items li:hover::after{
  width: 100%;
  transition: all .4s ease-out;
}
.nav-items > ul > li:hover a{
  color: var(--secondary);
  opacity: 1;
  transition: all .4s ease-out;
}

.nav-desktop .nav-items li::after{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 95%;
  width: 0;
  z-index: -1;
  background: var(--primary);
  opacity: .25;
  transition: all .4s ease-out;
}
.social-icon:hover {
  border: 2px solid var(--primary);
  transition: all .4s ease-out;
  cursor: pointer;
}
.social-icon:hover i{
  color: var(--primary);
  transition: all .4s ease-out;
}
}
</style>
