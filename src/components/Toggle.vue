<template>
  <div class="switch" @click="activeButton = activeButton == 'left' ? 'right':'left'; $emit('selectedButton', activeButton);">
    <span class="switch-slider"
    :style="activeButton == 'left' ? 'left: 0;':'left: 50%;'"></span>
    <button class="toggle-button left"
    :class="activeButton == 'left' ? 'active':''">
    <span v-if="options.text1">
      {{options.text1}}
    </span>
    <span v-else>
      <Icon :icon="options.icon1" :width="options.icon1Width"></Icon>
    </span>
    </button>
    <button class="toggle-button right"
    :class="activeButton == 'left' ? '':'active'">
     <span v-if="options.text2">
      {{options.text2}}
    </span>
    <span v-else>
      <Icon :icon="options.icon2" :width="options.icon2Width"></Icon>
    </span>
    </button>
  </div>
</template>

<script>
import { ref } from "vue"
import { Icon } from "@iconify/vue";
export default {
  name: "Toggle",
  components: {
    Icon,
  },  
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
  width: 5.6rem;
  height: 2.8rem;
  z-index: 8;
  background: var(--secondary);
  border-radius: 1.4rem;
  margin-bottom: 1rem;
}
.toggle-button:hover{
  cursor: pointer;
}
.switch-slider{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(12.5%,-50%);
  width: 40%;
  height: 80%;
  z-index: -1;
  background: var(--background800);
  transition: .25s all ease;
  border-radius: 50%;
  
}
.toggle-button { 
  background: transparent;
  width: 50%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 50%;
}
button.left, button.right{
  opacity: .3;
  transition: .5s all ease;
}
button.active{
  opacity: 1;
  color: var(--light);
  transition: .5s all ease;
}
button{
  position: relative;
}
button span{
  display: inline-block;
  position: absolute;
  font-weight: bold;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
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
