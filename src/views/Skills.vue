<template>
  <div class="section parallax-group" id="skills">
    <div class="content parallax-layer parallax-layer-base">
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
    </div>
    <div class="parallax-layer parallax-layer-deep back-title">
      <h1>SKILLS</h1>
    </div>    
        
        
    <div class="parallax-layer parallax-layer-back " id="skillbox">
      <div class="skillbox-container">
        <div><h3>Skills & Experience</h3></div>
        <br><br>
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
    <div class="parallax-layer parallax-layer-deepest mouse-scroll-down">
      <div>eger-scroll down</div>
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
    display: grid;
    grid-template-rows: auto;
    justify-content: center;
    align-items: start;
    padding-top: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
#skillbox{
  
  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: end;
  padding-bottom: 10rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.skillbox-container{
  border: 1px solid var(--light);
}
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
#skills .content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    height: 100vh;

  }
  #skills .content .title{
    grid-column: 1;
    margin-bottom: 15rem;
    margin-left: 12.5rem;
  }
    #skills .content p{
    width: 75%;
  }
#skillbox{
  
  display: grid;
  grid-template-columns: 1fr 1fr ;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  
}
.skillbox-container{
  grid-column: 2;
}

}

</style> 
