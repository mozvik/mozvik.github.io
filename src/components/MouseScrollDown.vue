<template>
  <div class="mouse " :class="scrollDown"
  >{{scrollDown}}
    <div class="mouse-button"></div>
  </div>
</template>

<script>

export default {
  name: "MouseScrollDown",
  components: {
   
  },
  data() {
    return {
      scrollDown: 'mouse-fade-out',
      
    };
  },
  props: {
     
    },
  mounted() {
    document.addEventListener("mousewheel", function(event){
  if(event.wheelDelta >= 0){
    this.scrollDown = '111'
  }else{
    this.scrollDown = 'mouse-fade-out'
    console.log('object :>> ', this.scrollDown);
  }
})
  },
  methods: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mouse{
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
    transition: opacity .5s ease;
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
