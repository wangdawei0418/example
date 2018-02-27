// active侧边栏加小图片
for(var a=0;a<$(".activeText").find("i").length;a++){
	$(".activeText").find("i")[a].style.backgroundPosition = -16*a+"px"+" 0px"
}



//初始化span点击小方块
// 该函数期望传入两个参数：(jQuery对象)
// age1: 要被插入的对象box
// age2: 需要插入方块的对象集合（长度）
function blockage(age1,age2){
	for(var a=0;a<age2.length;a++){
		var createSpan = $("<span></span>")//创建
		createSpan.attr("index",a)	//设置非法属性
		createSpan.appendTo(age1)//插入JQ对象
	}
}
// x = 0   公用的x
//小方块点击事件
//该函数期望传入两个参数：(jQuery对象)
// age1: 需要点击的span对象集合
// age2: 需要显示的盒子对象集合
function dotCilck(age1,age2){
	age1.click(function(){
		hidden(age1,age2)  //调用全部隐藏函数
		x = Number($(this).attr("index")) // 获取非法属性值，当成图片的位置用
		age2.eq(x).fadeIn(500)	// 盒子渐显
		age1.eq(x).addClass("focus") // span加样式
	})
}
//隐藏全部盒子，隐藏span获焦样式
// 该函数期望传入两个参数：(jQuery对象)
// age1: 需要隐藏的span的对象集合
// age2: 需要隐藏的盒子对象集合
function hidden(age1,age2){
	age2.hide()
	age1.removeClass("focus")
}
//该函数期望传入两个参数：(jQuery对象)
// age1: 需要点击的span对象集合
// age2: 需要显示的盒子对象集合
// ranking: 传入当前是第几个轮播图
//向右点击的代码段
function right(age1,age2,ranking){
	if(ranking=="first"){
		hidden(age1,age2)  //调用全部隐藏函数
		x++
		if(x == age2.length){
			x = 0
		}
		age2.eq(x).fadeIn(500) //盒子
		age1.eq(x).addClass("focus")  //span
	}
	if(ranking=="second"){
		hidden(age1,age2)  //调用全部隐藏函数
		z++
		if(z == age2.length){
			z = 0
		}
		age2.eq(z).fadeIn(500) //盒子
		age1.eq(z).addClass("focus")  //span
	}
	if(ranking=="third"){
		hidden(age1,age2)  //调用全部隐藏函数
		j++
		if(j == age2.length){
			j = 0
		}
		age2.eq(j).fadeIn(500) //盒子
		age1.eq(j).addClass("focus")  //span
	}
	if(ranking=="fourth"){
		hidden(age1,age2)  //调用全部隐藏函数
		k++
		if(k == age2.length){
			k = 0
		}
		age2.eq(k).fadeIn(500) //盒子
		age1.eq(k).addClass("focus")  //span
	}
}
//向左点击的代码段
function left(age1,age2,ranking){
	if(ranking=="first"){
		hidden(age1,age2)  //调用全部隐藏函数
		x--
		if(x==-1){
			x = age2.length-1
		}
		age2.eq(x).fadeIn(500)
		age1.eq(x).addClass("focus")
	}
	if(ranking=="second"){
		hidden(age1,age2)  //调用全部隐藏函数
		z--
		if(z==-1){
			z = age2.length-1
		}
		age2.eq(z).fadeIn(500)
		age1.eq(z).addClass("focus")
	}
	if(ranking=="third"){
		hidden(age1,age2)  //调用全部隐藏函数
		j--
		if(j==-1){
			j = age2.length-1
		}
		age2.eq(j).fadeIn(500)
		age1.eq(j).addClass("focus")
	}
	if(ranking=="fourth"){
		hidden(age1,age2)  //调用全部隐藏函数
		k--
		if(k==-1){
			k = age2.length-1
		}
		age2.eq(k).fadeIn(500)
		age1.eq(k).addClass("focus")
	}
}

