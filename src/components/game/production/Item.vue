<template>
  <li class="production__element">
		<h3 class="production__name">{{data.name[language]}}</h3>
		<div class="production__inner">
			<button class="production__control" @click="remove">-</button>
			<div class="production__information">
				<img class="production__image" :src="image" :alt="data.name[language]" />
				<div class="production__inner">
					<div class="production__cost">resourcesData</div>
					<div class="production__availability"></div>
					<div class="production__consumption"></div>
					<div class="production__product"></div>
				</div>
			</div>
			<button class="production__control" @click="add">+</button>
		</div>
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
    },
    language: {
      type: String,
      required: true,
    }
  },
  computed: {
    image() {
      return require(`../../../assets/images/production/${this.data.image}`);
    }
  },
  data() {
    return {
			
    };
  },
  created() {
    console.log(this.data);
    console.log(this.language);
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
	margin: 40px 0;
}

.production__name {
	font-size: 18px;
}

.production__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.production__information {
  display: flex;
}

.production__control {
  width: 50px;
  height: 50px;
}

.production__image {
  display: block;
  width: 150px;
  height: 150px;
}
</style>