<template>
  <div class="information">
    <div class="information___general">
      <div class="information___static">
        <div class="information__cost">
          <h4 class="information__title">Cost:</h4>
          <ul>
            <li v-for="(item, index) in prodaction.cost" :key="index">{{information(item, index)}}</li>
          </ul>
        </div>
        <div class="information__sale">
          <h4 class="information__title">Sale:</h4>
          <ul>
            <li v-for="(item, index) in prodaction.sale" :key="index">{{information(item, index)}}</li>
          </ul>
        </div>
      </div>
      <div class="production__availability">
        <h4 class="information__title">Availability:</h4>
        <ul>
          <li v-for="(item, index) in prodaction.resources" :key="index">{{information(item, index)}}</li>
        </ul>
      </div>
    </div>
    <div class="information___dynamic">
      <div class="production__consumption">consumption 0</div>
      <div class="production__product">product 0</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information",
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
  }
};
</script>

<style scoped>
.information {
  display: flex;
  flex: 1;
  text-align: left;
  flex-direction: column;
  border-left: 1px solid #000;
}

.information___general {
  display: flex;
  flex: 1;
  padding: 10px;
  border-bottom: 1px solid #000;
}

.information___static {
  flex: 1;
}

.information__title {
  margin: 0 0 5px 0;
}

.information__cost {
  margin: 0 0 10px 0;
}

.information___dynamic {
  padding: 10px;
}
</style>
