<template>
  <button>
    <span class="dlbtn-icon"><Icon icon="bx:bx-download" width="30" /></span>
    <span class="dlbtn-text" data-color="">
      <slot></slot>
    </span>
  </button>
  <span></span>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "ButtonDownload",
  components: {
    Icon,
  },  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  border-radius: 16px;
  border: 3px solid var(--background);
  overflow: hidden;
  transition: color 300ms ease-in-out;
  padding: 0.5em 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;
  width: 100%; 
  background:  var(--secondary);
  height: auto;
}


button > .dlbtn-icon {
  color: var(--primary);
  transform: translate(-0.5rem, 7rem);
  display: inline-block;
  text-align: left;
  font-size: 20px;
  transition: all 300ms ease-in-out;
}
button:hover > .dlbtn-icon {
  margin: 0;
  padding: 0;
  color: var(--background800);
  transform: translate(-0.5rem, 0);
  transition: all 300ms ease-in-out;
}
button > .dlbtn-text {
  color: var(--background);
  transform: translate(-1rem, 0rem);
  text-align: center;
  font-size: 18px;
  transition: all 300ms ease-in-out;
  
}
button:hover > .dlbtn-text {
  color: var(--background800);
  transform: translate(1rem, 0);
  transition: all 300ms ease-in-out;
}
button:hover {
  border: 3px solid var(--background800);
  cursor: pointer;
  transition: all 300ms ease-in-out;
}
/****************************************************** */
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {
  
  button {
    width: 300px;
  }
  }
  /****************************************************** */
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  
  button {
    width: 300px;
  }
  }
</style>
