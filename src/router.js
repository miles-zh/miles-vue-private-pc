import Vue from 'vue' // 引入vue
import VueRouter from 'vue-router' // 引入vue-router
// import Home from './components/Home'
const Home = () => import('./components/Home.vue')

// import Swiper from './components/Swiper'
const Swiper = () => import('./components/Swiper')
// import Stock from './components/Stock'
const Stock = () => import('./components/Stock.vue')
// import TargetTab from './components/TargetTab'
const TargetTab = () => import('./components/TargetTab.vue')
// import CircleNav from './components/CircleNav'
const CircleNav = () => import('./components/CircleNav.vue')
// import Carousel from './components/Carousel'
const Carousel = () => import('./components/Carousel.vue')
// import TaiChi from './components/TaiChi'
const TaiChi = () => import('./components/TaiChi.vue')
// import TurnBook from './components/TurnBook'
const TurnBook = () => import('./components/TurnBook.vue')
// import Pie from './components/Pie'
const Pie = () => import('./components/Pie.vue')
// import Magnifier from './components/Magnifier'
const Magnifier = () => import('./components/Magnifier.vue')
// import Firework from './components/Fireworks'
const Firework = () => import('./components/Fireworks.vue')
const QueryWeather = () => import("./components/QueryWeather.vue")
const Calendar = () => import('./components/Calendar.vue')
const Echarts = () => import('./components/echarts/Echarts.vue')
const LineEchart=()=>import('./components/echarts/LineEchart.vue')

const BarEchart=()=>import('./components/echarts/BarEchart.vue')
const PieEchart=()=>import('./components/echarts/PieEchart.vue')
const RadarEchart=()=>import('./components/echarts/RadarEchart.vue')
const SunburstEchart=()=>import('./components/echarts/SunburstEchart.vue')
Vue.use(VueRouter) // 路由安装
//	2. 定义路由
const routes = [
    {
        path: '/',
        redirect: "/home/circlenav"
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                redirect: "circlenav"
            },
            {
                path: 'swiper',
                component: Swiper
            },
            {
                path: 'stock',
                component: Stock
            },
            {
                path: 'targettab',
                component: TargetTab
            },
            {
                path: 'circlenav',
                component: CircleNav
            },
            {
                path: 'carousel',
                component: Carousel
            },
            {
                path: 'taichi',
                component: TaiChi
            },
            {
                path: 'turnbook',
                component: TurnBook
            },
            {
                path: 'pie',
                component: Pie
            },
            {
                path: 'magnifier',
                component: Magnifier
            }, {
                path: 'firework',
                component: Firework
            },
            {
                path: 'queryweather',
                component: QueryWeather
            },
            {
                path: 'calendar',
                component: Calendar
            },
            {
                path:'echarts',
                component:Echarts,
                redirect:'echarts/lineechart',
                children:[
                    {
                        path:'lineechart',
                        component:LineEchart,
                    },
                    {
                        path:'barechart',
                        component:BarEchart,
                    },
                    {
                        path:'pieechart',
                        component:PieEchart,
                    },
                    {
                        path:'radarechart',
                        component:RadarEchart,
                    },
                    {
                        path:'sunburstechart',
                        component:SunburstEchart,
                    }

                ]
            }
        ]
    },

]
const router = new VueRouter({
    routes
})

export default router