<template>
  <div>
    <div id="container">
      <div id="mian">
        <div class="square one">1</div>
        <div class="square two">2</div>
        <div class="square three">3</div>
        <div class="square four">4</div>
        <div class="square five">5</div>
        <div class="square six">6</div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {};
</script>

<style>
    #container{
  margin:100px auto;
  width:100px;
  perspective:400px;
  height:100px;
}
#mian{
  position:relative;
  width: 100px;
  height: 100px;
  transform-style:preserve-3d;
  background-color: #000;
  animation: ball 5s linear infinite;
  transform-origin:50% 50%;
}
@keyframes ball{
  0%{
    transform:rotateX(0) rotateY(0) ;
  }
  100%{
    transform:rotateX(360deg) rotateY(360deg);
  }
}
.square{
  height: 100px;
  width: 100px;
  border:1px solid #ccc;
  position:absolute;
  text-align:center;
  line-height:100px;
  font-size:40px;
  font-weight:bold;
}
.one{ 
  transform:translate3d(-50px,0px,0px) rotateY(90deg); 
  background-color: rgba(100,200,100,0.5);
}
.two{
  transform:translate3d(50px,0px,0px) rotateY(90deg) ;
  background-color: rgba(100,200,100,0.5);
}
.three{ 
  transform:translate3d(0px,0px,-50px);
  background-color: rgba(100,100,200,0.5);
}
.four{
  transform:translate3d(0px,0px,50px);
  background-color: rgba(100,100,200,0.5);
}
.five{ 
  transform:rotateX(90deg) translate3d(0px,0px,50px); 
  background-color: rgba(200,100,100,0.5)
}
.six{
  transform:rotateX(-90deg) translate3d(0px,0px,50px);
  background-color: rgba(200,100,100,0.5)
}
</style>