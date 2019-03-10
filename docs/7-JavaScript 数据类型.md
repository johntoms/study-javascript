# JavaScript 数据类型
- 值类型(基本类型)
    * 字符串(String)
    * 数字(Number)
    * 布尔(Boolean)
    * 对空(Null)
    * 未定义(Undefined)
    * Symbol(独一无二的值)
- 引用数据类型
    * 对象(Object)
    * 数组(Array)
    * 函数(Function)
> Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。


## JavaScript 拥有动态类型
```javascript
// JavaScript 拥有动态类型
// 这意味着相同的变量可用作不同的类型
var x;               // x 为 undefined
var x = 5;           // 现在 x 为数字
var x = "John";      // 现在 x 为字符串
```
## JavaScript 字符串
> 字符串是存储字符（比如 "Bill Gates"）的变量
```javascript
// 字符串可以是引号中的任意文本
// 您可以使用单引号或双引号
var carname="Volvo XC60";
var carname='Volvo XC60';
// 可以在字符串中使用引号，只要不匹配包围字符串的引号即可
var answer="It's alright";
var answer="He is called 'Johnny'";
var answer='He is called "Johnny"';
```
## JavaScript 数字
> JavaScript 只有一种数字类型。数字可以带小数点，也可以不带.
```javascript
var x1=34.00;      //使用小数点来写
var x2=34;         //不使用小数点来写
// 极大或极小的数字可以通过科学（指数）计数法来书写
var y=123e5;      // 12300000
var z=123e-5;     // 0.00123
```
## JavaScript 布尔
> 布尔（逻辑）只能有两个值：true 或 false。
```javascript
var x=true;
var y=false;
```
## JavaScript 数组
```javascript
//创建数组
var cars=new Array();
cars[0]="Saab";
cars[1]="Volvo";
cars[2]="BMW";
// or
var cars=new Array("Saab","Volvo","BMW");
// or
var cars=["Saab","Volvo","BMW"];
// 数组下标是基于零的，所以第一个项目是 [0]，第二个是 [1]，以此类推
```
## JavaScript 对象
> 对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔
```javascript
var person={firstname:"John", lastname:"Doe", id:5566};
// 空格和折行无关紧要。声明可横跨多行
var person1={
firstname : "John",
lastname  : "Doe",
id        :  5566
};
// 对象属性有两种寻址方式
name=person.lastname;
name=person["lastname"];
```
## JavaScript Undefined 和 Null
> Undefined 这个值表示变量不含有值。可以通过将变量的值设置为 null 来清空变量。
```javascript
cars=null;
person=null;
```
## 声明变量类型
// 当声明新变量时，可以使用关键词 `new` 来声明其类型
```javascript
var carname=new String;
var x=      new Number;
var y=      new Boolean;
var cars=   new Array;
var person= new Object;
```
**JavaScript 变量均为对象。当声明一个变量时，就创建了一个新的对象。**