//鼠标移上出现弹框  代码段
// age3: 鼠标要经过的对象集合
// age4: 要显示的区块名(String)
// age5: 现实的区块里面的要自动播放的图片集合(string)
function  revealPopover(age3,age4,age5){
	age3.mouseenter(function(){
		//让右边section小区块显示
		$(this).find(age4).fadeIn()
		//获取四张图片
		var $fourList = $(this).find(age4).find(age5)
		//小图片计时器，永不停息
		somalImg = setInterval(function(){
			$fourList.hide()
			if(y==$fourList.length-1){
				y = 0
			}else{
				y++
			}
			$fourList.eq(y).fadeIn(200)
		},2000)
	})
}

//鼠标离开隐藏弹框  代码段
// age3: 鼠标要经过的对象集合
// age4: 要显示的区块名(String)
function  concealPopover(age3,age4){
	age3.mouseleave(function(){
		$(this).find(age4).fadeOut(300)
		$(this).mouseleave(function(){
			$(this).find(age4).fadeOut()
		})
		clearInterval(somalImg)
	})
}


// *************第一个*************
var $firstBoxList = $(".lunbo.first .box")  //当前轮播图的box盒子
var $firstDot = $(".lunbo.first .dot")  //放span小方块的父级元素
var $firstArrowsLeft = $(".lunbo.first .arrowsLeft")	//找到向左箭头
var $firstArrowsRight = $(".lunbo.first .arrowsRight")	//找到向右箭头
var x = 0 //记录第一个轮播图的图片位置
var y = 0 //获取小图片位置
//调用函数初始化第一个轮播图的小方块
blockage($firstDot,$firstBoxList)
var $firstDotList = $firstDot.find("span")	//找到span集合
$firstBoxList.eq(0).show()	//默认显示box	
$firstDotList.eq(0).addClass("focus")	//默认给span添加类名
//向右点击
$firstArrowsRight.click(function(){
	right($firstDotList,$firstBoxList,"first")//调用向右点击代码
})
//向左点击
$firstArrowsLeft.click(function(){
	left($firstDotList,$firstBoxList,"first")//调用左右点击代码
})
// 调用函数
dotCilck($firstDotList,$firstBoxList)// 小方块span点击事件
revealPopover($firstBoxList,".section",".four img")//鼠标移上出现弹框,加上计时器
concealPopover($firstBoxList,".section")//鼠标离开隐藏弹框，停止计时器

// 鼠标移上主要核心
$firstBoxList.mouseenter(function(){
	var $pickureImgList = $(this).find(".picture a")	//找到右侧的小图片
	var $imgImgList = $(this).find(".img img")	//找到中间的大图片
	for(a=0;a<$pickureImgList.length;a++){
		$pickureImgList.eq(a).attr("index",a)	//设置非法属性
	}
	//获取左边的非法属性值，显示中间所对应的图片
	$pickureImgList.mouseenter(function(){
		$firstBoxList.find(".img").css({
			background:"none", 	//鼠标移上时隐藏图片的父级元素(.img)的背景图片
		})
		var index = $(this).attr("index")
		$imgImgList.eq(index).fadeIn()  //渐显
	})
	//获取左边的非法属性值，隐藏中间所对应的图片
	$pickureImgList.mouseleave(function(){
		$firstBoxList.find(".img").css({
			background:"",		//鼠标离开时显示图片的父级元素(.img)的背景图片
		})
		var index = $(this).attr("index")
		$imgImgList.eq(index).hide()	//隐藏
	})
})
// 计时器
function firstAuto(){
	firstAutoplay = setInterval(function(){
		right($firstDotList,$firstBoxList,"first")
	},3000)
}
firstAuto()
//鼠标移上$firstBoxList，关闭计时器
$(".lunbo.first").mouseenter(function(){
	clearInterval(firstAutoplay )
})
//鼠标离开$firstBoxList，开启计时器
$(".lunbo.first").mouseleave(function(){
	firstAuto()
})



