<template>
           <!-- <div  class="slider-container">

            <div ref="sliderRef" class="slider-items"
            :style="containerWidth"
            >
              <div class="slider-item"
              :style="sliderStyle">
                <div class="item-title">Quiz Application</div>
                <div class="item-body">
                  <div class="project-technology">
                    <div>Vue.js</div>
                    <div>Bootstrap</div>
                    <div></div>
                    <div></div>
                  </div>
                  <img src="https://picsum.photos/360/300/?rnd=1" alt="" />
                </div>
              </div>
              <div class="slider-item"
              :style="sliderStyle">
                <div class="item-title">Puzzle Slider Application</div>
                <div class="item-body">
                  <div class="project-technology">
                    <div>Vue.js</div>
                    <div>Bootstrap</div>
                    <div></div>
                    <div></div>
                  </div>
                  <img src="https://picsum.photos/360/300/?rnd=2" alt="" />
                </div>
              </div>
              <div class="slider-item"
              :style="sliderStyle">
                <div class="item-title">Movie Database Application</div>
                <div class="item-body">
                  <div class="project-technology">
                    <div><i class="devicon-angularjs-plain-wordmark colored"></i></div>
                    <div>Bootstrap</div>
                    <div></div>
                    <div></div>
                   </div>
                  <img src="https://picsum.photos/360/300/?rnd=3" alt="" />
                </div>
              </div>
              <div class="slider-item"
              :style="sliderStyle">
                <div class="item-title">EsoGuides - Gaming Website/Magazine</div>
                <div class="item-body">
                  <div class="project-technology">
                    <div>Vue.js</div>
                    <div>Bootstrap</div>
                    <div>Php</div>
                    <div>Strapi</div>
                  </div>
                  <img src="https://picsum.photos/360/300/?rnd=4" alt="" />
                </div>
              </div>
              <div class="slider-item"
              :style="sliderStyle">
                <div class="item-title">coming soon...</div>
                <div class="item-body">
                  <div class="project-technology">
                    <div>Vue.js</div>
                    <div>Bootstrap</div>
                    <div></div>
                    <div></div>
                  </div>
                  <img src="https://picsum.photos/360/300/?rnd=5" alt="" />
                </div>
              </div>
            </div>
            <div class="slider-dots"></div>
            <div class="slider-prev-next"></div>
          </div>  -->
   
  <!-- fixed-height="450px" -->
<vueper-slides class="no-shadow" :dragging-distance="50" :breakpoints="breakpoints">
  
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :title="slide.title"
    :content="slide.content"
    :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]">
    <template #content>
      <div class='slider-item'>
        <div class='item-title'>{{slide.title}}</div>
        <div class="item-image"><img :src="slide.image" alt=""></div>
        <div class='item-body'>
          <div class="item-brief">{{slide.brief}}</div>
          <div class="item-description">{{slide.description}}</div>
          <div class="item-technology">{{slide.technology}}</div>
          <div class="item-buttons">
            <div class="item-demo"></div>
            <div class="item-code"></div>
          </div>
        </div>
      </div>
    </template>
    
    </vueper-slide>
</vueper-slides>
 
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "Slider",
  components: { VueperSlides, VueperSlide },
  
    data() {
    return {
       breakpoints: {
    1980: {
    // slideRatio: 1 / 3,
    fixedHeight: '500px'
    },
    1200: {
      slideRatio: 1 / 2,
      fixedHeight: '400px',
    },
    992: {
      slideRatio: 2 / 3
    },
    600: {
      slideRatio: 1 / 1,
      arrows: false,

    },
 

   
  },
         slides: [
          {
            title: 'Quiz Application',
            image: 'https://picsum.photos/360/300/?rnd=1',
            tech: 'Vue, Vuex, Ajax',
            brief: 'Simple Quiz Application made with Vue.js & Vuex state management',
            description: 'This application gets JSON data from the Open Trivia Database API (https://opentdb.com/api_config.php) using Ajax requests and saves the user\'s high scores to the local storage.',
            content: "",
          },{
            title: 'Slide #2',
            tech: '',
            content: "<div class='slider-item' >            <div class='item-title'>Quiz Application</div>                <div class='item-body'>                  <div class='project-technology'>                    <div>Vue.js</div>                    <div>33333</div>                    <div></div>                    <div></div>                  </div>                  <img src='https://picsum.photos/360/300/?rnd=1' alt='' />                </div>              </div>",
          }
  ] 
    }
    
  },
  
   
  mounted(){
   
  },
  computed: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  background: black;
}
.vueperslides{
  /* width: 100%;
  height: 70vh; */
}

/****************************************************** */
/**          TABLET                                   **/
@media screen and (min-width: 768px) {
  
}
/****************************************************** */
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {
 
 /* .ex--center-mode {
  width: 1600px;
  max-width: 1600px;
  margin: auto;
}  */

}
</style>
