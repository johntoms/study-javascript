# JavaScript for 循环
> 循环可以将代码块执行指定的次数。
```javascript
for (let i=0;i<cars.length;i++)
{ 
    document.write(cars[i] + "<br>");
}
```

## 不同类型的循环

- for - 循环代码块一定的次数
- for/in - 循环遍历对象的属性
- while - 当指定的条件为 true 时循环指定的代码块
- do/while - 同样当指定的条件为 true 时循环指定的代码块

```javascript
/*
for (语句 1; 语句 2; 语句 3)
{
    被执行的代码块
}

语句 1 （代码块）开始前执行

语句 2 定义运行循环（代码块）的条件

语句 3 在循环（代码块）已被执行之后执行
*/

for (let i=0; i<5; i++)
{
      x=x + "该数字为 " + i + "<br>";
}


let i=2,len=cars.length;
for (; i<len; i++)
{ 
    document.write(cars[i] + "<br>");
}
```

## For/In 循环
> JavaScript for/in 语句循环遍历对象的属性
```javascript
let person={fname:"John",lname:"Doe",age:25}; 
 
for (x in person)  // x 为属性名
{
    txt=txt + person[x];
}
```