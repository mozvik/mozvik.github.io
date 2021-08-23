<template>
   <div class="empty" v-if="displaySize < 2"></div>
   <nav :class="[displaySize < 2 ? 'nav-mobile':'']">
    <div class="navbar">
      <div class="logo">
        <div><img src="https://picsum.photos/50/50" alt="logo" width="50" height="50"></div>
        <div v-if="menuActive"><i class="fas fa-times" @click="menuActive = !menuActive"></i></div>
        <div v-else><i class="fas fa-bars" @click="menuActive = !menuActive"></i></div>
      </div>
    
      <div class="nav-items" v-if="menuActive || displaySize > 1">
        <ul>
            <li v-for="item in navItems" class
                :key="item"
                :class="{'active-menu-item': (item.id == activeMenuItem)}"
                @click.prevent="$emit('selectedMenuItem', item.id)">
                <a :href="'#'+item.id">{{item.name}}</a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data () {
    return {
      menuActive: false,
    }
  },
  props: {
    navItems: Object,
    displaySize: Number,
    activeMenuItem: Number,
  },
  emits: ["selectedMenuItem"]
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
   position: fixed; 
  z-index: 1;
  top: 0;
  left: 0;
  height: auto;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}


.nav-mobile{
  width: 100%;
}
.nav-mobile i{
  display: block;
}
.nav-mobile i:hover{
  cursor: pointer;
}
.nav-mobile .logo{
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

</style>
