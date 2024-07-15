import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from './utils/element-ui'
import Rem from './utils/rem'
import less from 'less'
import '@/utils/directive'
import '@/assets/iconfont.css'
import '@/assets/reset.css'
import Video from 'vue-video-player'
import 'video.js/dist/video-js.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Video)
Vue.use(ElementUI)
Vue.use(less)
Vue.use(Rem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
