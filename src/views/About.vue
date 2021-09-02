<template>
  <div class="section container-fluid d-flex flex-lg-row flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-center " id="about">
    <div class="col-12 col-lg-4 order-lg-2">
      <div class="col-6 ">
        <h2 class="title-light text-start">About</h2>
      </div>
      <div class="col-6 ">
        <p>
          I have a serious passion for web development, it provides me the
          opportunity of both creativity and programming.
        </p>
      
        <p>
          I love experimenting with UI animations and effects, build something, or
          just solving problems.
        </p>
      </div>
    </div>  
    <div class="col-12 col-lg-5  order-lg-1 ">
      <div class="col-6 pb-5 ps-2 ">
        <img src="/enkicsi.png" alt="" class="img-fluid  mx-auto d-block" >
      </div>
      <div  class="col-6 col-md-6 col-lg-6">
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
