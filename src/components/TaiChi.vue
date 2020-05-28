<template>
  <div class="parent" style="background-color: #999;">
    <div class="container">
      <div class="taichi">
        <div class="leftcircle"></div>
        <div class="rightcircle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
* {
  padding: 0;
  margin: 0;
}
.parent{
    min-height: 320px;
    position: relative;
}
.container {
  width: 90%;
  
  position: absolute;
  top:50px;
}
.taichi {
  width: 200px;
  height: 200px;
  background-color: #c53434;
  margin: 0 auto;
  border-radius: 50%;
  /*   线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向 */
  background: linear-gradient(#000 50%, #fff 50%);
  display: flex;
  /*   flex盒模型里的元素垂直居中 */
  align-items: center;
  animation: rotate 1s infinite 0s linear;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.leftcircle,
.rightcircle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: scale(0.5);
  /*  alternate表示将动画倒过来  */
  animation: changesize 1s alternate 0s infinite linear;
}
.leftcircle {
  /*   background-color: #000; */
  /*   border:37.5px solid #fff; */
  /*  径向渐变（Radial Gradients）- 由它们的中心定义  */
  background: radial-gradient(#000 25%, #fff 25%);
  transform-origin: 0% 50%;
}
.rightcircle {
  /*   background-color: #fff; */
  /*   border:37.5px solid #000; */
  background: radial-gradient(#fff 25%, #000 25%);
  transform-origin: 100% 50%;
  animation-delay: -1s;
}
@keyframes changesize {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1.5);
  }
}
</style>