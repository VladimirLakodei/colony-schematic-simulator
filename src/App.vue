<template>
  <div id="app">
    <Game />
  </div>
</template>

<script>
import Game from "./components/game/Game.vue";

export default {
  name: "app",
  components: {
    Game
  }
};
</script>

<style>
body {
  margin: 0;
  font: normal 16px "Roboto", sans-serif;
  background-color: #eee;
}

ul,
ol {
  padding: 0;
}

li {
  list-style: none;
}

#app {
  padding: 3rem;
  text-align: center;
}
</style>
