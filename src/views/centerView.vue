<template>
  <div id="canvasBox" class="warpper" @dragover="dragOver" @drop="drOp" @click="checkComp">
    <div :id="item.info.id" :data-id="item.info.id" :style="[item.boxStyle]" v-for="(item, index) of components"
      :key="index"></div>
    <div @mousedown="mouseDownStart" id="borderBox" v-if="currentComp" class="borderStyle" :style="setBorderStyle"></div>
  </div>
</template>

<script setup>
import { ref, computed, toRaw } from "vue";
import { genId, mountCompont } from "@/utils";
import { getCompoent } from "@/template";
//当前组件
let currentComp = ref(null);
let components = ref([]);
let zIndex = ref(0);
let startPosition = ref({ x: 0, y: 0 })
const setBorderStyle = computed(() => {
  let compWidth = 0;
  let compHeight = 0;
  if (currentComp.value) {
    currentComp.value.attribute.forEach((item) => {
      if (item.key === "width") {
        compWidth = item.value;
      }
      if (item.key === "height") {
        compHeight = item.value;
      }
    });
    return {
      width: `${compWidth}px`,
      height: `${compHeight}px`,
      left: `${currentComp.value.postion.left}px`,
      top: `${currentComp.value.postion.top}px`,
      zIndex: `${currentComp.value.postion.zIndex}`,
    };
  } else {
    return {

    };
  }

})

//拖拽到画布的回调
const dragOver = (e) => {
  e.preventDefault();


}
//鼠标松开的回调
const drOp = (e) => {
  e.preventDefault();
  let info = JSON.parse(e.dataTransfer.getData('info'))
  info.id = genId();
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
  component.postion = {
    left, top, zIndex: zIndex.value
  }
  component.boxStyle = {
    left: `${left}px`,
    top: `${top}px`,
    position: "absolute",
    zIndex: `${zIndex.value}`,
    cursor: "pointer"

  }


  components.value.push(component);

  // 
  //挂载组件
  mountCompont(component);


}
//选择组件
const checkComp = (e) => {
  let reg = /w{9}-\w{4}/;
  // let node =e.target;
  // let count = 0;

  // if()
  //获取匹配到的组件ID

  if (!reg.test(e.target.parentNode.id)) {
    let comp = components.value.find((item) => {
      if (item.info.id === e.target.parentNode.id) {
        return item
      }
    })
    currentComp.value = comp
    console.log('comp', toRaw(comp));
  } else {
    currentComp.value = null
  }


}
//鼠标按下回调
const mouseDownStart = (e) => {
  //记录按下的瞬间位置
  startPosition.value.x = e.clientX;
  startPosition.value.y = e.clientY;
  //注册移动鼠标和鼠标松开的事件
  document.addEventListener('mousemove', mouseMove, true);
  document.addEventListener('mouseup', mouseUp, true)
}
//鼠标移动
const mouseMove = (e) => {

  //计算偏移量
  let offsetX = e.clientX - startPosition.value.x;
  let offsetY = e.clientY - startPosition.value.y;

  //设置组件的位置
  let com = document.getElementById(currentComp.value.info.id);

  Object.assign(com.style, {
    left: boundaryLimit('x', currentComp.value.postion.left + offsetX,currentComp)+  'px',
    top: boundaryLimit('y', currentComp.value.postion.top + offsetY, currentComp) + 'px',
    // currentComp.value.postion.top + offsetY + 'px'
  })
  //设置选中框的位置
  let borderComp = document.getElementById('borderBox');
  Object.assign(borderComp.style, {
    left: boundaryLimit('x', currentComp.value.postion.left + offsetX, currentComp) + 'px',
    top: boundaryLimit('y', currentComp.value.postion.top + offsetY, currentComp) + 'px',
    // left: currentComp.value.postion.left + offsetX + 'px',
    // top: currentComp.value.postion.top + offsetY + 'px'
  })
}
//鼠标松开
const mouseUp = (e) => {
  //移除事件
  document.removeEventListener('mousemove', mouseMove, true);
  document.removeEventListener('mouseup', mouseUp, true);
  //更新组件数据
  console.log('currentCompcurrentComp', currentComp.value);
  currentComp.value.postion.left = boundaryLimit('x', currentComp.value.postion.left + (e.clientX - startPosition.value.x),currentComp);
  currentComp.value.postion.top = boundaryLimit('y',  currentComp.value.postion.top + (e.clientY - startPosition.value.y), currentComp);
  
 
  currentComp.value.boxStyle.left = boundaryLimit('x', currentComp.value.postion.left + (e.clientX - startPosition.value.x), currentComp);
  currentComp.value.boxStyle.top = boundaryLimit('y', currentComp.value.postion.top + (e.clientY - startPosition.value.y), currentComp);
}
//边界判断

const boundaryLimit = (type, num, comp) => {
  //计算出边界值
  //画布的宽高
  let canvas = document.getElementById('canvasBox');
  let canvasWidth = canvas.clientWidth;
  let canvasHeight = canvas.clientHeight;
  //组件的宽高
  let compWidth = 0;
  let compHeight = 0;
  comp.value.attribute.forEach((item) => {
    if (item.key == 'width') {
      compWidth = item.value
    }
    if (item.key == 'height') {
      compHeight = item.height
    }
  })
//边界值
  let maxX = canvasWidth - compWidth;
  let maxY = canvasHeight - compHeight;
  let lastNum = 0;
  if(type=="x"){
    if(num<0){
      lastNum=0;
    }else if(num>maxX){
     lastNum=maxX
    }else{
      lastNum=num
    }
  }else if(type=="y"){
    if(num<0){
      lastNum=0
    }else if(num>maxY){
      lastNum=maxY
      
    }else{
      lastNum=num
    }
  }
  return lastNum
}



</script>

<style lang="less" scoped>
.warpper {
  flex: 1;
  background-color: #eee;
  position: relative;

  .borderStyle {
    border: 1px solid green;
    position: absolute;
  }
}
</style>