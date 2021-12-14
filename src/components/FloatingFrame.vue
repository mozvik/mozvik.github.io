<template>
    <div id="project-mobile">
      <!-- <div id="project-active" v-if="displaySize < 3"> -->
        <div class="card-title" >{{ activeProject.current.title }}</div>
        <div class="card-brief">{{ activeProject.current.brief }}</div>
        <div class="item-buttons"  v-if="activeProject.current.buttonDemo.text">
            <div class="item-demo">
              <Button :options="activeProject.current.buttonDemo">{{activeProject.current.buttonDemo.text}}</Button>
            </div>
            <div class="item-code" v-if="activeProject.current.buttonCode.text">
              <span></span><Button  :options="activeProject.current.buttonCode">{{activeProject.current.buttonCode.text}}</Button>
            </div>
        </div>
    </div>
    <div id="project-desktop" :class="status"  ref="mySelf">
        <div v-for="(card, i) in languageData.computed.currentLanguageData().portfolioView.cards"
        :key="i"
        :title="card.title"
        :content="card.content"
        class="card-item"
        :class="[activeProject.index != i && activeProject.nextIndex != i && activeProject.prevIndex != i ? 'card-hidden':'',
        activeProject.nextIndex === i ? 'card-next':'', 
        activeProject.prevIndex === i ? 'card-out':'',
        activeProject.index === i ? 'card-active':'']"      > 
        <div class="item-wrapper">
          <div class="card-title" >{{ card.title }}</div>
          <div class="card-brief">{{ card.brief }}</div>
          <div class="item-buttons">
            <div class="item-demo" v-show="card.buttonDemo.text">
              <Button :options="card.buttonDemo">{{card.buttonDemo.text}}</Button>
            </div>
            <div class="item-code" v-show="card.buttonCode.text">
              <span></span><Button :options="card.buttonCode">{{card.buttonCode.text}}</Button>
            </div>
          </div>
        </div>

      
      <!-- <div class="card-brief idle-card">{{ card.brief }}</div> -->
        <div id="arrows">
       
          <div class="arrow-next" @click="activeProject.stepForward">
            <Icon icon="carbon:next-filled" width="60"/>
          </div>
        </div>
      </div>

         
    </div>
    <div id="arrows" v-if="displaySize < 3">
        <div class="arrow-prev">
        <Icon icon="carbon:previous-filled" width="60" @click="activeProject.stepBackward"/>
        </div>

        <div class="arrow-next">
          <Icon icon="carbon:next-filled" width="60" @click="activeProject.stepForward"/>
        </div>
      <!-- </div> -->
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import Button from "@/components/Button.vue";
import { ref, reactive, computed, inject, onMounted } from "vue";
export default {
  name: "FloatingFrame",
  components: { 
    Icon,
    Button 
    },
  props: {
    displaySize: {
      type: Number,
    },
  },
  setup() {
    const languageData = inject("Locale")
    // const cardStyle = reactive(
    //   [ {
    //     transform: 'rotate(-3deg) translate(20px, 10px)'
        
    //   },{
    //     transform: 'rotate(3deg) translate(5px, -20px)',
    //     filter: 'brightness(.9)'
    //   },{
    //      transform: 'rotate(4deg) translate(30px, -40px)',
    //      filter: 'brightness(.8)'
    //   },{
    //      transform: 'rotate(6deg) translate(50px, -60px)',
    //      filter: 'brightness(.7)'
    //   }

    // ])
    const activeProject = reactive({
      index: 0,
      stepForward: function(){
         if((activeProject.index + 1) >= languageData.computed.currentLanguageData().portfolioView.cards.length){
          activeProject.index = 0
          }
          else activeProject.index++
      },
      stepBackward: function(){
         if(activeProject.index <= 0){
        activeProject.index = languageData.computed.currentLanguageData().portfolioView.cards.length - 1
        }
        else activeProject.index--
      },
      nextIndex: computed(() => { 
        if((activeProject.index + 1) >= languageData.computed.currentLanguageData().portfolioView.cards.length){
          return 0
        }
        else return activeProject.index + 1
        }
      ),
      
      prevIndex: computed(() => { 
        if(activeProject.index <= 0) return languageData.computed.currentLanguageData().portfolioView.cards.length - 1
        else return activeProject.index - 1
        
      }),
      current: computed(() => { return languageData.computed.currentLanguageData().portfolioView.cards[activeProject.index]}
      ),
      prev: computed(() => { 
        if(activeProject.index <= 0){
          return languageData.computed.currentLanguageData().portfolioView.cards[languageData.computed.currentLanguageData().portfolioView.cards.length - 1]}
        else return languageData.computed.currentLanguageData().portfolioView.cards[activeProject.index - 1]
      }),
      next: computed(() => { 
        if((activeProject.index + 1 >= languageData.computed.currentLanguageData().portfolioView.cards.length)){
          return languageData.computed.currentLanguageData().portfolioView.cards[0]}
        else return languageData.computed.currentLanguageData().portfolioView.cards[activeProject.index + 1]
      })
    })
    const observer = ref(null)
    const mySelf = ref(document.getElementById('project-desktop'))
    const status = ref(null)



    onMounted(() => {
      observer.value = new IntersectionObserver(intersection, {threshold: [.5]})
     
      observer.value.observe(mySelf.value)
     
    })

    const intersection = (entries) => {
        const active = entries.filter((e) => e.isIntersecting ); 
        const inActive = entries.filter((e) => !e.isIntersecting ); 
        if (inActive.length) status.value = 'base-hidden'
        if (active.length){
          if(active[0].boundingClientRect.y >= 0){
            status.value = 'base-active-fromtop' 
          }
          else if(active[0].boundingClientRect.y < 0) status.value = 'base-active-frombottom'
        } 
       
    }

    return { activeProject,  languageData,  mySelf, status
       
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#project-desktop {
  display: none;
}
#project-mobile{
  height: 50vh;
}
#arrows{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* position: absolute; */
  width: 100%;
  margin-top: 5rem;
  /* bottom: 0; */
}
#arrows>div{
  padding: .1rem 1rem;
}
#project-active{
   width: 100%;
   height: 100%;
   /* min-height:60vh; */
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding-bottom: 5rem;
 }
 .card-title{
   text-align: center;
   font-size: 2rem;
   padding: 1rem;
 }
