<template>
  <div class="section" id="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <SplitTitle animation="randomfadein">
       <h1 class="title-light">Hello, <span class="title-green">I'm</span></h1>
       <h1 class="title-light">Attila Mozvik</h1>
    </SplitTitle>
   
    <br>
    
    <br>
  <div>
    <ButtonDownload>Teszt button</ButtonDownload>
    <SplitTitle animation="randomfadein">
      <h1>Web and Software
                  <div>Developer</div>
                </h1>

    </SplitTitle>
    <!-- <SplitTitle>located in Hungary.</SplitTitle> -->
  </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import ButtonDownload from "@/components/ButtonDownload.vue";
import SplitTitle from "@/components/SplitTitle.vue";
export default {
  name: "Home",
  components: {ButtonDownload, SplitTitle},
};
</script>
