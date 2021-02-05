<template>
  <div class="header">{{ l }}</div>
</template>

<script lang="ts">
import ShowState from './state'
export default {
  setup() {
    return { isShow: ShowState.getValue }
  }
}
</script>

<style>
</style>