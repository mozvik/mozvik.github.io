<template>
  
  <div  class="section container-fluid d-flex flex-column justify-content-center justify-content-md-center" id="home">
    <div class="row text-center ">
      <div class="col-sm-12 col-md-5 pt-5 text-md-end">
        <SplitTitle animation="randomfadein" :animationDelay=2110>
          <h1 class=" light-stroke">Hello, I'm</h1>
        </SplitTitle>
        
      </div>
      <div class="col-sm-12 col-md-6 pt-5 text-md-start">
        <SplitTitle animation="randomfadein" :animationDelay=2100>
            <h1>Attila Mozvik</h1>
        </SplitTitle>
      </div>
      <div class="title-light col-sm-12 col-md-11 py-5 text-md-center">
        <SplitTitle animation="randomfadein" :animationDelay=2100>
            <h3>Web & Software Developer</h3>
        </SplitTitle>
      </div>
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
 
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
}
img{
 
}
</style>
