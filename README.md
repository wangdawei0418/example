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
  * 可以出现英文字母,数字,下划线,中线,美元$符号.
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

### 运算符
  * 将简单表达式组合成复杂表达式的方法.
  * 一元运算符
  * 二元运算符
  * 三元运算符
  * 注:N元运算符就是需要几个操作数.

### 语句
  <code>
    if(exp){
      语句块;
    }
  </code>
  <code>
    while(exp){
      语句块;
    }
  </code>
### 测试方法
  * `alert(exp)` 弹出框
  * `console.log(exp)` 向控制台输出
