  

export function getAttstr(attrs){
  let attrStr=``
  attrs.forEach(item => {
    attrStr+=`${item.key}=${item.value}`
  });

  return attrStr
}