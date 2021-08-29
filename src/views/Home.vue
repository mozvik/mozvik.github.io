<template>
  
  <div  class="section container-fluid my-auto d-flex flex-column justify-content-sm-start justify-content-md-center pt-md-0 pt-5" id="home">
    <div class="row border border-light d-flex justify-content-sm-start justify-content-md-center text-center">
      <div class="col-sm-12 col-md-4 border border-light">
        <SplitTitle animation="randomfadein" :animationDelay=10>
          <h1 class="title-light">Hello, <span class="title-green">I'm</span></h1>
          <h1 class="title-light">Attila Mozvik</h1>
        </SplitTitle>
      </div>
      <div class="col-sm-12 col-md-2 border border-light">
        <img src="https://picsum.photos/180/180" alt="">
      </div>
    
    
      <div class="col-sm-12 col-md-4">
          <hr>
          <SplitTitle animation="randomfadein" :animationDelay=3100>
            <h1>Web & Software
                        <div>Developer</div>
                      </h1>
          </SplitTitle>
          <hr>
      <div>
    </div>
      
      
    
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
