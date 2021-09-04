<template>
  
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      menuActive: false,
    };
  },
  props: {
    navItems: Object,
    displaySize: Number,
    activeMenuItem: String,
  },
  emits: ["selectedMenuItem"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


/****************************************************** */
/**          TABLET                                   **/
@media screen and (min-width: 768px) {
  
}
/****************************************************** */
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {
 

}
</style>
