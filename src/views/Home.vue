<template>
  
  <div class="section parallax-group" id="home" ref="home"
  @scroll="mScroll">
     
     <div class="parallax-layer parallax-layer-base title">
        <div></div>
        <div>
          <div class="title-home">
            <div class="title to-right">
              <SplitTitle animation="randomfadein" letterKick=true :animationDelay=2110>
                <h1 class=" light-stroke">Hello,&nbsp;I'm </h1>
              </SplitTitle>
          
            </div>
            <div class="title to-left light">
              <SplitTitle animation="randomfadein"
              letterKick=true :animationDelay=2100>
                  <h1>Attila&nbsp;Mozvik</h1>
              </SplitTitle>
              
            </div>
          </div>
        </div>
        <div></div>
        
      </div>
      <div class="parallax-layer parallax-layer-deep">
        <div></div>
        <div class="subtitle">
          <SplitTitle animation="randomfadein" :animationDelay=2100>
              <h3>Web&nbsp;&amp;&nbsp;Software&nbsp;Developer</h3>
          </SplitTitle>
        </div>
        <div></div>
      </div>
      <div class="parallax-layer parallax-layer-deepest mouse-scroll-down">
        
      <MouseScrollDown></MouseScrollDown>
      </div>
    </div>
</template>

<script>

import SplitTitle from "@/components/SplitTitle.vue"
import MouseScrollDown from "@/components/MouseScrollDown.vue"
// import { reactive } from "vue"
export default {
  name: "Home",
  components: {SplitTitle, MouseScrollDown},
  setup(){
    // const toggleLanguage = reactive( {
    //         text1: "",
    //         text2: "",
    //         icon1: "bi:moon-stars",
    //         icon2: "ic:outline-light-mode",
    //       })
    // const language = inject('language')
    // return {language, toggleLanguage}
  }
};
</script>
<style scoped>
/* #home{
  display: flex;
  flex-direction:row;
}
#home .title{
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
}
#home .subtitle{
  color: var(--primary);
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
} */
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
  
#home .title{
  align-items: flex-end;
} 
.to-right {
  justify-self: flex-end;
  display: inline-block;
  padding-right: .5rem;
}
.to-left {
  justify-self: flex-start;
  padding-left: .5rem;
  display: inline-block;
}
} 
/****************************************************** */
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {
  .title-home{
    display: flex;
  }
}
/****************************************************** */
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
 
}
</style>
