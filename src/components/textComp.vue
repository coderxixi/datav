<template>
  <div class="wrapper" :style="setStyle">
    <span>{{ data }}</span>
  </div>
</template> 

<script setup>

import { computed } from "vue";

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
    type: String,
    default: '😁'
  },
 
})
const setStyle = computed(() => {
  return {
    width: props.width + 'px',
    height: props.height + 'px',
    fontSize: props.fontSize + 'px',
    color: props.color,
   
     
  }
})

</script>

<style lang="less" scoped>
.wrapper {
//  border: 1px solid red;
}
</style>