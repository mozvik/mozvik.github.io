<template>
 <div class="section parallax-group" id="contact">
    <div class="content parallax-layer parallax-layer-base">
      <div class="cont">
        <h1 class="title light">Contact</h1>
        
      </div> 
      <div class="c-form"><h3>
          Get In Touch
        </h3>
        <form action="">
            <label for="name">
              <span><Icon  icon="fa-regular:user" width="20" /></span>
              <input type="text" id="name" placeholder="Name"></label>
            <label for="email">
              <span><Icon  icon="fa-regular:envelope" width="20" /></span>
              <input type="email" id="email" placeholder="E-mail"></label>
            
            <label for="message">
              <span><Icon  icon="fa-solid:pencil-alt" width="20" /></span>
              <textarea  id="message" placeholder="Message"
              rows="4"></textarea>
            </label>
            <div><Button :options='options'></Button></div>
            
        </form>
      </div>
    </div>
    <div class="parallax-layer parallax-layer-deep back-title">
      <h1>CONTACT</h1>
    </div>    
        
        
    <div class="parallax-layer parallax-layer-back ">
     
    </div>
    <div class="parallax-layer parallax-layer-deepest mouse-scroll-down">
      <!-- <div>eger-scroll down</div> -->
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import Button from "@/components/Button.vue";
export default {
  name: "Contact",
  components:{
    Icon,
     Button
  },
  data() {
    return {
       options: {
        text: 'Send',
        icon: 'icon-park-outline:send-email',
        anchor: '',
      },
    };
  },  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact .content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 100vh;
  }
  .c-form h3{
    margin-bottom: 2rem;
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
    margin: 1.0rem auto;
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
  }
  label>span>input{
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
  }
  textarea{
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 8rem;
    padding-left: 2.5rem; */
    padding-left: 2.5rem;

  }
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
#contact .content{
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: space-between;
   height: 100vh;
   padding-left: 5.5rem;
   padding-right: 5.5rem;
  }
  form{
    margin-top: 0;
    margin-bottom: 4.25rem;
    width: 40vw;
    max-width: 800px;
  }
}
</style>
