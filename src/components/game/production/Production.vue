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
import Resources from "../../../assets/data/resources.js";
import Prodaction from "../../../assets/data/production.js";

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
  methods: {
    getResources() {
      this.resources = Resources;
    },
    getProdaction() {
      this.prodaction = Prodaction;
    },
  },
};
</script>

<style scoped>

</style>
