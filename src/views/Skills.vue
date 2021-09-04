<template>
  <div class="section" id="skills">
    <div class="parallax" data-depth='0.50' data-type='parallax'>
      <div class="content">
        <div class="title">
          <h1 class="title-light">Skills</h1>
          <p>
            My main area of expertise is front-end development,
            <span>HTML, CSS, JavaScript</span>. Building small web applications,
            animations, and interactive layouts.
          </p>
          <p>
            I also have back-end knowledge of <span>PHP</span>, and popular
            <span>WordPress</span> CMS.
          </p>
          
        </div>
        <div>
          <div><h3>Skills & Experience</h3></div>
          <div>
            <ul>
              <li>Vue.js</li>
              <li>Angular</li>
              <li>Node.js</li>
              <li>Php</li>
              <li>Wordpress</li>
              <li>SQL</li>
              <li>C#</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      
    };
  },
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#skills .content{
    /* text-align: center; */
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    padding-bottom: 10rem;
    padding-top: 2rem;
  }
.parallax::after{

content: "SKILLS";
   
  }
</style> 
