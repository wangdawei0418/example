  # 前端笔记及案例
### 高度坍塌
#### 触发条件：
  * 当一个元素，它的子元素为非正常文档流内的元素时，该元素不会被这样的子元素高度所撑开。

#### 解决办法：
  * 在坍塌元素之前，添加一个空的块级元素，并为其设置clear:both属性
  * 为父级元素设置overflow:hidden属性
  * 使用伪元素:after并设置clear属性`content:" ";clear:both;display:block;`
### 图片格式的选择
  * _jgp_
  适用于写实图片，不支持透明
  * _png8_
  网页中使用频率最高的格式，支持透明，但不支持半透明。
  * _png24_
  在png8格式的基础上，支持半透明，可解决透明图片的白边问题。
  * _gif_
  支持动画，在需要做动画时使用。
### CSS引入方式
  * _内部样式_
  在html文件中使用`<style>`标签中写入样式，只对该页面生效。
  * _外部样式_
  利用`<link>`标签中引入外部的.css文件，使用频率最高的一种css引入方式。
  * _行内样式_
  在HTML标签中添加style属性，对该元素单独进行样式声明。
    如：`<h2 style="color:#ff0000;font-size:22px;"><h2>`

### display(显示方式):
  * _block_ 强制转换为块级元素
  * _inline_ 强制转换为行内元素
  * _inline-block_ 强制转换为行内块元素
  * _none_  隐藏

### min-width(最小宽度),min-height(最小高度)





## Git
### 以下命令为环境配置命令不经常使用
* `git config --global user.name "用户名"`
* `git config --global user.email "Email"`
* `ssh-keygen -t rsa -C "电子邮箱"` 生成密钥
* `git init`  初始化仓库

### 以下命令为经常使用的命令，加粗为使用频率最高的命令
#### * `git status` 查看仓库状态
#### * `git add 文件名 || 文件夹名`  将文件从工作区提交到缓冲区
#### * `git commit -m "提交注释" ` 将缓冲区里所有文件提交版本库
* `git diff 文件名` 比对差异
* `git checkout 文件名` 撤销修改（用版本库回滚工作区）
* `git reset --hard 版本号 || HEAD^ ` 版本回溯
* `git log` 列出版本信息
* `git reflog` 列出完整版本信息
#### * `git clone`_url_  从远程仓库中克隆
#### * `git push`  向远程库推送版本


## shell命令
  * `cd ..` 退到上一级
  * `cd 文件夹名`   进入某个文件夹
  * `dir(window) ls(linux)` 列出当前路径下的文件
  * `mkdir 文件夹名` 创建一个文件夹
  * `pwd` 显示当前路径

## CSS透明实现方案
  * `opacity` 不透明度 举例:`opacity:.5`
  * `background-color:rgba()` 背景不透明  举例 `background-color:rgba(0,0,0,.3)`
#### 注意：opacity属性改变不透明度时会影响到元素内容及其子孙级元素，并且该影响不可被逆转。如果遇到只想背景色拥有不透明度的场景时，应使用background-color:rgba()的方式来实现。

### 边距重合
  当两个元素垂直方向的边距相遇时，最后得到的结果是取最大值，而非累加之后的结果。（如果两个元素都在正常文档流内，才会发生该现象。）
### 边距传递
  当父级元素A的第一个子元素B设置上边据时，该边据就像为元素A设置的一样。
#### 不会发生边距传递的情况
  * 当B元素为非正常文档流元素时
  * 当A元素有上边框时
  * 当A元素有overflow:hidden时

#### 解决方案
  * 为父级元素设置overflow:hidden属性
  * 用父级元素的padding取代子元素的margin
  * 为父级元素设置边框


### 定位
#### position 定位
* relative 相对的
##### 1.相对于自身原来所在的位置进行定位，不脱离文档流，只生成视觉上的偏移。
##### 2.作为子孙级绝对定位元素的一个参照物存在。
* absolute 绝对的
##### 逐层向上寻找祖先级元素，当找到其中一个祖先级元素position属性的属性值为relative时，那么停止继续向上寻找的行为，并根据该祖先级元素进行定位，如果找到根元素（body）时还未找到一个position为relative的元素，那么该元素会根据整个页面（body)进行定位。脱离文档流。
* fixed    固定的
* static   静态的（默认值）

