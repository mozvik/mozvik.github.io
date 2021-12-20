<template>
  <button :disabled="isDisabled" :class="isDisabled ? 'btn-disabled':''">
    <span :class="!isDisabled ? 'btn-icon':'btn-icon-disabled'"><Icon :icon="options ? options.icon:''" width="30" /></span>
      <a v-if="options" :class="!isDisabled ? 'btn-text':'btn-text-disabled'" :href="options.anchor" target="_blank">
      <slot ></slot>
    </a>
  </button>
  <span></span>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Button",
  components: {
    Icon,
  },
  data() {
    return {};
  },
  props: {
      options: {
        icon: {
          type: String,
          required: true,
        },
        anchor: {
          type: String,
        },
      },
      isDisabled: {
          type: Boolean,
          default: false,
      }
    },  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
}
button {
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  position: relative;
  z-index: 2;
  border-radius: 16px;
  border: 3px solid var(--background);
  overflow: hidden;
  transition: color 300ms ease-in-out;
  padding: 0.25em 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;
  width: 100%; 
  background:  var(--secondary);
  height: auto;
}

button > .btn-icon {
  transform: translate(-0.5rem, 7rem);
  display: inline-block;
  text-align: left;
  font-size: 18px;
  transition: all 300ms ease-in-out;
}
button:hover > .btn-icon {
  margin: 0;
  padding: 0;
  color: var(--background800);
  transform: translate(-0.5rem, 0.19rem);
  transition: all 300ms ease-in-out;
}
.btn-icon-disabled{
  transform: translate(-0.5rem, 7rem);
  display: inline-block;
  text-align: left;
  font-size: 18px;
}
button > .btn-text {
  color: var(--background);
  transform: translate(-1rem, 0rem);
  text-align: center;
  font-size: 18px;
  transition: all 300ms ease-in-out;
  
}
button:hover > .btn-text {
  color: var(--background800);
  transform: translate(1rem, 0);
  transition: all 300ms ease-in-out;
}
button:hover{
  border: 3px solid var(--background800);
  cursor: pointer;
  transition: all 300ms ease-in-out;
}
.btn-disabled{
  border: 3px solid var(--light);
  opacity: .5;
}
.btn-disabled:hover{
  cursor:not-allowed;
  border: 3px solid var(--light);
} 
.btn-text-disabled:hover{
  cursor:not-allowed;
}
.btn-text-disabled {
  transform: translate(-1rem, 0rem);
  text-align: center;
  font-size: 18px;
  color: var(--light);
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
