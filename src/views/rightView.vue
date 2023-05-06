<template>
  <div class="warp">
    <headTab :checkIndex="checkIndex" @checkTabChange="checkTabChange"/>
    <div v-if="cpn">
      <!-- 样式 -->
      <div v-if="checkIndex === 0">
       <div class="styleItem" v-for="(item, index) of cpn.value.attribute" :key="index">
           <span class="label">{{ item.name }}</span>
           <!-- type input -->
           <input class="inputStyle" v-if="item.type == 'input'" type="text" v-model="item.value"/>
            <!-- type input -->
             <input class="inputStyle" v-if="item.type == 'color'" type="color" v-model="item.value"/>
      </div>
      </div>
      <!-- 数据 -->
      <div v-if="checkIndex === 1" style="display: flex;
    justify-content: center;">
        <input class="dataBox" type="textarea" v-model="cpn.value.data">
      </div>
    </div>
    <div v-else style="padding:15px">
      当前没有正在编辑的组件
    </div>
    
  </div>
</template>

<script setup>
import {ref} from "vue";
import headTab from "./compoents/headTab";
const props=defineProps({
  cpn:{
    type:Object,
    default:()=>{
      return {}
    }
  }
})
const checkIndex=ref(0);
 const checkTabChange=(index)=>{
  console.log('con',props.cpn.value);
  checkIndex.value=index
 }
</script>

<style lang="less" >
.warp {
  width: 350px;
  .styleItem{
    margin: 10px;
    display: flex;
    .label{
      display: inline-block;
      width: 80px;
    }
    .inputStyle{
      width: 80%;
    }
  }
  .dataBox{
    width: 80%;
    padding: 25px;
   min-height: 300px;
  }
}
</style>