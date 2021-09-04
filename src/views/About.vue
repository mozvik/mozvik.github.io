<template>
  <div  class="section parallax-group" id="about" >

    <div class="content parallax-layer parallax-layer-base">
      <div class="img">
        <img src="/enkicsi.png" alt="" class="" >
      </div>
      <div class="title" >
        <h2 class="title-light">About</h2>
      
        <p>
          I have a serious passion for web development, it provides me the
          opportunity of both creativity and programming.
        </p>
      
        <p>
          I love experimenting with UI animations and effects, build something, or
          just solving problems.
        </p>
        <div class="cv-button"><ButtonDownload>Download CV</ButtonDownload></div>
      </div>
      
      
    </div>
    <div class="parallax-layer parallax-layer-deep back-title">
      <h1>ABOUT</h1>
    </div>
     <div class="parallax-layer parallax-layer-deepest mouse-scroll-down">
      <div>eger-scroll down</div>
    </div>
  </div>
</template>

<script>
import ButtonDownload from "@/components/ButtonDownload.vue";
export default {
  components: { ButtonDownload },
  name: "About",
  data() {
    return {};
  },
  computed: {
   
  },
  methods: {
    getContent(e) {
      return e;
    },
   
  }
  // props: {
  //   msg: String,
  // },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #about .content{
    display: grid;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    padding-bottom: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .cv-button{
    margin-top: 2rem;
  }
  .img{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
  }
  .img img{
    border: 5px solid var(--grey);
    background: var(--light);

   
  }
  
  /* .parallax::after{

content: "ABOUT";
   
  } */
 
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
 #about .content{
    grid-template-columns: 1fr 1fr;
    justify-content: start;
    padding-bottom: 0rem;
    height: 100vh;
  }
  .img{
    grid-row: 1;
    /* grid-row: 1/3; */
  }
  .img, .title{
    height: 400px;
  }
  .title p {
    width: 75%;
  }
  .img img{
   padding: 1rem;
  }
  
}
</style>
