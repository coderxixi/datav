<template>
  <div class="warp" @dragover="dragOver" @drop="drOp">
    中部
  </div>
</template>

<script setup>
//拖拽到画布的回调
const dragOver = (e) => {
  e.preventDefault();

  console.log('拖拽到画布的回调');
}
//鼠标松开的回调
const drOp = (e) => {
  e.preventDefault();
  let info = JSON.parse(e.dataTransfer.getData('info'))

  console.log('鼠标松开的回调', info);
}
</script>

<style lang="less" scoped>
.warp {
  flex: 1;
  background-color: #999;
}
</style>