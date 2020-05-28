<template>
  <div class="home">
    <el-container class="wrapper">
      <el-header>
        <img src="../assets/DSC.jpg" />  ZHANGHONG
       
      </el-header>
      <el-container>
        <el-aside width="95px">
          <el-row class="tac">
            <el-col>
              <el-menu
                :default-active="activeMenue"
                class="el-menu-vertical-demo"
                :router="true"
                @select="getActiveMenue"
                >
                <el-menu-item index="/home/circlenav">
                  <span slot="title" >
                    导航菜单  
                  </span>
                </el-menu-item>
                <el-menu-item index="/home/stock">
                 
                  <span slot="title">
                    旋转股子
                  </span>
                </el-menu-item>
                <el-menu-item index="/home/targettab">
                  
                  <span slot="title">
                    target选项卡
                  </span>
                </el-menu-item>
                <el-menu-item index="/home/swiper">
                  
                  <span slot="title">
                    轮播
                  </span>
                </el-menu-item>
                <el-menu-item index="/home/carousel">
                  
                  <span slot="title">
                    旋转木马
                  </span>
                </el-menu-item>
                <el-menu-item index="/home/taichi">
                  
                  <span slot="title">
                    旋转太极图
                  </span>
                </el-menu-item>
                <el-menu-item index="/home/pie">
                  
                  <span slot="title">
                    饼图
                  </span>
                </el-menu-item>
                <el-menu-item index="/home/turnbook">
                  
                  <span slot="title">
                    翻书
                  </span>
                </el-menu-item>
                <el-menu-item index="/home/magnifier">
                  
                  <span slot="title">
                    放大镜
                  </span>
                </el-menu-item>
                <el-menu-item index="/home/firework">
                  
                  <span slot="title">
                    烟花
                  </span>
                </el-menu-item>
                <el-menu-item index="/home/queryweather">
                  
                  <span slot="title">
                    天气查询
                  </span>
                </el-menu-item>
                <el-menu-item index="/home/calendar">
                  
                  <span slot="title">
                    日期
                  </span>
                </el-menu-item>
                <el-menu-item index="/home/echarts">
                  
                  <span slot="title">
                    Echarts
                  </span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main  over-flow="auto">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return {
      activeMenue:window.sessionStorage.getItem('activeMenue')||'/home/circlenav'
    }
  },
  created(){
    console.log(this.activeMenue)
  },
  methods:{
    getActiveMenue(index){
     this.activeMenue=index
     window.sessionStorage.setItem('activeMenue',this.activeMenue)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 1px;
}
a {
  color: #42b983;
  text-decoration: none;
}

.wrapper{
  margin-top:10px;
}
.el-header{
 
  height: 80px !important;
  color: #000;
  text-align: left;
  border-bottom: 1px solid #999;
}
.el-header img{
  height:60px;
  width: 60px;
  border: 5px solid #fff;
  box-shadow: 1px 1px 10px #999;
  border-radius: 50%;
  vertical-align: middle;
  line-height: 60px;
  margin-right: 20px;
}
.el-aside{
  width: 130px !important;
  background-color: #aaa;
  
}
.el-row{
  height: auto ;
}
.el-main{
  
  padding: 1px;
}
.el-menu-item{
  padding-left: 1px !important;
  height: 30px !important;
  line-height: 30px !important;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  width: 95%;
}

</style>
