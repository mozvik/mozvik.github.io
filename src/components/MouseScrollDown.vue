<template>
  <div class="mouse " 
  :class="setOpacity">
    <div class="mouse-button"></div>
  </div>
</template>

  
<script>
import { inject, ref } from 'vue'

export default {
  name: "MouseScrollDown",
  components: {
    
  },
  setup() {
    const scrollState = inject('scrollState')
    const opacity = ref(1) 
        
    return {
      scrollState,
      opacity
    }
  },
  props:{
  
  },
  
  data() {
    return {
      
      
    };
  },
  computed: {
    setOpacity(){
      return this.scrollState.ypos - window.innerHeight * this.scrollState.activeSection > 50 ? "mouse-fade-out":""
    }
  },
  methods: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mouse{
    opacity: v-bind(setOpacity);
    transition: opacity .25s ease;
    position:relative;
    width: 40px;
    height: 70px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    animation: mbounce 5s ease infinite forwards;
  }
  .mouse::before {
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  border-radius:20px; 
  padding: 5px; 
  background:linear-gradient(0deg,var(--background800),var(--light),var(--background800)); 
  -webkit-mask: 
     linear-gradient(var(--light) 0 0) content-box, 
     linear-gradient(var(--light) 0 0);
  -webkit-mask-composite: destination-out; 
  mask-composite: exclude; 
}
  .mouse-button{
    width: 6px;
    height: 20px;
    transform: translate(-50%,-50%);
    border-radius: 3px;
    background: linear-gradient(0deg,var(--light),var(--background800));
    animation: mbutt 5s ease infinite forwards;
  }
  @keyframes mbounce {
    0%{ transform: translate(0,0);}
    50%{transform: translate(0,30px);}
    100%{transform: translate(0,0);}
  }
  @keyframes mbutt {
    0%{ transform: translate(0,10px);  opacity:.5;  height: 15px;}
    50%{transform: translate(0,20px); opacity:1; height: 20px;}
    100%{transform: translate(0,10px); opacity:.5; height: 15px;}
  }
  .mouse-fade-out{
    opacity: 0;
    transition: opacity .25s ease;
  }
      

/****************************************************** */
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {
  
 
  }
  /****************************************************** */
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  
  
  }
</style>
