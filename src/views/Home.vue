<template>
  
  <div class="section" id="home" ref="home"
  @scroll="mScroll">
    <div class="title title-home">
      <div class="title to-right">
        <SplitTitle 
        animation='randomfadein'
        smoke=true
        animationDelay='1000ms'
        :key="languageData.state.currentLanguage">
          <h1>{{languageData.computed.currentLanguageData().homeView.title1}}</h1>
        </SplitTitle>
    
      </div>
      <div class="title to-left light">
        <SplitTitle 
        animation='randomfadein'
        smoke=true
        animationDelay='1500ms'
        :key="languageData.state.currentLanguage">
            <h1>{{languageData.computed.currentLanguageData().homeView.title2}}</h1>
        </SplitTitle>
        
      </div>
    </div>

    <div class="subtitle">
      <SplitTitle 
      animation='randomfadein'
      smoke=true
      animationDelay='2000ms'
      :key="languageData.state.currentLanguage">
          <h3>{{languageData.computed.currentLanguageData().homeView.subTitle}}</h3>
      </SplitTitle>
    </div>
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
#home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}


.title-home {
  flex-basis: 20%;
}
.subtitle {
  flex-basis: 50%;
}
/**          TABLET                                   **/
@media screen and (min-width: 768px) {
  .subtitle {
  flex-basis: 30%;
}

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
