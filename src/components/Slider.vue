<template>

  <!-- <vueper-slides
    class="no-shadow"
    :dragging-distance="20"
    :breakpoints="breakpoints"
    :infinite="false"
    :alwaysRefreshClones="true"
    :bulletsOutside="true"
  >
    <vueper-slide
      v-for="(card, i) in languageData.computed.currentLanguageData().portfolioView.cards"
      :key="i"
      :title="card.title"
      :content="card.content"
      class="card-item"
      :style="'background-color: var(--background)'"
    >
      <template #content>
        <div class="item-body">
          <div class="item-title">
            <div class="item-name">{{ card.title }}</div>
            <div class="item-tech">
              <div
                class="item-tech-icons"
                v-for="(tech, j) in card.technology"
                :key="j"
              >
                <Icon :icon="tech.icon" :width="tech.width" />
              </div>
            </div>
          </div>
          <div class="item-brief">{{ card.brief }}</div>
          <div class="item-description">{{ card.description }}</div>
        </div>
        <div class="item-image">
          <img :src="displaySize < 2 ? '' : card.imageDesktop" alt="" />
        </div>

        <div class="item-buttons">
          <div class="item-demo">
            <Button :options="card.buttonDemo">{{card.buttonDemo.text}}</Button>
          </div>
          <div class="item-code">
            <span></span><Button :options="card.buttonCode">{{card.buttonCode.text}}</Button>
          </div>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides> -->
  <div id="project-outer">
    <!-- <div id="project-prev" v-if="displaySize > 2">
      <img :src="activeProject.prev.imageDesktop" alt="" ref="previous">
      <div>{{activeProject.prev.title}}</div>
      <div>{{activeProject.prev.brief}}</div>
    </div> -->
    <div id="project-active">
      <img :src="activeProject.current.imageDesktop" alt="" v-if="displaySize > 2" ref="current" @animationend="animationEnd">
      <div>{{activeProject.current.title}}</div>
      <div>{{activeProject.current.brief}}</div>
    </div>
    <!-- <div id="project-next" v-if="displaySize > 2">
      <img :src="activeProject.next.imageDesktop" alt="" ref="next">
      <div>{{activeProject.next.title}}</div>
      <div>{{activeProject.next.brief}}</div>
    </div> -->
    <div id="arrows" >
      <div id="arrow-prev">
        <Icon icon="carbon:previous-filled" width="60" @click="prevProject"/>
      </div>

      <div id="arrow-next">
        <Icon icon="carbon:next-filled" width="60" @click="nextProject"/>
      </div>

    </div>
  </div>
</template>

