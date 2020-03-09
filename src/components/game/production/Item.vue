<template>
  <li class="production__element">
    <h3 class="production__name">{{prodaction.name[language]}} ({{prodaction.item}})</h3>
    <div class="production__panel">
      <!-- if item = 0 make it disabled -->
      <button class="production__control" @click="remove">-</button>
      <div class="production__inner">
        <img class="production__image" :src="image" :alt="prodaction.name[language]" />
        <Information 
        :resources="resources"
        :prodaction="prodaction" 
        :language="language" />
      </div>
      <!-- not enough resources make it disabled -->
      <button class="production__control" @click="add">+</button>
    </div>
  </li>
</template>

<script>
import Information from "./Information.vue";
import production from '../../../scripts/game/production.js';

export default {
  name: "Item",
  components: {
    Information
  },
  props: {
    resources: {
      type: Object,
      required: true
    },
    prodaction: {
      type: Object,
      required: true
    },
    language: {
      type: String,
      required: true
    }
  },
  computed: {
    image() {
      return require(`../../../assets/images/production/${this.prodaction.image}`);
    },
    information() {
      return (item, index) => {
        return `${this.resources[index].name[this.language]}: ${item}`;
      };
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    add() {
      console.log("add");
      production.add(this.prodaction.id);
    },
    remove() {
      console.log("remove");
      production.remove(this.prodaction.id);
    }
  }
};
</script>

<style scoped>
.production__element {
  margin: 40px 0;
}

.production__name {
  font-size: 18px;
}

.production__panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.production__inner {
  display: flex;
  flex: 1;
  margin: 0 40px;
  border: 1px solid #000;
}

.production__control {
  width: 50px;
  height: 50px;
  flex: 0 0 50px;
}

.production__image {
  display: block;
  width: 150px;
  height: 200px;
  flex: 0 0 150px;
}
</style>
