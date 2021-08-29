<template>
  <div class="section container" id="about">
    <div class="row justify-content-start text-center ">
      <div class="col-12">
        <h2 class="title text-start">About</h2>
      </div>
      <p  class="col-sm-12 col-md-4">
        I have a serious passion for web development, it provides me the
        opportunity of both creativity and programming.
      </p>
      <p class="col-sm-12 col-md-4">
        I love experimenting with UI animations and effects, build something, or
        just solving problems.
      </p>
      <div  class="col-12">
        <ButtonDownload>Download CV</ButtonDownload>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDownload from "@/components/ButtonDownload.vue";
export default {
  components: { ButtonDownload },
  name: "About",
  data() {
    return {};
  },
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