### CSS选择器优先级算法
<table>
  <thead>
    <tr>
      <th>选择器</th>
      <th>权重分值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>标签选择器</td>
      <td>1</td>
    </tr>
    <tr>
      <td>类选择器</td>
      <td>10</td>
    </tr>
    <tr>
      <td>ID</td>
      <td>100</td>
    </tr>
    <tr>
      <td>通配符*</td>
      <td>0</td>
    </tr>
    <tr>
      <td>包含选择器</td>
      <td>以每个单独的选择器分值做加法运算之和</td>
    </tr>
  </tbody>
</table>

#### 当多个选择器分值相同的情况下，以后声明的为准（就近原则）
#### !important 可无视权重机制。`color:#ff0000 !important;`


### transition 过渡
`transition:变换属性 持续时间 延迟时间 执行速率`
* 变换属性 all关键字
* 持续时间 数字+单位(s代表秒，ms毫秒,进制1000)
* 延迟时间 数字+单位  可选参数
* 执行速率 linear线性的 可选参数

### transform 变换
* translate  移动  类似与相对定位后移动，只产生视觉偏移，不脱离正常文档流。`transform:translate(100px,200px)`
* scale    缩放 `transform:scale(1.1)`
* rotate   旋转 `transform:rotate(90deg)`
* skew     斜切 `transform:skew(30deg)`

### css动画(animation)
#### animation与transition的不同
* 执行时机;animation在页面刚进入时就可执行,transition需要鼠标移动
* animation有关键帧的特性,它执行分步动画,而transition不行
#### `animation:动画名 执行时间 执行次数 sulv yanchi`
* 执行次数:数字 || infinite

* `animation-fill-mode:forwards` 执行完动画时保持在最后一个关键帧时的状态

* `animation:myAnimation 3s infinite`
`@keyframes myAnimation{
  0%{
  }
  33%{
    transform:rotate(30deg);
    background-color:#f33;
    margin-left:0;
  }
  66%{
    margin-left:300px;
    transform:rotate(0deg);
    background-color:#f33;
  }
  100%{
    transform:rotate(-360deg);
    margin-left:0px;
    background-color:orange;
  }
}`

#### CSS选择器
* &gt; 子元素选择器
* [属性名=属性值] 属性选择器
* + 相邻兄弟选择器
* :first-child 集合中第一个元素
* :after 伪元素(常常用来解决清浮问题(高度坍塌))
* :first-of-type 匹配子集合中的第一个元素
* :nth-child(_arguments_) `argument`:数字 || 2n 3n .. || 2n - 1 || odd,even


#### 光标状态(cursor)
* pointer (手型)


#### 背景图片自适应问题
* background-size

### css sprite(雪碧图,精灵图)
#### 优势:减少HTTP请求次数,以加快网站的加载速度.
#### 劣势:制作,使用和维护都非常麻烦.




### 产品思维
#### 常规产品孵化流程
 * PM -> UI -> FE -> BE
 * PM:原型图
 * UI:PSD    (咱们依托bootstrap实现)
 * FE:
  - 将PSD转换为代码
  - 2.设计和实施交互效果
  - 3.和后端做好数据对接的工作
 * BE:
  - 1.数据通信
  - 2.服务器服务搭建

#### 思考分析一个靠谱的产品
  * 1.是否解决了用户痛点?
  * 2.可行性分析.
    - 目标人群
    - 技术方向    B/S  C/S   bootstrap
    - 实现难度    工期

#### 着手去做的步骤
  - 1. 用流程图软件画出页面的组织架构(网站里有那些页面)
  - 2. 提取核心功能并拆解其中的页面数量(考虑各种情况)
  - 3. 画稿
  - 4. 使用bootstrap制作页面


### 阴影
  * 盒阴影(box-shadow)
  * _box-shadow: 水平偏移量 垂直偏移量 模糊半径_
  * text-shadow 文字


### 元素文字垂直方向居中对其方案
    * _vertical-align_
    * 垂直对其方式属性只对单元格生效
    * 使用该属性,必须将元素display设置成table-cell

#### 当普通元素设置为table-cell显示模式后的副作用
    * 1.不能设置margin
    * 2.不能设置float
    * 3.不能设置绝对定位



