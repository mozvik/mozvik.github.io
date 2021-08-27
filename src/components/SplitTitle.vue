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
  },
  data () {
    return {
      spans: '',
 
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
          element.style ='--rnd: ' + (Math.floor(Math.random() * 1000) + 1042) + 'ms; --rnda: ' + (Math.floor(Math.random() * 2000) + 1042) + 'ms'
        element.classList.add(this.animation)
        
        
      });
      // console.log('object :>> ', 1);
    },
    splitContent(ele) {
      
      let exit = false;
      let innerArray = ele.innerHTML
      // let arrayCount = innerArray.length
      let currentPos = 0
      // console.log('innerHtml :>> ',innerArray);
      do {
        
        
        let leftArrowIndex = innerArray.indexOf('>', currentPos)
        

        if (leftArrowIndex < 0) exit = true
        else{
          currentPos = leftArrowIndex + 1
          let rightArrowIndex = innerArray.indexOf('<', currentPos)
          if(rightArrowIndex < 0) exit = true
          else{
            let span = innerArray.substring(leftArrowIndex + 1, rightArrowIndex).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
            let x= ''

            for (let index = 0; index < span.length; index++) {
              const element = span[index];
              if(element!='') x += '<span>' + element + '</span>'
              
            }
            
            ele.innerHTML = ele.innerHTML.replace(span, x)
            
            
            
            currentPos = rightArrowIndex 
          }
        } 

        
      } while (!exit);
      

      // do {
        
      //   let array = ele.children
      //   if(array.length > 0) {
      //     array.forEach(element => {
            
            
      //       this.splitContent(element)   
      //       let arr = this.elementTextToSpan(element)
      //       this.spans = ''
      //       for (let index = 0; index < arr.length; index++) {
      //         const element = arr[index];
      //         this.makeSpans(element)
      //       }
      //       element.innerHTML = element.innerHTML.replace(arr, this.spans)
            
      //     });
      //     exit = true
      //   } else exit = true
      
      // } while (exit === false);
    },
    elementTextToSpan(ele) {
      return ele.textContent;
      // return ele.firstChild.textContent;
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