<script>
// import { VueperSlides, VueperSlide } from "vueperslides";
// import "vueperslides/dist/vueperslides.css";
import { Icon } from "@iconify/vue";
// import Button from "@/components/Button.vue";
import { inject, ref, reactive, computed } from "vue"
export default {
  name: "Slider",
  components: { 
    // VueperSlides, 
    // VueperSlide, 
     Icon,
    // Button 
    },
  setup(){
    const languageData = inject("Locale")
    // const breakpoints = {
    //     1980: {
    //       fixedHeight: "400px",
    //     },
    //     1200: {

    //       slideRatio: 2/3,
    //     },
    //     992: {
    //       slideRatio: 2/3,
    //       bulletsOutside: true,
    //       fixedHeight: "480px",
    //     },
    //     600: {
    //       arrows: true,
    //       bulletsOutside: true,
    //       fixedHeight: "480px",
    //     },
    //   }
    const activeProject = reactive({
      index: 0,
      current: computed(() => { return languageData.computed.currentLanguageData().portfolioView.cards[activeProject.index]}
      ),
      prev: computed(() => { 
        if(activeProject.index <= 0){
          return languageData.computed.currentLanguageData().portfolioView.cards[languageData.computed.currentLanguageData().portfolioView.cards.length - 1]}
        else return languageData.computed.currentLanguageData().portfolioView.cards[activeProject.index - 1]
      }),
      next: computed(() => { 
        if((activeProject.index + 1 >= languageData.computed.currentLanguageData().portfolioView.cards.length)){
          return languageData.computed.currentLanguageData().portfolioView.cards[0]}
        else return languageData.computed.currentLanguageData().portfolioView.cards[activeProject.index + 1]
      })
    })
    const activeBgImage = ref('background-image: url(' + activeProject.current.imageDesktop + ')')
    const current = ref(null)
    const previous = ref(null)
    const next = ref(null)
    const nextButtonActive = ref(true)
    
    function nextProject(){
      if((activeProject.index + 1) >= languageData.computed.currentLanguageData().portfolioView.cards.length){
        activeProject.index = 0
      }
      else activeProject.index++

      moveToLeft()
    }
    function prevProject(){
      if(activeProject.index <= 0){
        activeProject.index = languageData.computed.currentLanguageData().portfolioView.cards.length - 1
      }
      else activeProject.index--
    }
    function moveToLeft(){
      previous.value.classList.add("move-to-left")
      current.value.classList.add("move-to-left")
      next.value.classList.add("move-to-left")
    }
    function animationEnd(e){
      if (e.animationName.indexOf('movetoleft') != -1 ) {
        e.target.classList.remove("move-to-left")
        e.target.classList.add("moving")
        e.target.classList.add("move-from-right")
        previous.value.classList.remove("move-to-left")
        previous.value.classList.add("moving")
        previous.value.classList.add("move-from-right")
        next.value.classList.remove("move-to-left")
        next.value.classList.add("moving")
        next.value.classList.add("move-from-right")
      }
      if (e.animationName.indexOf('movefromright') != -1 ) {
        e.target.classList.remove("move-from-right")
        e.target.classList.remove("moving")
        previous.value.classList.remove("move-from-right")
        previous.value.classList.remove("moving")
        next.value.classList.remove("move-from-right")
        next.value.classList.remove("moving")
      }
      
    }
    return { current, previous, next, languageData, activeProject, activeBgImage, nextProject, prevProject, animationEnd, nextButtonActive }
  },
  props: {
    displaySize: {
      type: Number,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#project-outer{
  border: 1px solid white;
  width: 100%;
  height: 50vh;
  overflow-y: scroll;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#project-active{
  border: 1px solid red;
  width: 100%;
  height: 100%;
  
}
#arrows{
  border: 1px solid green;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#arrows div:hover{
  cursor: pointer;
}
/****************************************************** */
/**          TABLET                                   **/
@media screen and (min-width: 768px) {
  
}
/****************************************************** */
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {
 #project-outer{
   position: relative;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   height: auto;
   min-height:50vh;
 }
 #project-active{
   width: 80%;
   height: 100%;
   min-height:50vh;
   /* flex-basis: 300px; */
 }
 #project-active>img{
   position: absolute;
   width: auto;
   height: auto; 
   object-fit: cover;
   z-index: -1;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
 }
 #project-prev, #project-next, #project-active {
   position: relative;
   overflow: hidden;
   /* background-repeat: no-repeat;
   background-position: 10% ;
   background-size: 300% 100%; */
 }
.left-card{
  
}
.center-card{

}
.right-card{

}


 #arrows{
   position: absolute;
   width: 100%;
   bottom: 0;
 }
 #project-prev, #project-next{
   border: 1px solid yellow;
   width: 150px;
   height: 50%;
 }
  .moving{
    opacity: 0;
  }
 .move-to-left{
   animation: movetoleft 300ms 1 ease-in-out;
 }
 @keyframes movetoleft {
   80%{
    transform: translateX(-100%);
   }
   100%{
     opacity: 0;
   } 
   
 }
 .move-from-right{
   opacity: 0;
   animation: movefromright 300ms 1 ease-in-out;
 }
 @keyframes movefromright {
    0%{
    transform: translateX(100%);
    opacity: 0;
   }
   30%{
    transform: translateX(100%);
    opacity: 0;
   }
   70%{
     transform: translateX(0);
   }
   100%{
     opacity: 1;
   } 
 }
}
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  
}
</style>
