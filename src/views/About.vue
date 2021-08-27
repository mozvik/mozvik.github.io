<template>
   <div class="section" id="about">
    <div>
      <h2 class="title">About</h2>
    </div>
    <p>I have a serious passion for web development, it provides me the opportunity of both creativity and programming.</p>
    <p> I love experimenting with UI animations and effects, build something, or just solving problems.</p>
    <div>
      <ButtonDownload>Download CV in PDF format</ButtonDownload>
    </div>
  </div>
</template>

<script>
import ButtonDownload from "@/components/ButtonDownload.vue";
export default {
  components: {ButtonDownload,},
  name: "About",
  data () {
    return {
      
    }
  }
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
