<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  AppHeader,
  AppMain,
  AppFooter,
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style>
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
