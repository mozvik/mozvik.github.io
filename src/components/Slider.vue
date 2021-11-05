<template>
  <vueper-slides
    class="no-shadow"
    :dragging-distance="20"
    :breakpoints="breakpoints"
    :infinite="false"
    :alwaysRefreshClones="true"
    :bulletsOutside="true"
  >
    <vueper-slide
      v-for="(card, i) in languageData.computed.currentLanguageData().portfolioView.cards"
      :key="i"
      :title="card.title"
      :content="card.content"
      class="card-item"
      :style="'background-color: var(--background)'"
    >
      <template #content>
        <div class="item-body">
          <div class="item-title">
            <div class="item-name">{{ card.title }}</div>
            <div class="item-tech">
              <div
                class="item-tech-icons"
                v-for="(tech, j) in card.technology"
                :key="j"
              >
                <Icon :icon="tech.icon" :width="tech.width" />
              </div>
            </div>
          </div>
          <div class="item-brief">{{ card.brief }}</div>
          <div class="item-description">{{ card.description }}</div>
        </div>
        <div class="item-image">
          <img :src="displaySize < 2 ? '' : card.imageDesktop" alt="" />
        </div>

        <div class="item-buttons">
          <div class="item-demo">
            <Button :options="card.buttonDemo">{{card.buttonDemo.text}}</Button>
          </div>
          <div class="item-code">
            <span></span><Button :options="card.buttonCode">{{card.buttonCode.text}}</Button>
          </div>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { Icon } from "@iconify/vue";
import Button from "@/components/Button.vue";
import { inject } from "vue"
export default {
  name: "Slider",
  components: { VueperSlides, VueperSlide, Icon, Button },
  setup(){
    const languageData = inject("Locale")
    const breakpoints = {
        1980: {
          fixedHeight: "400px",
        },
        1200: {

          slideRatio: 2/3,
        },
        992: {
          slideRatio: 2/3,
          bulletsOutside: true,
          fixedHeight: "480px",
        },
        600: {
          arrows: true,
          bulletsOutside: true,
          fixedHeight: "480px",
        },
      }
    return {  languageData, breakpoints }
  },
  data() {
    return {

    };
  },
  props: {
    displaySize: {
      type: Number,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-image {
  display: none;
}
.vueperslides{
  border: 1px solid var(--light);
  /* overflow: hidden; */
}
.card-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
}
.card-item:hover .item-title {
  color: var(--light);
  transition: color 0.4s ease-out;
}
.item-buttons div{
  /* width: 100%; */
  margin: .5rem;
}
.item-title {
  /* background: var(--secondary); */
  font-family: "Oswald", Helvetica, sans-serif;
  color: var(--light);
  font-size: 1.4rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  transition: color 0.4s ease-out;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.item-body {
  font-family: "Roboto", Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  padding: 0 0.5rem;
  /* background: var(--background800); */
  background: var(--primary);
   flex-grow: 1;
}
.item-buttons {
  background: var(--primary);
  border-bottom: 1px solid var(--light);
}
.item-brief {
  opacity: .9;
  /* background: var(--background800); */
  padding: 1rem 0;
}
.item-description {
  opacity: .8;
  padding: 1rem 0;
}
.item-tech-icons {
  display: inline-block;
  padding: 0 0.2rem;
}
.item-brief {
 
}

/****************************************************** */
/**          TABLET                                   **/
@media screen and (min-width: 768px) {
  .item-image img {
    display: none;
  }
}
/****************************************************** */
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {
  .item-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  
}
/**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  .item-image {width: 100%;
    display: block;
  }
  .item-image img {
    height: auto;
    
    display: block;
    margin-right: auto;
  }

  .card-item {
    display: grid;
    grid-auto-columns: 300px 1fr;
    grid-auto-rows: 1fr auto;
  }
  .item-image {
    grid-row: 1/3;
    grid-column: 1;
  }
  .item-body {
    grid-row: 1;
    grid-column: 2;

    width: 100%;
  }
  .item-buttons {
    grid-row: 2;
    grid-column: 2;
  }
  .item-title{
    font-size: 1.5rem;
  }
}
</style>
