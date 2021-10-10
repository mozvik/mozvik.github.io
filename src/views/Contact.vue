<template>
 <div class="section parallax-group" id="contact">
    <div class="content parallax-layer parallax-layer-base">
      <div class="">
        <h1 class="title light">{{languageData.computed.currentLanguageData().contactView.title}}</h1>
        
      </div> 
      
    </div>
    <div class="parallax-layer parallax-layer-deepest back-title">
      <h1>{{languageData.computed.currentLanguageData().contactView.backTitle}}</h1>
    </div>    
        
        
    <div class="parallax-layer parallax-layer-deep" id="contactbox">
     <div class="c-form">
        <!-- <h3>Get In Touch</h3> -->
        <form action="">
            <label for="name">
              <span><Icon  icon="fa-regular:user" width="20" /></span>
              <input type="text" id="name" :placeholder="languageData.computed.currentLanguageData().contactView.name"></label>
            <label for="email">
              <span><Icon  icon="fa-regular:envelope" width="20" /></span>
              <input type="email" id="email" :placeholder="languageData.computed.currentLanguageData().contactView.email"></label>
            
            <label for="message">
              <span><Icon  icon="fa-solid:pencil-alt" width="20" /></span>
              <textarea  id="message" :placeholder="languageData.computed.currentLanguageData().contactView.message"
              rows="3"></textarea>
            </label>
            <div><Button :options='options'>{{languageData.computed.currentLanguageData().contactView.send}}</Button></div>
            
        </form>
      </div>
    </div>
   
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import Button from "@/components/Button.vue";
import { inject, ref } from "vue"
export default {
  name: "Contact",
  components:{
    Icon,
     Button
  },
   setup(){
    const languageData = inject("Locale")
    const options = ref({
        icon: 'icon-park-outline:send-email',
        anchor: '',
      })
    
    return { languageData, options }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 100vh;
    pointer-events: none;
  }
  #contactbox{
  
  display: grid;
  grid-template-rows: 1fr;
  justify-content: flex-start;
  align-items: end;
  padding-bottom: 15vh;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100vh;
  
}
  .c-form{
    flex-grow: 1;
    padding-bottom: 5rem;
    padding-top: 2.5rem;
  }
  .c-form h3{
    margin-bottom: 3rem;
  }
  form{
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    width: 90vw;
    
  }

  form>label, form input, form textarea{
    width: 100%;
    color: var(--light);
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 18px;
  }
  label{
    margin: .75rem auto;
    position: relative;
  }
  textarea{
    resize: vertical;
    padding: .5rem 0;
  }
  input{
    padding: .5rem 0;
    padding-left: 2.5rem;
    border: none;
    border-bottom: 1px solid var(--light300);
  }
  label>span{
    padding: .5rem;
    position: absolute;
    display: block;
    color: var(--primary);
  }

  textarea{
      padding-left: 2.5rem;
  }
  @media screen and (min-width: 992px) {
form{

    width: 50vw;
  }

  }
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
.content{
    justify-content: flex-start;
    padding-top: 6rem;
    padding-left: 5rem;
    pointer-events: none;
  }
  
  .c-form{
    margin-left: 4rem;
    justify-content: flex-end;
    /* flex-grow: 0;
    margin-top: 12rem;
    
    display: flex;
    flex-direction: row;
    align-items: baseline;
     */
  }
  form{

    width: 40vw;
  }
}
</style>
