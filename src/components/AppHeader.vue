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
    <div>
      <img src="../assets/img/logo-img-01.png" alt="" />
    </div>
    <div>
      <ul class="element">
        <li v-for="element in store.ArrHeader" :key="element">
          {{ element }}
        </li>

        <li>
          <img src="../assets/img/svg/svg-1.svg" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  .element {
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
    list-style: none;
  }
}
</style>
