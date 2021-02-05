<template>
  <main class="main-wrapper" :class="{ extend: !isShow }"></main>
</template>

<script lang="ts">
import showState from './state'
export default {
  setup() {
    return {
      updateShowState: () => {
        showState.reverseValue()
      },
      isShow: showState.getValue()
    }
  }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  margin-top: 56px;
  margin-left: 240px;
  width: 100%;
  height: 100%;
  background: rgb(21, 1, 109);
  transition: 0.4s;
}
.extend {
  margin-left: 64px;
}

@media screen and (max-width: 1000px) {
  .extend {
    margin-left: 0;
  }
}
</style>