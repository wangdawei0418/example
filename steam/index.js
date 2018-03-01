var body = document.getElementsByTagName("body")[0];
// active侧边栏加小图片
for(var a=0;a<$(".activeText").find("i").length;a++){
	$(".activeText").find("i")[a].style.backgroundPosition = -16*a+"px"+" 0px"
}


//初始化轮播图
$(".lunbo").find(".bigBox .box").hide()//隐藏所有的,boxList

for(var a=0;a<$(".lunbo").length;a++){
	var $cont = $(".lunbo").eq(a).find(".bigBox .box").length
	//初始化span点击小方块
	for(var b=0;b<$cont;b++){
		var $createSpan = $("<span></span>")//创建
		$createSpan.attr("index",b)	//设置非法属性
		$createSpan.appendTo($(".lunbo").eq(a).find(".dot"))
	}
	$(".lunbo").eq(a).find(".dot span").eq(0).addClass("focus")
	$(".lunbo").eq(a).find(".bigBox .box").eq(0).show()//默认显示box
}

//寻找当前的元素
function seekElement(point){
	$lunbo = $(point).closest(".lunbo")//找到当前的父级lunbo
	$boxList = $lunbo.find(".bigBox .box")//找到当前的boxList集合
	$dotList = $lunbo.find(".dot span")//找到当前的$squareList集合
}

// 向右点击的代码段
function rightCode(){
	for(var a=0;a<$boxList.length;a++){
		if($boxList[a].style.display == "block"){
			$boxList.eq(a).hide()
			$dotList.eq(a).removeClass("focus")
			$boxList.eq(a+1).fadeIn()
			$dotList.eq(a+1).addClass("focus")
			if(a == $boxList.length-1){
				$boxList.eq(0).fadeIn()
				$dotList.eq(0).addClass("focus")
			}
			return;
		}
	}
}

$(".arrowsRight").click(function(){
	seekElement(this)
	rightCode()
})

$(".arrowsLeft").click(function(){
	seekElement(this)
	for(var a=0;a<$boxList.length;a++){
		if($boxList[a].style.display == "block"){
			$boxList.eq(a).hide()
			$dotList.eq(a).removeClass("focus")
			$boxList.eq(a-1).fadeIn()
			$dotList.eq(a-1).addClass("focus")
			if(a == 0){
				$boxList.eq($boxList.length-1).fadeIn()
				$dotList.eq($boxList.length-1).addClass("focus")
			}
			return;
		}
	}
})

// squareList点击事件
$(".lunbo").find(".dot span").click(function(){
	seekElement(this)
	var n = $(this).index()
	$boxList.hide()
	$dotList.removeClass("focus")
	$boxList.eq(n).fadeIn()
	$dotList.eq(n).addClass("focus")
})

// 第一个大盒子自动播放
function autoPlay(){
	play = setInterval(function(){
		$boxList = $(".lunbo").eq(0).find(".bigBox .box")//找到第一个轮播图的$boxList集合
		$dotList = $(".lunbo").eq(0).find(".dot span")//找到第一个轮播图的$squareList集合
		rightCode()
	},3000)
}
autoPlay()
$(".lunbo").eq(0).mouseenter(function(){
	clearInterval(play)
})
$(".lunbo").eq(0).mouseleave(function(){
	autoPlay()	
})

// 第一个轮播图右边的小图片，鼠标移上主要核心
$(".lunbo").eq(0).find(".bigBox.one .box").mouseenter(function(){
	var $imgImgList = $(this).find(".img img")	//找到中间的大图片
	var $pickureImgList = $(this).find(".picture a")	//找到右侧的小图片
	$pickureImgList.mouseenter(function(){
		var p = $(this).index()
		$imgImgList.closest(".img").css({background:"none"})
		$imgImgList.hide()
		//动画队列问题，JQuery内部提供了停止动画队列的方法 “ stop() ”
		//问题描述：不停地快速划过$somalList并且停止时，之前的动画尚未执行完成，隐藏无效，会多出现几个你不想让他出现的怪东西
		for(var a=0; a<$imgImgList.length;a++){
			$imgImgList.eq(a).stop()
		}
		$imgImgList.eq(p).fadeIn()
	})
	$pickureImgList.mouseleave(function(){
		$imgImgList.hide()
		$imgImgList.closest(".img").css({background:""})
	})
})


