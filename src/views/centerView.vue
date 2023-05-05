<template>
  <div class="warp" @dragover="dragOver" @drop="drOp">
   <div :id="item.info.id" v-for="(item,index) of components" :key="index">
   
  </div>
  </div>
</template>

<script setup>
import { ref ,h} from "vue";
import { genId, mountCompont } from "@/utils";
import { getCompoent } from "@/template"
const components = ref([]);
let zIndex=ref(0)
//拖拽到画布的回调
const dragOver = (e) => {
  e.preventDefault();


}
//鼠标松开的回调
const drOp = (e) => {
  e.preventDefault();
  let info = JSON.parse(e.dataTransfer.getData('info'))
  info.id= genId();
  let component = getCompoent(info);
 
  //找到组件的宽高
  let compWidth = component.attribute.find((item) => item.name == '宽度').value;
  let compHeight = component.attribute.find((item) => item.name == '高度').value
  let left = e.offsetX - compWidth / 2;
  let top = e.offsetY - compHeight / 2;
  if (left < 0) {
    left = 0
  }
  if (top < 0) {
    top = 0
  }
  zIndex.value++
  component.postion={
    left,top,zIndex:zIndex.value 
  }
  console.log('component===',h(component), component);
  components.value.push(component);
  //挂载组件
  mountCompont(component)
 
}
</script>

<style lang="less" scoped>
.warp {
  flex: 1;
  background-color: #eee;
  position: relative;
}
</style>