.card-brief{
   text-align: center;
   font-size: 1.25rem;
   padding: 1rem;
 }
 .arrow-next, .arrow-prev{
   cursor: pointer;
   transition: color 0.30s ease-in-out;
 }
 .arrow-next:hover, .arrow-prev:hover{
   color: var(--secondary);
   transition: color 0.30s ease-in-out;
 }
 .item-buttons, .item-buttons>div{
    padding-bottom: .25rem;
  }
  
/**          DESKTOP                                   **/
@media screen and (min-width: 992px) {


#project-mobile{
   display: none;
 }
 #project-desktop{
   display: initial;
   width: 100%;
   height: 100%;
   padding-top: 10rem;
   justify-items: center;
   align-items: center;
   z-index: 10;
   transform-origin: top right;
   /* transform: rotate(0deg); */
   opacity: 1;
 
 }
 .item-buttons{
    padding-left: 1rem;
  }
  .card-item{
   background: var(--secondary);
   color: var(--dark);
   flex-basis: 50%;
   width: 650px;
   height: 325px; 
   position: absolute;
   transition: transform 0.35s ease-in-out;
   transform-origin: top right;
   border-radius: 16px;
   box-shadow: 5px 5px 5px 1px var(--shadow);
}


 .card-hidden{
   /* visibility: hidden;  */
   display: none;
 }
 .arrow-next:hover, .arrow-prev:hover{
   color: var(--background);
   
 }
 #arrows{
  width: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: all 1.35s ease-in-out;
  }
  .item-wrapper{
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
 .card-out{
   z-index: 3;
   transform: translate(0,0) rotate(-2deg);
   transform-origin: top right;
   animation: cardOut 0.6s cubic-bezier(0.8, 0.2, 0.1, 0.8) 1 forwards;
 }
 @keyframes cardOut{
   0%{
     z-index: 5;
     transform: translate(0) rotate(-2deg); 
   }
   50%{ 
     z-index: 5;
     transform: translate(110px,-120%) rotate(15deg);
   }
   100%{ 
     transform: translate(50px,-10px) rotate(6deg);
     filter: brightness(.85) blur(.5px);
     z-index: 1;
   }
 }
 .card-next{
   z-index: 1;
   transform: translate(50px,-10px) rotate(6deg);
   animation: cardNext 0.6s ease 1 forwards; 
 }
 @keyframes cardNext{
   0%{
     z-index: 1;
     transform: translate(50px,-10px) rotate(4deg);
   }
   20%{ 
     z-index: 3;
     transform: translate(30px,-10px) rotate(4deg);
   }
   100%{ 
     transform: translate(30px,0px) rotate(2deg);
     filter: brightness(.9);
     z-index: 3;
   }
 }
 .card-active{
   transform: translate(30px,0px) rotate(3deg);
   animation: cardActive 0.6s ease 1 forwards;
   z-index: 4;
 }
 @keyframes cardActive{
   0%{
     z-index: 4;
     transform: translate(20px,0px) rotate(3deg); 
   }
   40%{ 
     z-index: 4;
     transform: translate(20px,-10px) rotate(3deg); 
   }
   100%{ 
     transform: translate(0) rotate(-2deg); 
     z-index: 5;
   }
 }

.card-item:hover{
  transition: transform 0.35s ease-in-out;
  
}
.base-active-frombottom{
 transform-origin: top right;
 opacity: 1;
 animation: entering-from-bottom 1.5s ease forwards;
}
@keyframes entering-from-bottom {
  0% {opacity:0; transform: rotate(-4deg)} 
  35% {opacity: 1;}
  100% {opacity:1; transform: rotate(0deg)} 
}
.base-active-fromtop{
 transform-origin: bottom right;
 opacity: 1;
 animation: entering-from-top 1.5s ease forwards;
}
@keyframes entering-from-top {
  0% {opacity:0; transform: rotate(5deg)} 
  35% {opacity: 1;}
  100% {opacity:1; transform: rotate(0deg)} 
}

#project-desktop.base-hidden{
 
 opacity: 0;
 transform: rotate(-9deg);
 transition: all 0.2s ease;
}
.card-title{
  border-bottom: 2px solid var(--primary);
  /* width: 90%; */
  margin: 0 1rem;
  /* margin: 0 auto; */
}

}
 /**          LARGE DESKTOP                                   **/
@media screen and (min-width: 1200px) {
  
}

</style>
