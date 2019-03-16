# JavaScript while 循环
> 只要指定条件为 true，循环就可以一直执行代码块。
```javascript
while (条件)
{
    //需要执行的代码
}
while (i<5)
{
    x=x + "The number is " + i + "<br>";
    i++;
}
```

## do/while 循环
> do/while 循环是 while 循环的变体。该循环会在检查条件是否为真之前执行一次代码块，然后如果条件为真的话，就会重复这个循环.

```javascript
/*
do
{
    需要执行的代码
}
while (条件);
*/
do
{
    x=x + "The number is " + i + "<br>";
    i++;
}
while (i<5);

```
## 比较 for 和 while
```javascript
// for
cars=["BMW","Volvo","Saab","Ford"];
var i=0;
for (;cars[i];)
{
    document.write(cars[i] + "<br>");
    i++;
}


// for
cars=["BMW","Volvo","Saab","Ford"];
var i=0;
while (cars[i])
{
    document.write(cars[i] + "<br>");
    i++;
}
```


