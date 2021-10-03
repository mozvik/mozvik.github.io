<template>
  <div class="switch">
    <span class="switch-slider"
    :style="activeButton == 'left' ? 'left: 0;':'left: 50%;'"></span>
    <button @click="activeButton = 'left'; $emit('selectedButton', activeButton);" class="toggle-button left"
    :class="activeButton == 'left' ? 'active':''">{{options.text1}}</button>
    <button @click="activeButton = 'right'; $emit('selectedButton', activeButton);"
    class="toggle-button right"
    :class="activeButton == 'left' ? '':'active'">{{options.text2}}</button>
  </div>
      <!-- <span class="btn-icon"><Icon :icon="options ? options.icon1:''" width="30" /></span>
      <span class="btn-icon"><Icon :icon="options ? options.icon2:''" width="30" /></span> -->
 
  
</template>

<script>
import { ref } from "vue"
export default {
  name: "Toggle",
   setup(){
    const activeButton = ref('left')
    return {activeButton}
  },
  emits: ["selectedButton"],
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
  width: 200px;
  height: 34px;
  z-index: 8;
  border: solid 1px #2196F3;
}
.switch-slider{
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: -1;
  background: cyan;
  transition: .5s all ease;
}
.toggle-button { 
  background: transparent;
  width: 50%;
  height: 100%;
  color: white;
}

.switch-slider+.left.active{
  /* background: gainsboro; */
  color: black;
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
