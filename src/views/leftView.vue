<template>
  <div class="wrap">
    <div class="meunItem" 
    :data-type="item.type" 
    :data-name="item.name"
    @dragstart="dragStart"
    draggable="true" v-for="(item, index) of meunlist" :key="index">
      {{ item.name }}
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"
import { menu } from "./menuList";
const meunlist = ref(menu);
const dragStart=(e)=>{
  let info={
     name: e.target.getAttribute('data-name'),
     type: e.target.getAttribute('data-type')
  }
  e.dataTransfer.setData('info',JSON.stringify(info))
  console.log('e',e);
 
}
</script>

<style lang="less" scoped>
.wrap {
  width: 250px;

  .meunItem {
    background-color: #eee;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    cursor: pointer;
    float: left;
    margin: 10px;
  }
}
</style>