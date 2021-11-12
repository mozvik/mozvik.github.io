<template>
  <div  class="section" id="about" >

    <div class="content">
      <div class="section-title">
        <h2 class="title light">{{languageData.computed.currentLanguageData().aboutView.title}}</h2>
      </div>
      <div class="section-text">
        
          <div class="img">
            <img src="/minime.jpg" alt="" class="" >
          </div>
        

       
          <div class="about-text" > 
          <Frame>
              <p class="light100">
                {{languageData.computed.currentLanguageData().aboutView.text1}}
              </p>
              <p class="light100">
                {{languageData.computed.currentLanguageData().aboutView.text2}}
              </p>
               <p class="light100">
                {{languageData.computed.currentLanguageData().aboutView.text3}}
              </p>
              <div class="cv-button"><ButtonDownload >{{languageData.computed.currentLanguageData().aboutView.dlText}}</ButtonDownload></div> </Frame>
          </div>
       
      </div>

    
      <div class="back-title">
        <h1>{{languageData.computed.currentLanguageData().aboutView.backTitle}}</h1>
      </div>
    </div> 
  </div>
</template>

<script>
import ButtonDownload from "@/components/ButtonDownload.vue";
import Frame from "@/components/Frame.vue";
import { inject } from "vue"
export default {
  components: { ButtonDownload, Frame },
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
    justify-content: flex-start;
    align-items: center;
    text-align: justify;
    width: 100%;
    height: 100vh; 
    padding: 0 1rem;
    
  }
  .about-text{
    /* align-items: flex-start; */
  }
  .img img {
    border: 4px solid var(--light);
    border-radius: 50%;box-shadow: 7px 7px 7px 5px var(--shadow);
  }
  .img {
    margin: 0 auto;
    flex-basis: 50%;
    
    width: 220px;
    height: 220px;
    /* max-width:200px; */
    overflow: hidden;
    flex-shrink: 0;
    text-align: center;
  }
  .cv-button{
    width: 100%; 
  }
 
  /**          LAPTOP TABLET                                   **/
@media screen and (min-width: 768px) {
  .section-title{
    /* align-self: flex-start; */

    /* padding-left: 4.5rem; */
  }
  .section-text{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .img {
    margin: 0;
    flex-basis: 50%;
    margin-right: 2rem;
    max-width: 50%;
    max-height: 450px;
    text-align:unset;
  }
  .about-text{
    flex-basis: 50%;
    margin-left: 2rem;
    max-width: 50%;
    max-height: 450px;
  }
   
}

/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 992px) {
  .content{
    padding-top: 5rem;
    /* align-items: flex-start; */
  }
  
  .section-text{
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-top: 5rem;
  }
  .img { 
    margin: 0;
    flex-basis: auto; 
    text-align:unset;
    margin-bottom: 5rem;
  }
  .about-text{
    margin: 0;
    flex-basis: auto;
    max-width: 650px; 
    max-height: 450px;
    
  }
  
}
@media screen and (min-width: 1200px) {
  .section-text{
    flex-direction: row;
    align-items: flex-start;
    margin-top: 10rem;
    width: 100%;
  }
  .section-title{
    align-self: flex-start;
  }
  .img{
    flex-basis: 30%; 
  }  
  }
</style>
