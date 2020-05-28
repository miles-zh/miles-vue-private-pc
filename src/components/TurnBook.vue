<template>
  <div style="background:#999;height:100%;position:relative">
    <div class="container" @click="turnBook">
      <div class="book">
        <div class="page1" id="page1">
          <div class="page-back"></div>
          <div class="page-front">HTML5</div>
        </div>
        <div class="page2" id="page2">
          <div class="page-back"></div>
          <div class="page-front">CSS3</div>
        </div>
        <div class="page3" id="page3">
          <div class="page-back"></div>
          <div class="page-front">JavaScript</div>
        </div>
        <div class="page4" id="page4">
          <div class="page-back"></div>
          <div class="page-front">END</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookDom: null,
      pagesDom: null,
      currentIndex: 0,
      timer:null
    };
  },
  methods: {
    turnBook() {
     this.timer=null;
      this.pagesDom[this.currentIndex].style.transform = `rotateY(-145deg)`;
      this.pagesDom[this.currentIndex].style.transition = `2s`;
      console.log(this.currentIndex);
      this.currentIndex++;
      if (this.currentIndex == this.pagesDom.length) {
        this.currentIndex = 0;
        for (let i = 0; i <= this.pagesDom.length; i++) {
          this.pagesDom[i].style.transform = `rotateY(0deg)`;
        }
      }
    },
    autoTurn(){
        this.timer=setInterval(() => {
            this.turnBook()
        }, 2000);
    }
  },
  mounted() {
    this.bookDom = document.querySelector(".book");
    this.pagesDom = document.querySelectorAll("[id^='page']");
    this.autoTurn()
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #999;
}

.container {
  width: 90%;
  position: absolute;
  height: 100%;
  background-color: #999;
  margin-left:50px;
}
.book {
  width: 100px;
  height: 150px;
  background-color: rgba(255, 0, 0, 0.5);
  position: relative;
  margin: 30px auto;
  /*   设置3d空间 */
  transform-style: preserve-3d;
  /*    设置近大 远小的效果*/
  perspective: 800px;
  cursor: pointer;
}
.page-front,
.page-back {
  width: 100px;
  height: 150px;
  position: absolute;
  box-sizing: border-box;
}
#page1,
#page2,
#page3,
#page4 {
  /*    设置翻转的轴*/
  transform-origin: left;
  /*   设置3d空间 */
  transform-style: preserve-3d;
  position: absolute;
  left: 0;
  top: 0;
}
#page1 {
  z-index: 4;
}
#page2 {
  z-index: 3;
}
#page3 {
  z-index: 2;
}
#page4 {
  z-index: 1;
}

/* .book:hover #page1,
.book:hover #page2,
.book:hover #page3, */
/* .book:hover #page1{
  transform:rotateY(-150deg);
  transition:2s;
} */
.page-front {
  background-color: greenyellow;
  /*   line-height:300px; */
  text-align: center;
  /*    字体粗细 字体大小/行高 字体类型*/
  font: bold 10px/150px Arial;

  border: 10px solid #fff;
  /*  设置背面不可见  */
  backface-visibility: hidden;
}
.page-back {
  background-color: #f0f0f0;
}
</style>