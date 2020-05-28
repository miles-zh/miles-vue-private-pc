<template>
  <div>
    <div class="box">
      <div class="small" @mouseover="smallMouseOver" @mouseout="smallMouseOut" @mousemove="smallMouseMove">
        <img src="http://i1.fuimg.com/702814/7c9d845a99acd8a6.jpg" alt />
        <div class="mask"></div>
      </div>
      <div class="big">
        <img src="http://i1.fuimg.com/702814/7c9d845a99acd8a6.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      small: null,
      mask: null,
      box: null,
      big: null,
      bigimg: null
    };
  },
  mounted() {
    this.small = document.getElementsByClassName("small")[0];
    this.mask = document.getElementsByClassName("mask")[0];
    this.box = document.getElementsByClassName("box")[0];
    this.big = document.getElementsByClassName("big")[0];
    this.bigimg = this.big.children[0];
  },
  methods: {
    smallMouseOver() {
      this.mask.style.display = "block";
      this.big.style.display = "block";
    },
    smallMouseOut() {
      this.mask.style.display = "none";
      this.big.style.display = "none";
    },
    smallMouseMove(event) {
        
      let e = event || window.event;
      // 鼠标在页面上的位置
      let pageX = e.pageX || e.clientX + document.documentElement.scrollLeft;
      let pageY = e.pageY || e.clientY + document.documentElement.scrollTop;
      // 鼠标在盒子上的位置
      pageX = pageX - this.box.offsetLeft;
      pageY = pageY - this.box.offsetTop;
      let maskX = pageX - this.mask.offsetWidth / 2;
      let maskY = pageY - this.mask.offsetHeight / 2;

      if (maskX < 0) {
        maskX = 0;
      }
      
      if (maskY < 0) {
        maskY = 0;
      }
      if (maskX > this.small.offsetWidth - this.mask.offsetWidth) {
        maskX = this.small.offsetWidth - this.mask.offsetWidth;
      }
      if (maskY > this.small.offsetHeight - this.mask.offsetHeight) {
        maskY = this.small.offsetHeight - this.mask.offsetHeight;
      }

      this.mask.style.left = maskX + "px";
      this.mask.style.top = maskY + "px";

      let bili =
        (this.bigimg.offsetWidth - this.big.offsetWidth) /
        this.mask.offsetWidth;
      // console.log(bili)
      let moveToX = bili * maskX;
      let moveToY = bili * maskY;

      this.bigimg.style.left = -moveToX + "px";
      this.bigimg.style.top = -moveToY + "px";
    }
  }
};
</script>

<style scoped>
.box {
  margin: 30px auto;
  width: 530px;
}
.small {
  height: 200px;
  width: 200px;
  position: relative;
  float: left;
  cursor: pointer;
}
.small img {
  width: 100%;
  height: 100%;
}
.mask {
  position: absolute;
  height: 100px;
  width: 100px;
  background-color: rgba(200, 235, 128, 0.3);
  z-index: 100;
  left: 0;
  top: 0;
  display: block;
}
.big {
  width: 300px;
  height: 300px;
  float: left;
  position: relative;
  overflow: hidden;
  margin-left: 10px;
  display: none;
}
.big img {
  width: 600px;
  height: 600px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>