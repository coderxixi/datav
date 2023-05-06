
import { createApp} from 'vue'
export function getAttstr(attrs) {
  let attrStr = ``
  attrs.forEach(item => {
    attrStr += `${item.key}=${item.value}  `
  });

  return attrStr
}
import TextComp from "@/components/textComp"
//获取随机ID
export const genId = () => { //获取随机ID，
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return 'q'+s4() + s4()+'-'+ s4();
  // 0x10000：以0x开始的数据表示16进制，10000转成十进制数就是65536，实际上这是为了后面获取四位数随机号码所以乘以10000，而为了获取包含字母在内的字符就用16进制。
}
//挂载组件
export function mountCompont(componten) {
  setTimeout(() => {
    let data = {};
    let id = componten.info.id;
    let component = componten.template;
    if (componten.attribute) {
      componten.attribute.forEach((item) => {
        data[item.key] = item.value
      })
    }
    data.data = componten.data;
    const {left,top,zIndex } = componten.postion
    let app = createApp(component, {...data,
    });
   
    
    app.mount(`#${id}`)
  }, 200)

}