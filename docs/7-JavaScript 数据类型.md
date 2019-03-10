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

## JavaScript 对象
> JavaScript 对象是拥有属性和方法的数据

**在 JavaScript中，几乎所有的事物都是对象**
```javascript
// 以下代码为变量 car 设置值为 "Fiat"
var car = "Fiat";
// 对象也是一个变量，但对象可以包含多个值（多个变量）
var car = {type:"Fiat", model:500, color:"white"};
```
**JavaScript 对象是变量的容器。**
## 对象定义
> 可以使用字符来定义和创建 JavaScript 对象
```javascript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// 定义 JavaScript 对象可以跨越多行，空格跟换行不是必须的
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
```
## 对象属性


可以说 "JavaScript 对象是变量的容器"。

但是，我们通常认为 "JavaScript 对象是键值对的容器"。

键值对通常写法为 name : value (键与值以冒号分割)。

键值对在 JavaScript 对象通常称为 对象属性。
- 写法类似于
    - PHP 中的关联数组
    - Python 中的字典
    - C 语言中的哈希表
    - Java 中的哈希映射
    - Ruby 和 Perl 中的哈希表

### 访问对象属性
```javascript
// 可以通过两种方式访问对象属性
person.lastName;
person["lastName"];
```

## 对象方法
- 对象的方法定义了一个函数，并作为对象的属性存储。

- 对象方法通过添加 () 调用 (作为一个函数)。

```javascript
var person = {
    firstName: "John",
    lastName : "Doe",
    id : 5566,
    fullName : function() 
	{
       return this.firstName + " " + this.lastName;
    }
};
document.getElementById("demo1").innerHTML = "不加括号输出函数表达式："  + person.fullName;
document.getElementById("demo2").innerHTML = "加括号输出函数执行结果："  +  person.fullName();
```
**JavaScript 对象是属性和方法的容器**
### 访问对象方法
```javascript
// 可以使用以下语法创建对象方法
// methodName : function() { code lines }
// 可以使用以下语法访问对象方法
// objectName.methodName()

```
