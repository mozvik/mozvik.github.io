<template>
  <vueper-slides
    class="no-shadow"
    :dragging-distance="50"
    :breakpoints="breakpoints"
    fade
    bullets-outside
  >
    <vueper-slide
      v-for="(card, i) in cards"
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
            <Button :options="card.buttonDemo"></Button>
          </div>
          <div class="item-code">
            <span></span><Button :options="card.buttonCode"></Button>
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
export default {
  name: "Slider",
  components: { VueperSlides, VueperSlide, Icon, Button },

  data() {
    return {
      breakpoints: {
        1980: {
          fixedHeight: "400px",
        },
        1200: {
          slideRatio: 2/3,
        },
        992: {
          slideRatio: 2/3,
          bulletsOutside: true,
        },
        600: {
          arrows: true,
          bulletsOutside: true,
          fixedHeight: "480px",
        },
      },

      cards: [
        {
          title: "Quiz Application",
          imageMobile: "quiz-m.jpg",
          imageDesktop: "https://via.placeholder.com/300x400.jpg",
          tech: "Vue, Vuex, Ajax",
          brief:
            "Simple Quiz Application made with Vue.js & Vuex state management",
          description:
            "This application gets JSON data from the Open Trivia Database API (https://opentdb.com/api_config.php) using Ajax requests and saves the user's high scores to the local storage.",
          technology: [
            {
              icon: "logos:html-5",
              width: 24,
            },
            {
              icon: "logos:css-3",
              width: 24,
            },
            {
              icon: "logos:vue",
              width: 30,
            },
          ],
          buttonDemo: {
            text: "View Demo",
            icon: "healthicons:eye",
            anchor: "https://mozvik.github.io/vue-quiz/",
          },
          buttonCode: {
            text: "Github Repository",
            icon: "akar-icons:github-outline-fill",
            anchor: "https://github.com/mozvik/vue-quiz",
          },
        },
        {
          title: "Puzzle Slider",
          imageMobile: "https://picsum.photos/360/300/?rnd=2",
          imageDesktop: "https://via.placeholder.com/300x400.jpg",
          tech: "Vue, Vuex, Ajax",
          brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id quis porro?",
          description:
            "Dolorum qui minima consectetur accusantium quisquam cum numquam dolor ex, earum, fugiat temporibus natus dignissimos aut reprehenderit nihil! ",
          technology: [
            {
              icon: "logos:html-5",
              width: 24,
            },
            {
              icon: "logos:css-3",
              width: 24,
            },
            {
              icon: "logos:vue",
              width: 30,
            },
          ],
          buttonDemo: {
            text: "View Demo",
            icon: "healthicons:eye",
            anchor: "https://mozvik.github.io/vue-quiz/",
          },
          buttonCode: {
            text: "Github Repository",
            icon: "akar-icons:github-outline-fill",
            anchor: "https://github.com/mozvik/vue-quiz",
          },
        },
        {
          title: "Movie Database App",
          imageMobile: "https://picsum.photos/360/300/?rnd=3",
          imageDesktop: "https://via.placeholder.com/300x400.jpg",
          tech: "React",
          brief:
            "Fuga voluptas consectetur nemo corporis temporibus velit atque ipsa, rem excepturi quas mollitia modi quos.",
          description:
            "Cumque debitis, natus consequuntur facilis, reprehenderit reiciendis quas facere voluptates ut adipisci repudiandae quasi error rerum sunt, eum expedita qui nam aliquam est perspiciatis ullam voluptatem quibusdam voluptas hic.",
          technology: [
            {
              icon: "logos:html-5",
              width: 24,
            },
            {
              icon: "logos:css-3",
              width: 24,
            },
            {
              icon: "logos:react",
              width: 28,
            },
          ],
          buttonDemo: {
            text: "View Demo",
            icon: "healthicons:eye",
            anchor: "https://mozvik.github.io/vue-quiz/",
          },
          buttonCode: {
            text: "Github Repository",
            icon: "akar-icons:github-outline-fill",
            anchor: "https://github.com/mozvik/vue-quiz",
          },
        },
        {
          title: "Recipe Book App",
          imageMobile: "https://picsum.photos/360/300/?rnd=4",
          imageDesktop: "https://via.placeholder.com/300x400.jpg",
          tech: "Angular",
          brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti laboriosam!",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus a totam earum. Beatae veritatis quia explicabo deserunt. Minima hic quasi eius.",
          technology: [
            {
              icon: "logos:angular-icon",
              width: 26,
            },
            {
              icon: "logos:php",
              width: 50,
            },
          ],
          buttonDemo: {
            text: "View Demo",
            icon: "healthicons:eye",
            anchor: "https://mozvik.github.io/vue-quiz/",
          },
          buttonCode: {
            text: "Github Repository",
            icon: "akar-icons:github-outline-fill",
            anchor: "https://github.com/mozvik/vue-quiz",
          },
        },
        {
          title: "EsoGuides - Gaming Website",
          imageMobile: "https://picsum.photos/360/300/?rnd=5",
          imageDesktop: "https://via.placeholder.com/300x400.jpg",
          tech: "React",
          brief:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti laboriosam!",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus a totam earum. Beatae veritatis quia explicabo deserunt. Minima hic quasi eius.",
          technology: [
            {
              icon: "logos:react",
              width: 26,
            },
            {
              icon: "logos:php",
              width: 50,
            },
          ],
          buttonDemo: {
            text: "View Demo",
            icon: "healthicons:eye",
            anchor: "https://mozvik.github.io/vue-quiz/",
          },
          buttonCode: {
            text: "Github Repository",
            icon: "akar-icons:github-outline-fill",
            anchor: "https://github.com/mozvik/vue-quiz",
          },
        },
      ],
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

.card-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-item:hover .item-title {
  color: var(--light);
  transition: color 0.4s ease-out;
}
.item-buttons button {
  width: 100%;
}
.item-title {
  background: var(--background);
  font-family: "Oswald", Helvetica, sans-serif;
  color: var(--light100);
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
}
.item-brief {
  opacity: .9;
  /* background: var(--background800); */
  color: var(--light200);
  padding: 1rem 0;
}
.item-description {
  color: var(--light300);
  opacity: .8;
  /* background: var(--background800); */
  padding: 1rem 0;
}
.item-tech-icons {
  display: inline-block;
  padding: 0 0.2rem;
}
.item-buttons {
  /* border: 1px solid var(--light); */
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
  .item-image {
    display: block;
  }
  .item-image img {
    height: auto;
    max-width: 300px;
    display: block;
    margin-right: auto;
  }

  .card-item {
    display: grid;
    grid-auto-columns: 1fr auto;
    grid-auto-rows: 1fr auto;
  }
  .item-image {
    grid-row: 1/3;
    grid-column: 1;
  }
  .item-body {
    grid-row: 1;
    grid-column: 2;
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
