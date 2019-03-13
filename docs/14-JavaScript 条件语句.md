# JavaScript 条件语句
> 条件语句用于基于不同的条件来执行不同的动作。
## 条件语句
> 通常在写代码时，总是需要为不同的决定来执行不同的动作。可以在代码中使用条件语句来完成该任务。
- if 语句 - 只有当指定条件为 true 时，使用该语句来执行代码
- if...else 语句 - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
- if...else if....else 语句- 使用该语句来选择多个代码块之一来执行
- switch 语句 - 使用该语句来选择多个代码块之一来执行

## if 语句
> 只有当指定条件为 true 时，该语句才会执行代码。
```javascript
if (condition)
{
    // 当条件为 true 时执行的代码
}


// 当时间小于 20:00 时，生成问候 "Good day"
if (time<20)
{
    x="Good day";
}
// x 的结果是
// Good day
```
## if...else 语句
> 使用 if....else 语句在条件为 true 时执行代码，在条件为 false 时执行其他代码。
```javascript
if (condition)
{
    // 当条件为 true 时执行的代码
}
else
{
    // 当条件不为 true 时执行的代码
}
```
## if...else if...else 语句
```javascript
if (condition1)
{
    // 当条件 1 为 true 时执行的代码
}
else if (condition2)
{
    // 当条件 2 为 true 时执行的代码
}
else
{
  // 当条件 1 和 条件 2 都不为 true 时执行的代码
}


// 如果时间小于 10:00，则生成问候 "Good morning"，如果时间大于 10:00 小于 20:00，则生成问候 "Good day"，否则生成问候 "Good evening"
if (time<10)
{
    document.write("<b>早上好</b>");
}
else if (time>=10 && time<16)
{
    document.write("<b>今天好</b>");
}
else
{
    document.write("<b>晚上好!</b>");
}
```