<template>
  <div class="parent" ref="wrap">ff</div>
</template>

<script>
export default {
  data() {
    return {
      oDiv: null,
      timer: null,
      wrapDom: null,
      fires: [],
      n: 0,
      flag: true,
      flag1: true,
      wrapWidth: 0,
      timer2: null
    };
  },
  mounted() {
    let h = this.$refs.wrap.offsetHeight;
    this.wrapDom = this.$refs.wrap;
    this.wrapWidth = this.wrapDom.offsetWidth;
    // console.log(this.$refs.wrap.offsetHeight);
    this.fireRun(h);
  },
  methods: {
    randomColor() {
      var color = "#";
      var colors = "0123456789abcdef";
      for (let j = 0; j < 4; j++) {
        let i = parseInt(Math.random() * 16);
        color += colors[i];
      }
      return color;
    },
    async firework(h) {
      // console.log("第二步");
      let x = parseInt(Math.random() * (this.wrapWidth - 100) + 100);
      let y = parseInt(Math.random() * 100 + 20);
      this.oDiv = document.createElement("div");
      this.oDiv.style.left = x + "px";
      this.oDiv.style.top = h + "px";
      this.oDiv.style.height = "40px";
      this.oDiv.style.width = "2px";
      this.oDiv.style.position = "absolute";
      this.oDiv.style.borderRadius = "50%";
      this.oDiv.setAttribute("ref", "oDiv");
      this.oDiv.style.backgroundColor = this.randomColor();
      // console.log(this.oDiv)
      this.wrapDom.appendChild(this.oDiv);
      //让子弹往上面移动
      let speed = 20;
      this.timer = await setInterval(() => {
        // console.log("第三步");
        this.oDiv.style.top = this.oDiv.offsetTop - speed + "px";
        if (this.oDiv.offsetTop < y) {
          if (this.flag1) {
            this.wrapDom.innerHTML = null;
            this.timer = null;
            // this.flag1 = false;
            this.createFires(h);
          }
        }
      }, 1000 / 60); //1000除60，是浏览器的刷新频率，单位是毫秒
    },
    async createFires(h) {
      // console.log("第四步");
      this.n = Math.ceil(Math.random() * 50) + 100;
      let x = parseInt(Math.random() * 800 + 300);
      let y = parseInt(Math.random() * 100 + 20);
      for (let i = 0; i < this.n; i++) {
        this.fires[i] = document.createElement("div");

        this.fires[i].style.left = x + "px";
        this.fires[i].style.top = y + "px";
        this.fires[i].style.backgroundColor = this.randomColor();
        this.fires[i].style.height = "4px";
        this.fires[i].style.width = "2px";
        this.fires[i].style.borderRadius = "50%";
        this.fires[i].style.backgroundColor = this.randomColor;
        this.fires[i].style.position = "absolute";
        this.fires[i].setAttribute("ref", "fires_" + i);
        //给每个粒子天津速度值
        this.fires[i].speedX = Math.random() * 20 - 10;
        this.fires[i].speedY = Math.random() * 20 - 10;
        this.wrapDom.appendChild(this.fires[i]);
      }
      setInterval(() => {
        for (let i = 0; i < this.n; i++) {
          if (!this.fires[i]) {
            continue;
          }
          this.fires[i].style.left =
            this.fires[i].offsetLeft + this.fires[i].speedX + "px";
          this.fires[i].style.top =
            this.fires[i].offsetTop + this.fires[i].speedY + "px";
          //防止向上的粒子永远往上面跑
          this.fires[i].speedY += 0.3;
          if (
            this.fires[i].offsetLeft < 0 ||
            this.fires[i].offsetLeft > document.body.offsetWidth ||
            this.fires[i].offsetTop > h
          ) {
            this.fires[i].timer = null;
            this.fires[i] = null
          }
        }
        }, 1000 / 60);
      
        
      
    },
    async fireRun(h) {
      // console.log(new Date().getTime());
      await setInterval(() => {
        //生产烟花子弹

        // console.log(time2 - time1)
        // console.log(this.x,this.y,h)
        if (h != undefined && this.flag) {
          // console.log("第一步");
          // this.flag = false;
          this.firework();
        }
      }, 3000);
    }
  }
};
</script>

<style  scoped>
.parent {
  min-height: 320px;
  width: 100%;
  overflow: hidden;
  background-color: #000;
  border: 1px solid #000;
  position: relative;
}
</style>