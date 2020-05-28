<template>
  <div style="height:100%;margin:0">
    <div class="wrapper" ref="wrapper">
      <ul ref="ul">
        <li>
          <img src="http://i1.fuimg.com/702814/7c9d845a99acd8a6.jpg" alt />
        </li>
        <li>
          <img src="http://i1.fuimg.com/702814/38c96a66cadd59ce.jpg" alt />
        </li>
        <li>
          <img src="http://i1.fuimg.com/702814/0de0f87c74529cfd.jpg" alt />
        </li>
        <li>
          <img src="http://i1.fuimg.com/702814/878e0d323d7351bd.jpg" alt />
        </li>
        <li>
          <img src="http://i1.fuimg.com/702814/eb768c74ba8ba504.jpg" alt />
        </li>
      </ul>
      <!-- <div class="btn" ref="btns" :style="{opacity:this.btnOpacity}">
        <a href="#" class="btnleft" @click="moveLeft">&lt;</a>
        <a href="#" class="btnright" @click="moveRight">&gt;</a>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: [
        {
          width: 150,
          top: -50,
          left: -75,
          opacity: 0.2,
          zIndex: 2
        },
        {
          width: 175,
          top: -25,
          left: -150,
          opacity: 0.8,
          zIndex: 3
        },
        {
          width: 200,
          top: 0,
          left: 0,
          opacity: 1,
          zIndex: 4
        },
        {
          width: 175,
          top: -25,
          left: 175,
          opacity: 0.8,
          zIndex: 3
        },
        {
          width: 150,
          top: -50,
          left: 125,
          opacity: 0.2,
          zIndex: 2
        }
      ],
      leader: null,
      target: null,
      step: null,
      flag: true,
      timer: null,
      flag1: true,
      btnOpacity: 0,
      ul: null,
      lis: null,
      btn: null,
      wrap: null
    };
  },

  mounted() {
    this.lis = this.$refs.ul.children;
    for (var i = 0; i < this.lis.length; i++) {
      this.animate(this.lis[i], this.config[i]);
    }

    setTimeout(() => {
      this.autoPlay();
    }, 3000);
  },
  methods: {
    animate(obj, json, fn1) {
      clearInterval(obj.timer);
      obj.timer = null;
      obj.timer = setInterval(function() {
        let flag = true;
        // console.log('a');
        for (var key in json) {
          if (key === "opacity") {
            // console.log("b")
            this.leader = window.getComputedStyle(obj)[key] * 100;
            // console.log(leader)
            this.target = json[key] * 100;
            this.step = (this.target - this.leader) / 10;
            this.step =
              this.step > 0 ? Math.ceil(this.step) : Math.floor(this.step);
            this.leader = this.leader + this.step;
            // console.log(leader+"A")
            obj.style[key] = this.leader / 100;
          } else if (key === "zIndex") {
            obj.style[key] = json.zIndex;
          } else {
            this.leader = parseInt(window.getComputedStyle(obj)[key]);
            // console.log(leader)
            this.target = parseInt(json[key]);
            this.step = (this.target - this.leader) / 10;
            this.step =
              this.step > 0 ? Math.ceil(this.step) : Math.floor(this.step);
            this.leader = this.leader + this.step;
            obj.style[key] = this.leader + "px";
          }
          // console.log(target)
          if (this.target !== this.leader) {
            flag = false;
          }
        }
        if (flag) {
          clearInterval(obj.timer);
          obj.timer = null;
          if (fn1) {
            fn1();
          }
        }
      }, 15);
    },
    isBtnShow() {
      this.btnOpacity = 1;
      this.timer = null;
      clearInterval(this.timer);
    },
    isBtnHide() {
      this.btnOpacity = 0;
      this.autoPlay();
    },
    moveRight() {
      // console.log(this.lis)
      // console.log("a")
      // console.log(this.flag1)
      clearInterval(this.timer);
      if (this.flag1) {
        this.flag1 = false;
        this.config.push(this.config.shift());
        for (var i = 0; i < this.lis.length; i++) {
          this.animate(this.lis[i], this.config[i], function() {});
        }
        this.flag1 = true;
      }
    },
    moveLeft() {
      clearInterval(this.timer);
      if (this.flag1) {
        this.flag1 = false;
        this.config.unshift(this.config.pop());
        for (var i = 0; i < this.lis.length; i++) {
          this.animate(this.lis[i], this.config[i], function() {});
        }
        this.flag1 = true;
      }
    },
    autoPlay() {
      this.timer = setInterval(() => {
       
        if (this.flag1) {
          this.flag1 = false;
          this.config.push(this.config.shift());
          for (var i = 0; i < this.lis.length; i++) {
            this.animate(this.lis[i], this.config[i], function() {});
          }
          this.flag1 = true;
        }
        console.log("a");
      }, 3000);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
}
.wrapper {
  position: relative;
  width: 100%;
  margin: 100px auto;
}
ul {
  list-style: none;
  position: relative;
  width: 200px;
  height: 100px;
  margin: 0 auto;
}
ul li {
  position: absolute;
  height: 100%;
  width: 100%;
  /*   z-index:0; */
}
.btn {
  font-size: 30px;
  width: 200px;
  z-index: 999;
  position: absolute;
  height: 30px;
  line-height: 30px;
  /*   background-color: rgba(0,0,0,0.1); */
  text-align: center;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translateX(-50%) translateY(-50%);
}
img {
  width: 100%;
  height: 100%;
}
.btnleft {
  float: left;
}
.btnright {
  float: right;
}
li:nth-of-type(2) {
  border: 1p solid #000;
}
</style>