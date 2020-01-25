<template>
  <div class="game">
    <Production :language="language" />
  </div>
</template>

<script>
import Production from "./production/Production.vue";

export default {
  name: "Game",
  components: {
    Production
  },
  props: {
    language: {
      type: String,
      required: false,
      default: 'en'
    }
  },
};
</script>

<style scoped>
</style>
