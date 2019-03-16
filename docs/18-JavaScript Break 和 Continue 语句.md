# JavaScript Break 和 Continue 语句

> break 语句用于跳出循环。

>continue 用于跳过循环中的一个迭代。


# Break 语句
```javascript
for (i=0;i<10;i++)
{
    if (i==3)
    {
        break;
    }
    x=x + "The number is " + i + "<br>";
}
// 由于这个 if 语句只有一行代码，所以可以省略花括号
for (i=0;i<10;i++)
{
    if (i==3) break;
    x=x + "The number is " + i + "<br>";
}
```
## Continue 语句
> continue 语句中断循环中的迭代，如果出现了指定的条件，然后继续循环中的下一个迭代。
```javascript
for (i=0;i<=10;i++)
{
    if (i==3) continue;
    x=x + "The number is " + i + "<br>";
}
```

## JavaScript 标签
> 如需标记 JavaScript 语句，请在语句之前加上冒号
```javascript
// label:
// statements

// continue 语句（带有或不带标签引用）只能用在循环中。

// break 语句（不带标签引用），只能用在循环或 switch 中。

// 通过标签引用，break 语句可用于跳出任何 JavaScript 代码块

cars=["BMW","Volvo","Saab","Ford"];
list: 
{
    document.write(cars[0] + "<br>"); 
    document.write(cars[1] + "<br>"); 
    document.write(cars[2] + "<br>"); 
    break list;
    document.write(cars[3] + "<br>"); 
    document.write(cars[4] + "<br>"); 
    document.write(cars[5] + "<br>"); 
}
// 输出
// BMW
// Volvo
// Saab
```

