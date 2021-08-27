<template>
  <transition name='randomfadein' appear>
    <div ref="split">
       <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SplitTitle",
  props: {
    animation: String,
    animationDelay: { 
      type: Number,
      required: false,
      default: 1000 } 
  },
  data () {
    return {
    }
  },
  mounted () {
     this.splitContent(this.$refs.split)
     if (this.animation === 'randomfadein') this.randomFadeIn()
  },
  computed: {
   
  },
  methods: {
    randomFadeIn() {
      let array = this.$refs.split.querySelectorAll('span')
      array.forEach(element => {
          element.style ='--rnd: ' + (Math.floor(Math.random() * this.animationDelay) + 1042) + 'ms; --rnda: ' + (Math.floor(Math.random() * 2000) + 1042) + 'ms'
        element.classList.add(this.animation)
      });
    },
    splitContent(ele) {
      let exit = false;
      let innerArray = ele.innerHTML
      let currentPos = 0
      do {
        let leftArrowIndex = innerArray.indexOf('>', currentPos)
        if (leftArrowIndex < 0) exit = true
        else{
          currentPos = leftArrowIndex + 1
          let rightArrowIndex = innerArray.indexOf('<', currentPos)
          if(rightArrowIndex < 0) exit = true
          else{
            let spanUnescaped = innerArray.substring(leftArrowIndex + 1, rightArrowIndex).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
            let span = innerArray.substring(leftArrowIndex + 1, rightArrowIndex)
            let x= ''
            for (let index = 0; index < spanUnescaped.length; index++) {
              const element = spanUnescaped[index];
               if(element!='') x += '<span>' + element + '</span>'
            }
            ele.innerHTML = ele.innerHTML.replace(span, x)
            currentPos = rightArrowIndex 
          }
        } 
      } while (!exit);
    },
    elementTextToSpan(ele) {
      return ele.textContent;
    },
    makeSpans(letter) {
      this.spans += '<span>' + letter + '</span>'
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
