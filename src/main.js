import Vue from 'vue'
import App from './App.vue'
import Game from './scripts/game/game.js'

Vue.config.productionTip = false;

const game = new Game();

game.start();

new Vue({
  render: h => h(App),
}).$mount('#app')
