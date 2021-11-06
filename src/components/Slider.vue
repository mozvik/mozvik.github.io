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
    <div id="project-prev" v-if="displaySize > 2">
      <div>{{activeProject.prev.title}}</div>
      <div>{{activeProject.prev.brief}}</div>
    </div>
    <div id="project-inner">
      <div>{{activeProject.current.title}}</div>
      <div>{{activeProject.current.brief}}</div>
    </div>
    <div id="project-next" v-if="displaySize > 2">
      <div>{{activeProject.next.title}}</div>
      <div>{{activeProject.next.brief}}</div>
    </div>
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
import { inject, reactive, computed } from "vue"
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

    function nextProject(){
      if((activeProject.index + 1) >= languageData.computed.currentLanguageData().portfolioView.cards.length){
        activeProject.index = 0
      }
      else activeProject.index++
    }
    function prevProject(){
      if(activeProject.index <= 0){
        activeProject.index = languageData.computed.currentLanguageData().portfolioView.cards.length - 1
      }
      else activeProject.index--
    }

    // console.log('activeProject.value :>> ', activeProject.data);
    return {  languageData, activeProject, nextProject, prevProject }
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
#project-inner{
  border: 1px solid red;
  width: 100%;
  height: auto;
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
 }
 #project-inner{
   width: 300px;
   height: 100%;
   /* margin: 0 auto; */
   flex-basis: 300px;
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
}
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  
}
</style>
