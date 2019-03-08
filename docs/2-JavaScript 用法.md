# javascript 用法
## JavaScript 脚本存放位置
- HTML 中的脚本必须位于 <script> 与 </script> 标签之间。

- 脚本可被放置在 HTML 页面的 <body> 和 <head> 部分中。
### 常见的问题
- 可以在 HTML 文档中放入不限数量的脚本.
- 脚本可位于 HTML 的 <body> 或 <head> 部分中，或者同时存在于两个部分中.
- 通常的做法是把函数放入 <head> 部分中，或者放在页面底部。这样就可以把它们安置到同一处位置，不会干扰页面的内容
- 也可以把脚本保存到外部文件中。外部文件通常包含被多个网页使用的代码
- 外部 JavaScript 文件的文件扩展名是 `.js`,`<script>内容</script>`函数存放在.js文件中,外部脚本不能包含 <script> 标签。
- 如需使用外部文件，请在 <script> 标签的 `"src"` 属性中设置该 `.js` 文件.

### 实例
引入外部文件
```html
 <!--myScript.js

function myFunction()
{
    document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
}
-->
# index.html
<!DOCTYPE html>
<html>
<body>
<!--引入`script`文件-->
<script src="myScript.js"></script>
</body>
</html>

```