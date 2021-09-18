<template>
  <button>
    <span class="btn-icon"><Icon :icon="options ? options.icon:''" width="30" /></span>
    
      <a v-if="options" class="btn-text" :href="options.anchor" target="_blank">{{options.text}}</a>
      <slot ></slot>
    
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
        text: {
          type: String,
          required: true,
        },
        icon: {
          type: String,
          required: true,
        },
        anchor: {
          type: String,
        },
      },
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
  /* font-size: 18px; */
  border-radius: 3px;
  border: 3px solid var(--primary);
  overflow: hidden;
  transition: color 300ms ease-in-out;
  padding: 0.25em 2em;
  margin: .5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;
  width: calc(100% - 1rem); 
  
  height: auto;
}


button > .btn-icon {
  color: var(--primary);
  transform: translate(-0.5rem, 7rem);
  display: inline-block;
  text-align: left;
  font-size: 18px;
  transition: all 300ms ease-in-out;
}
button:hover > .btn-icon {
  margin: 0;
  padding: 0;
  color: var(--primary);
  transform: translate(-0.5rem, 0.19rem);
  transition: all 300ms ease-in-out;
}
button > .btn-text {
  color: var(--light);
  transform: translate(-1rem, 0rem);
  text-align: center;
  font-size: 18px;
  transition: all 300ms ease-in-out;
  
}
button:hover > .btn-text {
  color: var(--primary);
  transform: translate(1rem, 0);
  transition: all 300ms ease-in-out;
}
button:hover {
  background: var(--light);
  border: 3px solid var(--light);
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
