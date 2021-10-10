<template>
  <div  class="section parallax-group" id="about" >

    <div class="content parallax-layer parallax-layer-base">
      <div class="img">
        <img src="/enkicsi.png" alt="" class="" >
      </div>
      <div class="about-text" >
        <h2 class="title light">{{languageData.computed.currentLanguageData().aboutView.title}}</h2>
      
        <p class="light300">
          {{languageData.computed.currentLanguageData().aboutView.text1}}
        </p>
      
        <p class="light300">
          {{languageData.computed.currentLanguageData().aboutView.text2}}
        </p>
         <p class="light300">
          {{languageData.computed.currentLanguageData().aboutView.text3}}
        </p>
        <div class="cv-button"><ButtonDownload >{{languageData.computed.currentLanguageData().aboutView.dlText}}</ButtonDownload></div>
      </div>
      
      
    </div>

    <div class="parallax-layer parallax-layer-deepest back-title">
      <h1>{{languageData.computed.currentLanguageData().aboutView.backTitle}}</h1>
    </div>
     
  </div>
</template>

<script>
import ButtonDownload from "@/components/ButtonDownload.vue";
import { inject } from "vue"
export default {
  components: { ButtonDownload },
  name: "About",
  setup(){
    const languageData = inject("Locale")
    return { languageData }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .content{
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-around;
   padding-bottom: 15vh;
   padding-left: 1rem;
   padding-right: 1rem;
   height: 100vh;
  }
 
  /**          LAPTOP TABLET                                   **/
@media screen and (min-width: 768px) {
.content{
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
   padding-bottom: 0vh;
   padding-left: 1rem;
   padding-right: 1rem;
   height: 100vh;
  }
  .img {
    padding-right: 3rem;
  }
  .cv-button{
    padding-top: 1rem;
  }
}
 
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 992px) {
 .about-text{
   width: 50%;
 }
  
}
</style>
