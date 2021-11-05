<template>
  <div class="section" id="skills">
    <div class="content">
      <div class="section-title">
        <h1 class="title light">{{languageData.computed.currentLanguageData().skillView.title}}</h1>
      </div>
      <div class="section-text">
        <div class="skill-text">
        
        <p>{{languageData.computed.currentLanguageData().skillView.text1}}{{languageData.computed.currentLanguageData().skillView.text2}}{{languageData.computed.currentLanguageData().skillView.text3}}
          
        </p>
        <p>
          {{languageData.computed.currentLanguageData().skillView.text4}}{{languageData.computed.currentLanguageData().skillView.text5}}{{languageData.computed.currentLanguageData().skillView.text6}}
        </p>
        </div> 
        <div id="skillbox">
          <div class="skillbox-container">
            <div class="skill-list">
            
            <ul>
              <li v-for="(item, index) in skillData" :key="item.stack" class="my-skills"
              :style="{ '--delay': ( index * 200 ) + 300 + 'ms' }">
                {{item.stack}}
              </li>
            </ul>
          </div>
        </div>
        </div>
    </div> 
    </div>
    <div class="back-title">
      <h1>{{languageData.computed.currentLanguageData().skillView.backTitle}}</h1>
    </div>    
        
        
   
   
  </div>
    
</template>

<script>
import { reactive, inject } from "vue";

export default {
  name: "Skills",
  components: {
  },
  setup(){
    const skillData = reactive([
        {stack: 'HTML, CSS',
        progress: 0,},
        {stack: 'Vue.js',
        progress: 0,},
        {stack: 'Angular',
        progress: 0,},
        {stack: 'PHP',
        progress: 0,},
        {stack: 'C#', 
        progress: 0,},
    ])
    const languageData = inject("Locale")
    return {skillData, languageData}
  },  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content, .section-text{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 100vh;
  }
#skillbox{
  
  display: grid;
  grid-template-rows: 1fr;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10vh;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100vh;
  
}

.my-skills{
 
  border-bottom: 2px solid var(--primary);
  margin: 1.25rem 0;
  padding: .25rem;
  }
.skill-list{
 
    color: var(--light);
    font-size: 20px;
    font-family: 'Roboto', Helvetica, sans-serif;
    position: relative;
}
#skillbox ul{
  list-style: none;
  width: 50vw;
}
.skill-text .title{
  text-align: center;
}
/**          LAPTOP TABLET                                   **/
@media screen and (min-width: 768px) {
  .section-text{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  .skill-text{
    padding-top: 1rem;
  }
  #skillbox {
    align-items: unset;
  }
}
@media screen and (min-width: 992px) {
.content{
  padding-top: 5rem;
  }
  #skillbox{
  justify-content: flex-end;
  align-items: flex-start;
  flex-basis: 40%;
  padding-top: 2rem;
  /* padding-top: 10%;
  padding-right: 6rem; */
}
#skillbox ul{
  max-width: 400px;
}
.section-text{
    justify-content: space-between;
    padding: 10rem 0 0 0;

  }
  .skill-text{
    padding: 0;
    flex-basis: 40%;
  }
.my-skills-animated{
  
  opacity: 0;
  animation: upward .6s ease var(--delay) 1 forwards;
}
@keyframes upward {
  
  100%{ opacity: 1; 
       
        transform: translateY(-3rem);
        }
}
}
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {

}
</style> 
