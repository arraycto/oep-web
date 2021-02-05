<template>
  <div @click="updateShowState" class="header-wrapper" :class="{ extend: !isShow }">2312321</div>
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
.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  margin-left: 240px;
  background: forestgreen;
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