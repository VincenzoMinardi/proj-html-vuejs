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
        <li class="line-button" v-for="element in store.ArrHeader" :key="element">
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

  .line-button {
    position: relative;
    background-color: transparent;
    border: none;
    color: #000;
    font-size: 16px;
    padding: 10px 20px;
    cursor: pointer;
  }

  .line-button::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #f00;

  }

  .line-button:hover::after {
    width: 100%;
  }

}
</style>