## Javascript
  * 脚本语言(解释器) 不用编译
  * 历史背景 (表单验证)
  * 使用Javascript方式
    - 内部引用 `<script></script>`
    - 外部引用  `<script src="外部js文件路径"></script>`

### 标识符
#### 变量,对象属性,函数的一种命名规则.
  * 可以出现英文字母,数字,下划线,美元$符号.
  * 数字不允许出现在第一个字符上

### 变量
  * 存储数据的一个容器
  * 利用var关键字来声明变量 `var a = 10`
### 常量(字面量)
  * 表示数据本身的值
  * 与变量不同,常量不可以赋值.
  * `10 "a" "王大伟" true false`
### 表达式(exp)
  * 带有返回值的一个语句/短语
  - 简单表达式
    * 表达式的最小单元,不能拆分成其他的表达式,变量与常量是最简单的表达式
  - 复杂表达式
    * 使用运算符将多个简单表达式组合成新的表达式的形式.

### 数据类型
  * Number 数字
  `0 100 1 -1 3.14 Infinity(无穷大) -Infinity(无穷小) NaN(非数字)`
  * String 字符串
  `"王大伟" "a" "!@#$%^&*" "123"`
  * Boolean 布尔值
  `true(真) false(假)`
  * undefined 空值
  `undefined`
  * null 空值(对象)
  `null`
  * Object 对象
### 强制类型转换
  * Number(exp) 返回exp强制转换为数字
      - String转Number,如果是纯数字则按字面值进行转换,初次之外的其他情况一律为NaN.
      - Boolean转Number,true为1,false为0
  * String(exp) 返回exp强制转换为字符串
      - Number转String,按字面转换
      - boolean转String,按字面转换
  * Boolean(exp) .........
      - Number转Boolean,只有NaN和0为false,其余情况全为true
      - String转Booelan,只有空字符串结果为false,其余都为true

### 隐式类型转换
  JS解释器暗中转换数据类型的步骤.

### 运算符
  * 将简单表达式组合成复杂表达式的方法.
  * 一元运算符
  * 二元运算符
  * 三元运算符
  * 注:N元运算符就是需要几个操作数.

### 运算符与运算顺序
  * 使用小括号强制改变其运算顺序

### 语句
  ```
    if(exp){
      语句块;
    }

  ```
  ```
    if(exp){
      语句块1
    }
    else{
      语句块2
    }

  ```
  ```
    while(exp){
      语句块;
    }
  ```
  ```
    for(exp1;exp2;exp3){
      语句块;
    }
  ```
  ```
    for(var 变量 in object || Array){

    }
  ```
### 测试方法
  * `alert(exp)` 弹出框
  * `console.log(exp)` 向控制台输出

### 小测试:

  * 1.向控制台输出 1-1000 之间所有7的倍数
  * 2.向控制台输出 1-1000 之间所有13的倍数,并且在输出完倍
  数之后,再次输出一句话:"在1-1000中一共找到xxxx个13的倍数"
  * 3.向控制台输出1-n(随意数字)累加之和.例如:n=100,则1+2+3..+100
  * 4.修改上一程序,使其输出结果只包含3或5的倍数,例如:3,5,6,9,10,12....
  * 5.向控制台输出接下来的20个润年

### 表达式的副作用
  如果该表达式会对程序的下文运算结果造成影响,那么我们将该表达式叫做拥有`副作用的表达式`

### ++运算符
#### n++
  * 1.n的值直接作为该表达式的返回值返回.
  * 2.n = n + 1;
#### ++n
  * 1.n = n + 1;
  * 2.n的值作为该表达式的返回值返回.
### 函数
  * 程序中通用的代码块.
  * 函数分为声明与调用两部分
     ```function 函数名(形参1,形参2....){
          函数体
         }
      ```
    - `函数名(实参1,实参2......)`
  * arguments对象代表参数的集合
    - 拥有.length特性,返回实参个数,Number类型
    - 拥有arguments[n]特性,返回第n+1个实参的值
  * 函数调用表达式在函数体内部如果没有return语句则一律返回undefined,如果函数体内部有return语句那么将return语句后面的表达式的返回值,作为函数调用表达式的返回值进行返回.`return 只能出现在函数体内部,当某个函数执行到return语句时,该函数会忽略掉return以下的代码`

