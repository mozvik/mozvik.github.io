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
        <div class="skill-list">
          <ul>
            <li v-for="(item, index) in skillData" :key="item.stack" class="my-skills"
            :style="{ '--delay': index * 50 + 'ms' }">
              {{item.stack}}
            </li>
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
// import { Icon } from "@iconify/vue";
export default {
  name: "Skills",
  components: {
    // Icon,
  },
  data() {
    return {
      skillData: [
        {stack: 'Vue.js',
        progress: 0,},
        {stack: 'Angular',
        progress: 0,},
        {stack: 'Php',
        progress: 0,},
        {stack: 'WordPress',
        progress: 0,},
        {stack: 'C sharp', 
        progress: 0,},
        ]
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* padding: 10rem 1rem; */
    padding-left: 1rem;
    padding-right: 1rem;
    height: 100vh;
  }
#skillbox{
  
  display: grid;
  grid-template-rows: 1fr;
  justify-content: flex-start;
  align-items: end;
  padding-bottom: 10rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100vh;
  
}
.my-skills{
 
  border-bottom: 2px solid var(--green);
  margin: 1.25rem 0;
  padding: .25rem;
  }
.skill-list{
 
    color: var(--light);
    font-size: 18px;
    font-family: 'Roboto', Helvetica, sans-serif;
    position: relative;
}
#skillbox ul{
  list-style: none;
  width: 50vw;
}
/**          LAPTOP TABLET                                   **/
@media screen and (min-width: 992px) {
  #skillbox ul{
  
  width: 25vw;
}
}
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
#skills .content{
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   height: 100vh;

  }
  #skillbox{
  
  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
  #skills .content .title{
    margin-left: 4.5rem; 
  }
    #skills .content p{
    width: 45%;
  }

.skillbox-container{
  grid-column: 2;
}




#skillbox ul {
  position: absolute;
  width: 25vw;
}

.my-skills-animated{
  
  opacity: 0;
  animation: upward .6s ease var(--delay) 1 forwards;
}
@keyframes upward {
  
  100%{ opacity: 1; 
        transform: translateY(-3rem);
        }
}
}
</style> 
