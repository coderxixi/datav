 
import { getAttstr } from "@/utils"
import TextComp from "@/components/textComp"
export function textComp(){
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
      value: '#000',
      type: 'color',
      placeholder: '请选择颜色 '
    },
    {
      key: 'font-size',
      name: '字体大小',
      value: '20',
      type: 'input',
      placeholder: '请输入字体大小 '
    }
  ]
// 对外暴露数据
  let data='刘嘻嘻'
   


  //对外暴露模版

  let template = TextComp   //`<TextComp ${getAttstr(attribute)} data='${data}'/> `

   return {
     attribute, data, template 
   }
 }


  