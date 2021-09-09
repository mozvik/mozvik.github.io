<template>
  <div class="section parallax-group" id="portfolio">
    <div class="content parallax-layer parallax-layer-base">
      <div class="title">
        <h1 class="title-light">Portfolio</h1>
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
    /* display: grid;
    grid-auto-columns: 1fr;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100vw ;
    height: 100vh;
    padding: 0 1rem;
    padding-bottom: 11rem; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
     padding-left: 1rem;
    padding-right: 1rem;
    height: 100vh;
    /* padding-bottom: 5rem;  */
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
  /* justify-content: flex-end; */
  }
  #portfolio .content .projects-container{
    /* padding: 1rem 1rem; */
    /* padding-right: 4rem; */
  }

}
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  #portfolio .content{
    /* display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    justify-content: flex-start;
    align-items: flex-end;
    width: calc(100vw - 250px);
    height: 100vh;
    padding-bottom: 6rem; */
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: space-around;
   height: 100vh;
   padding: 0 4rem;
   /* padding-top: 2rem; */

  }
  
  #portfolio .content .title, #portfolio .content .projects-container{
    
    /* margin-bottom: 15rem; */
    /* margin-left: 12.5rem;  */
    
  }
  #portfolio .content .projects-container{
    /* min-width: 360px;
    width: 100%;
    height: auto; */
    /* grid-row: 2;
    grid-column: 1/3;
    height: auto;
    width: 100%;

    max-width: 100%;
    display: block;
    margin: 0 auto;
    padding: 1rem 12.5rem; */
    max-width: 1800px;
    padding-bottom: 2rem;
  }
}
</style>
