import { textComp } from "./textComp";

let obj = {
  TextComp: textComp
}

export function getCompoent(info,attr) {

  let component = obj[info.type](attr);
  component.info = info
  

  return component
} 