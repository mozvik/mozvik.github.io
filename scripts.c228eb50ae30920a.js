class Smooth{constructor({element:t=window,strength:s=10,acceleration:e=1.2,deceleration:i=.975}={}){this.element=t,this.distance=s,this.acceleration=e,this.deceleration=i,this.running=!1,this.element.addEventListener("wheel",this.scrollHandler.bind(this),{passive:!1}),this.element.addEventListener("mousewheel",this.scrollHandler.bind(this),{passive:!1}),this.scroll=this.scroll.bind(this)}scrollHandler(t){t.preventDefault(),this.running?(this.isDistanceAsc=!1,this.currentDistance=t.deltaY>0?this.distance:-this.distance):(this.top=this.element.pageYOffset,this.running=!0,this.currentDistance=t.deltaY>0?.1:-.1,this.isDistanceAsc=!0,this.scroll())}scroll(){this.running&&(this.currentDistance*=!0===this.isDistanceAsc?this.acceleration:this.deceleration,Math.abs(this.currentDistance)<.1&&!1===this.isDistanceAsc&&(this.running=!1),Math.abs(this.currentDistance)>=Math.abs(this.distance)&&(this.isDistanceAsc=!1),this.top+=this.currentDistance,this.element.scrollTo(0,this.top),this.top<0&&(this.top=0),this.top>document.body.scrollHeight-this.element.innerHeight&&(this.top=document.body.scrollHeight-this.element.innerHeight),requestAnimationFrame(this.scroll))}}const body=new Smooth({element:window,strength:14,acceleration:1.9,deceleration:.94});