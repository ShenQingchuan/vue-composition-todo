import Vue, { VueConstructor } from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)

const todoFocus = (Vue: VueConstructor<Vue>) => {
  Vue.directive("todo-focus", {
    inserted: function (el: HTMLElement) {
      el.focus();
    }
  })
}
Vue.use(todoFocus)

new Vue({
  render: h => h(App),
}).$mount('#app')
