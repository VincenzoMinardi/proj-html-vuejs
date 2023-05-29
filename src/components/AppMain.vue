<script>
import { store } from "../store";

export default {
  components: {},
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <div v-for="element in store.ArrMain" :key="element" class="title-paragraf">
      <h1 class="title">{{ element.title }}</h1>
      <h3 class="paragraf">{{ element.paragraf }}</h3>
    </div>
    <img src="../assets/img/hover-block.png" alt="" />
    <div>
      <img class="size" src="../assets/img/port-img-09.jpg" alt="" />
      <img class="size" src="../assets/img/port-img-10.jpg" alt="" />
      <img class="size" src="../assets/img/port-img-11.jpg" alt="" />
      <img class="size" src="../assets/img/port-img-12.jpg" alt="" />
    </div>
    <div v-for="element in ArrMain" :key="element" class="below-image"></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1400px;
  margin: auto;
  padding: 1rem;

  .title-paragraf {
    display: flex;
    gap: 10rem;
  }

  .title {
    font-size: 3rem;
  }

  .paragraf {
    font-size: 1.2rem;
    margin-top: 3rem;
    color: lightgrey;
  }
  .size {
    height: 670px;
    width: 651px;
    position: relative;
    left: 21px;
    top: -4px;
  }
}
</style>
