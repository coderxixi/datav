<template>
  <div class="warp">
    <headTab :checkIndex="checkIndex" @checkTabChange="checkTabChange" />
    <div v-if="cpn">
      <!-- 样式 -->
      <div v-if="checkIndex === 0">
        <div class="styleItem" v-for="(item, index) of cpn.value.attribute" :key="index">
          <span class="label">{{ item.name }}</span>
          <!-- type input -->
          <input  @blur="updateComp" class="inputStyle" v-if="item.type == 'input'" type="text" v-model="item.value" />
          <!-- type input -->
          <input @change="updateComp" class="inputStyle" v-if="item.type == 'color'" type="color" v-model="item.value" />
        </div>
      </div>
      <!-- 数据 -->
      <div v-if="checkIndex === 1" style="display: flex;
    justify-content: center;">
        <textarea @change="updateComp" class="dataBox" v-model="cpn.value.data" />
      </div>
    </div>
    <div v-else style="padding:15px">
      当前没有正在编辑的组件
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import headTab from "./compoents/headTab";
import { getCompoent } from "@/template";
import  { mountCompont } from '@/utils'
const props = defineProps({
  cpn: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const checkIndex = ref(0);
const checkTabChange = (index) => {
  console.log('con', props.cpn.value);
  checkIndex.value = index
}
//更新组件
const updateComp=()=>{
  //1.获取组件数据
  let componets= getCompoent(props.cpn.value.info, props.cpn.value);
  //2 设置组件的位置
  componets.postion= props.cpn.value.postion
  //3 重新挂载
  
  mountCompont(componets)
}
</script>

<style lang="less" >
.warp {
  width: 350px;

  .styleItem {
    margin: 10px;
    display: flex;

    .label {
      display: inline-block;
      width: 80px;
    }

    .inputStyle {
      width: 80%;
    }
  }

  .dataBox {
    width: 80%;
    padding: 25px;
    min-height: 300px;
  }
}</style>