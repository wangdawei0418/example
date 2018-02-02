//通用获取节点方法
function $(selector){
  var str = selector.slice(1)
  if(selector[0] == "#"){
    return document.getElementById(str)
  }
  if(selector[0] == "."){
    return document.getElementsByClassName(str)
  }
  if(selector[0] !== "#" && selector[0] !== "."){
    return document.getElementsByTagName(selector)
  }
}

//通用NodeList绑定事件函数
function bindEvent(nodeList,eventType,fn){
  if(arguments.length == 2){
    fn = arguments[1];
    eventType = "onclick"
  }
  for(var i = 0; i < nodeList.length;i++){
    nodeList[i][eventType] = fn
  }
}

// 返回随机16进制颜色值
function getRandomColor(){
  var arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
  var result = "#";
  for(var i = 0; i < 6;i++){
    var random = Math.floor(Math.random()*16);
    result += arr[random];
  }
  return result;
}


//实现insertAfter方法
function insertAfter(newElement,p3){
	var parent=p3.parentNode
	if (parent.lastChild == p3) {
		parent.appendChild(newElement)
	} else{
		parent.insertBefore(newElement,p3.nextSibling)
	}
}
