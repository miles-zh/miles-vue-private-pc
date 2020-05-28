<template>
  <div style="heght:100%;width:100%;padding-top:0.5rem;">
    <div class="pie-echart" ref="pieEchart" style="height:100%"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getPieEchartData() {
      let option = {
        backgroundColor: "#fff",
        textStyle:{
            fontSize:20
        },
        title: {
          text: "Customized Pie",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc",
            fontSize:20
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 274, name: "联盟广告" },
              { value: 235, name: "视频广告" },
              { value: 400, name: "搜索引擎" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(0, 0, 0, 0.3)",
              fontSize:20
            },
            labelLine: {
              lineStyle: {
                color: "rgba(0, 0, 0, 0.3)",
                
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 50,
            //   shadowColor: "rgba(0, 0, 0, 0.5)"
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function() {
              return Math.random() * 200;
            }
          }
        ]
      };
      return option
    },
    showPieEchart(){
        let myChart = this.echarts.init(this.$refs.pieEchart);
        let option = this.getPieEchartData();
        myChart.setOption(option);
    }
  },
  mounted() {
      this.showPieEchart()
  }
};
</script>

<style>
</style>