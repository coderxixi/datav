 
import { getAttstr } from "@/utils"
export function handl (){
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
      name: '宽度',
      value: '40',
      type: 'input',
      placeholder: '哈哈'
    },
    {
      key: 'color',
      name: '文本颜色',
      value: '100',
      type: 'color',
      placeholder: '请选择颜色 '
    },
    {
      key: 'fontSize',
      name: '字体大小',
      value: '100',
      type: 'input',
      placeholder: '请输入字体大小 '
    }
  ]
// 对外暴露数据
  let data={
    txt:'哈哈哈 '
  }
   
  //对外暴露模版

   let template = `<TextComp ${getAttstr(attribute )} data=${data}/> `

   return {
     attribute, data, template 
   }
 }


  