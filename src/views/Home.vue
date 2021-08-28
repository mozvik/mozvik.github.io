<template>
  <div class="section" id="home">
    <div>
      <SplitTitle animation="randomfadein" :animationDelay=10>
         <h1 class="title-light">Hello, <span class="title-green">I'm</span></h1>
         <h1 class="title-light">Attila Mozvik</h1>
      </SplitTitle>
    </div>
    <div>
      <img src="https://picsum.photos/300/300" alt="">
    </div>
    <div>
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
  
}
img{
 
}
</style>
