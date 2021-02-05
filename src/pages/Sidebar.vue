<template>
  <div class="sidebar-wrapper" :class="{ hidden: isShow }">
    <header>{{ l }}</header>
    <main>
      <ul>
        <li v-for="i in 223" :key="i">i</li>
      </ul>
    </main>
  </div>
  <aside
    v-show="!isShow"
    @click="
      () => {
        l = false;
        isShow = true;
      }
    "
    class="shade"
  ></aside>
</template>

<script lang="ts">
import l from "./state";
import { ref } from "vue";
export default {
  setup() {
    const isShow = ref(false);
    return {
      isShow,
      l,
    };
  },
};
</script>

<style lang="scss" scoped>
$width: 240px;
.sidebar-wrapper {
  z-index: 1025;
  position: fixed;
  top: 0;
  left: 0;
  width: $width;
  height: 100%;
  background: gray;
  transition: 0.4s;
  header {
    height: 56px;
    border-bottom: 1px solid #fff;
  }
  main {
    text-align: center;
    ul {
      li {
        height: 48px;
      }
    }
  }
}
.hidden {
  left: -$width;
}

@media screen and (max-width: 1000px) {
  .shade {
    z-index: 1024;
    position: fixed;
    background: rgba(128, 128, 128, 0.4);
    width: 100%;
    height: 100%;
    transition: 1s;
  }
}
</style>