//鼠标移上出现弹框  代码段
// age3: 鼠标要经过的对象集合
// age4: 要显示的区块名(String)
// age5: 现实的区块里面的要自动播放的图片集合(string)
function  revealPopover(age3,age4,age5){
	var x=0;
	age3.mouseenter(function(){
		//让右边section小区块显示
		$(this).find(age4).fadeIn()
		//获取四张图片
		var $fourList = $(this).find(age4).find(age5)
		//小图片计时器，永不停息
		somalImg = setInterval(function(){
			$fourList.hide()
			if(x==$fourList.length-1){
				x = 0
			}else{
				x++
			}
			$fourList.eq(x).fadeIn(200)
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

$pass = $(".lunbo .bigBox .box").find(".section").parent()
$section = $pass.find(".section")
$fourList = $section.find(".four img")
revealPopover($pass,$section,$fourList)
concealPopover($pass,$section)


//*******************选项卡   新品与热门商品************************

var $obtain = $(".tabs .option span")
var $zhuTiFour = $(".tabs .zhuTiFour")

// 初始化选项卡
$obtain.eq(0).addClass("obtain")
$zhuTiFour.hide()
$zhuTiFour.find(".youList").hide()

$zhuTiFour.eq(0).show()
$zhuTiFour.eq(0).find(".youList").eq(0).show()
$zhuTiFour.eq(0).find(".somalList").eq(0).addClass("hove")

$obtain.click(function(){
	$zhuTiFour.hide()

	$obtain.removeClass("obtain")
	$(this).addClass("obtain")
	var q = $(this).index()
	$zhuTiFour.eq(q).show()
	$zhuTiFour.eq(q).find(".somalList").eq(0).addClass("hove")//显示第一个somalList
	$zhuTiFour.eq(q).find(".youList").eq(0).show()//显示第一个youList
})

$(".somalList").mouseenter(function(){
	var $somalList = $(this).closest(".zhuTiFour").find(".somalList")
	var $youList = $(this).closest(".zhuTiFour").find(".youList")
	$somalList.removeClass("hove")
	$youList.hide()
	for(var a=0;a<$youList.length;a++){
		$youList.stop()
	}
	var q = $(this).index()
	$somalList.eq(q).addClass("hove")
	$youList.eq(q).fadeIn()
})




//*****************详情页**********************

//初始化.bigimgs img
$(".bigimgs img").hide()
$(".bigimgs img").eq(0).show()
$(".somalboximg").eq(0).find("i").addClass("baiBian")

var $length = $(".somalboximg").length
var direction = "right"   //元素allsomalimgs移动的方向锁
var next = []	//后面触发点击事件的index()值,确定父级元素allsomalimgs的移动数值
var prev = []	//前面触发点击事件的index()值,确定父级元素allsomalimgs的移动数值
for(var a=0;a<$length;a++){
	if(a>2 && a%2==0){
		next.push(a)	//往数组里面插入向右触发点击的index()值
	}
	if(a<$length-4 && a%2!=0){
		prev.push(a)	//往数组里面插入向左触发点击的index()值
	}
}
//点击图片逻辑
var itemWrap = $(".allsomalimgs");
var baibianList = itemWrap.find("i");
var adv = {
	//当前所在的张数
	nowIndex : 0,
	imgWidth:120,
	//可视区域最左侧图片的下标
	leftIndex : 0,
	//图片数量
	count : baibianList.length - 1,
	left:0,
	//图片的宽度
	width:itemWrap.width(),
	//滚动条可以滚动的距离
	scrollableWidth:$(".handle").parent().width() - $(".handle").width(),
	//当前滚动条左边距
	scrollml:parseInt(itemWrap[0].style.left)
}
function changeStatus(){
	baibianList.removeClass("baiBian");
	baibianList.eq(adv.nowIndex).addClass("baiBian")
}
function moveView(dir){
	// 场外右手边溢出多少张
	adv.overRight = adv.count - adv.leftIndex - 5;
	if((dir == "right" && adv.overRight < 5 && adv.nowIndex !== 0) || (dir == "left" && adv.nowIndex == -1)){
		// 如果溢出的张数小于5张
		if(dir == "right" && adv.overRight < 5 && adv.nowIndex !== 0){
			// 此次转场是将倒数第5张放到可视区域的最左边的位置
			itemWrap.animate({
				left:-(adv.imgWidth * (adv.count - 4))
			})
		}
		if(dir == "left" && adv.nowIndex == -1){
			// 此次转场是将倒数第5张放到可视区域的最左边的位置
			itemWrap.animate({
				left:-(adv.imgWidth * (adv.count - 4))
			})

			//矫正当前所在张数下标
			adv.nowIndex = adv.count;
		}
	}
	else{
		itemWrap.animate({
			left:-(adv.imgWidth * adv.nowIndex)
		})
	}
	// 更新可视区域最左侧坐标
	if(dir == "left" && adv.nowIndex == adv.count){
		adv.leftIndex = adv.count - 4;
	}
	else{
		adv.leftIndex = adv.nowIndex;
	}
}


$(".sliderRight").click(function(){
	adv.nowIndex++;
	//判断转场条件1  当前所在张数为可视区域的最后一张
	if(adv.nowIndex == adv.leftIndex + 5){
		moveView("right")
	}
	//判断转场条件2  当前所在张数为总张数的最后一张
	if(adv.nowIndex == adv.count + 1){
		adv.nowIndex = 0;
		moveView("right")
	}
	changeStatus()
})




$(".sliderLeft").click(function(){
	adv.nowIndex--;
	// 当前所在张数为可视区域的第一张
	if(adv.nowIndex == adv.leftIndex - 1){
		//当前所在张数是的第一张
		// if(adv.nowIndex == -1){
		// 	//矫正下标  将nowIndex更新到最后一张
		// 	adv.nowIndex = adv.count;
		// }
		moveView("left")
	}
	changeStatus()
})



$(".handle").mousedown(function(event){
	var X = event.clientX;
	var _this = this;
	body.onselectstart = function(){
		return false;
	}

	window.onmousemove = function(event){
		var x = event.clientX;
		var nowml = parseInt(_this.style.left);
		if(x - X + adv.scrollml > adv.scrollableWidth){
			return
		}
		if(x - X + adv.scrollml < 0){
			return 
		}
		else{
			_this.style.left = x - X + adv.scrollml + "px";
		}
		var progress = Math.round(nowml/adv.scrollableWidth * 100) / 100;
		itemWrap.css({
			marginLeft:-((itemWrap.width() - 600) * progress)
		})

		adv.left = -((itemWrap.width() - 600) * progress);
	}
	window.onmouseup = function(){
		window.onmousemove = null;
		body.onselectstart = null;
	}
})
