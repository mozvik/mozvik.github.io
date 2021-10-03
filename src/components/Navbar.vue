<template>
  <nav :class="[displaySize < 3 ? 'nav-mobile' : 'nav-desktop']" class="">
    <div class="mobile-bar" v-if="displaySize < 3">
      <div class="logo">
        <div>
          <img class=""
            src="/logo-full-en-white.svg"
            alt="logo"
            width="140"
            height="40"
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
          <img class=""
            src="/logo-full-en-white.svg"
            alt="logo"
            width="180"
            height="250"
          />
        </div>
      </div>
      
      <div class="nav-items" >
        <ul>
          <li
            v-for="item in languageData.navItems"
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
        <div class="social-icons">
          <div class="social-icon "><i class="lni lni-facebook"></i></div>
          <div class="social-icon"><i class="lni lni-linkedin"></i></div>
          <div class="social-icon"><i class="lni lni-github"></i></div>
        </div>
        <div class="switch-line">
          <div>

            <Toggle :options="toggleLanguage" @selectedButton="setLanguage"></Toggle>
          </div>
          <div>
            <Toggle :options="toggleDarkMode"
            @selectedButton="setScreenMode"></Toggle>
          </div>
          <!-- <p>lang {{language.selected}} </p>
          <p>dark mode {{activeMenuItem}}</p> -->
        </div>
      </div>
      
      <div class="navbar-bg" @click="menuActive = !menuActive"></div>
      

    </div>
    </transition>
  </nav>
</template>

<script>
import { ref, reactive } from "vue"
import Languages from "@/components/Languages.vue"
import Toggle from "@/components/Toggle.vue"
export default {
  name: "Navbar",
  components: {Toggle},
  props: {
    navItems: Object,
    displaySize: Number,
    activeMenuItem: String,
    lang: String,
  },
  emits: ["selectedMenuItem"],
  setup(){
    const menuActive = ref(false)
    const toggleLanguage = reactive( {
            text1: "HU",
            text2: "EN",
            icon1: "bi:moon-stars",
            icon2: "ic:outline-light-mode",
          })
    const toggleDarkMode = reactive( {
            text1: "Dark",
            text2: "Light",
            icon1: "bi:moon-stars",
            icon2: "ic:outline-light-mode",
          })
    // const lang = inject('language')
    const { language, languageData } = Languages()
  
    function setLanguage(btn) {
      if (btn === 'left') {
        console.log('hu :>> ', 'hu');
      } else console.log('en :>> ', 'en');
      
    }
    function setScreenMode(btn) {
      if (btn === 'left') {
        console.log('sötét');  
      } else console.log('világos');  
      
    }

    return {menuActive,language, languageData, toggleLanguage, toggleDarkMode, setLanguage, setScreenMode 
     }
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background: var(--background);
  overflow: hidden;
}
nav a {
  font-weight: bold;
  color: var(--light);
}

.nav-mobile i {
  display: block;
}
 
.mobile-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 2;
  width: 100%;
  height: 70px;
  font-size: 2.5rem;
  background: var(--background);
  color: var(--light100);
}
.nav-items {
  width: 100%;
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
  width: 100%;
  background: var(--primary);
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
  border: 2px solid var(--light300);
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
  margin-left: 0rem;
}
.social .social-icons{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
}
.social-icon{
  margin-right: .5rem;
}
.switch-line div{
  margin-right: 1.5rem;
}
.switch-line{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.navbar {
  position:fixed;
  top: 70px;
  left: 0;
  display: grid;
  grid-template-rows: 3fr 1fr;
  align-items: start;
  width: 60%;
  height: 100%;
  z-index: 2;
  background: var(--background);
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
  animation: roll-in .5s ease-out ;
}
.roll-in-leave-active {
  animation: roll-in .5s ease-out reverse;
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
 .nav-desktop{
  height: 100vh;
}
.navbar {
  grid-template-rows: 3fr 4fr 1fr;
  overflow: hidden;
  width: auto;
  top: 0;
}
.nav-items a {
  color: var(--light300);
  transition: all .4s ease-out;
}
.nav-desktop .nav-items li:hover::after{
  width: 100%;
    transition: all .4s ease-out;
}
.nav-items > ul > li:hover a{
  color: var(--background);
  opacity: .9;
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
  background: var(--primary400);
  opacity: .3;
  
  transition: all .4s ease-out;
}
.social-icon:hover {
  border: 2px solid var(--primary-dark);
  transition: all .4s ease-out;
  cursor: pointer;
}
.social-icon:hover i{
  color: var(--primary-light);
  transition: all .4s ease-out;
}
}
</style>
