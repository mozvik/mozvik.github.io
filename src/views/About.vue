<template>
  <div  class="section parallax-group" id="about" >

    <div class="content parallax-layer parallax-layer-base">
      <div class="img">
        <img src="/enkicsi.png" alt="" class="" >
      </div>
      <div class="cont" >
        <h2 class="title light">About</h2>
      
        <p class="light300">
          I have a serious passion for web development, that provides me the
          opportunity of both creativity and programming.
        </p>
      
        <p class="light300">
          I love experimenting with UI animations and effects, build something, or
          just solving problems.
        </p>
        <div class="cv-button"><ButtonDownload >Download CV</ButtonDownload></div>
      </div>
      
      
    </div>
    <div class="parallax-layer parallax-layer-deep back-title">
      <h1>ABOUT</h1>
    </div>
     <div class="parallax-layer parallax-layer-deepest mouse-scroll-down">
      <MouseScrollDown></MouseScrollDown>
    </div>
  </div>
</template>

<script>
import ButtonDownload from "@/components/ButtonDownload.vue";
import MouseScrollDown from "@/components/MouseScrollDown.vue";
export default {
  components: { ButtonDownload, MouseScrollDown },
  name: "About",
  data() {
    return {
     
    };
    
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
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-around;
     padding-bottom: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 100vh;
  }
  
  .cv-button{
    margin-top: 2rem;
  }
  .img{
    align-items: center;
  }
  .img img{
    background: transparent;
  }
 
  /**          LAPTOP TABLET                                   **/
@media screen and (min-width: 992px) {
#about .content{
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
    padding-bottom: 0rem;
    height: 100vh;
  }
.img {
  padding: 0;
}
.cont p {
    width: 100%;
  }

}
 
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
 #about .content{
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
    padding-bottom: 0rem;
    height: 100vh;
  }
  .img{
   
    margin: 0 3rem;
    padding: 1.25rem;
  }
  .img, .cont{
    height: 400px;
  }
  
  .cont p {
    width: 80%;
  }
  .img img{
   padding: 1rem;
  }
  
}
</style>
