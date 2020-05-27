import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import newsList from "../views/news/detail/index.vue"
import { BasicLayout } from '@/layouts'
Vue.use(Router)


const router = new Router({
  mode:'hash',
  scrollBehavior:() => ({y:0}),
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/welcome',
      component: BasicLayout,
      children : [
        {
          path: '',
          name: 'welcome',
          component: {
            render () {
              return <el-row style={{
                display : 'flex',
                height : '100%',
                width : '100%',
                justifyContent : 'center',
                alignItems : 'center'
              }}>
                <span>欢迎回来</span>
              </el-row>
            }
          }
        }
      ]
    },
    {
      path: '/newsList',
      component: BasicLayout,
      children : [
        {
          path: '',
          name: 'newsList',
          component: newsList
        }
      ]
    },

  ]
})


export default router
