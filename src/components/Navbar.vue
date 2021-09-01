<template>
  <nav :class="[displaySize < 2 ? 'nav-mobile' : 'nav-desktop']" class="col-sm-auto col-md-4 col-lg-2">
    <div class="navbar d-md-flex flex-md-column align-items-md-start justify-content-md-start">
      <div class="logo flex-shrink-1">
        <div>
          <img class="img-fluid"
            src="/am5.png"
            alt="logo"
            :width="displaySize < 2 ? 50 : 250"
            :height="displaySize < 2 ? 50 : 250"
          />
        </div>

        <div v-if="displaySize < 2">
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

        <!-- <div v-if="!menuActive"><transition name="slide-fade" mode="out-in">
          <i class="fas fa-bars" @click="menuActive = !menuActive"></i></transition>
            </div>
         -->
      </div>
      <transition name="roll-in" appear>
      <div class="nav-items d-flex flex-column justify-content-between flex-grow-1" v-if="menuActive || displaySize > 1">
        <ul>
          <li
            v-for="item in navItems"
            class
            :key="item"
            :class="{ 'active-menu-item': item.id == activeMenuItem }"
            @click.prevent="$emit('selectedMenuItem', item.id)"
          >
            <a :href="'#' + item.id">{{ item.name }}</a>
          </li>
        </ul>
        <div class="social w-100 " >
            <div class="d-flex justify-content-md-center ">
              <div class="social-icon me-lg-1 me-md-3 me-xl-3 mb-3 "><i class="lni lni-facebook"></i></div>
              <div class="social-icon me-lg-1 me-md-3 me-xl-3 mb-3 "><i class="lni lni-linkedin"></i></div>
              <div class="social-icon me-lg-1 me-md-3 me-xl-3 mb-3 "><i class="lni lni-github"></i></div>
            </div>
        </div>
      </div>
      </transition>
      

    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuActive: false,
    };
  },
  props: {
    navItems: Object,
    displaySize: Number,
    activeMenuItem: String,
  },
  emits: ["selectedMenuItem"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background: var(--darkest);
   overflow: auto;
}
nav a {
  font-weight: bold;
  color: var(--light);

}

 .nav-desktop .navbar{

  height: 100vh;
}
/*.nav-desktop .navbar ul{
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0;
}
.nav-desktop .navbar ul li{
  padding-left: 2rem;
} */

.nav-mobile {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  z-index: 2;
}
.nav-mobile .navbar {
  padding: 0;
}
.nav-mobile i {
  display: block;
}
.nav-mobile i:hover {
  cursor: pointer;
}
.nav-mobile .logo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 1;
  width: 100%;
  height: 70px;
  font-size: 2.5rem;
  background: rgb(0, 0, 0);
  color: gainsboro;
}
.nav-items {
  width: 100%;

}
.nav-items > ul{
  margin: 0;
  padding: 0;

}
/* .nav-items > ul > li:first-child{
  background: var(--green);
} */

.nav-items > ul > li > a {
  text-decoration: none;
}

.nav-items > ul > li {
  padding: .5rem 3rem;
  text-transform: uppercase;
  list-style: none;
  position: relative;
  z-index: 0;
}
.nav-desktop .nav-items li:hover::after{
  width: 100%;
    transition: all .4s ease-out;
}
.nav-items > ul > li:hover a{
  color: var(--orange-red);
  transition: all .4s ease-out;
}

.nav-items > ul > li:hover{
      cursor: pointer;
}
.nav-mobile .nav-items {
    position: fixed;
    top: 75px;
    left: 0;
    width: 50%;
    height: calc(100vh - 20%);
    /* z-index: 1; */
    background: var(--darkest);
}
.nav-mobile .nav-items li::after{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 95%;
  width: 0;
  z-index: -1;
  background: linear-gradient(270deg, rgba(18, 18, 18, 1) 30%,rgba(33, 95, 89, 1) , rgba(18, 18, 18, 1) 70%); 
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
  background: linear-gradient(270deg, rgba(18, 18, 18, 1) 30%,rgba(33, 95, 89, .5) ); 
  transition: all .4s ease-out;
}
.nav-items > ul > .active-menu-item::after{
  width: 100%;
  background: linear-gradient(270deg, rgba(18, 18, 18, 1) 30%,rgba(33, 95, 89, 1) ); 
}
/* .nav-items > ul > li:first-child::after{
  background: transparent;
} */
.social-icon{
  height: 2.8rem;
  width: 2.8rem;
  border: 2px solid var(--green);
  border-radius: 50%;
  position: relative;
  transition: all .4s ease-out;
}
.social-icon:hover {
  border: 2px solid var(--orange-red);
  transition: all .4s ease-out;
  cursor: pointer;
}
.social-icon:hover i{
  color: var(--orange-red);
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
</style>
