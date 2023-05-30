
<script>
import { store } from '../store'
export default {

    data() {
        return {
            store,
        }
    },
    props: {
        cards: Object,
    }
}
</script>




<template>
    <div class="cont-card">
        <div class="card">
            <h1>{{ cards.title }}</h1>
            <h2 class="price">{{ cards.price }}</h2>
            <p class="text">{{ cards.text }}</p>
            <button class="btn">Learn More <i class="fa-solid fa-caret-right" style="color: #000000;"></i></button>
        </div>
        <div class="card">
            <h1>{{ cards.titleTwoCard }}</h1>
            <h2 class="price">{{ cards.priceTwo }}</h2>
            <p class="text">{{ cards.text }}</p>
            <button class="btn">Learn More <i class="fa-solid fa-caret-right" style="color: #000000;"></i></button>
        </div>
        <div class="card">
            <h1>{{ cards.title }}</h1>
            <h2 class="price">{{ cards.priceThree }}</h2>
            <p class="text">{{ cards.text }}</p>
            <button class="btn ">Learn More <i class="fa-solid fa-caret-right" style="color: #000000;"></i></button>
        </div>
    </div>
</template>
  
 
  

<style lang="scss" scoped>
.cont-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin-top: 2rem;
    padding: 6rem;

    .card {
        padding: 3rem;
        text-align: center;
        border-radius: 4rem;
        height: 450px;
        width: 300px;
        border: 1px solid yellow;

        .text {
            margin-top: 3rem;
            font-size: 1.5rem;
        }
    }
}

.btn {
    border-radius: 3rem;
    margin-top: 2rem;
    height: 50px;
    width: 160px;
    border-color: #69a9ae;
    background-color: white;

}

.btn:hover {
    background-color: goldenrod;
    color: white;


}

.card:hover {
    background-color: #69a9ae;
}
</style>