<script setup>
import CenterView from "@/views/centerView";
import HeadView from "@/views/headView";
import LeftView from "@/views/leftView";
import RightView from "@/views/rightView";
</script>
  
<template>
  <HeadView />
  <LeftView />
  <CenterView />
  <RightView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
