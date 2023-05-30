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
                <div>{{ element.name }}</div>
                <hr>
                <div>{{ element.email }}</div>
                <hr>
            </div>
            <button>Submit</button>
        </div>
    </div>
    <div class="footer">
        <div v-for="element in store.ArrCopyright" :key="element" class="content">
            <h1>{{ element.twoTitle }}</h1>
            <p>{{ element.twoParagraf }}</p>
        </div>
        <div class="cont-icon">
            <div class=" icons">
                <i class=" icon fa-brands fa-square-instagram" style="color: #ffffff;"></i>
            </div>
            <div class="icons">
                <i class=" icon fa-brands fa-facebook" style="color: #ffffff;"></i>
            </div>
            <div class="icons">
                <i class=" icon fa-brands fa-twitter" style="color: #ffffff;"></i>
            </div>
            <div class="icons">
                <i class=" icon fa-brands fa-pinterest-p" style="color: #ffdiv;"></i>
            </div>
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
        padding: 3rem;
        width: 100%;
        text-align: center;
    }
}

.cont-icon {
    text-align: center;
    margin-left: 3rem;

}

.icon {
    font-size: 2rem;

}


.icons {
    // background-color: rgb(105, 169, 170);
    display: inline-block;
    height: 30px;
    width: 30px;
}
</style>