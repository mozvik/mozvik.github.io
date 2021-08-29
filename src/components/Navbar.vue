<template>
  <nav :class="[displaySize < 2 ? 'nav-mobile' : '']" class="col-sm-auto col-md-3 col-lg-2">
    <div class="navbar row">
      <div class="logo">
        <div>
          <img
            src="https://picsum.photos/50/50"
            alt="logo"
            width="50"
            height="50"
          />
        </div>

        <div>
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
      <div class="nav-items" v-if="menuActive || displaySize > 1">
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
    activeMenuItem: Number,
  },
  emits: ["selectedMenuItem"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  /* position: sticky;
  z-index: 1;
  top: 0;
  width: 10%;
  display: flex;
  flex-direction: row;
  flex-basis: 20%; */
  /* height: 100%; */
  background: var(--darkest);
}
nav a {
  font-weight: bold;
  color: var(--light);
}
nav a:hover {
  color: var(--orange-red);
}

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
.nav-items > ul > li > a {
  text-decoration: none;
}
.nav-items > ul > li > a:hover {
}
.nav-items > ul > li {
  padding: 1rem;
  text-transform: uppercase;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
