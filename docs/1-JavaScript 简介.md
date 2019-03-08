# javascript 简介
> JavaScript 是互联网上最流行的脚本语言，这门语言可用于 HTML 和 web，更可广泛用于服务器、PC、笔记本电脑、平板电脑和智能手机等设备。
## 优点
- JavaScript 是一种轻量级的编程语言。
- JavaScript 是可插入 HTML 页面的编程代码。
- JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。
- JavaScript 很容易学习。
### javascript 常见操作
1. 直接写入 HTML 输出流
```javascript
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落。</p>");
```
**您只能在 HTML 输出中使用 document.write。如果您在文档加载后使用该方法，会覆盖整个文档。**

2. 对事件的反应

```javascript
<button type="button" onclick="alert('欢迎!')">点我!</button>
```
**alert() 函数在 JavaScript 中并不常用，但它对于代码测试非常方便。**

3. 改变 HTML 内容

```javascript
x=document.getElementById("demo");  //查找元素
x.innerHTML="Hello JavaScript";    //改变内容
```

**您会经常看到 document.getElementById("some id")。这个方法是 HTML DOM 中定义的。**

**DOM (Document Object Model)（文档对象模型）是用于访问 HTML 元素的正式 W3C 标准 。**

4. 改变 HTML 图像

```javascript
<script>
    function changeImage()
{
    element=document.getElementById('myimage')
    if (element.src.match("bulbon"))
    {
        element.src="/images/pic_bulboff.gif";
    }
    else
    {
        element.src="/images/pic_bulbon.gif";
    }
}
</script>
<img id="myimage" onclick="changeImage()" src="/images/pic_bulboff.gif" width="100" height="180">
   
```

   **JavaScript 能够改变任意 HTML 元素的大多数属性，而不仅仅是图片。**

5. 验证输入

```javascript
// 测试实例
if isNaN(x) {
    alert("不是数字");
}
// 生产实例
if(isNaN(x)||x.replace(/(^\s*)|(\s*$)/g,"")==""){
    alert("不是数字");
}
```

#### 常见误解

- JavaScript 与 Java 是两种完全不同的语言，无论在概念上还是设计上。

- Java（由 Sun 发明）是更复杂的编程语言。
- ECMA-262 是 JavaScript 标准的官方名称。
- JavaScript 由 Brendan Eich 发明。它于 1995 年出现在 Netscape 中（该浏览器已停止更新），并于 1997 年被 ECMA（一个标准协会）采纳。