### 数组
#### 数组就是数据的无序集合
  * 数组的声明:`var arr = [1,2,3,4,5]`
  * 数组元素的提取:`arr[n]`
  * 数组元素的特性:
    - .length特性:返回数组长度 Number类型
    - .push()方法:向数组的末端插入一个数据
  * 数组的枚举
    - 使用循环语句 while  for
  * 数组的赋值
    - arr[0] = xxx

#### 冒泡排序
  * 交换步骤
    - empValue = arr[n];
    - arr[n] = arr[n + 1];
    - arr[n + 1] = empValue;

#### 作用域
##### 用来描述变量所能被访问的机制
##### 相对其他编程语言不同,JS(ecma5)里没有块级作用域的概念,只有函数作用域的概念.
  * 全局作用域(全局变量)
    - 在js上下文中任何位置都可以被访问到的变量
    - 当在局部作用域内全局变量与局部变量发生冲突时,以局部变量为准
  * 局部作用域(局部变量)
    - 只有在该封闭的作用域内可以被访问到的变量
    - 在该局部作用域下的子作用域中可以访问到局部变量.
    - 如果想在函数体内声明一个全局变量,那么去掉该变量的var关键字即可.
##### 变量提升
  * js执行之后,先将程序内所有的带var关键字的变量提升到JS上下文的最顶端,但只声明并不赋值.

### 对象
#### 数据的有序集合
  * 对象的种类
    - 自定义对象
    - 内置对象
  * 对象的声明
    ```
      var obj = {
        属性名:属性值,
        属性名:属性值,
        属性名:属性值,
        .........
        属性名:属性值
      }
    ```
  * 对象属性的查询
    - 对象名.属性名
    - 对象名["属性名"]
  * 对象属性的修改和设置
    - 对象名.属性名 = xxxxx
    - 对象名["属性名"] = xxxxxx
  * 对象属性的检测
    - "属性名" in 对象名 -> boolean类型值,检测某个属性在对象内是否存在

  * 对象属性的枚举
    - 使用for in 语句
    ```
      for(var i in obj){
        obj[i]  //属性值
        i       //属性名
      }
    ```
  * 对象属性的删除
    - delete运算符 `delete object.属性名`
### DOM
  * DOM其实就是Javascript里面的document内置对象
  * write(arg) arg:String  向页面里写入arg内容
#### DOM节点的查询
  * getElementById(arg)
    - arg:String ID值
    - 返回值:Object (Node节点)
    - 返回与argID值相匹配的页面元素节点
  * getElementsByTagName(arg)
    - arg:String 标签名
    - 返回值:Object (NodeList)
    - NodeList 类数组
  * getElementsByClassName(arg)
    - arg:String 类名
    - 返回值:Object (NodeList)
    - 在不高于IE8的浏览器中不会被识别
  * querySelector(arg)
    - arg String css选择器
    - 返回值：Node
  * querySelectorAll(arg)
    - arg String css选择器
    - 返回值：NodeList
#### Node节点的属性和方法
  * innerHTML 返回Node节点开始标签与结束标签之间的内容 String
  * className 返回Node节点的class属性所对应的属性值  String  
  * getElementsByClassName()
  * getElementsByTagName()
  * value 返回Node节点的value属性所对应的属性值
  * checked 返回当前单选按钮或复选框选中的状态 Boolean
  * tagName 返回当前节点的标签名 注：是大写的
#### 元素节点的类型
  * Node节点
  * NodeList 类数组  若干个Node节点的一个集合

### this关键字出现的场景和指向问题
  * 当出现在事件函数内部时,this指向触发该事件的Node节点对象.

