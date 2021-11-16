<template>
  <div class="section" id="portfolio">
    
    <div class="content">
      <div class="">
        <h1 class="title light">{{languageData.computed.currentLanguageData().portfolioView.title}}</h1>
        <h3>
          {{languageData.computed.currentLanguageData().portfolioView.text1}}
        </h3>
        
      </div>
      <div class="projects-container">
        <!-- <Slider :displaySize="displaySize"></Slider> -->
        <FloatingFrame :displaySize="displaySize"></FloatingFrame> 
      </div>
    </div>
    
    <div class="back-title" v-if="languageData">
      <h1>{{languageData.computed.currentLanguageData().portfolioView.backTitle}}</h1>
    </div>  
   
  </div>
</template>

<script>
import { inject } from "vue"
import FloatingFrame from "@/components/FloatingFrame.vue";

export default {
  name: "Portfolio",
   components:{
    FloatingFrame
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
    align-items: center;
    justify-content: flex-start;
   
    margin: 0 1rem;
    }
  .projects-container{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
    
  /**          LAPTOP TABLET                                   **/
@media screen and (min-width: 992px) {
#portfolio .content{
    
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   height: 100vh;
   /* padding: 0 1rem; */
   /* padding-bottom: 1rem; */
  }
  .title{
    padding-top: 5rem;
  }

}
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  #portfolio{
  height: 100vh;
}
   #portfolio .content{
    
     /* padding-left: 5.5rem;
     padding-right: 5.5rem; */
   }
  
  .card-item{
    width: 100%;
    max-width: 950px;
    margin: 0 auto;
  }
 
}
</style>
