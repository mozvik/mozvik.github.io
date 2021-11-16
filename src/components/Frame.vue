<template>
  <!-- <div v-if="displaySize<3" class="frame-mobile">
    <slot></slot>
  </div> -->
  <div class="frame-desktop" ref="mySelf"
  :class="[status === 'fromTop' ? 'entering-from-top':'', 
  status === 'fromBottom' ? 'entering-from-bottom':'']"
  :style="[myStyle.fromX , myStyle.fromY, myStyle.toX, myStyle.toY]">
  
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
        return status.value==='entering-from-top' ? -1:1
              }),
      xDirection: computed(() => {
        if (props.xDirection==='right') return 1
        if (props.xDirection==='left') return -1
        if (props.xDirection==='center') return 0
        return props.xDirection==='fade' ? 0:null
      }),
      fromX: computed(() => {
        return '--fromX: ' + Math.floor(Math.random() * 10) * myStyle.xDirection + 'px;'}),
      fromY: computed(() => { 
        return '--fromY: ' + (Math.floor(Math.random() * 20) + 30) * myStyle.state + 'px;'
      }),

      toX: computed(() => {
        return '--toX: ' + (Math.floor(Math.random() * 10) + 20) * myStyle.xDirection + 'px;'}),
      toY:  computed(() => { 
        return '--toY: ' + (Math.floor(Math.random() * 5) + 5) * myStyle.state + 'px;'
      }),
      deg: computed(() => { 
        return '--deg: ' + (Math.floor(Math.random() * 3) + 2) * myStyle.xDirection + 'deg;'
      }),
    })
     onMounted(() => {
      observer.value = new IntersectionObserver(intersection, {
        threshold: [.1],
      })
      observer.value.observe(mySelf.value)
      
    })
    
    const intersection = (entries) => {
        const active = entries.filter((e) => e.isIntersecting ); 
        const inActive = entries.filter((e) => !e.isIntersecting ); 
        if (inActive.length) status.value = ''
       if (active.length){ 
         if(active[0].boundingClientRect.y >= 0){
           status.value = 'fromTop'
          }
          else if(active[0].boundingClientRect.y < 0) status.value = 'fromBottom'
         
         }
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
  opacity: 0;
   height: auto;
   
   transition: transform 0.35s ease-in-out;
   /* transform-origin: top right; */
   /* transform-origin: center center; */
   border-radius: 16px;
   box-shadow: 7px 7px 7px 5px var(--shadow);
   }
   .entering-from-top{
     opacity: 0;
    animation: entering-from-top 1.5s ease forwards;
    transform-origin: 50% 50% ;
  }
  .entering-from-bottom{

    animation: entering-from-bottom 1.5s ease forwards;
    transform-origin: 50% 50% ;
  }
  
  @keyframes entering-from-top {
  0% {opacity: 0; transform: translate(var(--fromX),var(--fromY))}
  15% {opacity: 1;}
  100% {opacity:1; transform: translate(var(--toX),var(--toY))} 
  }
  @keyframes entering-from-bottom {
 
  0% {opacity:0; transform: translate(var(--toX),var(--toY))} 
  15% {opacity: 1;}
  100% {opacity: 1; transform: translate(var(--fromX),var(--fromY))} 
  }
  
}

</style>
