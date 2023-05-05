<script setup>
import CenterView from "@/views/centerView";
import HeadView from "@/views/headView";
import LeftView from "@/views/leftView";
import RightView from "@/views/rightView";
</script>
  
<template>
  <div id="app">
   <HeadView />
   <div class="content-box">
     <LeftView />
    <CenterView />
    <RightView /> 
   </div>
  </div>
 
 
</template>

<style lang="less">
.content-box{
  display: flex;
  height: calc(100vh - 80px);
}


</style>
