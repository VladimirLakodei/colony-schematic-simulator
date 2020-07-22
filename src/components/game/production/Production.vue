<template>
  <ul class="production">
    <Item v-for="item in production"
      :resources="resources"
      :production="item"
      :language="language" 
      :key="item.id" />
  </ul>
</template>

<script>
import Item from "./Item.vue";
import Resources from "@/assets/data/resources.js";
import Production from "@/scripts/game/production.js";

export default {
  name: "Production",
  components: {
    Item
  },
  props: {
    language: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      resources: Resources,
      production: Production.information
    };
  },
  mounted() {
    this.$on('add', (item) => {
      Production.add(item);
    });

    this.$on('remove', (item) => {
      Production.remove(item);
    });
  },
};
</script>

<style scoped>

</style>
