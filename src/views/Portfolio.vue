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
      cards: [
      {
        title: 'Quiz Application',
        imageMobile: 'quiz-m.jpg',
        imageDesktop: 'quiz.jpg',
        tech: 'Vue, Vuex, Ajax',
        brief: 'Simple Quiz Application made with Vue.js & Vuex state management',
        description: 'This application gets JSON data from the Open Trivia Database API (https://opentdb.com/api_config.php) using Ajax requests and saves the user\'s high scores to the local storage.',
        technology: [
          {
            icon: 'logos:html-5',
            width: 24
          },
          {
            icon: 'logos:css-3',
            width: 24
          },
          {
            icon: 'logos:vue',
            width: 30
          },
        ],
        buttonDemo: 
          {
            text: 'View Demo',
            icon: 'healthicons:eye',
            anchor: 'https://mozvik.github.io/vue-quiz/',
          },
        buttonCode: 
          {
            text: 'Github Repository',
            icon: 'akar-icons:github-outline-fill',
            anchor: 'https://github.com/mozvik/vue-quiz',
          },
        
      },{
        title: 'Puzzle Slider',
        imageMobile: 'https://picsum.photos/360/300/?rnd=2',
        imageDesktop: 'https://picsum.photos/360/300/?rnd=2',
        tech: 'Vue, Vuex, Ajax',
        brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id quis porro?',
        description: 'Dolorum qui minima consectetur accusantium quisquam cum numquam dolor ex, earum, fugiat temporibus natus dignissimos aut reprehenderit nihil! ',
        technology: [
          {
            icon: 'logos:html-5',
            width: 24
          },
          {
            icon: 'logos:css-3',
            width: 24
          },
          {
            icon: 'logos:vue',
            width: 30
          },
        ],
        buttonDemo: 
          {
            text: 'View Demo',
            icon: 'healthicons:eye',
            anchor: 'https://mozvik.github.io/vue-quiz/',
          },
        buttonCode: 
          {
            text: 'Github Repository',
            icon: 'akar-icons:github-outline-fill',
            anchor: 'https://github.com/mozvik/vue-quiz',
          },
        
      },{
        title: 'Movie Database App',
        imageMobile: 'https://picsum.photos/360/300/?rnd=3',
        imageDesktop: 'https://picsum.photos/360/300/?rnd=3',
        tech: 'React',
        brief: 'Fuga voluptas consectetur nemo corporis temporibus velit atque ipsa, rem excepturi quas mollitia modi quos.',
        description: 'Cumque debitis, natus consequuntur facilis, reprehenderit reiciendis quas facere voluptates ut adipisci repudiandae quasi error rerum sunt, eum expedita qui nam aliquam est perspiciatis ullam voluptatem quibusdam voluptas hic.',
        technology: [
          {
            icon: 'logos:html-5',
            width: 24
          },
          {
            icon: 'logos:css-3',
            width: 24
          },
          {
            icon: 'logos:react',
            width: 28
          },
        ],
        buttonDemo: 
          {
            text: 'View Demo',
            icon: 'healthicons:eye',
            anchor: 'https://mozvik.github.io/vue-quiz/',
          },
        buttonCode: 
          {
            text: 'Github Repository',
            icon: 'akar-icons:github-outline-fill',
            anchor: 'https://github.com/mozvik/vue-quiz',
          },
        
      },{
        title: 'Recipe Book App',
        imageMobile: 'https://picsum.photos/360/300/?rnd=4',
        imageDesktop: 'https://picsum.photos/360/300/?rnd=4',
        tech: 'Angular',
        brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti laboriosam!',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus a totam earum. Beatae veritatis quia explicabo deserunt. Minima hic quasi eius.',
        technology: [
          
          {
            icon: 'logos:angular-icon',
            width: 26
          },
          {
            icon: 'logos:php',
            width: 50
          }
        ],
        buttonDemo: 
          {
            text: 'View Demo',
            icon: 'healthicons:eye',
            anchor: 'https://mozvik.github.io/vue-quiz/',
          },
        buttonCode: 
          {
            text: 'Github Repository',
            icon: 'akar-icons:github-outline-fill',
            anchor: 'https://github.com/mozvik/vue-quiz',
          },
        
      },{
        title: 'EsoGuides - Gaming Website',
        imageMobile: 'https://picsum.photos/360/300/?rnd=5',
        imageDesktop: 'https://picsum.photos/360/300/?rnd=5',
        tech: 'React',
        brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti laboriosam!',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus a totam earum. Beatae veritatis quia explicabo deserunt. Minima hic quasi eius.',
        technology: [
          
          {
            icon: 'logos:react',
            width: 26
          },
          {
            icon: 'logos:php',
            width: 50
          }
        ],
        buttonDemo: 
          {
            text: 'View Demo',
            icon: 'healthicons:eye',
            anchor: 'https://mozvik.github.io/vue-quiz/',
          },
        buttonCode: 
          {
            text: 'Github Repository',
            icon: 'akar-icons:github-outline-fill',
            anchor: 'https://github.com/mozvik/vue-quiz',
          },
        
      },
    ] 
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
