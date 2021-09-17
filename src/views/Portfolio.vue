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
        <Slider :displaySize="displaySize"></Slider>
      </div>
    </div>
    <div class="parallax-layer parallax-layer-back back-title">
      
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
    
  }
    
  },
  props: {
    
    displaySize: Number,
    
  },
  mounted() {
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#portfolio{
  height: 100vh;
  /* pointer-events: none;   */
} 

#portfolio .content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    padding-left: 1rem;
    padding-right: 1rem;
    /* height: 100vh; */
    }
  .projects-container{
    width: 100%;
    height: auto;
    padding-top: 2.5rem;
    
    }
    
  /**          LAPTOP TABLET                                   **/
@media screen and (min-width: 992px) {
#portfolio .content{
  width: calc(100vw - 250px - 1rem);
  }#portfolio .content{
    
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: space-between;
   height: 100vh;
   padding: 0 1rem;
   /* padding-bottom: 1rem; */
  }
  #portfolio .content .projects-container{
    

  }
}
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  #portfolio{
  height: 100vh;
}
   #portfolio .content{
     padding-left: 5.5rem;
     padding-right: 5.5rem;
   }
  
  #portfolio .content .projects-container, .card-item{
    width: 100%;
    max-width: 1600px;
    /* margin: 0 auto; */
  }
}
</style>
