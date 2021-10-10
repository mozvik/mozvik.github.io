<template>
  
  <div class="section parallax-group" id="home" ref="home"
  @scroll="mScroll">
     
     <div class="parallax-layer parallax-layer-base title" >
        <div></div>
        <div>
          <div class="title-home">
            <div class="title to-right">
              <SplitTitle animation="randomfadein" letterKick=true :animationDelay=2110
              :key="languageData.state.currentLanguage">
                <h1 class="light-stroke">{{languageData.computed.currentLanguageData().homeView.title1}}</h1>
              </SplitTitle>
          
            </div>
            <div class="title to-left light">
              <SplitTitle animation="randomfadein"
              letterKick=true :animationDelay=2100
              :key="languageData.state.currentLanguage">
                  <h1>{{languageData.computed.currentLanguageData().homeView.title2}}</h1>
              </SplitTitle>
              
            </div>
          </div>
        </div>
        <div></div>
        
     </div>
     <div class="parallax-layer parallax-layer-deep">
        <div></div>
        <div class="subtitle">
          <SplitTitle animation="randomfadein" :animationDelay=2100
          :key="languageData.state.currentLanguage">
              <h3>{{languageData.computed.currentLanguageData().homeView.subTitle}}</h3>
          </SplitTitle>
        </div>
        <div></div>
     </div>
     <!-- <div class="parallax-layer parallax-layer-deepest" style="background-image: url('/ht2.png'); background-size: cover; background-position: top; background-repeat: no-repeat; opacity: 1;">
      </div> -->
    </div>
</template>

<script>

import SplitTitle from "@/components/SplitTitle.vue"
import { inject } from "vue"

export default {
  name: "Home",
  components: {SplitTitle},
  setup(){
    const languageData = inject("Locale")
    return { languageData }
  }
};
</script>
<style scoped>

.title-home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.subtitle {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
}
/**          TABLET                                   **/
@media screen and (min-width: 768px) {
  

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
