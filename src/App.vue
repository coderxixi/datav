<script setup>
import {ref} from "vue";
import CenterView from "@/views/centerView";
import HeadView from "@/views/headView";
import LeftView from "@/views/leftView";
import RightView from "@/views/rightView";
const myCurrComp=ref(null)
const currComp=(info)=>{
  myCurrComp.value=info
}
</script>
  
<template>

   <HeadView />
   <div class="content-box">
     <LeftView />
    <CenterView @currComp="currComp"/>
    <RightView :cpn="myCurrComp"/> 
   </div>
</template>

<style lang="less">
.content-box{
  display: flex;
  height: calc(100vh - 80px);
}


</style>
