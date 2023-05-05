import TextComp from "./textComp";



let CompList={
  TextComp
}
  

  

export function installComp(app){
  Object.keys(CompList).forEach((key,value)=>{
    app.component(key, CompList[key])
  })
}