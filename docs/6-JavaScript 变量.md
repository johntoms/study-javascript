# JavaScript 变量
> 变量是用于存储信息的"容器"。
```javascript
var x=5;
var y=6;
var z=x+y;
```
## 变量命名规则
> 变量可以使用短名称（比如 x 和 y），也可以使用描述性更好的名称（比如 age, sum, totalvolume）。
- 变量必须以字母开头
- 变量也能以 $ 和 _ 符号开头（不过不推荐这么做）
- 变量名称对大小写敏感（y 和 Y 是不同的变量）

## JavaScript 数据类型
- JavaScript 变量还能保存其他数据类型，比如文本值 (name="Bill Gates")。

- 在 JavaScript 中，类似 "Bill Gates" 这样一条文本被称为字符串。

- JavaScript 变量有很多种类型，但是现在，我们只关注数字和字符串。

- 当向变量分配文本值时，应该用双引号或单引号包围这个值。

- 当向变量赋的值是数值时，不要使用引号。如果用引号包围数值，该值会被作为文本来处理。

## 声明(创建) JavaScript 变量
> 在 JavaScript 中创建变量通常称为"声明"变量。使用 `var` 关键词来声明变量.
```javascript
var carname; // 变量声明之后，该变量是空的（它没有值）
// 如需向变量赋值，请使用等号
carname="Volvo";
// 也可以在声明变量时对其赋值
var carname="Volvo";
```
**一个好的编程习惯是，在代码开始处，统一对需要的变量进行声明。**

```javascript
// 一条语句，多个变量
var lastname="Doe", age=30, job="carpenter";
// 声明也可横跨多行
var lastname="Doe",
age=30,
job="carpenter";
// 注意:一条语句中声明的多个不可以赋同一个值
var x,y,z=1;
// x,y 为 undefined， z 为 1。
```

## 重新声明 JavaScript 变量
> 如果重新声明 JavaScript 变量，该变量的值不会丢失
```javascript
// 在以下两条语句执行后，变量 carname 的值依然是 "Volvo"
var carname="Volvo"; 
var carname;
```

