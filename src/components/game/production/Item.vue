<template>
  <li class="production__element">
    <button class="production__control" @click="remove">-</button>
    <div class="production__inner">
      <img class="production__image" :src="image" />
      <div class="production__inner">
        <div class="production__cost">resourcesData</div>
        <div class="production__availability"></div>
        <div class="production__consumption"></div>
        <div class="production__product"></div>
      </div>
    </div>
    <button class="production__control" @click="add">+</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  components: {},
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    image() {
      return require(`../../../assets/images/production/${this.data.image}`);
    }
  },
  data() {
    return {
      prodaction: {}
    };
  },
  created() {
    console.log(this.data);
  },
  methods: {
    add() {
      console.log('add');
    },
    remove() {
      console.log('remove');
    }
  }
};
</script>

<style scoped>
.production__element {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
}

.production__control {
  width: 50px;
  height: 50px;
}

.production__inner {
  display: flex;
}

.production__image {
  display: block;
  width: 150px;
  height: 150px;
}
</style>