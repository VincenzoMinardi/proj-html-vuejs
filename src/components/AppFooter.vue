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
            <button class="btn-hover">Submit <i class="fa-solid fa-caret-right" style="color: #000000;"></i></button>
        </div>
    </div>
    <div class="footer">
        <div v-for="element in store.ArrCopyright" :key="element" class="content">
            <h1>{{ element.twoTitle }}</h1>
            <p>{{ element.twoParagraf }}</p>
        </div>
        <div class="cont-icon">
            <div class=" icons instagram">
                <i class=" icon fa-brands fa-square-instagram" style="color: #ffffff;"></i>
            </div>
            <div class="icons facebook">
                <i class=" icon fa-brands fa-facebook" style="color: #ffffff;"></i>
            </div>
            <div class="icons twitter">
                <i class=" icon fa-brands fa-twitter" style="color: #ffffff;"></i>
            </div>
            <div class="icons pinterest">
                <i class=" icon fa-brands fa-pinterest-p" style="color: #ffffff;"></i>
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
.btn-hover {
    margin-left: 51rem;
    margin-bottom: 2rem;
}

.btn-hover {
    border-radius: 3rem;
    margin-top: 2rem;
    height: 50px;
    width: 160px;
    border-color: #69a9ae;
    background-color: white;
}

.btn-hover:hover {
    background-color: #69a9ae;
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


}

.icon {
    font-size: 2rem;



}


.icons {
    border-radius: 3rem;
    display: inline-block;
    text-align: center;
    padding: .5rem;
    width: 50px;
    margin-inline: 1.5rem;
}

.instagram:hover {
    background-color: rgb(105, 169, 170);
}

.facebook:hover {
    background-color: rgb(247, 210, 147);
}

.twitter:hover {
    background-color: rgb(247, 188, 168);
}

.pinterest:hover {
    background-color: rgb(216, 213, 151);
}
</style>    