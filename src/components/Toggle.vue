<template>
  <label class="switch">
  <input type="checkbox" checked>
  <span class="slider round"></span>
</label>
      <!-- <span class="btn-icon"><Icon :icon="options ? options.icon1:''" width="30" /></span>
      <span class="btn-icon"><Icon :icon="options ? options.icon2:''" width="30" /></span> -->
 
  {{options.text1}}
</template>

<script>
// import { Icon } from "@iconify/vue";
export default {
  name: "Toggle",
  components: {
    // Icon,
  },
  data() {
    return {};
  },
  props: {
      options: {
        text1: {
          type: String,
          required: true,
        },
        text2: {
          type: String,
          required: true,
        },
        icon1: {
          type: String,
          required: true,
        },
        icon2: {
          type: String,
          required: true,
        },
      },
    },  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  z-index: 8;
  /* pointer-events: auto;  */
}
.switch:hover{
  cursor:move;
}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
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
