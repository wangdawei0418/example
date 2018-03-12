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


/*
  cookie相关操作开始
*/

function getCookie(queryStr){
  //1.获取到要找的属性在字符串中的起始位startIndex
  //2.获取到要找的属性所对应的属性值在字符串中的终止位置endIndex
  //3.从起始位startIndex，截取到终止位endIndex
  //4.以=为切割点，将第三步截取到的字符串切割为长度2的数组，数组下标[1]就是寻找属性对应的属性值.
  //获取设置过的cookie
  var str = document.cookie;
  var startIndex = str.indexOf(queryStr)
  var endIndex = str.indexOf(";",startIndex)
  //当前寻找的是最后一条cookie
  if(endIndex == -1){
    endIndex = str.length;
  }
  var result = str.slice(startIndex,endIndex).split("=")[1]
  return result;
}

function setCookie(data,date){
  var d = new Date();
  d.setDate(date);
  for(var i in data){
    document.cookie = i + "=" + data[i] + ";expires=" + d;
  }
}

function removeCookie(attrName){
  var d = new Date();
  d.setDate(d.getDate() - 1);
  document.cookie = attrName + "=1;expires=" + d;
}
/*
  cookie相关操作结束
*/
