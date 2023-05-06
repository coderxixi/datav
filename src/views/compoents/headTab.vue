<template>
  <div class="wrapper">
    <div class="tabItem"  @click="hadleClick(index)"  :class="{'active': checkindex ==index}" v-for="(item,index) of tabList" :key="index">
      {{ item }}
    </div>

  </div>
</template>

<script setup>
import {ref} from "vue";
   const emit = defineEmits(['checkTabChange'])
const props=defineProps({
  checkIndex:{
    type:[Number,String],
    default:0
  }
})
const tabList=ref(['样式','数据']);
const checkindex=ref(props.checkIndex);
const hadleClick=(index)=>{
  checkindex.value=index;
  emit('checkTabChange',index)
}
</script>

<style lang="less" >
  .wrapper{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #eee;
    .tabItem{
      padding: 15px;
      cursor: pointer;
      &.active{
        border-bottom: 2px solid #5794f5;
      }
    }
    .active{
        border-bottom: 2px solid #5794f5;
      }
  }
</style>