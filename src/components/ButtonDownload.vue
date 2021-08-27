<template>
  <button @mouseover="moveIcon"
          @mouseleave="hover = false"
          :class="{ active: hover }">
          <span class="dlbtn-icon"><Icon icon="uiw:login" width="48" /></span>
          <span class="dlbtn-text">
            <slot></slot>
          </span>
          
  </button>
  <span></span>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
  name: "ButtonDownload",
  components:{
    Icon,
  },
  data () {
    return {
      hover: false,
    }
  },
  props: {
    navItems: Object,
    displaySize: Number,
    activeMenuItem: Number,
  },
  emits: ["selectedMenuItem"],
  methods: {
   moveIcon(e){
     const span = e.target.querySelector('i')
     if (span) {
       span.classList.remove('reseticon')
     span.classList.add('downwards')
     }
     
     console.log('on :>> ', span);
   },
   resetIcon(e){
     e.target.querySelector('i').classList.remove('downwards')
     e.target.querySelector('i').classList.add('reseticon')
    console.log('out :>> ', e.target.querySelector('i'));
   }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 24px;
  border-radius: 3px;
  border: 3px solid var(--light);
  color: var(--light);
  overflow: hidden;
  transition: color 300ms ease-in-out;
  margin: 0 auto;
  padding: 1.0em 4.8em;
   display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;
} 

button:hover{
color: var(--darkest);
background: var(--light);
border: 3px solid var(--light);
cursor: pointer;
transition: all 300ms ease-in-out;
}
button > .dlbtn-icon{
  color: var(--green);
  transform: translate(-.5rem, 7rem);
  display: inline-block;
  text-align: left;
  font-size: 24px;
  transition: all 300ms ease-in-out;
}
button:hover > .dlbtn-icon{
  margin: 0;
  padding: 0;
  color: var(--green);
  transform: translate(-.5rem, 0);
  transition: all 300ms ease-in-out;
}
button > .dlbtn-text{
  color: var(--light);
  transform: translate(-1rem, 0rem);
  display: inline-block;
  text-align: center;
  font-size: 24px;
  transition: all 300ms ease-in-out;
}
button:hover > .dlbtn-text{
  color: var(--darkest);
  transform: translate(1.5rem, 0);
  transition: all 300ms ease-in-out;
}
</style>
