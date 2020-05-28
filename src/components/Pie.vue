<template>
  <div>
    <div class="container">
      <div class="circle" style="animation-delay:-25s;" id="circle"></div>

      <div id="range">
          <input type="range" @input="changeValue()">
          <div></div>
      </div>

      <p id="percent">50%</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rangeDom: null,
      circleDom: null,
      percentDom: null
    };
  },
  mounted() {
    this.rangeDom = document.querySelector("#range");
    this.circleDom = document.querySelector("#circle");
    this.percentDom = document.querySelector("#percent");
    console.log(this.rangeDom.children)
    this.rangeDom.children[1].style.width=(this.rangeDom.children[0].value*(this.rangeDom.children[0].offsetWidth-10)/100) +"px";
    
  },
  methods: {
    changeValue() {
        
        this.circleDom.style.animationDelay = -this.rangeDom.children[0].value + "s";
        this.percentDom.innerHTML = this.rangeDom.children[0].value + "%";
        
        this.rangeDom.children[1].style.width=(this.rangeDom.children[0].value*(this.rangeDom.children[0].offsetWidth-10)/100) +"px";
        
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.container {
  margin: 20px auto;
  width: 90%;
  text-align: center;
}
.circle {
  width: 150px;
  height: 150px;
  background-color: greenyellow;
  border-radius: 50%;
  background-image: linear-gradient(to right, transparent 50%, #655 50%);
  margin: 0 auto;
  font: bold 36px Arial;
}
.circle::before {
  content: "";
  display: block;
  height: 100%;
  background-color: greenyellow;
  margin-left: 50%;
  /*  制作半圆  */
  border-radius: 0 100% 100% 0 /0 50% 50% 0;
  transform: rotate(0deg);
  transform-origin: left;
  animation: pie 50s linear infinite, bg 100s step-end infinite;
  /*  设置暂停动画，在动画执行了40s后  */
  animation-play-state: paused;
  /*   继承父元素的延迟时间 */
  animation-delay: inherit;
}
@keyframes pie {
  to {
    transform: rotate(180deg);
  }
}
@keyframes bg {
  50% {
    background-color: #655;
  }
}
#range {
  width: 260px;
  position: relative;
  margin:20px auto 0;
  height: 21px;

}
#range input{
    width: 100%;
    left:75%;
    position: absolute;
    top:0;
    
    display: block;
    margin-left: -200px;
}
#range div {
  height: 6px;
  width: 10px;
  background-color: #655;
  display: block;
  position: absolute;
  left: -5px;
  top: 50%;
  margin-top: -4px;
  z-index: 1;
}
</style>