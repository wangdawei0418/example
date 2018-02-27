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
//
var itemWrap = $(".allsomalimgs");
var baibianList = itemWrap.find("i");
//当前所在的张数
var adv = {};
adv.m = 0;
//可视区域最左侧图片的下标
adv.n = 0;
adv.count = baibianList.length;

function baibianStatus(index){
	baibianList.removeClass("baiBian");
	baibianList.eq(index).addClass("baiBian");
}
function moveView(newIndex){
	var r = adv.count - adv.m;
	var l = adv.n;
	if(r > 5){
		itemWrap.animate({
			"marginLeft":-(adv.m) * 120 
		});
	}
	else{
		if(l !== adv.count - 5){
			itemWrap.animate({
				"marginLeft":-(adv.count - r - 1) * 120 
			});
		}
	}
	adv.n = newIndex || adv.m;
}
$(".sliderRight").click(function(){
	++adv.m;
	if(adv.m == adv.count){
		adv.m = 0;
		moveView();
	}
	if(adv.m == adv.n + 5){
		moveView() 
	}
	if(adv.count - adv.m < 5){
		moveView(adv.count - 5)	
	}
	baibianStatus(adv.m)
})

