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

### min-width(最小宽度),min-height(最小高度)





## Git
### `git config --global user.name "用户名"`
### `git config --global user.email "Email"`
### `ssh-keygen -t rsa -C "电子邮箱"` 生成密钥


### `git init`  初始化仓库
### `git status` 查看仓库状态
### `git add 文件名 || 文件夹名`  将文件从工作区提交到缓冲区
### `git commit -m "提交注释" ` 将缓冲区里所有文件提交版本库
### `git diff 文件名` 比对差异
### `git checkout 文件名` 撤销修改（用版本库回滚工作区）
### `git reset --hard 版本号 || HEAD^ ` 版本回溯
### `git log` 列出版本信息
### `git reflog` 列出完整版本信息
### `git clone`_url_  从远程仓库中克隆
### `git push`  向远程库推送版本


## shell命令
  `cd ..` 退到上一级
  `cd 文件夹名`   进入某个文件夹
  `dir(window) ls(linux)` 列出当前路径下的文件
  `mkdir 文件夹名` 创建一个文件夹
  `pwd` 显示当前路径

## CSS透明实现方案
  `opacity` 不透明度 举例:`opacity:.5`
