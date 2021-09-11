<template>
  <div class="section parallax-group" id="portfolio">
    <div class="content parallax-layer parallax-layer-base">
      <div class="cont">
        <h1 class="title light">Portfolio</h1>
        <h3>
          My Recent Projects
        </h3>
        
      </div>
      <div class="projects-container">
          <Slider></Slider>
      </div>
    </div>
    <div class="parallax-layer parallax-layer-deep back-title">
      <h1>PORTFOLIO</h1>
    </div>  
   
    <div class="parallax-layer parallax-layer-deepest mouse-scroll-down">
      <div>eger-scroll down</div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
export default {
  name: "Portfolio",
   components:{
     Slider,
   },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#portfolio .content{
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
     padding-left: 1rem;
    padding-right: 1rem;
    height: 100vh;

  }
  .projects-container{
    width: 100%;
    height: auto;
    padding-top: 5rem;
  }
  /**          LAPTOP TABLET                                   **/
@media screen and (min-width: 992px) {
#portfolio .content{
  width: calc(100vw - 250px);

  }
 

}
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  #portfolio .content{
    
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: space-around;
   height: 100vh;
   padding: 0 4rem;

  }
  
  #portfolio .content .projects-container{
    
    max-width: 1800px;
    padding-bottom: 2rem;
  }
}
</style>
