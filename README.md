# 前端笔记及案例
### 高度坍塌
#### 触发条件：
  * 当一个元素，它的子元素为非正常文档流内的元素时，该元素不会被这样的子元素高度所撑开。

#### 解决办法：
  * 在坍塌元素之前，添加一个空的块级元素，并为其设置clear:both属性

  * 为父级元素设置overflow:hidden属性
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
  </tbody>
</table>