### 节点的操作
  * 节点的创建 `createElement(arg)`
    - arg:String
    - 生成一个与arg相对应的Node节点
    - 该方法只在document对象下存在

  * 节点插入 `insertBefore(arg1,arg2)`
    - arg1:Object Node节点 插入的元素
    - arg2:Object Node节点 参照位置
    - 在arg2之前,插入arg1
  * 删除节点 `removeChild(arg)`
    - arg:Object Node节点 要删除的节点

  * 节点插入 `appendChild(arg)`
    - arg:Node节点
    - 在调用方法的对象内部结尾之前插入参数对象
  * 节点克隆 `cloneNode(arg)`
    - arg:Boolean 如果为true则连同内容一并克隆 反之不克隆内容
    - 返回调用该方法的节点对象的副本
  * 节点的查找
    - `parentNode` 返回该节点的父级节点
    - `nextSibling` `nextElementSibling` 返回下一个兄弟节点
    - `previousSibling` `previousElementSibling` 返回上一个兄弟节点
    - `firstChild` `firstElementChild` 返回第一个子节点
    - `lastChild` `lastElementChild` 返回最后一个字节点
  * 节点类型 `nodeType`  返回值为Number类型
    - 1:元素节点
    - 3:文本节点
    - 8:注释节点
    - 9:文档(document对象)节点
  * 获取元素的所有子节点 `childNodes`


### 节点属性的操作
  * 获取节点属性的属性值 `getAttribute(arg)`
    - arg: String 属性名
    - 返回arg的属性值
  * 设置节点属性的属性值 `setAttribute(arg1,arg2)`
    - arg1: String 属性名
    - arg2: String 设置的值
  * 删除某个属性 `removeAttribute(arg)`
    - arg: String 属性名


### 获取/设置元素的行内样式 `node.style.样式名`
  * `样式名`如果时连字符的样式那么去掉`-`改为驼峰式写法
  * 只能获取/设置元素的<strong>行内样式</strong>

### 计时器
  `setTimeout(arg1,arg2)`
    - arg1:匿名函数
    - arg2:Number
    - 过arg2毫秒之后,执行一次arg1.
  `setInterval(arg1,arg2)`
    - arg1:匿名函数
    - arg2:Number
    - 每过arg2毫秒之后,执行一次arg1.
  `clearTimeout(arg)`
    - arg:Number 计时器编号
  `clearInterval(arg)`
    - arg:Number 计时器编号
#### `parseInt(exp)` 强制转换为Number类型
  * parseInt("12ab")  -> 12
  * parseInt("12ab34") -> 12


### Math数学对象
  - PI 返回圆周率
  - abs() 返回绝对值
  - ceil() 向上取整,针对浮点数(小数)
  - floor() 向下取整,舍去所有小数位
  - round() 四舍五入,主要观察小数第一位
  - random() 返回0-1之间的伪随机数

### 事件
* 当某件事情发生时,触发执行的代码
```
  node.onclick = function(){
    代码块
  }
```
* onclick 当用户单击时
* onmouseover 当鼠标经过时
* onmouseout  当鼠标离开时
* onmouseenter 当鼠标经过时
* onmouseleave 当鼠标离开时
* onmousemove 当鼠标在元素上移动时

`键盘事件常常被绑定在window对象上,但有一些表单元素也会被绑定该事件`
* onkeydown 当键盘按下时
* onkeyup  当键盘按键抬起时触发该事件
* onkeypress 当键盘按下时(忽略功能键)

* onchange  当域内容发生改变时
### 事件对象
  ```
    node.事件名 = function(event){
      event  -> 事件对象
    }
  ```
#### 鼠标事件对象
  * offsetX,offsetY 相对于事件源对象的位置 Number
#### 键盘事件对象
  * keyCode 返回当前按键的键码   Number


### 日期对象
  * 日期对象是从用户操作系统中获取的时间(数据不可靠)
  * 使用Date对象前首先要实例化Date对象
    - `var date = new Date()`
  * getDate() 返回当前日期(哪天)
  * getDay() 返回0-6之间的数字代表周几 0代表周日
  * getFullYear() 返回当前年份
  * getMonth() 返回月份 从0开始 一般都会+1
  * getHours() 返回小时
  * getMinutes() 返回分钟
  * getSeconds() 返回秒
  * getTime() 返回自1970年1月1日至今所经历过的毫秒数
  * setMonth(x) 设置Date对象中月份的值


