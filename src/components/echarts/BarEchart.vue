<template>
  <div style="heght:100%;width:100%;padding-top:0.5rem;">
    <div class="bar-echart" ref="barEchart" style="height:100%"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getBarEchartData() {
     let option = {
        textStyle:{
            fontSize:20
        },
        angleAxis: {
            splitLine:{
              show:false
          },
          
        },
        
        radiusAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四"],
          z: 10,
          splitLine:{
              show:false
          },
          
        },
        polar: {},
        series: [
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "A",
            stack: "a",
          },
          {
            type: "bar",
            data: [2, 4, 6, 8],
            coordinateSystem: "polar",
            name: "B",
            stack: "a"
          },
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "C",
            stack: "a"
          }
        ],
        legend: {
          show: true,
          data: ["A", "B", "C"],
         
        },
        label:{
          fontSize:16
        }
      };
      return option
    },
    showBarEchart() {
        let myChart = this.echarts.init(this.$refs.barEchart);
        let option = this.getBarEchartData();
        myChart.setOption(option);
    }
  },
  mounted() {
      this.showBarEchart()
      // console.log(this.$root)
  }
};
</script>

<style scoped>
</style>