<template>
  <div class="app-wrapper">
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="header">header</div>
    <main><router-view /></main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
export default {
  components: { Header, Sidebar },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  background: #fff;
}
main {
  margin-top: 56px;
  margin-left: 240px;
}
</style>