### 字符串对象
  * String.length  返回字符串的长度
  * String.charAt(index) 返回index下标所对应的字符
    - index Number类型
    - `String.charAt(index)` 等价与 `String[index]`
  * String.indexOf(searchValue,formIndex) 从字符串中检索字符首次出现的位置
    - searchValue 检索的字符
    - formIndex 检索的起始位置
    - 如果未检索到,则返回-1
  * String.lastIndexOf()  同上  从后向前寻找
  * String.replace(regExp/string,replacement)
    - 将字符串里第一个参数替换为第二参数
    - 全局匹配 `str.replace(/匹配字符/g,修改后的字符)`
  * String.slice(start,end) 截取start下标开始到end下标结束(不包括)中间的字符串
    - 可接收一个参数的形式,如果传入一个参数则参数代表开始下标,结束到字符串的最尾端(包含)
  * String.substring() 同上  但不接受负值参数
  * String.toUpperCase() 转换大写,对非英文字符无效
  * String.toLowerCase() 转换小写,对非英文字符无效


### 数组的全局方法
  * push() 向数组后面插入元素
    - 返回值插入后的新长度
  * pop() 删除数组最后一个元素
    - 返回值是被删除元素自身
  * unshift() 向数组元素最前面插入元素  
    - 返回值插入后的新长度
  * shift() 删除数组的第一个元素
    - 返回被删除元素自身
  * concat(Array) 连接数组
    - Array 被链接的数组
  * join(分隔符) 将数组转换为字符串
    - 可选参数 分隔符代表元素与元素之间的符号，默认值为,
  * slice() 截取数组  参考String.slice()的规则.
  * splice() 删除/替换数组元素
  * reverse() 返回数组元素颠倒后的顺序
  * sort() 排序
    - `Array.sort(function(a,b){return a - b})` 从小到大排序
    - `Array.sort(function(a,b){return b - a})` 从大到小排序
  * toString() 将数组转换为字符串  可被join()方法代替

### 事件委托
  `将事件委托给父级节点来做,利用事件对象的target属性`

#### 使用场景
  * 当元素不是页面加载完毕之后就存在的元素，还要为该元素绑定事件，那么根据JS执行时序的原则来说，该节点错过了被绑定事件的时机。
  * 当某个节点数量过于庞大时，那么绑定事件的操作比较消耗客户端性能，如果使用事件委托技术，则可以将大量的绑定事件操作缩减成一次。

### jQuery
  * 核心方法是 $或者是jQuery

#### $方法的传参形式
  - String  css选择器  比如:`$(".item")`  返回页面中所有与选择器相匹配的jQuery对象   
    `jquery对象:`是类数组,是若干个Node节点的集合,如果使用数组下标的形式提取出来某一个那么提取出来的返回值就是Node节点(源生Js对象)

  - NodeObject   返回该Node或NodeList的jQuery对象形式

  - String html代码段  生成一个与HTML代码段相吻合的jQuery对象

  - function   当页面加载完成之后触发的函数
  
#### 链接调用    

#### jQuery对象的方法
  * addClass(newClass) newClass:String 为jQuery对象追加class类型
  * removeClass(class) class:String 为jQuery对象删除某个class
  * toggleClass()
  * eq(index) index:Number 下标  返回jQuery对象集合中第index个元素(jQuery对象)
  * html(str) `str String类型 可选参数`
    - 传参: JQuery对象的开始标签与结束标签之间的内容设置成str
    - 不传参:返回jQuery对象的开始标签与结束标签之间的内容
  * 去掉on源生js事件名(eventFn)  eventFn:function  对应的事件处理函数
    - 注意:在事件处理函数内部,this关键字的指向依然为源生js对象
  * fadeIn(speed,callback)   渐显
  * fadeOut(speed,callback)  渐隐
  * fadeToogle(speed,callback) 渐显/渐隐
    - speed 执行时间  Number || String ("fast" || "normal" || "slow")
    - callback 可选 回调函数 function
  * slideDown() 下拉显示
  * slideUp()   收起隐藏
  * slideToggle() 

  * show()
  * hide()
  * toggle()

  * css(styleObject)   操作jquery对象的内部样式
    - styleObject:Object 样式列表

  * animate(styleObject,time,callback)
    - styleObject:Object 样式列表
    - time 执行事件 Number
    - callback 可选  回调函数

  * hasClass(className) className:String 检测jQuery对象是否含有该类名
    - 返回值:true || false
  * val()  对应源生js对象里的value属性
  * attr(name,value) 设置/返回对象的属性值
  * prop()
  * remove()
  * clone(includeEvent) 拷贝节点
    - includeEvent:是否连同事件一起拷贝  Boolean

