<template>
  <div class="app-wrapper">
    <Header></Header>
    <Sidebar></Sidebar>
    <Main></Main>
  </div>
</template>

<script lang="ts">
import Main from './Main.vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
export default {
  components: { Main, Header, Sidebar }
}
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