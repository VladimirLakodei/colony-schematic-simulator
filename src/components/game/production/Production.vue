<template>
  <ul class="production">
    <Item v-for="item in prodaction" 
      :resources="resources"
      :prodaction="item" 
      :language="language" 
      :key="item.id" />
  </ul>
</template>

<script>
import Item from "./Item.vue";
import Resources from "@/assets/data/resources.js";
import Prodaction from "@/scripts/game/production.js";

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
      resources: {},
      prodaction: {}
    };
  },
  created() {
    this.getResources();
    this.getProdaction();
  },
  mounted() {
    this.$on('add', (item) => {
      Prodaction.add(item);
    });

    this.$on('remove', (item) => {
      Prodaction.remove(item);
    });
  },
  methods: {
    getResources() {
      this.resources = Resources;
    },
    getProdaction() {
      this.prodaction = Prodaction.information;
    },
  },
};
</script>

<style scoped>

</style>
