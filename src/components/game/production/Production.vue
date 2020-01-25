<template>
  <ul class="production">
    <Item v-for="item in prodaction" :data="item" :language="language" :key="item.id" />
  </ul>
</template>

<script>
import Item from "./Item.vue";
import Data from "../../../assets/data/production.js";

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
      prodaction: {},
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.prodaction = Data;
    }
  },
};
</script>

<style scoped>

</style>