// ***************************第二个****************************
var $secondBoxList = $(".lunbo.second .box")  //当前轮播图的box盒子
var $secondDot = $(".lunbo.second .dot")  //放span小方块的父级元素
var $secondArrowsLeft = $(".lunbo.second .arrowsLeft")	//找到向左箭头
var $secondArrowsRight = $(".lunbo.second .arrowsRight")	//找到向右箭头
var z = 0  //记录第二个轮播图的图片位置
//调用函数初始化第二个轮播图的小方块
blockage($secondDot,$secondBoxList)

var $secondDotList = $secondDot.find("span")	//找到span集合
$secondBoxList.eq(0).show()	//默认显示box	
$secondDotList.eq(0).addClass("focus")	//默认给span添加类名
//向右点击
$secondArrowsRight.click(function(){
	right($secondDotList,$secondBoxList,"second")//调用向右点击代码
})
//向左点击
$secondArrowsLeft.click(function(){
	left($secondDotList,$secondBoxList,"second")//调用左右点击代码
})
// 调用函数
dotCilck($secondDotList,$secondBoxList)// 小方块span点击事件


function secondAuto(){
	secondAutoplay = setInterval(function(){
		right($secondDotList,$secondBoxList,"second")
	},3000)
}
secondAuto()
//鼠标移上$firstBoxList，关闭计时器
$(".lunbo.second").mouseenter(function(){
	clearInterval(secondAutoplay )
})
//鼠标离开$firstBoxList，开启计时器
$(".lunbo.second").mouseleave(function(){
	secondAuto()
})

var $tankuang = $secondBoxList.find(".tankuang")

revealPopover($tankuang,".section",".four img")//鼠标移上出现弹框,加上计时器
concealPopover($tankuang,".section")//鼠标离开隐藏弹框，停止计时器



// ***************************第三个****************************
var $thirdBoxList = $(".lunbo.third .box")  //当前轮播图的box盒子
var $thirdDot = $(".lunbo.third .dot")  //放span小方块的父级元素
var $thirdArrowsLeft = $(".lunbo.third .arrowsLeft")	//找到向左箭头
var $thirdArrowsRight = $(".lunbo.third .arrowsRight")	//找到向右箭头
var j = 0 //记录第三个轮播图的图片位置
//调用函数初始化第三个轮播图的小方块
blockage($thirdDot,$thirdBoxList)

var $thirdDotList = $thirdDot.find("span")	//找到span集合
$thirdBoxList.eq(0).show()	//默认显示box	
$thirdDotList.eq(0).addClass("focus")	//默认给span添加类名
//向右点击
$thirdArrowsRight.click(function(){
	right($thirdDotList,$thirdBoxList,"third")//调用向右点击代码
})
//向左点击
$thirdArrowsLeft.click(function(){
	left($thirdDotList,$thirdBoxList,"third")//调用左右点击代码
})
// 调用函数
dotCilck($thirdDotList,$thirdBoxList)// 小方块span点击事件




// ***************************第四个****************************
var $fourthBoxList = $(".lunbo.fourth .box")  //当前轮播图的box盒子
var $fourthDot = $(".lunbo.fourth .dot")  //放span小方块的父级元素
var $fourthArrowsLeft = $(".lunbo.fourth .arrowsLeft")	//找到向左箭头
var $fourthArrowsRight = $(".lunbo.fourth .arrowsRight")	//找到向右箭头
var k = 0 //记录第四个轮播图的图片位置

//调用函数初始化第四个轮播图的小方块
blockage($fourthDot,$fourthBoxList)

var $fourthDotList = $fourthDot.find("span")	//找到span集合
$fourthBoxList.eq(0).show()	//默认显示box	
$fourthDotList.eq(0).addClass("focus")	//默认给span添加类名
//向右点击
$fourthArrowsRight.click(function(){
	right($fourthDotList,$fourthBoxList,"fourth")//调用向右点击代码
})
//向左点击
$fourthArrowsLeft.click(function(){
	left($fourthDotList,$fourthBoxList,"fourth")//调用左右点击代码
})
// 调用函数
dotCilck($fourthDotList,$fourthBoxList)// 小方块span点击事件












