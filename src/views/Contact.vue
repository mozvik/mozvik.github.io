<template>
 <div class="section" id="contact">
    <h1 class="title light">{{languageData.computed.currentLanguageData().contactView.title}}</h1>
    <div class="c-form">
      <Frame xDirection="center">
        <form method="POST"
        @submit.prevent="sendEmail">
            <div class="subtitle" v-if="loading==''">{{languageData.computed.currentLanguageData().contactView.subtitle}}</div>
            <div class="subtitle" v-else-if="loading=='sending'">{{languageData.computed.currentLanguageData().contactView.delivering}}</div>
            <div class="subtitle" v-else-if="loading=='sent'">{{languageData.computed.currentLanguageData().contactView.delivered}}</div>
            <div class="subtitle" v-else>{{languageData.computed.currentLanguageData().contactView.error}}</div>
            <label for="name">
              <span><Icon  icon="fa-regular:user" width="20" /></span>
              <input type="text" id="name" name="name" :placeholder="languageData.computed.currentLanguageData().contactView.name" 
              v-model="nameMsg"
              >
              </label>
            <label for="email">
              <span><Icon  icon="fa-regular:envelope" width="20" /></span>
              <input type="email" id="email" name="_replyto" :placeholder="languageData.computed.currentLanguageData().contactView.email"
              v-model="emailMsg"
              ></label>
        
            <label for="message">
              <span><Icon  icon="fa-solid:pencil-alt" width="20" /></span>
              <textarea  id="message" name="message" :placeholder="languageData.computed.currentLanguageData().contactView.message"
              rows="3"
              v-model="messageMsg"
              ></textarea>
            </label>
            <div class="s-button"><Button :options='options'
            :isDisabled="nameMsg =='' || 
            emailMsg == '' || messageMsg == '' ?true:false"
            >{{languageData.computed.currentLanguageData().contactView.send}}</Button></div>
        
        </form>
      </Frame>
    </div>

    <div class="back-title">
      <h1>{{languageData.computed.currentLanguageData().contactView.backTitle}}</h1>
    </div>   
  </div>
</template>

<script>
import axios from 'axios';
import { Icon } from "@iconify/vue";
import Button from "@/components/Button.vue";
import Frame from "@/components/Frame.vue";
import { inject, ref } from "vue"
export default {
  name: "Contact",
  components:{
     Icon,
     Button,
     Frame
  },
  setup(){
    const languageData = inject("Locale")
    const options = ref({
        icon: 'icon-park-outline:send-email',
        anchor: '',
      })
    const nameMsg = ref('')
    const emailMsg = ref('')
    const messageMsg = ref('')
    const loading = ref('')
    
    function sendEmail(){
      if (nameMsg.value == '' || emailMsg.value == '' || messageMsg.value == '') return
    loading.value = 'sending'      
    axios.post('https://formspree.io/f/mdoyqwew',{
    name: nameMsg.value,          
    from: emailMsg.value,          
    _subject: `${nameMsg.value} | Friendly Message from Github Page`,
    message: messageMsg.value,
    },
    
    ).then((response) => {
   nameMsg.value = '';
   emailMsg.value = '';
   messageMsg.value = '';
   loading.value = 'sent';  
   response
   //i redirect my app to '/success' route once payload completed.  
   this.$router.push({ path: '/success' });      
    }).catch((error) => {        
      if (error.response) {    
         loading.value = error.response.data     
        }
    })
    
    
    
    
    }
   
    return { languageData, options, sendEmail, 
    nameMsg, emailMsg, messageMsg, loading}
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #contact{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: justify;
    height: 100vh;
    /* overflow: hidden; */
  }
  #contactbox{
  
  display: grid;
  grid-template-rows: 1fr;
  justify-content: flex-start;
  align-items: end;
   
}
.s-button{
    /* width: 100%;  */
 
  }
  .c-form{
    /* flex-grow: 1; */
    padding-bottom: 5rem;
    padding-top: 2.5rem;
    width: 100%;
  }
  .c-form h3{
    margin-bottom: 3rem;
  }
  form{
    padding: 0 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    /* width: 100vw; */
    
  }
  form input, form textarea{
    border-radius: 16px;
    border: solid 1px transparent;
  }
  form input:focus, form textarea:focus{
    border: solid 1px var(--primary);
  }
  form>label, form input, form textarea{
    width: 100%;
    color: var(--dark);
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 18px;
  }
  label{
    margin: .5rem auto;
    position: relative;
  }
  input:focus, textarea:focus{
    outline: var(--background) auto 1px;
  }
  ::placeholder { 
  color: var(--primary);
  font-style: italic;
  text-transform: uppercase;
  opacity: .7; 
}
  textarea{
    resize: vertical;
    padding: .5rem 0;
    border: 1px solid var(--light);
    resize: none;
  }
  input{
    padding: .5rem 0;
    padding-left: 2.5rem;
    border: none;
    border-bottom: 1px solid var(--background);
  }
  /* input:focus{
    outline: none;
  } */
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
    
  }
  .subtitle{
    font-size: 2rem;
    padding: 1rem 0;
  }
  hr{
    color: var(--primary);
  }
  .title {
    align-self: flex-start;
    padding-left: 1rem;
    padding-top: 5rem;
  }
  .c-form{
    
    width: 100%;
    padding: 0 1rem;
    padding-top: 7rem; 
  }
  .content{
    justify-content: flex-start;
    align-items: flex-start;
    /* pointer-events: none; */
  }
  }
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {

  form {
    /* width: 1000px; */
  }
  .c-form{
    width: 100%; 
    justify-content: flex-end;
  }
  
}
</style>
