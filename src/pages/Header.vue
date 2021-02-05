<template>
  <div class="header">{{ l }}</div>
</template>

<script>
import { onMounted } from "vue";
import l from "./state";
export default {
  setup() {
    onMounted(() => {
      l.value = true
      console.log(l);
    });
    return { l };
  },
};
</script>

<style>
</style>