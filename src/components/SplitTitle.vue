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
      type:  String,
      required: false,
      default: '1000ms',
    },
    letterKick: {
      type: [Boolean, String],
      required: false,
      default: false,
    },
    smoke: {
      type: [Boolean, String],
      required: false,
      default: false,
    }
  },
  setup(props) {
    const split = ref(null)
    const mouseY = ref(0)
    const mouseX = ref(0)
    const mouseDirectionY = ref("")
    const mouseDirectionX = ref("")
    const spans = ref("")
    const spanContainer = ref([])
    onMounted(() => {
      splitContent(split.value)
      
      if (props.animation === "randomfadein") randomFadeIn()
      document.addEventListener("mousemove", direction)
      if (props.letterKick) setupKickableSpans(split.value)
      if (props.smoke){ 
          setupSmokeSpans()
      }
    })
    
    function splitContent(ele) {
      let el = ele.querySelector("h1,h3");
      for (let index = 0; index < el.textContent.length; index++) {
        spans.value += "<span>" + el.textContent[index] +
           "</span>"
        
      }
      el.innerHTML = spans.value;
      spanContainer.value = el.querySelectorAll("span")
    }
    function randomFadeIn() {
      let array = split.value.querySelectorAll("span");
  
      array.forEach((element) => {
        element.style =
          "--rnd: " +
          (Math.floor(Math.random() * 2000) + 1000 ) +
          "ms; --rnda: " +
          (Math.floor(Math.random() * 2000) + 1042) +
          "ms";
        element.classList.add(props.animation);
        element.addEventListener("animationend", animEndFadeIn);
      });

    }
    function smokeReveal( ele ) {

      if (ele === undefined || ele == 'randomfadein') {
        
        for (let index = 0; index < spanContainer.value.length; index++) {
          const element = spanContainer.value[index]
          element.className = ''
          setSmokeStyle(element, true)
          element.classList.add("opa-zero")
          element.classList.add("reverse")
          element.classList.add("easein")
          element.classList.add("smoke-animation")
          element.state = "init"
        }
      }else{
          setSmokeStyle(ele, true)
          ele.classList.add("opa-zero")
          ele.classList.add("reverse")
          ele.classList.add("easein")
          ele.classList.add("smoke-animation")
          ele.state = "init"
      }
    }
    function setSmokeStyle(element, isReverse){
      const xMovement = Math.floor(Math.random() * 10) + 5
      const yMovement = Math.floor(Math.random() * 15) + 3
      const skew = Math.floor(Math.random() * 40) 
      const rotate = Math.floor(Math.random() * 100)
      const delay = Math.floor(Math.random() * 300)

      if(isReverse) setRandomDirection()
      
       element.style =
        '--xm: ' + 
        (mouseDirectionX.value == 'left' ? xMovement * -1:xMovement) + 'rem;' + 
        '--ym: ' + 
        (mouseDirectionY.value == 'top' ? yMovement:yMovement * -1) + 'rem;' + 
        '--sk: ' + skew + 'deg;' + 
        '--rt: ' + rotate + 'deg;' + 
        '--delay: ' + delay + 'ms;'
    }
    function setRandomDirection(){
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          mouseDirectionX.value = 'left'
          break;
        default:
          mouseDirectionX.value = 'right'
          break;
      }
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          mouseDirectionY.value = 'top'
          break;
        default:
          mouseDirectionY.value = 'bottom'
          break;
      }
    }
  
    function direction(e) {
      if (e.pageY > mouseY.value) mouseDirectionY.value = 'top'
      else mouseDirectionY.value = "bottom"

      if (e.pageX < mouseX.value) mouseDirectionX.value = 'left'      
      else mouseDirectionX.value = "right"

      
      mouseY.value = e.pageY
      mouseX.value = e.pageX
    }
    function setupKickableSpans(spanContainer) {
      let elements = spanContainer.querySelectorAll("span");
      elements.forEach((element) => {
        element.addEventListener("animationend", animEndKick);
      });
    }
    function setupSmokeSpans() {
      spanContainer.value.forEach((element) => {
         element.addEventListener("animationend", animEndSmoke);

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
            (Math.floor(Math.random() * 55) + 55) +
            "px;" +
            " --ym: " +
            (Math.floor(Math.random() * 55) + 55) +
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
            (Math.floor(Math.random() * 55) + 55) +
            "px;" +
            " --ym: " +
            (Math.floor(Math.random() * 55) + 55) +
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
            (Math.floor(Math.random() * 55) + 55) +
            "px;" +
            " --ym: -" +
            (Math.floor(Math.random() * 55) + 55) +
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
            (Math.floor(Math.random() * 55) + 55) +
            "px;" +
            " --ym: -" +
            (Math.floor(Math.random() * 55) + 55) +
            "px; --angle: -" +
            (Math.floor(Math.random() * 40) + 160) +
            "deg; --speed: " +
            (Math.floor(Math.random() * 440) + 660) +
            "ms;";
          e.target.classList.add("kick-to-top-left");
        }
      }
    }
    function mouseEnterSmoke(e) {
      
      if (e.target.state === 'idle') {
        setSmokeStyle(e.target, false)
        e.target.classList.add("forwards")
        e.target.classList.add("easein")
        e.target.classList.add("opa-zero")
        e.target.classList.add("smoke-animation")
        e.target.state = 'smoking' 
      }
     
    }
   
    function animEndKick(e) {
      if (e.animationName.includes("fadein")) {
        e.target.classList.remove("randomfadein");
        e.target.addEventListener("mouseenter", mouseEnter);
        return;
      }
       if(e.target.className.indexOf("kick") != -1 ) e.target.className = ""
    }
    function animEndSmoke(e) {
      e.target.addEventListener("mouseenter", mouseEnterSmoke)
      if (e.target.state === 'init') {
        e.target.state = 'idle'
        e.target.className = ""
      }
      if (e.target.state === 'smoking') smokeReveal(e.target)       
    }
    function animEndFadeIn(e) {

      e.target.state='init'
      e.target.className = ""
      setSmokeStyle(e.target, true)
      e.target.removeEventListener("animationend", animEndFadeIn)
    }
    return {
       split,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.split span[class*="smoke"], .split span[class*="kick"]{
   pointer-events: none;
}

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

.smoke-animation{
  animation: smoke-animation 1;
  animation-duration: calc(500ms + var(--delay));
}
@keyframes smoke-animation {
  0%{
      transform: translateX(0px);
      opacity: 1;
  }
  20%{
      text-shadow: 0 0 5px currentColor;
      opacity: 1;
  }
  70%{
      transform: translate3d(var(--xm),var(--ym),20px) skewX(var(--sk)) scale(1.5) rotate3d(1,1,1,var(--rt)) perspective(30px); 
      /* transform: translate3d(15rem,-8rem,0) skewX(var(--sk)) scale(1.5) rotate3d(1,1,1,var(--rt)) perspective(30px);  */
      filter: blur(8px);
      text-shadow: 0 0 14px currentColor;
      opacity: 0.1;
  }
  80%{
    transform: translate3d(var(--xm),var(--ym),20px) skewX(var(--sk)) scale(4) rotate3d(1,1,1,var(--rt)) perspective(30px); 
    text-shadow: 0 0 20px currentColor;
     opacity: 0;
  }
  100%{
      opacity: 0;
  }
}
.opa-zero {
  opacity: 0;
}

.reverse{
  animation-direction: reverse;
  animation-delay: v-bind("animationDelay");
  animation-duration: 2s;
}
.forwards{
  animation-direction: forwards;
  animation-duration: 5s;
}
.easein{
  animation-timing-function: ease-in;
}
.easeout{
  animation-timing-function: ease-out;
}
</style>
