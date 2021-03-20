import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  currentID: 2,
  madlibitems: {
    id: 1,
    text1: 'A(n) ',
    adj1: '',
    text2: ', ',
    adj2: '',
    text3: ' numbskull named Andy Bernard sold his XTerra to a(n) ',
    adj3: '',
    text4: ' and ',
    adj4: '',
    text5: ' man named Dwight. This is shaping up to be a(n) ',
    adj5: '',
    text6: ' day for Dwight.'
  },
  story: '',
  history: [],
  getMadLibs() {
    return this.madlibitems;
  },
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
