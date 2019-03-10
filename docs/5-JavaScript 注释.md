# JavaScript 注释
- JavaScript 注释可用于提高代码的可读性。
- JavaScript 不会执行注释。
- 单行注释以 `//` 开头。 
- 多行注释以 /* 开始，以 */ 结尾。

## 实例
- 单行注释
```javascript
// 输出标题：
document.getElementById("myH1").innerHTML="欢迎来到我的主页";
// 输出段落：
document.getElementById("myP").innerHTML="这是我的第一个段落。";
```
- 多行注释
```javascript
/*
下面的这些代码会输出
一个标题和一个段落
并将代表主页的开始
*/
document.getElementById("myH1").innerHTML="欢迎来到我的主页";
document.getElementById("myP").innerHTML="这是我的第一个段落。";
```
- 行末注释
```javascript
var x=5;    // 声明 x 并把 5 赋值给它
var y=x+2;  // 声明 y 并把 x+2 赋值给它
```
