<template>
  <button>
     <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonDownload",
  data () {
    return {
      
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
button {
  border-color: #8e44ad;
  border-color: red;
  border-radius: 5px;
  color: #8e44ad;
  position: relative;
  overflow: hidden;
  z-index: 1;
  -webkit-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
  margin: 20px;
  padding: 1.2em 2.8em;
} 
button::after{
  content: '';
  position: absolute;
  display: block;
  border-radius: 50%;
  top: -150%;
  left: 0;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 0%;
  height: 400%;
  background: var(--green);
  z-index: -1;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
}
button:hover{
color: #fff;
}
button:hover:after {
  width: 230%;
  left: 50%;
  top: -150%;
  height: 400%;
   -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
}

</style>