#### 插入元素
  * insertAfter()
  * inserBefore()
  * append()
  * appendTo()
  * before()
  * after()

#### 向上遍历
  * parent()
  * parents()
  * `closest(selector)`逐层向上寻找,直到找到第一个与selector相匹配的元素结束寻找,并将其返回
#### 向下遍历  
  * children()
  * `find(selector)` selector String 从jQuery对象里面寻找符合selector的jQuery对象
  * `eq()`
#### 同级遍历
  * siblings()
  * next()
  * nextAll()
  * prev()
  * prevAll()

### `index()` 返回元素在父级元素中所在的索引值位置

### 流程控制语句(跳出循环)
  break 跳出整个循环(while,for,forin)
  continue 跳出本次循环(while,for,forin)


### jQuery获取元素宽、高度
  * `$obj.width()` 对应源生js中的 `node.offsetWidth`
  * `$obj.height()` 对应源生js中的 `node.offsetHeight`

### jQuery获取页面可视区域宽、高度
  * `$(document).width()`
  * `$(document).height()`

### javascript实现拖拽方法
  * 拖拽万能公式：起始位置(X) - 终止位置(x) - 元素相对距离(marginLeft || left)
  * 拖拽用到的事件：`obj.onmousedown` , `window.onmousemove` ,`window.onmouseup`
  * 拖拽中禁止选中行为：`body.onselectstart = function(){return}`

### Ajax
  * 本质：Javascript内部的一个内置对象XMLHttpRequest()
  * 作用：HTTP脚本化(让JavaScript可以随意的控制HTTP)
  * 步骤
      - 实例化Ajax对象 `new XMLHttpRequest()`
      - 创建请求 `open(method,url,asyn)`
      `method` 请求方式：POST || GET
      `url` 请求地址
      `asyn` 同步false或异步true
      - 发送请求 send()
      - 接受请求 `onreadystatechange`事件 配合 `status`与`readyState`共同检测响应状态

### 解决跨域问题的主流方案

#### jsonp
  - jsonp 不是一种技术，是一种方法. jsonp不是Ajax


### jQuery Ajax

#### `$.get(url,data,success)`
  * url 必须 请求地址
  * data 可选 Object  请求数据
  * success 可选 function 成功后的回调函数 
    - `function(response)` 服务器端的响应结果
  例：```$.get("http://192.168.1.1",{name:"abc",sex:"male"},function(response){
          console.log(response)
      })```

#### $.post()同上，区别就是不能将请求参数写到url后面。

### window对象

  * 1.所有的全局方法都是绑定到window对象下的成员（方法）
  * 2.所有window对象下的成员都可以直接调用，不用写window.；
  * 3.所有全局变量都是绑定到window对象下的成员(属性)
  * 4.window对象也可以有事件

  * location.href     返回/设置当前浏览器的URL
  * location.search   返回/设置GET请求参数
  * history.back()    等价于为用户点击了后退按钮

  1.获取body内容区的宽/高
  ```
    document.getElementsByTagName("body")[0].offsetWidth
    document.getElementsByTagName("body")[0].offsetHeight
  ```
  2.获取浏览器可视区域的宽/高
  ```
    document.documentElement.clientWidth
    document.documentElement.clientHeight
  ```
  3.获取页面顶部滚动条卷去的距离
  ```
    document.getElementsByTagName("body")[0].scrollTop
    document.documentElement.scrollTop
  ```

#### window对象下的事件:
    * onload 当页面加载完成之后执行的事件
      - $(function(){}) 与 window.onload 的不同点
      - 1.执行时机的不同 window.onload 偏晚
      - 2.$(function()) 不会冲突  而 window.onload 会冲突(用addEventListener()方法代替原有绑定事件的写法)
    
    * onscroll 当页面滚动时触发的事件
    * onresize 当浏览器调整可视尺寸时

### cookie  在用户本机上存储数据
  1.在整个网站共享一份cookie
  2.存储大小有限制（一般来说不大于1M）
  3.每条cookie都有自己独立的生命周期

```
  设置cookie方法：document.cookie = "属性名=属性值;expires=" + 日期对象
```

  * 当多条cookie共同存在时，需要重新对document.cookie进行赋值，此次赋值并不会覆盖之前的操作.
  * 删除某条cookie，只要将该条cookie的声明周期设置为当前时间的之前的日期就删除啦。



