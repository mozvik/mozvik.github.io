<template>
  <transition name="randomfadein" appear>
    <div class="split" ref="split">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "SplitTitle",
  props: {
    animation: String,
    animationDelay: {
      type: Number,
      required: false,
      default: 1000,
    },
    letterKick: {
      type: [Boolean, String],
      required: false,
      default: false,
    },
  },
  setup(props) {
    const split = ref(null);
    const mouseY = ref(0);
    const mouseX = ref(0);
    const mouseDirectionY = ref("");
    const mouseDirectionX = ref("");
    const spans = ref("");
    onMounted(() => {
      splitContent(split.value);
      if (props.animation === "randomfadein") randomFadeIn();
      document.addEventListener("mousemove", direction);
      if (props.letterKick) setupKickableSpans(split.value);
    });
    function splitContent(ele) {
      let el = ele.querySelector("h1,h3");
      for (let index = 0; index < el.textContent.length; index++) {
        let t = Math.floor(Math.random() * 2) === 0 ? 1 : -1;
        spans.value +=
          "<span style='--xvar:" +
          index +
          "; --xpos:" +
          (Math.floor(Math.random() * 500) - 250) +
          "px; --ypos:" +
          (Math.floor(Math.random() * 450) - 400) +
          "px; --angle:" +
          (Math.floor(Math.random() * 300) + 60) +
          "deg; --mtp:" +
          t +
          "; --scale:" +
          Math.random() +
          ";'>" +
          el.textContent[index] +
          "</span>";
      }
      el.innerHTML = spans.value;
    }
    function randomFadeIn() {
      let array = split.value.querySelectorAll("span");
      array.forEach((element) => {
        element.style =
          "--rnd: " +
          (Math.floor(Math.random() * props.animationDelay) + 1042) +
          "ms; --rnda: " +
          (Math.floor(Math.random() * 2000) + 1042) +
          "ms";
        element.classList.add(props.animation);
      });
    }
    function direction(e) {
      if (e.pageY == mouseY.value) mouseDirectionY.value = "";
      else if (e.pageY < mouseY.value) mouseDirectionY.value = "top";
      else mouseDirectionY.value = "bottom";

      if (e.pageX == mouseX.value) mouseDirectionX.value = "";
      else if (e.pageX < mouseX.value) mouseDirectionX.value = "left";
      else mouseDirectionX.value = "right";

      mouseY.value = e.pageY;
      mouseX.value = e.pageX;
    }
    function setupKickableSpans(spanContainer) {
      let elements = spanContainer.querySelectorAll("span");
      elements.forEach((element) => {
        element.addEventListener("animationend", animEnd);
      });
    }
    function mouseEnter(e) {
      if (!e.target.classList.contains("kick")) {
        if (mouseDirectionX.value === "left" && mouseDirectionY.value === "") {
          e.target.classList.add("kick-to-left");
        }
        if (mouseDirectionX.value === "right" && mouseDirectionY.value === "") {
          e.target.classList.add("kick-to-right");
        }
        if (mouseDirectionX.value === "" && mouseDirectionY.value === "top") {
          e.target.classList.add("kick-to-top");
        }
        if (
          mouseDirectionX.value === "" &&
          mouseDirectionY.value === "bottom"
        ) {
          e.target.classList.add("kick-to-bottom");
        }
        if (
          mouseDirectionX.value === "right" &&
          mouseDirectionY.value === "bottom"
        ) {
          e.target.style =
            " --xm: " +
            (Math.floor(Math.random() * 35) + 35) +
            "px;" +
            " --ym: " +
            (Math.floor(Math.random() * 35) + 35) +
            "px; --angle: " +
            (Math.floor(Math.random() * 40) + 160) +
            "deg; --speed: " +
            (Math.floor(Math.random() * 440) + 660) +
            "ms;";
          e.target.classList.add("kick-to-bottom-right");
        }
        if (
          mouseDirectionX.value === "left" &&
          mouseDirectionY.value === "bottom"
        ) {
          e.target.style =
            " --xm: -" +
            (Math.floor(Math.random() * 35) + 35) +
            "px;" +
            " --ym: " +
            (Math.floor(Math.random() * 35) + 35) +
            "px; --angle: -" +
            (Math.floor(Math.random() * 40) + 160) +
            "deg; --speed: " +
            (Math.floor(Math.random() * 440) + 660) +
            "ms;";
          e.target.classList.add("kick-to-bottom-left");
        }
        if (
          mouseDirectionX.value === "right" &&
          mouseDirectionY.value === "top"
        ) {
          e.target.style =
            " --xm: " +
            (Math.floor(Math.random() * 35) + 35) +
            "px;" +
            " --ym: -" +
            (Math.floor(Math.random() * 35) + 35) +
            "px; --angle: " +
            (Math.floor(Math.random() * 40) + 160) +
            "deg; --speed: " +
            (Math.floor(Math.random() * 440) + 660) +
            "ms;";
          e.target.classList.add("kick-to-top-right");
        }
        if (
          mouseDirectionX.value === "left" &&
          mouseDirectionY.value === "top"
        ) {
          e.target.style =
            " --xm: -" +
            (Math.floor(Math.random() * 35) + 35) +
            "px;" +
            " --ym: -" +
            (Math.floor(Math.random() * 35) + 35) +
            "px; --angle: -" +
            (Math.floor(Math.random() * 40) + 160) +
            "deg; --speed: " +
            (Math.floor(Math.random() * 440) + 660) +
            "ms;";
          e.target.classList.add("kick-to-top-left");
        }
      }
    }
    function animEnd(e) {
      if (e.animationName.includes("fadein")) {
        e.target.classList.remove("randomfadein");
        e.target.addEventListener("mouseenter", mouseEnter);
        return;
      }
      let arr = [];
      for (let index = 0; index < e.target.classList.length; index++) {
        arr[index] = e.target.classList[index];
      }

      arr
        .filter((x) => x.includes("kick"))
        .forEach((element) => {
          e.target.classList.remove(element);
        });
    }
    return {
      // It is important to return the ref,
      // otherwise it won't work.
      split,
      spans,
      mouseY,
      mouseX,
      mouseDirectionY,
      mouseDirectionX,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.split span {
  display: inline-block;
  white-space: pre;
}
.kick-to-left {
  animation: kick-to-left 0.9s ease 1 forwards;
}
@keyframes kick-to-left {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-50px) skewX(13deg);
  }
  100% {
    transform: translateX(0px);
  }
}
.kick-to-right {
  animation: kick-to-right 0.9s ease 1 forwards;
}
@keyframes kick-to-right {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(50px) skewX(-13deg);
  }
  100% {
    transform: translateX(0px);
  }
}
.kick-to-bottom-right {
  animation: kick-to-bottom-right var(--speed) ease 1 forwards;
}
@keyframes kick-to-bottom-right {
  0% {
    transform: translateX(0px) translateY(0px);
  }
  50% {
    transform: translateX(var(--xm)) translateY(var(--ym)) rotate(var(--angle));
  }
  100% {
    transform: translateX(0px) translateY(0px) rotate(360deg);
  }
}
.kick-to-bottom-left {
  animation: kick-to-bottom-left var(--speed) ease 1 forwards;
}
@keyframes kick-to-bottom-left {
  0% {
    transform: translateX(0px) translateY(0px);
  }
  50% {
    transform: translateX(var(--xm)) translateY(var(--ym)) rotate(var(--angle));
  }
  100% {
    transform: translateX(0px) translateY(0px) rotate(-360deg);
  }
}
.kick-to-top-right {
  animation: kick-to-top-right var(--speed) ease 1 forwards;
}
@keyframes kick-to-top-right {
  0% {
    transform: translateX(0px) translateY(0px);
  }
  50% {
    transform: translateX(var(--xm)) translateY(var(--ym)) rotate(var(--angle));
  }
  100% {
    transform: translateX(0px) translateY(0px) rotate(360deg);
  }
}
.kick-to-top-left {
  animation: kick-to-top-left var(--speed) ease 1 forwards;
}
@keyframes kick-to-top-left {
  0% {
    transform: translateX(0px) translateY(0px);
  }
  50% {
    transform: translateX(var(--xm)) translateY(var(--ym)) rotate(var(--angle));
  }
  100% {
    transform: translateX(0px) translateY(0px) rotate(-360deg);
  }
}
.kick-to-top {
  animation: kick-to-top 1s ease 1 forwards !important;
}
@keyframes kick-to-top {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-50px) scaleY(1.4) scaleX(0.75);
  }
  100% {
    transform: translateY(0px);
  }
}
.kick-to-bottom {
  animation: kick-to-bottom 1s ease 1 forwards;
}
@keyframes kick-to-bottom {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(50px) scaleY(1.4) scaleX(0.75);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
