<template>
  <div class="wrapper" :style="setStyle">
   <span>{{ data.txt }}</span>
  </div>
</template> 

<script setup>
import {computed} from "vue"
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
    type: Object,
    default: () => {
      return {
        txt: '这里是默认文字 '
      }
    }
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
</script>

<style lang="less" scoped>
.wrapper {}
</style>