function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

function numberAdd() {
    x = 100;
    y = 10;
    z = x + y;
    document.getElementById("demo1").innerHTML = z;
}

function displayName() {
    let person = {
        FirstName: "John",
        LastName: "Toms",
        fullName: function () {
            return this.FirstName + " " + this.LastName;
        }
    };
    document.getElementById("name1").innerHTML = '加括号输出函数执行结果：' + person.fullName();
    document.getElementById("name2").innerHTML = '不加括号输出函数表达式：' + person.fullName;
}


