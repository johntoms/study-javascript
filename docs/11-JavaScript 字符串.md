# JavaScript 字符串
> JavaScript 字符串用于存储和处理文本。
字符串可以存储一系列字符，如 "John Doe"。

字符串可以是插入到引号中的任何字符.
```javascript
//可以使用单引号或双引号
var carname = "Volvo XC60";
var carname = 'Volvo XC60';
// 可以使用索引位置来访问字符串中的每个字符
// 字符串的索引从 0 开始，这意味着第一个字符索引值为 [0],第二个为 [1], 以此类推。


// 可以在字符串中使用引号，字符串中的引号不要与字符串的引号相同
var answer = "It's alright";
var answer = "He is called 'Johnny'";
var answer = 'He is called "Johnny"';


// 也可以在字符串添加转义字符来使用引号
var x = 'It\'s alright';
var y = "He is called \"Johnny\"";
```

## 字符串长度
> 可以使用内置属性 length 来计算字符串的长度
```javascript
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
```

## 特殊字符
> 在 JavaScript 中，字符串写在单引号或双引号中。
**反斜杠是一个转义字符。 转义字符将特殊字符转换为字符串字符**
**转义字符 (\) 可以用于转义撇号，换行，引号，等其他特殊字符。**

| 代码 | 输出        |
| ---- | ----------- |
| \'   | 单引号      |
| \"   | 双引号      |
| \\   | 反斜杠      |
| \n   | 换行        |
| \r   | 回车        |
| \t   | tab(制表符) |
| \b   | 退格符      |
| \f   | 换页符      |

## 字符串可以是对象

> 通常， JavaScript 字符串是原始值，可以使用字符创建： **var firstName = "John"**
>
> 但我们也可以使用 new 关键字将字符串定义为一个对象： **var firstName = new String("John")**

```javascript
var x = "John";
var y = new String("John");
typeof x // 返回 String
typeof y // 返回 Object
// **不要创建 String 对象。它会拖慢执行速度，并可能产生其他副作用**


var x = "John";              
var y = new String("John");
(x === y) // 结果为 false，因为 x 是字符串，y 是对象
// === 为绝对相等，即数据类型与值都必须相等。
```

## 字符串属性和方法

> 原始值字符串，如 "John", 没有属性和方法(因为他们不是对象)。
>
> 原始值可以使用 JavaScript 的属性和方法，因为 JavaScript 在执行方法和属性时可以把原始值当作对象。

| 属性        | 描述                       |
| ----------- | -------------------------- |
| constructor | 返回创建字符串属性的函数   |
| length      | 返回字符串的长度           |
| prototype   | 允许您向对象添加属性和方法 |

## 字符串方法

| 方法                | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| charAt()            | 返回指定索引位置的字符                                       |
| charCodeAt()        | 返回指定索引位置字符的 Unicode 值                            |
| concat()            | 连接两个或多个字符串，返回连接后的字符串                     |
| fromCharCode()      | 将 Unicode 转换为字符串                                      |
| indexOf()           | 返回字符串中检索指定字符第一次出现的位置                     |
| lastIndexOf()       | 返回字符串中检索指定字符最后一次出现的位置                   |
| localeCompare()     | 用本地特定的顺序来比较两个字符串                             |
| match()             | 找到一个或多个正则表达式的匹配                               |
| replace()           | 替换与正则表达式匹配的子串                                   |
| search()            | 检索与正则表达式相匹配的值                                   |
| slice()             | 提取字符串的片断，并在新的字符串中返回被提取的部分           |
| split()             | 把字符串分割为子字符串数组                                   |
| substr()            | 从起始索引号提取字符串中指定数目的字符                       |
| substring()         | 提取字符串中两个指定的索引号之间的字符                       |
| toLocaleLowerCase() | 根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射 |
| toLocaleUpperCase() | 根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射 |
| toLowerCase()       | 把字符串转换为小写                                           |
| toString()          | 返回字符串对象值                                             |
| toUpperCase()       | 把字符串转换为大写                                           |
| trim()              | 移除字符串首尾空白                                           |
| valueOf()           | 返回某个字符串对象的原始值                                   |

```javascript
// 实例
var x = "JohnJohn";              // x 是字符串
y = x.charAt(2); // h
y = x.charCodeAt(2); // 104
y = x.concat(y, y); // JohnJohn104104, x+y+y
y = x.indexOf('h'); // 2, 索引从0开始
y = x.lastIndexOf('h'); // 6
y = x.slice();
y = x.split('o'); //J,hnJ,hn
y = x.substr(2); // hnJohn
y = x.substring(2,4) // hn，[2,3]
y = x.toLocaleLowerCase(); // johnjohn,小写
y = x.toLocaleUpperCase(); // JOHNJOHN,大写
y = x.toString(); // 转成Stirng
y = x.toUpperCase(); // JOHNJOHN,大写
y = x.trim(); // JohnJohn,去除两端的空格
y = x.valueOf(); // 返回某个字符串对象的原始值
```

