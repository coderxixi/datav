import { textComp } from "./textComp";

let obj = {
  TextComp: textComp
}

export function getCompoent(info) {

  let component = obj[info.type]();
  component.info = info

  return component
} 