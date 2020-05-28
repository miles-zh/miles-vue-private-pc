<template>
  <div>
    <div id="wrapper">
      <h1>聚合天气</h1>
      <div id="sw">
        <input v-model="cityName" placeholder="请输入城市" id="search" />
        <button id="btn" @click="searchWeather">Search</button>
      </div>
      <ul>
        <li>
          日期：
          <span>{{(todayWeather.city==undefined?"":todayWeather.city) + (todayWeather.city==""?"":" —— ")+todayWeather.date_y + (todayWeather.city==""?"":" —— ")+todayWeather.week}}</span>
        </li>
        <li>
          气温：
          <span>{{todayWeather.temperature}}</span>
        </li>
        <li>
          风向：
          <span>{{todayWeather.wind}}</span>
        </li>
        <li>
          天气状况：
          <span>{{todayWeather.weather}}</span>
        </li>
        <li>
          穿衣：
          <span>{{todayWeather.dressing_advice}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import jsonp from '../jsonp.js'
export default {
  data() {
    return {
        url:null,
        cityName:"贵阳",
        todayWeather:{
          city:'' ,
          date_y:''
        }
    };
  },
  created() {
    
      console.log()
      let url =this.setUrl()
      this.getWeather(url)
  },
  methods: {
     getWeather(url) {
      console.log(url)
      console.log(jsonp)
      console.log(axios)
      // axios({
      //     url: url,
      //     adapter: this.jsonp,
      //     callbackParamName: 'callback' // optional, 'callback' by default
      // }).then((res) => {
      //   console.log("res",res)
      //   this.todayWeather=res.data.result.today
      // });
      jsonp(url).then((res)=>{
        console.log("res",res)
        this.todayWeather=res.result.today
      })
      // console.log(jsonp(url))

    },
    setUrl(){
      if(this.cityName=="")return;
         let citynameutf=encodeURI(this.cityName)
         return `https://v.juhe.cn/weather/index?format=1&cityname=${citynameutf}&key=0ee92ff7f36b9b6ac657b285edb11772`
    },
    searchWeather(){
       let url= this.setUrl()
        this.getWeather(url)
        console.log("a")
    }
    
  }
};
</script>

<style scoped>
#wrapper {
  width: 100%;
  min-height: 320px;
  margin: 20px auto;
  background-image: url(http://hbimg.b0.upaiyun.com/60c33cf3e33dae34f446d5ac4181b184b578054a2672e-3QRCbd_fw658);
  color: #fff;
  padding-bottom: 10px;
}
h1 {
  height: 50px;
  line-height: 50px;
  position: relative;
  text-align: center;
  color: #fff;
  /*   background-color:#fc0; */
}
#sw {
  height: 50px;
  line-height: 50px;
  text-align: center;
  /*   background-color:#ff8 */
}
input,
button {
  height: 28px;
  width: 150px;
  border-radius: 15px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #fff;
}
button {
  height: 28px;
  width: 70px;
  cursor: pointer;
}
li {
  
  width: 90%;
  list-style-type: none;
  text-align: left;
  border: 2px solid #fff;
  /* line-height: 65px; */
  margin: 10px auto;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding-left: 10px;
  vertical-align: middle;
  margin-left: -5px;
  line-height: 50px;
}
span {
  color: #fff;
}
</style>