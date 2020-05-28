<template>
  <div class="echarts-container">
      <router-view class="echart-content"></router-view>
      <div class="echarts-footer">
          <div class="echarts-item">
              <router-link to="/home/echarts/lineechart" tag="span" active-class="echarts-item-active">折线</router-link>
          </div>
          <div class="echarts-item"> <router-link to="/home/echarts/barechart" tag="span" active-class="echarts-item-active">柱状</router-link></div>
          <div class="echarts-item"> <router-link to="/home/echarts/pieechart" tag="span" active-class="echarts-item-active">饼</router-link></div>
          <div class="echarts-item"> <router-link to="/home/echarts/radarechart" tag="span" active-class="echarts-item-active">雷达</router-link></div>
          <div class="echarts-item"> <router-link to="/home/echarts/sunburstechart" tag="span" active-class="echarts-item-active">旭日</router-link></div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
        console.log(this.$root._route.path == '/home/echarts/lineechart'?'#04f':'#555',this.$root._route.path== '/home/echarts/lineechart',this.$root._route.path)
    }
}
</script>

<style scoped>

    .echarts-container{
        
        position: relative;
        
        margin:0 auto;
        display: flex;
        flex-direction: row-reverse;
    }
    .echart-content{
        height: calc(100% - 1rem);
        height: 600px;
        width: 400px;
        flex: 1;
        margin-left: 10px;
    }
    .echarts-footer{
       
        
        width: 90px;
        
        /* height: 1rem; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        
    }
    .echarts-item{
        background-color: #eee;
        
        border: 1px solid #999;
        
        width: 100%;
        line-height: 30px;
        cursor: pointer;
    }
    .echarts-item-active{
        color: #409EFF;
    }

</style>



