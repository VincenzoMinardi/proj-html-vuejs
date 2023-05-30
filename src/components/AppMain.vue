<script>
import { store } from "../store";
import AppCards from './AppCards.vue'


export default {
  components: {
    AppCards,
  },
  data() {
    return {
      store,

    };
  },
};
</script>

<template>
  <div class="big-image">
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
      <div class="cont-flex" v-for="element in store.ArrMain" :key="element">
        <div class="below-container">
          <h1>{{ element.belowTitle }}</h1>
          <div>{{ element.belowParagraf }}</div>
          <button class="bt-read">Read more <i class="fa-solid fa-caret-right" style="color: #000000;"></i></button>
        </div>
        <div class="cont-flex">
          <img class="size-img" src="../assets/img/h2-icon-01.png" alt="" />
          <h2>{{ element.belowTextOne }}</h2>
          <img src="../assets/img/h2-icon-02.png" alt="" />
          <h2>{{ element.belowTextTwo }}</h2>
        </div>
      </div>
    </div>
    <div class="cont-big-image">
      <img class="big-image" src="../assets/img/h2-img-2.jpg" alt="" />
      <img class="video-btn" src="../assets/img/main-home-video-button-img-01.png" alt="" />
    </div>
    <AppCards v-for="card in store.ArrCard" :key="card.id" :cards="card" />
  </div>
</template>

<style lang="scss" scoped>
.big-image {
  background-image: url(../assets/img/h2-background-img-02.png);
  background-repeat: repeat;
}

.container {
  max-width: 1350px;
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

.below-container {
  margin-top: 4rem;
}

.bt-read {
  border-radius: 3rem;
  margin-top: 2rem;
  height: 50px;
  width: 160px;
  border-color: #69a9ae;
  background-color: white;
}

.bt-read:hover {
  background-color: #69a9ae;

}

.cont-flex {
  display: flex;
  align-items: center;
  gap: 3rem;

  .size-img {
    height: 100px;
  }
}

.cont-big-image {
  position: relative;

  .big-image {
    margin-top: 6rem;
    width: 100%;
  }

  .video-btn {
    position: absolute;
    top: 460px;
    left: 800px;
  }
}
</style>
