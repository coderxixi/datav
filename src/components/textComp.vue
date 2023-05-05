<template>
  <div class="wrapper" :style="setStyle">
    <span>{{ data }}</span>
  </div>
</template> 

<script setup>

import { computed, onMounted } from "vue";
import { usePositioning } from "@/hooks/usePositioning"
const rootRef = usePositioning();
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
  position: {
    type: String,
    default: 'relative'
  },
  left: {
    type: [String, Number],
    default: 0
  },
  top: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 0
  }
})
const setStyle = computed(() => {
  return {
    width: props.width + 'px',
    height: props.height + 'px',
    fontSize: props.fontSize + 'px',
    color: props.color,
    left: props.left+'px',
    top: props.top+'px',
    position: props.position,
    zIndex: props.zIndex
  }
})
onMounted(() => {
  console.log('组件怪哉', rootRef.value);
})

</script>

<style lang="less" scoped>
.wrapper {}
</style>