<template>
  <div class="section parallax-group" id="portfolio">
    
    <div class="content parallax-layer parallax-layer-base">
      <div class="">
        <h1 class="title light">{{languageData.computed.currentLanguageData().portfolioView.title}}</h1>
        <h3>
          {{languageData.computed.currentLanguageData().portfolioView.text1}}
        </h3>
        
      </div>
      <div class="projects-container">
        <Slider :displaySize="displaySize"></Slider>
      </div>
    </div>
    
    <div class="parallax-layer parallax-layer-deepest back-title" v-if="languageData">
      <h1>{{languageData.computed.currentLanguageData().portfolioView.backTitle}}</h1>
    </div>  
   
  </div>
</template>

<script>
import { inject } from "vue"
import Slider from "@/components/Slider.vue";

export default {
  name: "Portfolio",
   components:{
    Slider
   },
  props: {
     displaySize: Number,
  },
  setup(){
    const languageData = inject("Locale")
    return { languageData }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#portfolio{
  height: 100vh;
  /* pointer-events: none;   */
} 

#portfolio .content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
    /* height: 100vh; */
    }
  .projects-container{
    width: 100%;
    height: auto;
    padding-top: 2.5rem;
    
    }
    
  /**          LAPTOP TABLET                                   **/
@media screen and (min-width: 992px) {
#portfolio .content{
    
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   height: 100vh;
   padding: 0 1rem;
   /* padding-bottom: 1rem; */
  }

}
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  #portfolio{
  height: 100vh;
}
   #portfolio .content{
    
     padding-left: 5.5rem;
     padding-right: 5.5rem;
   }
  
  #portfolio .content .projects-container, .card-item{
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
  }
}
</style>
