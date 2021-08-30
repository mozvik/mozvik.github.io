<template>
  <nav :class="[displaySize < 2 ? 'nav-mobile' : 'nav-desktop']" class="col-sm-auto col-md-3 col-lg-2">
    <div class="navbar d-md-flex flex-md-column align-items-md-start justify-content-md-between">
      <div class="logo flex-shrink-1 align-self-md-center">
        <div>
          <img class="img-fluid"
            src="https://picsum.photos/150/150"
            alt="logo"
            :width="displaySize < 2 ? 50 : 150"
            :height="displaySize < 2 ? 50 : 150"
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
      <transition name="fade">
      <div class="nav-items pb-5" v-if="menuActive || displaySize > 1">
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
      </div>
      </transition>
      <div class="social align-self-md-center">
        <div>Soc logos</div>
        <div>{{activeMenuItem}}</div>
      </div>
      
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
  width: 100%;
  height: 70px;
  font-size: 3.6rem;
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

}
.nav-items > ul > li:hover::after{
  width: 100%;
  transition: width .4s ease-out;
}
.nav-items > ul > li:hover a{
  color: white;
}

.nav-items > ul > li:hover{
      cursor: pointer;
}
.nav-items > ul > li::after{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  z-index: 1;
    background-color: rgba(0, 135, 122, .5);
    transition: width .4s ease-out;
}
.nav-items > ul > .active-menu-item::after{
  width: 100%;
}
/* .nav-items > ul > li:first-child::after{
  background: transparent;
} */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
