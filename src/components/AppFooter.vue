<script>
import { store } from "../store";

export default {
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div class="container">
        <div v-for="element in store.ArrFooter" :key="element">
            <div class="container-small">
                <div>
                    <h1>{{ element.title }}</h1>
                    <p>{{ element.paragraf }}</p>
                </div>
                <div>
                    <div>Comment</div>
                    <hr />
                </div>
            </div>
            <div class="input">
                <div>Name</div>
                <hr>
                <div>
                    <div>Email</div>
                    <hr>
                </div>
            </div>
            <button>Submit</button>
        </div>
    </div>
    <div class="footer">
        <div class="content" v-for="element in store.ArrFooter" :key="element">
            <h1>{{ element.twoTitle }}</h1>
            <p>{{ element.twoParagraf }}</p>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 1350px;
    margin: auto;
    padding: 1rem;

    .container-small {
        display: flex;
        margin-top: 6rem;
        gap: 10rem;
    }
}

hr {
    width: 500px;
}

.input,
button {
    margin-left: 51rem;
    margin-bottom: 2rem;
}

button {
    border-radius: 3rem;
    margin-top: 2rem;
    height: 50px;
    width: 160px;
    border-color: #69a9ae;
    background-color: white;
}

.footer {
    margin-top: 4rem;
    background-image: url(../assets/img/h2-footer-img-01.jpg);
    background-size: cover;
    width: 100%;
    padding: 6rem;

    .content {
        text-align: center;
    }
}
</style>
