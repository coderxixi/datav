 import {toRaw} from "vue"
import { getAttstr } from "@/utils"
import TextComp from "@/components/textComp"
export function textComp(attr){
 
  //对外暴露属性
  let attribute  =[
     {
      key:'width',
      name:'宽度',
      value:'100',
      type:'input',
      placeholder:'哈哈'
     },
    {
      key: 'height',
      name: '高度',
      value: '40',
      type: 'input',
      placeholder: '哈哈'
    },
    {
      key: 'color',
      name: '文本颜色',
      value: '#A0B262',
      type: 'color',
      placeholder: '请选择颜色 '
    },
    {
      key: 'fontSize',
      name: '字体大小',
      value: '20',
      type: 'input',
      placeholder: '请输入字体大小 '
    }
  ]
// 对外暴露数据
  let data='刘嘻嘻'
   
 //更新操作

 if(attr){
   console.log('attr', attr.attribute);
   attribute = toRaw(attr.attribute)
   data = toRaw(attr.data) 
 }

  //对外暴露模版

  let template = TextComp   //`<TextComp ${getAttstr(attribute)} data='${data}'/> `

   return {
     attribute, data, template 
   }
 }


  