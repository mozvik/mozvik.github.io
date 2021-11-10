<template>
  <!-- <div v-if="displaySize<3" class="frame-mobile">
    <slot></slot>
  </div> -->
  <div class="frame-desktop" ref="mySelf"
  :class="status === 'entering' ? 'entering':'leaving'"
  :style="[myStyle.fromX , myStyle.fromY, myStyle.toX]">
  
    <slot></slot>
  </div>
</template>

<script>

import { ref, onMounted, reactive, computed } from "vue";
export default {
  name: "Frame",
  components: { 

    },
  props: {
    xDirection: {type: String,
      default: 'right'
    },
  },
  setup(props) {
    const observer = ref(null)
    const mySelf = ref(null)
    const status = ref(null)
    const myStyle = reactive({
      state: computed(() => {
        return status.value==='entering' ? 1:-1
      }),
      xDirection: computed(() => {
        return props.xDirection==='right' ? 1:-1
      }),
      fromX: computed(() => {
        return '--fromX: ' + Math.floor(Math.random() * 10) * myStyle.xDirection + 'px;'}),
      fromY: computed(() => { 
        return '--fromY: ' + (Math.floor(Math.random() * 20) + 10) * myStyle.state + 'px;'
      }),

      toX: computed(() => {
        return '--toX: ' + Math.floor(Math.random() * 10) * myStyle.xDirection + 'px;'}),
      toY: '',
      fromDeg: '',
      toDeg: '',
      finalX: '',
      finalY: '',
      finalDeg: '',
    })
     onMounted(() => {
      observer.value = new IntersectionObserver(intersection, {
        threshold: [.05],
      })
      observer.value.observe(mySelf.value)
      
    })
    
    const intersection = (entries) => {
        const active = entries.filter((e) => e.isIntersecting ); 
        const inActive = entries.filter((e) => !e.isIntersecting ); 
        if (inActive.length) status.value = 'leaving'
       if (active.length) status.value = 'entering'
       console.log('myStyle :>> ', myStyle, myStyle.fromX);
    }
   
    return { mySelf, status, myStyle
       
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 992px) {
  .frame-desktop{
   background: var(--secondary);
   color: var(--dark);
   padding: 1rem;
   width: 100%;
   
   height: auto;
   
   transition: transform 0.35s ease-in-out;
   transform-origin: top right;
   border-radius: 16px;
   box-shadow: 7px 7px 7px 5px var(--shadow);
   }
   .entering{
    animation: entering 2.0s linear forwards;
    transform-origin: 50% 50% ;
  }
  .btitle-float-down{
    animation: btitlefloatdown 0.6s linear forwards;
    /* transform: translateY(50px);
    transition: transform 2s ease-in-out; */
  }
  @keyframes entering {
  0% {opacity: 0; transform: translate(var(--fromX),var(--fromY)) rotate(0deg)}
  10% {opacity:1; transform: translate(var(--fromX),0) rotate(2deg)} 
  20% {opacity:1; transform: translate(var(--toX),-25px) rotate(4deg)}
  100% {opacity:1; transform: translate(25px,-5px) rotate(3deg)}
  }
  @keyframes btitlefloatdown {
  0% {opacity:0; transform: translateY(-125px)}
  25% {opacity:0; transform: translateY(-125px)}
  75% {opacity:.05; transform: translateY(25px)}
  100% {opacity:.05; transform: translateY(25px)}
  }
}

</style>
