<template>
  
  <div  class="section" id="home">
      <div class="title-home">
        <div class="title-light to-right">
          <SplitTitle animation="randomfadein" :animationDelay=2110>
            <h1 class=" light-stroke">Hello, I'm </h1>
          </SplitTitle>
        
        </div>
        <div class="title-green to-left">
          <SplitTitle animation="randomfadein" :animationDelay=2100>
              <h1>Attila Mozvik</h1>
          </SplitTitle>
        </div>
      </div>
      <div class="para">
        <SplitTitle animation="randomfadein" :animationDelay=2100>
            <h3>Web & Software Developer</h3>
        </SplitTitle>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import SplitTitle from "@/components/SplitTitle.vue";
export default {
  name: "Home",
  components: {SplitTitle},
};
</script>
<style scoped>
#home {
  color: var(--light);
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 2fr 2fr;
  
}

/**          TABLET                                   **/
@media screen and (min-width: 768px) {
  #home {
  color: var(--light);
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
}
.para{
  align-self: flex-start;
}
.title-home{
  align-self: flex-end;
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
  
}
/****************************************************** */
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
 
}
</style>
