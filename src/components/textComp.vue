<template>
  <div class="wrapper" :style="setStyle">
   <span>{{ data }}</span>
   dsafnlkasdfklas
  </div>
</template> 

<script setup>
import {computed,onMounted} from "vue"
const props = defineProps({
  width: {
    type: [String, Number],
  },
  height: {
    type: [String, Number],
  },
  color: {
    type: [String, Number],
  },
  fontSize: {
    type: [String, Number],
  },
  data: {
    type:String ,
    default:'😁' 
  }
})
const setStyle =computed(()=>{
   return {
    width:props.width+'px',
    height: props.height+'px',
    fontSize: props.fontSize+'px',
    color: props.color 
   }
})
onMounted(()=>{
  console.log('组件怪哉');
})
</script>

<style lang="less" scoped>
.wrapper {}
</style>