//*******************选项卡   新品与热门商品************************

var $obtain = $(".tabs .option span")
var $zhuTiFour = $(".tabs .zhuTiFour")
//设置非法属性的属性值
for(var a=0;a<$obtain.length;a++){
	$obtain.eq(a).attr("index",a)
	$zhuTiFour.eq(a).hide()
}
//默认显示大盒子
$obtain.eq(0).addClass("obtain")
$zhuTiFour.eq(0).show()
$zhuTiFour.eq(0).addClass("xianShi")

// 默认隐藏全部的somalList背景色 和 所有youList
$zhuTiFour.find(".somalList").css({background:"none"})
$zhuTiFour.find(".youList").hide()

//显示的
function tacitlyApprove(moRen){
	moRen.css({background:""})	//显示当前指向的背景颜色
	moRen.find(".liebiao").css({background:"none"}) //隐藏当前的liebiao列表背景颜色
	moRen.find(".liebiao .title").css({color:"#384959"}) //更改当前的title的字体颜色
	moRen.find(".liebiao .xijie .current").css({color:"#384959"})
	moRen.find(".liebiao .tabtext .win").css({background:"url(images/winhei.png)"})
	moRen.find(".liebiao .tabtext .mac").css({background:"url(images/machei.png)"})
	moRen.find(".liebiao .tabtext .linux").css({background:"url(images/linuxhei.png)"})
}

function morenlimian(){
	// 调用，默认选中第一个somalList
	tacitlyApprove($(".zhuTiFour.xianShi").find(".somalList").eq(0))

	//默认显示右侧youList第一个
	$(".zhuTiFour.xianShi").find(".youCe .youList").eq(0).show()
}
morenlimian()


// 点击切换选项
$obtain.click(function(){
	//全部隐藏
	$obtain.removeClass("obtain")
	$zhuTiFour.hide()
	$zhuTiFour.removeClass("xianShi")
	//当前显示
	$(this).addClass("obtain")

	var sum = Number($(this).attr("index"))
	$zhuTiFour.eq(sum).show()
	$zhuTiFour.eq(sum).addClass("xianShi")
	huashang()
	// morenlimian()
})
function huashang(){
	$somalList = $(".zhuTiFour.xianShi").find(".somalList") //获取当前的somalList集合
	$youList = $(".zhuTiFour.xianShi").find(".youList")//获取当前的youList集合

	// 给$somalList集合设置非法、属性值
	for(var a=0;a<$somalList.length;a++){
		$somalList.eq(a).attr("index",a)
	}
	//经过某一个$somalList，要做的事情！！！
	$somalList.mouseenter(function(){
		
		$somalList.css({background:"none"}) //隐藏所有的背景颜色
		$somalList.find(".liebiao").css({background:""}) //显示所有的liebiao列表背景颜色
		$somalList.find(".liebiao .title").css({color:""}) //回复所有的title的字体颜色
		$somalList.find(".liebiao .xijie .current").css({color:""})
		$somalList.find(".liebiao .tabtext .win").css({background:""})
		$somalList.find(".liebiao .tabtext .mac").css({background:""})
		$somalList.find(".liebiao .tabtext .linux").css({background:""})
		tacitlyApprove($(this))
		var sex = Number($(this).attr("index"))
		//动画队列问题，JQuery内部提供了停止动画队列的方法 “ stop() ”
		//问题描述：不停地快速划过$somalList并且停止时，之前的动画尚未执行完成，隐藏无效，会多出现几个你不想让他出现的怪东西
		for(var i = 0; i < $youList.length;i++){
			$youList.eq(i).stop();
		}

		$youList.css({display:"none"})
		$youList.eq(sex).fadeIn(200)
	})
}
huashang()











