<template>
  <div class="section parallax-group" id="portfolio">
    <div class="content parallax-layer parallax-layer-base">
      <div class="title">
        <h1 class="title-light">Portfolio</h1>
        <h3>
          My Recent Projects
        </h3>
       
      </div>
    </div>
    <div class="parallax-layer parallax-layer-deep back-title">
      <h1>PORTFOLIO</h1>
    </div>  
    <div class="parallax-layer parallax-layer-back" id="projects">  
      <div class="projects-container">
        <div class="project">
          <div class="project-title">Quiz Application</div>
          <div class="project-body">
            <div class="project-technology">
              <div>Vue.js</div>
              <div>Bootstrap</div>
              <div></div>
              <div></div>
            </div>
            <img src="https://picsum.photos/360/300/?rnd=1" alt="" />
          </div>
        </div>
        <div class="project">
          <div class="project-title">Puzzle Slider Application</div>
          <div class="project-body">
            <div class="project-technology">
              <div>Vue.js</div>
              <div>Bootstrap</div>
              <div></div>
              <div></div>
            </div>
            <img src="https://picsum.photos/360/300/?rnd=2" alt="" />
          </div>
        </div>
        <div class="project">
          <div class="project-title">Movie Database Application</div>
          <div class="project-body">
            <div class="project-technology">
              <div><i class="devicon-angularjs-plain-wordmark colored"></i></div>
              <div>Bootstrap</div>
              <div></div>
              <div></div>
            </div>
            <img src="https://picsum.photos/360/300/?rnd=3" alt="" />
          </div>
        </div>

        <div class="project">
          <div class="project-title">EsoGuides - Gaming Website/Magazine</div>
          <div class="project-body">
            <div class="project-technology">
              <div>Vue.js</div>
              <div>Bootstrap</div>
              <div>Php</div>
              <div>Strapi</div>
            </div>
            <img src="https://picsum.photos/360/300/?rnd=4" alt="" />
          </div>
        </div>
        <div class="project">
          <div class="project-title">coming soon...</div>
          <div class="project-body">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
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
    display: grid;
    grid-template-rows: auto;
    justify-content: center;
    align-items: start;
    padding-top: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  #projects .projects-container{
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: end;
}
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  #projects .projects-container{
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  padding: 5rem;
  overflow-x: auto;
}
}
</style>
