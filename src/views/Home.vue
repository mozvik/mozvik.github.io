<template>
  
  <div  class="section parallax-group" id="home">
     <div class="parallax-layer parallax-layer-base">
      <p>language</p>
    </div>
      <div class="parallax-layer parallax-layer-base title">
        <div class="title-home">
          <div class="title to-right">
            <SplitTitle animation="randomfadein" :animationDelay=2110>
              <h1 class=" light-stroke">Hello, I'm </h1>
            </SplitTitle>
          
          </div>
          <div class="title to-left light">
            <SplitTitle animation="randomfadein" :animationDelay=2100>
                <h1>Attila Mozvik</h1>
            </SplitTitle>
          </div>
        </div>
      </div>
      <div class="parallax-layer parallax-layer-deep subtitle">
        <SplitTitle animation="randomfadein" :animationDelay=2100>
            <h3>Web & Software Developer</h3>
        </SplitTitle>
        
      </div>
      <div class="parallax-layer parallax-layer-deepest mouse-scroll-down">
      <MouseScrollDown></MouseScrollDown>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import SplitTitle from "@/components/SplitTitle.vue";
import MouseScrollDown from "@/components/MouseScrollDown.vue";
export default {
  name: "Home",
  components: {SplitTitle, MouseScrollDown},
};
</script>
<style scoped>
#home{
  display: flex;
  flex-direction:row;
}
#home .title{
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
}
#home .subtitle{
  color: var(--primary);
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
/**          TABLET                                   **/
@media screen and (min-width: 768px) {
  
#home .title{
  align-items: flex-end;
} 
.to-right {
  justify-self: flex-end;
  display: inline-block;
  padding-right: .5rem;
}
.to-left {
  justify-self: flex-start;
  padding-left: .5rem;
  display: inline-block;
}
} 
/****************************************************** */
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {
  .title-home{
    display: flex;
  }
}
/****************************************************** */
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
 
}
</style>