### 移动端布局

  #### 创建理想视口: `<meta name="viewport" content="width=device-width">`

  #### 媒体查询：断点（分辨率临界点）的选择

  ```

    @media (max-width:480px){
      //手机独有的样式
      body{
        ....
      }
      header{
        .....
      }
    }

  ```

  #### 1.完美
  ```
  0-480 小屏幕
  481-800 中屏幕、
  801-1400 大屏幕
  1400+  超大屏幕
  ```

  #### 2.挺完美

  ```
  0-480 小屏幕
  481-800 中屏幕、
  801-1400 大屏幕
  ```

  #### 3.主流方案

  ```
  0-480 小屏幕
  480+  PC端
  ```

@media screen max-width(480px){
  
} 



#### 常用的HTML新标签：

 ```
    header 页眉（网页（部分区域）的头部 顶部 导航区域等等），闭合标签；块元素；

    nav 导航链接部分；闭合标签；块元素；实质上，跟 DIV标签，可以说是完全一样的特性。 

    section 标签定义网页中的区域（部分）。比如章节、页眉、页脚或文档中的其他部分。闭合 标签；块元素；实质上，跟DIV标签，可以说是完全一样的 特性； 

    footer 页脚（网页（部分区域）的底部|版权区域等等），闭合标签；块元素；

    article 内容是引用其他地方的。一个区域中的，另外一部分内容；闭合标签；块元素；实质上，跟DIV标签，可以说是完全一样的特性 

    aside 跟 article 是一起使用；是辅助 article 区域的内容。也可以理解为整个网页的 辅助区域；（最常见的京东的右侧的工具栏） 

    hgroup 给标题分组，为标题或者子标题进行分组，通常与h1-h6元素组合使用。如果文章中只有一个标题，则不使用hgroup。 


    canvas定义图形，比如图表和其他图像。 
    闭合标签；行内元素；默认情况下，canvas创建的画布宽：300px;高：150px; 

    time 定义日期或时间，或者两者。闭合标签；行内元素，默认情况下，宽：内容的宽度；高：内容的高度； 

    address 为文档或 section 定义联系信息，比如：电子邮箱、地址、电话、QQ、微信号等。 
    闭合标签；块元素；

    mark定义页面中需要突出显示或高亮显示的内容，通常在引用原文时，使用此元素，目的就是引起当前用户的注意。闭合标签；行内元素；默认情况下，宽：内容的宽度；高：内容的高度； 

    details 标签定义元素的细节，用户可进行查看，或通过点击进行隐藏。(备注信息)， 块元素 ；
    但是有一个动态的效果，点击可以显示(展开)内容，再点击可以隐藏(收起)内容； 

 ```

  * `::selection` 选中时的样式



## Canvas
  
  * getContext("2d") 获取绘制图形的`上下文环境`
  * strokeStyle 定义绘制样式
  * lineWidth 定义绘制粗细
  * beginPath()  绘制新的图形
  * closePath()  结束一次图形绘制 并且将终点和起点相连
  * fillStyle  定义填充样式
  * fill()     进行填充行为
  * stroke()   绘制线条
  * createLinearGradient(x1,y1,x2,y2) 创建线性渐变对象
  * Gradient.addColorStop(位置,颜色)  创建色标
  * arc(圆心x,圆心y,半径,起始角,终止角,绘制方向(默认顺时针))
  * shadowColor 定义阴影颜色
  * shadowBlur  定义阴影模糊半径
  * moveTo(x,y)   将笔尖移至xy的位置

  * translate()  移动画布
  * scale()      缩放画布
  * rotate()     旋转画布

  * save()  保存当前绘制状态
  * restore()  读取保存的上一个状态




### JSON反解析  `JSON.stringify(JSON对象)`

## NodeJs

  ### 模块   

    #### 引入模块的方式：`require(模块名)`

    * http模块

    ```
      createServer(fn(请求,响应){
          响应.end(向客户端返回的响应体)
      }).listen(端口号) 创建一个HTTP服务

    ```
    
    * url模块
        parse(url) 

    * fs模块
      readFile(文件名,function(error,data){})

