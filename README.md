# mooc

> mooc project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## js面向对象

#### 什么是面向对象编程

 - 用对象的思想去写代码，就是面向对象编程
    -过程式写法
    -面向对象写法

 - 我们一直都在使用对象
    -数组 Array  时间 Date

#### 面向对象编程(OOP)的特点
 - 抽象：抓住核心问题
 - 封装：只能通过对象来访问方法
 - 继承：从已有对象上继承出新的对象
 - 多态：多对象的不同形态

#### 对象的组成

 - 方法（行为、操作）——函数：过程、动态的
 - 属性——变量：状态、静态的

#### 创建第一个面向对象程序

 - 为对象添加属性和方法
    -Object对象
    -this指向
    -创建两个对象 : 重复代码过多

#### 工厂方式

 - 面向对象中的封装函数
 - 改成与系统对象类似写法
    -首字母大写
    -New 关键字提取
    -This指向为新创建的对象

 - 构造函数
    -用来创建对象的函数，叫做构造函数

 - 存在的问题
    -对象的引用
    -浪费内存

#### 原型-prototype

 - 概念

    -重写对象方法，让相同方法在内存中存在一份（提高性能）

 - 学习原型

    -类比  :  CSS中的Class

 - 通过原型改写工厂方式

    -原则
    >相同的属性和方法可以加载原型上
    >混合的编程模式

 - 总结面向对象写法

    -构造函数加属性，原型加方法

#### 面向对象的拖拽

 - 注意
    -Event对象

```javascript
var arr = new Array(); //[]  //我们把系统自带的对象，叫做系统对象

var date = new Date();

arr.length
arr.push();
arr.sort();

date.getDate();
```

```javascript
var arr = [];

arr.number = 10;  //对象下面的变量：叫做对象的属性

arr.number

arr.test = function(){  //对象下面的函数 : 叫做对象的方法
  alert(123);
};

arr.test();
```

```javascript
//var obj = {};

var obj = new Object();  //创建了一个空的对象
obj.name = '小明';  //属性
obj.showName = function(){  //方法
  alert(this.name);
};

obj.showName();


var obj2 = new Object();  //创建了一个空的对象
obj2.name = '小强';  //属性
obj2.showName = function(){  //方法
  alert(this.name);
};

obj2.showName();
```

```javascript
//工厂方式 : 封装函数

function createPerson(name){

  //1.原料
  var obj = new Object();
  //2.加工
  obj.name = name;
  obj.showName = function(){
    alert( this.name );
  };
  //3.出场
  return obj;

}

var p1 = createPerson('小明');
p1.showName();
var p2 = createPerson('小强');
p2.showName();
```

```javascript
//当new去调用一个函数 : 这个时候函数中的this就是创建出来的对象,而且函数的的返回值直接就是this啦(隐式返回)

//new后面调用的函数 : 叫做构造函数

function CreatePerson(name){

  this.name = name;
  this.showName = function(){
    alert( this.name );
  };

}

var p1 = new CreatePerson('小明');
//p1.showName();
var p2 = new CreatePerson('小强');
//p2.showName();

alert( p1.showName == p2.showName );  //false
```

```javascript
var a = 5;
var b = a;
b += 3;
alert(b); //8
alert(a); //5   基本类型 : 赋值的时候只是值的复制


var a = [1,2,3];
var b = a;
b.push(4);
alert(b);  //[1,2,3,4]
alert(a);  //[1,2,3,4]   对象类型 : 赋值不仅是值的复制，而且也是引用的传递
```

```javascript
//原型 : 去改写对象下面公用的方法或者属性 , 让公用的方法或者属性在内存中存在一份 ( 提高性能 )

//原型 : CSS中的class
//普通方法 : CSS中的style

//原型 : prototype : 要写在构造函数的下面

/*var arr = [1,2,3,4,5];
var arr2 = [2,2,2,2,2];

arr.sum = function(){

  var result = 0;
  for(var i=0;i<this.length;i++){
    result += this[i];
  }
  return result;

};
arr2.sum = function(){

  var result = 0;
  for(var i=0;i<this.length;i++){
    result += this[i];
  }
  return result;

};

//alert( arr.sum() );  //15
//alert( arr2.sum() );  //10*/

var arr = [1,2,3,4,5];
var arr2 = [2,2,2,2,2];

Array.prototype.sum = function(){
  var result = 0;
  for(var i=0;i<this.length;i++){
    result += this[i];
  }
  return result;
};

alert( arr.sum() );  //15
alert( arr2.sum() );  //10
```
```javascript
var arr = [];
//arr.number = 10;
Array.prototype.number = 20;

alert(arr.number); //20
```

```javascript
//当new去调用一个函数 : 这个时候函数中的this就是创建出来的对象,而且函数的的返回值直接就是this啦(隐式返回)

//new后面调用的函数 : 叫做构造函数

function CreatePerson(name){

  this.name = name;

}
CreatePerson.prototype.showName = function(){
  alert( this.name );
};

var p1 = new CreatePerson('小明');
//p1.showName();
var p2 = new CreatePerson('小强');
//p2.showName();

alert( p1.showName == p2.showName );  //true
```

```html
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
#div1 div{ width:200px; height:200px; border:1px #000 solid; display:none;}
.active{ background:red;}
</style>
<script>
/*window.onload = function(){
  var oParent = document.getElementById('div1');
  var aInput = oParent.getElementsByTagName('input');
  var aDiv = oParent.getElementsByTagName('div');

  for(var i=0;i<aInput.length;i++){
    aInput[i].index = i;
    aInput[i].onclick = function(){
      for(var i=0;i<aInput.length;i++){
        aInput[i].className = '';
        aDiv[i].style.display = 'none';
      }
      this.className = 'active';
      aDiv[this.index].style.display = 'block';
    };
  }

};*/

//先变型:
//尽量不要出现函数嵌套函数
//可以有全局变量
//把onload中不是赋值的语句放到单独函数中


var oParent = null;
var aInput = null;
var aDiv = null;

window.onload = function(){

  oParent = document.getElementById('div1');
  aInput = oParent.getElementsByTagName('input');
  aDiv = oParent.getElementsByTagName('div');

  init();

};

function init(){
  for(var i=0;i<aInput.length;i++){
    aInput[i].index = i;
    aInput[i].onclick = change;
  }
}

function change(){
  for(var i=0;i<aInput.length;i++){
    aInput[i].className = '';
    aDiv[i].style.display = 'none';
  }
  this.className = 'active';
  aDiv[this.index].style.display = 'block';
}

</script>
</head>


<div id="div1">
  <input class="active" type="button" value="1">
    <input type="button" value="2">
    <input type="button" value="3">
    <div style="display:block">11111</div>
    <div>22222</div>
    <div>33333</div>
</div>
```

```javascript
//改成面向对象:
//全局变量就是属性
//函数就是方法
//Onload中创建对象

//改this指向问题 : 事件或者是定时器,尽量让面向对象中的this指向对象

window.onload = function(){

  var t1 = new Tab();
  t1.init();

};

function Tab(){
  this.oParent = document.getElementById('div1');
  this.aInput = this.oParent.getElementsByTagName('input');
  this.aDiv = this.oParent.getElementsByTagName('div');
}

Tab.prototype.init = function(){
  var This = this;
  for(var i=0;i<this.aInput.length;i++){
    this.aInput[i].index = i;
    this.aInput[i].onclick = function(){
      This.change(this);
    };
  }
};

Tab.prototype.change = function(obj){
  for(var i=0;i<this.aInput.length;i++){
    this.aInput[i].className = '';
    this.aDiv[i].style.display = 'none';
  }
  obj.className = 'active';
  this.aDiv[obj.index].style.display = 'block';
};
```

```javascript
//this的指向
oDiv.onclick = function(){
  this : oDiv
};


oDiv.onclick = show;
function show(){
  this : oDiv
}


oDiv.onclick = function(){
  show();
};
function show(){
  this : window
}
```

```html
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
#div1 div,#div2 div{ width:200px; height:200px; border:1px #000 solid; display:none;}
.active{ background:red;}
</style>
<script>

/* 按照数字顺序排序的排序函数

function numberorder(a, b) { return a - b; }



a = new Array(33, 4, 1111, 222);

a.sort(  );             // 按照字母顺序的排序结果为: 1111, 222, 33, 4

a.sort(numberorder);    // 按照数字顺序的排序结果为: 4, 33, 222, 1111

*/

window.onload = function(){

  var t1 = new Tab('div1');
  t1.init();
  t1.autoPlay();

  var t2 = new Tab('div2');
  t2.init();
  t2.autoPlay();

};

function Tab(id){
  this.oParent = document.getElementById(id);
  this.aInput = this.oParent.getElementsByTagName('input');
  this.aDiv = this.oParent.getElementsByTagName('div');
  this.iNow = 0;
}

Tab.prototype.init = function(){
  var This = this;
  for(var i=0;i<this.aInput.length;i++){
    this.aInput[i].index = i;
    this.aInput[i].onclick = function(){
      This.change(this);
    };
  }
};

Tab.prototype.change = function(obj){
  for(var i=0;i<this.aInput.length;i++){
    this.aInput[i].className = '';
    this.aDiv[i].style.display = 'none';
  }
  obj.className = 'active';
  this.aDiv[obj.index].style.display = 'block';
};

Tab.prototype.autoPlay = function(){

  var This = this;

  setInterval(function(){

    if(This.iNow == This.aInput.length-1){
      This.iNow = 0;
    }
    else{
      This.iNow++;
    }

    for(var i=0;i<This.aInput.length;i++){
      This.aInput[i].className = '';
      This.aDiv[i].style.display = 'none';
    }
    This.aInput[This.iNow].className = 'active';
    This.aDiv[This.iNow].style.display = 'block';


  },2000);

};

</script>
</head>

<body>
<div id="div1">
  <input class="active" type="button" value="1">
    <input type="button" value="2">
    <input type="button" value="3">
    <div style="display:block">11111</div>
    <div>22222</div>
    <div>33333</div>
</div>

<div id="div2">
  <input class="active" type="button" value="1">
    <input type="button" value="2">
    <input type="button" value="3">
    <div style="display:block">11111</div>
    <div>22222</div>
    <div>33333</div>
</div>
</body>
```

```javascript
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
#div1{ width:100px; height:100px; background:red; position:absolute;}
</style>
<script>

/*window.onload = function(){
  var oDiv = document.getElementById('div1');

  var disX = 0;
  var disY = 0;

  oDiv.onmousedown = function(ev){
    var ev = ev || window.event;
    disX = ev.clientX - oDiv.offsetLeft;
    disY = ev.clientY - oDiv.offsetTop;

    document.onmousemove = function(ev){
      var ev = ev || window.event;
      oDiv.style.left = ev.clientX - disX + 'px';
      oDiv.style.top = ev.clientY - disY + 'px';
    };

    document.onmouseup = function(){
      document.onmousemove = null;
      document.onmouseup = null;
    };
    return false;
  };

};*/

//先变型

/*var oDiv = null;
var disX = 0;
var disY = 0;

window.onload = function(){
  oDiv = document.getElementById('div1');

  init();

};

function init(){
  oDiv.onmousedown = fnDown;
}

function fnDown(ev){
  var ev = ev || window.event;
  disX = ev.clientX - oDiv.offsetLeft;
  disY = ev.clientY - oDiv.offsetTop;

  document.onmousemove = fnMove;
  document.onmouseup = fnUp;

  return false;
}
function fnMove(ev){
  var ev = ev || window.event;
  oDiv.style.left = ev.clientX - disX + 'px';
  oDiv.style.top = ev.clientY - disY + 'px';
}
function fnUp(){
  document.onmousemove = null;
  document.onmouseup = null;
}*/


//改面向对象:

window.onload = function(){

  var d1 = new Drag('div1');
  d1.init();

};

function Drag(id){
  this.oDiv = document.getElementById(id);
  this.disX = 0;
  this.disY = 0;
}
Drag.prototype.init = function(){

  var This = this;

  this.oDiv.onmousedown = function(ev){
    var ev = ev || window.event;
    This.fnDown(ev);
    return false;
  };
};
Drag.prototype.fnDown = function(ev){

  var This = this;
  this.disX = ev.clientX - this.oDiv.offsetLeft;
  this.disY = ev.clientY - this.oDiv.offsetTop;

  document.onmousemove = function(ev){
    var ev = ev || window.event;
    This.fnMove(ev);
  };
  document.onmouseup = this.fnUp;

};
Drag.prototype.fnMove = function(ev){
  this.oDiv.style.left = ev.clientX - this.disX + 'px';
  this.oDiv.style.top = ev.clientY - this.disY + 'px';
};
Drag.prototype.fnUp = function(){
  document.onmousemove = null;
  document.onmouseup = null;
};

</script>
</head>

<body>
<div id="div1"></div>
</body>
```

## 高级面向对象

####  包装对象
    JS基于原型的程序
    String Number Boolean

```javascript
/*function Aaa(){
  this.name = '小明';
}
Aaa.prototype.showName = function(){
  alert( this.name );
};

var a1 = new Aaa();
a1.showName();


var arr = new Array();
arr.push();
arr.sort();

//在JS源码 : 系统对象也是基于原型的程序

function Array(){
  this.lenglth = 0;
}
Array.prototype.push = function(){};
Array.prototype.sort = function(){};*/


//尽量不要去修改或者添加系统对象下面的方法和属性

var arr = [1,2,3];

Array.prototype.push = function(){

  //this : 1,2,3
  //arguments : 4,5,6

  for(var i=0;i<arguments.length;i++){
    this[this.length] = arguments[i]
  }

  return this.length;
};

arr.push(4,5,6);

alert( arr );
```

```javascript
/*var str = 'hello';

alert( typeof str );

str.charAt(0);   h
str.indexOf('e'); 1 */

//null undefined
//包装对象 : 基本类型都有自己对应的包装对象 : String  Number  Boolean

/*var str = new String('hello');

//alert( typeof str );

alert(str.charAt(1));

String.prototype.charAt = function(){};*/



//var str = 'hello';
//str.charAt(0);  //基本类型会找到对应的包装对象类型，然后包装对象把所有的属性和方法给了基本类型，然后包装对象消失


/*var str = 'hello';

String.prototype.lastValue = function(){
  return this.charAt(this.length-1);
};

alert( str.lastValue() );  //o*/


var str = 'hello';

str.number = 10;

alert( str.number );  //undefined

var str2 = new String();
str2.number = 20;
alert( str2.number );  //20
```

#### 原型链
    实例对象与原型之间的连接，叫做原型链
    __proto__( 隐式连接 )
    Object对象类型是原型链的最外层

```javascript
//原型链 : 实例对象与原型之间的连接，叫做原型链

//原型链的最外层 : Object.prototype

function Aaa(){
  //this.num = 20;
}
//Aaa.prototype.num = 10;
Object.prototype.num = 30;

var a1 = new Aaa();
alert(a1.num);
```

#### 面向对象的一些属性和方法
    hasOwnProperty()  : 看是不是对象自身下面的属性
    constructor :  查看对象的构造函数
    - 每个原型都会自动添加constructor属性
    - For in 的时候有些属性是找不到的
    - 避免修改construtor属性
    instanceof :  运算符
    - 对象与构造函数在原型链上是否有关系
    toString() :  object上的方法

```javascript
//hasOwnProperty : 看是不是对象自身下面的属性

var arr = [];
arr.num = 10;
Array.prototype.num2 = 20;

//alert(  arr.hasOwnProperty('num')  );  //true

alert(  arr.hasOwnProperty('num2')  );  //false
```

```javascript
//constructor : 查看对象的构造函数

/*function Aaa(){
}

var a1 = new Aaa();

alert( a1.constructor );  //Aaa

var arr = [];
alert( arr.constructor === Array );  //true*/


/*function Aaa(){
}
//Aaa.prototype.constructor = Aaa;   //每一个函数都会有的，都是自动生成的

//Aaa.prototype.constructor = Array;

Aaa.prototype.constructor = Array;
>function Array() { [native code] }
var aaa = new Aaa()
>undefined
aaa.constructor
>function Array() { [native code] }

var a1 = new Aaa();
alert( a1.hasOwnProperty == Object.prototype.hasOwnProperty );  //true*/


/*function Aaa(){
}

Aaa.prototype.name = '小明';
Aaa.prototype.age = 20;

Aaa.prototype = {
  constructor : Aaa,
  name : '小明',
  age : 20
};

var a1 = new Aaa();
alert( a1.constructor );*/


function Aaa(){
}

Aaa.prototype.name = 10;
Aaa.prototype.constructor = Aaa;

for( var attr in Aaa.prototype ){
  alert(attr);
}
```

```javascript
//instanceof : 对象与构造函数在原型链上是否有关系

function Aaa(){
}

var a1 = new Aaa();

//alert( a1 instanceof Object );  //true


var arr = [];

alert( arr instanceof Array ); //true
```

```javascript
//toString() : 系统对象下面都是自带的 , 自己写的对象都是通过原型链找object下面的

/*var arr = [];
alert( arr.toString == Object.prototype.toString ); //false*/

/*function Aaa(){
}
var a1 = new Aaa();
alert( a1.toString == Object.prototype.toString );  //true*/


//toString() : 把对象转成字符串

var arr = [1,2,3]
>undefined
arr.toString()
>"1,2,3"

/*var arr = [1,2,3];

Array.prototype.toString = function(){
  return this.join('+');
};

alert( arr.toString() );  //'1,2,3'*/


//var num = 255;
//alert( num.toString(16) );  //'ff'


//利用toString做类型的判断 :

/*var arr = [];

alert( Object.prototype.toString.call(arr) === '[object Array]' ); */ //'[object Array]'

window.onload = function(){

  var oF = document.createElement('iframe');
  document.body.appendChild( oF );

  var ifArray = window.frames[0].Array;

  var arr = new ifArray();

  console.log( arr.constructor == Array );  //false
  console.log( arr.constructor == ifArray )
  console.log( arr instanceof Array );  //false
  console.log( arr instanceof ifArray )
  console.log( Object.prototype.toString.call(arr) === '[object Array]' );  //true


};
```


## 对象的继承

#### 什么是继承

 - 在原有对象的基础上，略作修改，得到一个新的对象
 - 不影响原有对象的功能

```javascript
//继承 : 子类不影响父类，子类可以继承父类的一些功能 ( 代码复用 )

//属性的继承 : 调用父类的构造函数 call

//方法的继承 : for in :  拷贝继承 (jquery也是采用拷贝继承extend)

function CreatePerson(name,sex){   //父类
  this.name = name;
  this.sex = sex;
}
CreatePerson.prototype.showName = function(){
  alert( this.name );
};

var p1 = new CreatePerson('小明','男');
//p1.showName();


function CreateStar(name,sex,job){  //子类

  CreatePerson.call(this,name,sex);

  this.job = job;

}

//CreateStar.prototype = CreatePerson.prototype;

extend( CreateStar.prototype , CreatePerson.prototype );

CreateStar.prototype.showJob = function(){
};

var p2 = new CreateStar('黄晓明','男','演员');

p2.showName();


function extend(obj1,obj2){
  for(var attr in obj2){
    obj1[attr] = obj2[attr];
  }
}
```

```javascript
/*var a = {
  name : '小明'
};

var b = a;

b.name = '小强';

alert( a.name );*/


/*var a = {
  name : '小明'
};

//var b = a;

var b = {};

extend( b , a );

b.name = '小强';

alert( a.name );


function extend(obj1,obj2){
  for(var attr in obj2){
    obj1[attr] = obj2[attr];
  }
}*/


var a = [1,2,3];
var b = a;
//b.push(4);

b = [1,2,3,4];

alert(a);
```

#### 如何添加继承

 - 属性：call
 - 方法：for in
 - 例子  :   继承的拖拽

```javascript
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
#div1{ width:100px; height:100px; background:red; position:absolute;}
#div2{ width:100px; height:100px; background:yellow; position:absolute; left:100px;}
</style>
<script>

window.onload = function(){
  var d1 = new Drag('div1');
  d1.init();

  var d2 = new ChildDrag('div2');
  d2.init();
};

function Drag(id){  //父类
  this.obj = document.getElementById(id);
  this.disX = 0;
  this.disY = 0;
}
Drag.prototype.init = function(){

  var This = this;

  this.obj.onmousedown = function(ev){
    var ev = ev || window.event;
    This.fnDown(ev);

    document.onmousemove = function(ev){
      var ev = ev || window.event;
      This.fnMove(ev);
    };
    document.onmouseup = function(){
      This.fnUp();
    };
    return false;
  };

};

Drag.prototype.fnDown = function(ev){
  this.disX = ev.clientX - this.obj.offsetLeft;
  this.disY = ev.clientY - this.obj.offsetTop;
};
Drag.prototype.fnMove = function(ev){
  this.obj.style.left = ev.clientX - this.disX + 'px';
  this.obj.style.top = ev.clientY - this.disY + 'px';
};
Drag.prototype.fnUp = function(){
  document.onmousemove = null;
  document.onmouseup = null;
};


function ChildDrag(id){   //子类
  Drag.call(this,id);
}

extend( ChildDrag.prototype , Drag.prototype );

ChildDrag.prototype.fnMove = function(ev){

  var L = ev.clientX - this.disX;
  var T = ev.clientY - this.disY;

  if(L<0){
    L = 0;
  }
  else if(L>document.documentElement.clientWidth - this.obj.offsetWidth){
    L = document.documentElement.clientWidth - this.obj.offsetWidth;
  }

  this.obj.style.left = L + 'px';
  this.obj.style.top = T + 'px';
};

function extend(obj1,obj2){
  for(var attr in obj2){
    obj1[attr] = obj2[attr];
  }
}

</script>
</head>

<body>
<div id="div1"></div>
<div id="div2"></div>
</body>
```


#### 继承的其他形式

 - 类式继承

    -利用构造函数(类)继承的方式

```javascript
//类 : JS是没有类的概念的 , 把JS中的构造函数看做的类

//要做属性和方法继承的时候，要分开继承

function Aaa(){   //父类
  this.name = [1,2,3];
}
Aaa.prototype.showName = function(){
  alert( this.name );
};

function Bbb(){   //子类

  Aaa.call(this);

}

var F = function(){};
console.log( F.prototype ); //Object constructor: () __proto__: Object

console.log(Aaa.prototype); //Object constructor: Aaa() showName: () __proto__: Object

F.prototype = Aaa.prototype;
Bbb.prototype = new F();

/*
var b1 = new Bbb();
b1.showName();
console.log( b1.name );
console.log( b1.constructor );
                    function Aaa(){   //父类
                      this.name = [1,2,3];
                    }
*/


Bbb.prototype.constructor = Bbb; //修正指向问题

var b1 = new Bbb();
b1.showName();
console.log( b1.name );
console.log( b1.constructor );
/*function Bbb(){   //子类

  Aaa.call(this);

}*/
b1.name.push(4);
b1.showName();

var b2 = new Bbb();

console.log( b2.name );
b2.showName()
```

 - 原型继承

    -借助原型来实现对象继承对象

```javascript
var a = {
  name : '小明'
};

var b = cloneObj(a);

b.name = '小强';

//alert( b.name );
alert( a.name );

function cloneObj(obj){

  var F = function(){};

  F.prototype = obj;

  return new F();

}


拷贝继承:  通用型的  有new或无new的时候都可以

类式继承:  new构造函数

原型继承:  无new的对象
```

## 组件开发

#### 对象的多种表现形式

 - 提高对象的复用性
 - 如何配置参数和默认参数
 - 例子 : 拖拽
 - 例子 : 弹窗

```html
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
#div1{ width:100px; height:100px; background:red; position:absolute;}
#div2{ width:100px; height:100px; background:yellow; position:absolute; left:100px;}
#div3{ width:100px; height:100px; background:blue; position:absolute; left:200px;}
#div4{ width:100px; height:100px; background:green; position:absolute; left:300px;}
</style>
<script>

//组件开发 : 多组对象，像兄弟之间的关系( 代码复用的一种形式 )

window.onload = function(){

  var d1 = new Drag();
  d1.init({    //配置参数
    id : 'div1'
  });

  var d2 = new Drag();
  d2.init({   //配置参数
    id : 'div2',
    toDown : function(){
      document.title = 'hello';
      document.body.style.background = 'black';
    }
  });

  var d3 = new Drag();
  d3.init({    //配置参数
    id : 'div3',
    toDown : function(){
      document.title = '妙味';
    },
    toUp : function(){
      document.title = '课堂';
    }
  });

  var d4 = new Drag();
  d4.init({    //配置参数
    id : 'div4',
    toUp : function(){
      document.title = 'beybye';
    }
  });

};

function Drag(){
  this.obj = null;
  this.disX = 0;
  this.disY = 0;

  this.settings = {   //默认参数
    toDown : function(){},
    toUp : function(){}
  };

}
Drag.prototype.init = function(opt){

  var This = this;

  this.obj = document.getElementById(opt.id);

  extend( this.settings , opt );

  this.obj.onmousedown = function(ev){
    var ev = ev || window.event;
    This.fnDown(ev);

    This.settings.toDown();

    document.onmousemove = function(ev){
      var ev = ev || window.event;
      This.fnMove(ev);
    };
    document.onmouseup = function(){
      This.fnUp();

      This.settings.toUp();

    };
    return false;
  };

};

Drag.prototype.fnDown = function(ev){
  this.disX = ev.clientX - this.obj.offsetLeft;
  this.disY = ev.clientY - this.obj.offsetTop;
};
Drag.prototype.fnMove = function(ev){
  this.obj.style.left = ev.clientX - this.disX + 'px';
  this.obj.style.top = ev.clientY - this.disY + 'px';
};
Drag.prototype.fnUp = function(){
  document.onmousemove = null;
  document.onmouseup = null;
};





function extend(obj1,obj2){
  for(var attr in obj2){
    obj1[attr] = obj2[attr];
  }
}


</script>
</head>

<body>
<div id="div1"></div>
<div id="div2"></div>
<div id="div3"></div>
<div id="div4"></div>
</body>
```

```html
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
*{ margin:0; padding:0;}
.login{ background:white; border:1px #000 solid; position:absolute; left:0; top:0;  z-index:2;}
.title{ height:30px; background:gray; color:white;}
.title .close{ float:right;}
#mark{ background:black; fitler:alpha(opacity=50); opacity:0.5; position:absolute; left:0; top:0; z-index:1;}
</style>
<script>

window.onload = function(){
  var aInput = document.getElementsByTagName('input');

  aInput[0].onclick = function(){

    var d1 = new Dialog();
    d1.init({   //配置参数
      iNow : 0,
      title : '登录'
    });

  };

  aInput[1].onclick = function(){

    var d1 = new Dialog();
    d1.init({   //配置参数
      iNow : 1,
      w : 100,
      h : 400,
      dir : 'right',
      title : '公告'
    });

  };

  aInput[2].onclick = function(){

    var d1 = new Dialog();
    d1.init({   //配置参数
      iNow : 2,
      mark : true
    });

  };


};

function Dialog(){

  this.oLogin = null;

  this.settings = {   //默认参数
    w : 300,
    h : 300,
    dir : 'center',
    title : '',
    mark : false
  };

}

Dialog.prototype.json = {};

Dialog.prototype.init = function( opt ){

  extend( this.settings , opt );


  if( this.json[opt.iNow] == undefined ){
    this.json[opt.iNow] = true;
  }


  if(this.json[opt.iNow]){
    this.create();
    this.fnClose();

    if(this.settings.mark){
      this.createMark();
    }

    this.json[opt.iNow] = false;

  }

};

Dialog.prototype.create = function(){

  this.oLogin = document.createElement('div');
  this.oLogin.className = 'login';
  this.oLogin.innerHTML = '<div class="title"><span>'+ this.settings.title +'</span><span class="close">X</span></div><div class="content"></div>';

  document.body.appendChild( this.oLogin );

  this.setData();
};

Dialog.prototype.setData = function(){

  this.oLogin.style.width = this.settings.w + 'px';
  this.oLogin.style.height = this.settings.h + 'px';

  if( this.settings.dir == 'center' ){
    this.oLogin.style.left =  (viewWidth() - this.oLogin.offsetWidth)/2 + 'px';
    this.oLogin.style.top =  (viewHeight() - this.oLogin.offsetHeight)/2 + 'px';
  }
  else if( this.settings.dir == 'right' ){
    this.oLogin.style.left =  (viewWidth() - this.oLogin.offsetWidth) + 'px';
    this.oLogin.style.top =  (viewHeight() - this.oLogin.offsetHeight) + 'px';
  }

};

Dialog.prototype.fnClose = function(){

  var oClose = this.oLogin.getElementsByTagName('span')[1];
  var This = this;

  oClose.onclick = function(){

    document.body.removeChild( This.oLogin );

    if(This.settings.mark){
      document.body.removeChild( This.oMark );
    }

    This.json[This.settings.iNow] = true;

  };

};

Dialog.prototype.createMark = function(){

  var oMark = document.createElement('div');
  oMark.id = 'mark';

  document.body.appendChild( oMark );

  this.oMark = oMark;

  oMark.style.width = viewWidth() + 'px';
  oMark.style.height = viewHeight() + 'px';

};

function extend(obj1,obj2){
  for(var attr in obj2){
    obj1[attr] = obj2[attr];
  }
}

function viewWidth(){
  return document.documentElement.clientWidth;
}
function viewHeight(){
  return document.documentElement.clientHeight;
}


</script>
</head>

<body>
<input type="button" value="1">
<input type="button" value="2">
<input type="button" value="3">

<!--<div class="login">
  <div class="title">
      <span>标题</span><span class="close">X</span>
    </div>
    <div class="content"></div>
</div>-->
<!--<div id="mark"></div>-->
</body>
```

#### 什么是组件？

 - 对面向对象的深入应用（UI组件，功能组件）
 - 将 配置参数、方法、事件，三者进行分离

```html
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
#div1{ width:100px; height:100px; background:red; position:absolute;}
#div2{ width:100px; height:100px; background:yellow; position:absolute; left:100px;}
#div3{ width:100px; height:100px; background:blue; position:absolute; left:200px;}
#div4{ width:100px; height:100px; background:green; position:absolute; left:300px;}
</style>
<script>

//组件开发 : 多组对象，像兄弟之间的关系( 代码复用的一种形式 )

window.onload = function(){

  var d1 = new Drag();
  d1.init({    //配置参数
    id : 'div1'
  });

  var d2 = new Drag();
  d2.init({   //配置参数
    id : 'div2'
  });

  bindEvent(d2 ,'toDown',function(){
    document.title = 'hello';
  });

  bindEvent(d2 ,'toDown',function(){
    document.body.style.background = 'black';
  });

  var d3 = new Drag();
  d3.init({    //配置参数
    id : 'div3'
  });

  bindEvent(d3 ,'toDown',function(){
    document.title = '妙味';
  });

  bindEvent(d3 ,'toUp',function(){
    document.title = '课堂';
  });

  var d4 = new Drag();
  d4.init({    //配置参数
    id : 'div4'
  });

  bindEvent(d4 ,'toUp',function(){
    document.title = 'byebye';
  });

};

function Drag(){
  this.obj = null;
  this.disX = 0;
  this.disY = 0;

  this.settings = {   //默认参数

  };

}
Drag.prototype.init = function(opt){

  var This = this;

  this.obj = document.getElementById(opt.id);

  extend( this.settings , opt );

  this.obj.onmousedown = function(ev){
    var ev = ev || window.event;
    This.fnDown(ev);

    fireEvent(This , 'toDown');

    document.onmousemove = function(ev){
      var ev = ev || window.event;
      This.fnMove(ev);
    };
    document.onmouseup = function(){
      This.fnUp();

      fireEvent(This , 'toUp');

    };
    return false;
  };

};

Drag.prototype.fnDown = function(ev){
  this.disX = ev.clientX - this.obj.offsetLeft;
  this.disY = ev.clientY - this.obj.offsetTop;
};
Drag.prototype.fnMove = function(ev){
  this.obj.style.left = ev.clientX - this.disX + 'px';
  this.obj.style.top = ev.clientY - this.disY + 'px';
};
Drag.prototype.fnUp = function(){
  document.onmousemove = null;
  document.onmouseup = null;
};


function bindEvent(obj,events,fn){
  //obj : 楼层
  //events : 书架
  //fn : 一本书

  obj.listeners = obj.listeners || {};
  obj.listeners[events] = obj.listeners[events] || [];

  obj.listeners[events].push( fn );

  if(obj.nodeType){
    if(obj.addEventListener){
      obj.addEventListener(events,fn,false);
    }
    else{
      obj.attachEvent('on'+events,fn);
    }
  }
}

function fireEvent(obj,events){   //主动触发自定义事件

  if(obj.listeners && obj.listeners[events]){
    for(var i=0;i<obj.listeners[events].length;i++){
       obj.listeners[events][i]();
    }
  }

}


function extend(obj1,obj2){
  for(var attr in obj2){
    obj1[attr] = obj2[attr];
  }
}


</script>
</head>

<body>
<div id="div1"></div>
<div id="div2"></div>
<div id="div3"></div>
<div id="div4"></div>
</body>
```

#### 创建自定义事件

 - 有利于多人协作开发代码
 - 如何去挂载自定义事件与事件函数

```html
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<script>

window.onload = function(){
  var oDiv = document.getElementById('div1');
  var oSpan = document.getElementById('span1');

  bindEvent(oDiv , 'click',function(){
    alert(1);
  });

  bindEvent(oDiv , 'click',function(){
    alert(2);
  });

  bindEvent(oSpan , 'show',function(){
    alert(3);
  });

  bindEvent(oSpan , 'show',function(){
    alert(4);
  });

  bindEvent(oSpan , 'hide',function(){
    alert(5);
  });


  fireEvent(oSpan , 'show');  //3 , 4

};

function bindEvent(obj,events,fn){
  //obj : 楼层
  //events : 书架
  //fn : 一本书

  obj.listeners = obj.listeners || {};
  obj.listeners[events] = obj.listeners[events] || [];

  obj.listeners[events].push( fn );


  if(obj.addEventListener){
    obj.addEventListener(events,fn,false);
  }
  else{
    obj.attachEvent('on'+events,fn);
  }
}

function fireEvent(obj,events){   //主动触发自定义事件

  for(var i=0;i<obj.listeners[events].length;i++){
     obj.listeners[events][i]();
  }

}

</script>
</head>

<body>
<div id="div1">div</div>
<span id="span1">span</span>
</body>
```

#### 例子 :  基于JQ的选项卡的组件开发模式

 - Trigger() extend()等方法的使用

```javascript
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
#div1 div,#div2 div,#div3 div,#div4 div{ width:200px; height:200px; border:1px #000 solid; display:none;}
.active{ background:red;}
</style>
<script src="jquery-1.10.2.min.js"></script>
<script>

/**
  title : 基于JQ的选项卡组件

  Options : event   delay

  Methods : nowSel()   getContent()

  Events : beforeClick  afterClick

*/

//jQ中的主动触发 : trigger()

$(function(){

  var t1 = new Tab();
  t1.init('div1',{});

  var t2 = new Tab();
  t2.init('div2',{
    event : 'mouseover'
  });

  var t3 = new Tab();
  t3.init('div3',{
    event : 'mouseover',
    delay : 200
  });

  var t4 = new Tab();
  t4.init('div4',{});
  t4.nowSel(2);

  $('#input1').click(function(){

    alert( t4.getContent() );

  });

  $(t4).on('beforeClick',function(){
    alert( t4.getContent() );
  });

  $(t4).on('afterClick',function(){
    alert( t4.getContent() );
  });

});

function Tab(){

  this.oParent = null;
  this.aInput = null;
  this.aDiv = null;
  this.iNow = 0;

  this.settings = {  //默认参数
    event : 'click',
    delay : 0
  };
}

Tab.prototype.init = function(oParent , opt){

  $.extend( this.settings , opt );

  this.oParent = $('#'+oParent);
  this.aInput = this.oParent.find('input');
  this.aDiv = this.oParent.find('div');

  this.change();

};
Tab.prototype.change = function(){

  var This = this;
  var timer = null;

  this.aInput.on(this.settings.event,function(){

    var _this = this;

    if( This.settings.event == 'mouseover' && This.settings.delay ){

      timer = setTimeout(function(){
        show(_this);
      },This.settings.delay);

    }
    else{
      show(this);
    }

  }).mouseout(function(){
    clearTimeout(timer);
  });

  function show(obj){

    $(This).trigger('beforeClick');

    This.aInput.attr('class','');
    This.aDiv.css('display','none');

    $(obj).attr('class','active');

    This.aDiv.eq( $(obj).index() ).css('display','block');

    This.iNow = $(obj).index();

    $(This).trigger('afterClick');

  }

};

Tab.prototype.nowSel = function(index){

  this.aInput.attr('class','');
  this.aDiv.css('display','none');

  this.aInput.eq(index).attr('class','active');
  this.aDiv.eq(index).css('display','block');

  this.iNow = index;

};

Tab.prototype.getContent = function(){

  return this.aDiv.eq(this.iNow).html();

};


</script>
</head>

<body>
<div id="div1">
  <input class="active" type="button" value="1">
    <input type="button" value="2">
    <input type="button" value="3">
    <div style="display:block">111111</div>
    <div>222222</div>
    <div>333333</div>
</div>

<div id="div2">
  <input class="active" type="button" value="1">
    <input type="button" value="2">
    <input type="button" value="3">
    <div style="display:block">111111</div>
    <div>222222</div>
    <div>333333</div>
</div>

<div id="div3">
  <input class="active" type="button" value="1">
    <input type="button" value="2">
    <input type="button" value="3">
    <div style="display:block">111111</div>
    <div>222222</div>
    <div>333333</div>
</div>

<div id="div4">
  <input class="active" type="button" value="1">
    <input type="button" value="2">
    <input type="button" value="3">
    <div style="display:block">111111</div>
    <div>222222</div>
    <div>333333</div>
</div>
<input type="button" value="点击" id="input1">
</body>
```


```html
放大镜
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
#div1{ width:180px; height:180px; overflow:hidden; position:relative;}
#div1 span{ width:100px; height:100px; background:yellow; opacity:0.5; filter:alpha(opacity=50); position:absolute; left:0; top:0; display:none;}
</style>
<script>
window.onload = function(){
  var oDiv = document.getElementById('div1');
  var oSpan = oDiv.getElementsByTagName('span')[0];

  oDiv.onmouseover = function(){
    oSpan.style.display = 'block';
  };

  oDiv.onmouseout = function(){
    oSpan.style.display = 'none';
  };

  oDiv.onmousemove = function(ev){
    var ev = ev || window.event;

    oSpan.style.left = ev.clientX - oDiv.offsetLeft - oSpan.offsetWidth/2 + 'px';
    oSpan.style.top = ev.clientY - oDiv.offsetTop - oSpan.offsetHeight/2 + 'px';

  };

};
</script>
</head>

<body>
<div id="div1">
  <img src="b2.jpg">
    <span></span>
</div>
</body>
```

```html
子级影响父级
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
#div1{ width:180px; height:180px; overflow:hidden; position:relative;}
#div1 span{ width:100px; height:100px; background:yellow; opacity:0.5; filter:alpha(opacity=50); position:absolute; left:0; top:0; display:none;}
</style>
<script>
window.onload = function(){
  var oDiv = document.getElementById('div1');
  var oSpan = oDiv.getElementsByTagName('span')[0];

  oDiv.onmouseover = function(){
    oSpan.style.display = 'block';
  };

  oDiv.onmouseout = function(){
    oSpan.style.display = 'none';
  };

  oDiv.onmousemove = function(ev){
    var ev = ev || window.event;

    oSpan.style.left = ev.clientX - oDiv.offsetLeft - oSpan.offsetWidth/2 + 'px';
    oSpan.style.top = ev.clientY - oDiv.offsetTop - oSpan.offsetHeight/2 + 'px';

  };

};
</script>
</head>

<body>
<div id="div1">
  <img src="b2.jpg">
    <span></span>
</div>
</body>


<script>

//解决方案:
//1.js :  onmouseenter onmouseleave ( 子级不会影响到父级 )

//最早 ie  firefox  chrome  , 做兼容非常的麻烦

//2.css  加一个层

window.onload = function(){
  var oDiv = document.getElementById('div1');

  oDiv.onmouseenter = function(){
    document.title += '1';
  };

  oDiv.onmouseleave = function(){
    document.title += '2';
  };

};
</script>


<script>


window.onload = function(){
  var oDiv1 = document.getElementById('div1');
  var oDiv2 = document.getElementById('div2');

  oDiv1.onmouseover = function(ev){
    var ev = ev || window.event;
    var a = this, b = ev.relatedTarget;

    //console.log(a.innerHTML);
    //console.log(b.innerHTML);

    if( !elContains(a,b) && a!=b ){

      document.title += '1';

    }
  };

  oDiv1.onmouseout = function(ev){

    var ev = ev || window.event;
    var a = this, b = ev.relatedTarget;

    if(!elContains(a,b) && a!=b){
      document.title += '2';

    }
  };
};

function elContains(a, b){  //判断两个元素是否是嵌套关系

  return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16);

}
//http://www.cnblogs.com/pigtail/archive/2012/06/07/2540246.html
</script>
```

```html
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
#div1{ width:180px; height:180px; overflow:hidden; position:relative;}
#div1 span{ width:100px; height:100px; background:yellow; opacity:0.5; filter:alpha(opacity=50); position:absolute; left:0; top:0; display:none;}
#mark{ width:180px; height:180px; background:red; position:absolute; left:0; top:0;opacity:0; filter:alpha(opacity=0);}
#div2{ width:500px; height:500px; position:absolute; left:250px; top:50px; overflow:hidden;}
#div2 img{ position:absolute; left:0; top:0;}
</style>
<script>
window.onload = function(){
  var oDiv = document.getElementById('div1');
  var oSpan = oDiv.getElementsByTagName('span')[0];

  var oDiv2 = document.getElementById('div2');
  var img2 = oDiv2.getElementsByTagName('img')[0];

  oDiv.onmouseover = function(){
    oSpan.style.display = 'block';
  };

  oDiv.onmouseout = function(){
    oSpan.style.display = 'none';
  };

  oDiv.onmousemove = function(ev){
    var ev = ev || window.event;

    var L = ev.clientX - oDiv.offsetLeft - oSpan.offsetWidth/2;
    var T = ev.clientY - oDiv.offsetTop - oSpan.offsetHeight/2;

    if(L<0){
      L = 0;
    }
    else if(L>oDiv.offsetWidth - oSpan.offsetWidth){
      L = oDiv.offsetWidth - oSpan.offsetWidth;
    }

    if(T<0){
      T = 0;
    }
    else if(T>oDiv.offsetHeight - oSpan.offsetHeight){
      T = oDiv.offsetHeight - oSpan.offsetHeight;
    }

    oSpan.style.left = L + 'px';
    oSpan.style.top = T + 'px';

    var scaleX = L/(oDiv.offsetWidth - oSpan.offsetWidth);
    var scaleY = T/(oDiv.offsetHeight - oSpan.offsetHeight);

    img2.style.left = - scaleX * (img2.offsetWidth - oDiv2.offsetWidth) + 'px';
    img2.style.top = - scaleY * (img2.offsetHeight - oDiv2.offsetHeight) + 'px';

  };

};
</script>
</head>

<body>
<div id="div1">
  <img src="b2.jpg">
    <span></span>
    <div id="mark"></div>
</div>
<div id="div2">
  <img src="b1.jpg">
</div>
</body>
```

```javascript
//Math
<script>

Math.pow(3,2);   //3的平方
Math.pow(2,3);   //2的立方

Math.sqrt(9);  //9的开方


Math.pow(9,1/3);  //9的开立方
</script>
```

```html
//mac
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
*{ margin:0; padding:0;}
#div1{ width:100%; height:auto; position:absolute; bottom:0; text-align:center;}
#div1 img{ width:64px;}
</style>
<script>

window.onload = function(){
  var aInput = document.getElementsByTagName('input');
  var oDiv = document.getElementById('div1');
  var aImg = oDiv.getElementsByTagName('img');

  document.onmousemove = function(ev){

    var ev = ev || window.event;

    for(var i=0;i<aImg.length;i++){
      var x = aImg[i].offsetLeft + aImg[i].offsetWidth/2;
      var y = aImg[i].offsetTop + aImg[i].offsetHeight/2 + oDiv.offsetTop;

      var a = ev.clientX - x;
      var b = ev.clientY - y;

      var c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

      var scale  = 1 - c/300;

      if(scale < 0.5){
        scale = 0.5;
      }

      aInput[i].value = scale;

      aImg[i].style.width = scale * 128 + 'px';
      aImg[i].style.height = scale * 128 + 'px';

  }

  };




};

</script>
</head>

<body>
<input type="text">
<input type="text">
<input type="text">
<input type="text">
<input type="text">
<div id="div1">
  <img src="images/1.png">
    <img src="images/2.png">
    <img src="images/3.png">
    <img src="images/4.png">
    <img src="images/5.png">
</div>
</body>
```

```html
//照片墙 one
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<style>
*{ margin:0; padding:0;}
#ul1{ width:660px; position:relative; margin:10px auto;}
li{ width:200px; height:150px; margin:10px; float:left; list-style:none;}
</style>
<script>
window.onload = function(){
  var aLi = document.getElementsByTagName('li');
  var izIndex = 2;
  var arr = [];

  for(var i=0;i<aLi.length;i++){
    arr.push( [ aLi[i].offsetLeft , aLi[i].offsetTop ] );
  }

  for(var i=0;i<aLi.length;i++){
    aLi[i].style.position = 'absolute';
    aLi[i].style.left = arr[i][0] + 'px';
    aLi[i].style.top = arr[i][1] + 'px';
    aLi[i].style.margin = 0;
  }

  for(var i=0;i<aLi.length;i++){
    drag(aLi[i]);
  }

  function drag(obj){
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function(ev){

      obj.style.zIndex = izIndex++;

      var ev = ev || window.event;
      disX = ev.clientX - obj.offsetLeft;
      disY = ev.clientY - obj.offsetTop;

      document.onmousemove = function(ev){
        var ev = ev || window.event;
        obj.style.left = ev.clientX - disX + 'px';
        obj.style.top = ev.clientY - disY + 'px';
      };

      document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
      };

      return false;

    };
  }

};
</script>
</head>

<body>
<ul id="ul1">
  <li><img src="photo/1.jpg" /></li>
    <li><img src="photo/2.jpg" /></li>
    <li><img src="photo/3.jpg" /></li>
    <li><img src="photo/4.jpg" /></li>
    <li><img src="photo/5.jpg" /></li>
    <li><img src="photo/1.jpg" /></li>
    <li><img src="photo/2.jpg" /></li>
    <li><img src="photo/3.jpg" /></li>
    <li><img src="photo/4.jpg" /></li>
</ul>
</body>
```

```html
//照片墙 two
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<style>
*{ margin:0; padding:0;}
#ul1{ width:660px; position:relative; margin:10px auto;}
li{ width:200px; height:150px; margin:10px; float:left; list-style:none;}
</style>
<script>
window.onload = function(){
  var aLi = document.getElementsByTagName('li');
  var izIndex = 2;
  var arr = [];

  for(var i=0;i<aLi.length;i++){
    arr.push( [ aLi[i].offsetLeft , aLi[i].offsetTop ] );
  }

  for(var i=0;i<aLi.length;i++){
    aLi[i].style.position = 'absolute';
    aLi[i].style.left = arr[i][0] + 'px';
    aLi[i].style.top = arr[i][1] + 'px';
    aLi[i].style.margin = 0;
  }

  for(var i=0;i<aLi.length;i++){
    drag(aLi[i]);
  }

  function drag(obj){
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function(ev){

      obj.style.zIndex = izIndex++;

      var ev = ev || window.event;
      disX = ev.clientX - obj.offsetLeft;
      disY = ev.clientY - obj.offsetTop;

      document.onmousemove = function(ev){
        var ev = ev || window.event;
        obj.style.left = ev.clientX - disX + 'px';
        obj.style.top = ev.clientY - disY + 'px';

        for(var i=0;i<aLi.length;i++){
          if( pz(obj,aLi[i]) && obj!=aLi[i] ){
            aLi[i].style.border = '2px red solid';
          }
          else{
            aLi[i].style.border = '';
          }
        }

      };

      document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
      };

      return false;

    };
  }

  function pz(obj1,obj2){
    var L1 = obj1.offsetLeft;
    var R1 = obj1.offsetLeft + obj1.offsetWidth;
    var T1 = obj1.offsetTop;
    var B1 = obj1.offsetTop + obj1.offsetHeight;

    var L2 = obj2.offsetLeft;
    var R2 = obj2.offsetLeft + obj2.offsetWidth;
    var T2 = obj2.offsetTop;
    var B2 = obj2.offsetTop + obj2.offsetHeight;

    if( R1<L2 || L1>R2 || B1<T2 || T1>B2 ){
      return false;
    }
    else{
      return true;
    }

  }

};
</script>
</head>

<body>
<ul id="ul1">
  <li><img src="photo/1.jpg" /></li>
    <li><img src="photo/2.jpg" /></li>
    <li><img src="photo/3.jpg" /></li>
    <li><img src="photo/4.jpg" /></li>
    <li><img src="photo/5.jpg" /></li>
    <li><img src="photo/1.jpg" /></li>
    <li><img src="photo/2.jpg" /></li>
    <li><img src="photo/3.jpg" /></li>
    <li><img src="photo/4.jpg" /></li>
</ul>
</body>
```

```html
//照片墙 three
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<style>
*{ margin:0; padding:0;}
#ul1{ width:660px; position:relative; margin:10px auto;}
li{ width:200px; height:150px; margin:10px; float:left; list-style:none;}
</style>
<script>
window.onload = function(){
  var aLi = document.getElementsByTagName('li');
  var izIndex = 2;
  var arr = [];

  for(var i=0;i<aLi.length;i++){
    arr.push( [ aLi[i].offsetLeft , aLi[i].offsetTop ] );
  }

  for(var i=0;i<aLi.length;i++){
    aLi[i].style.position = 'absolute';
    aLi[i].style.left = arr[i][0] + 'px';
    aLi[i].style.top = arr[i][1] + 'px';
    aLi[i].style.margin = 0;
  }

  for(var i=0;i<aLi.length;i++){
    drag(aLi[i]);
  }

  function drag(obj){
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function(ev){

      obj.style.zIndex = izIndex++;

      var ev = ev || window.event;
      disX = ev.clientX - obj.offsetLeft;
      disY = ev.clientY - obj.offsetTop;

      document.onmousemove = function(ev){
        var ev = ev || window.event;
        obj.style.left = ev.clientX - disX + 'px';
        obj.style.top = ev.clientY - disY + 'px';

        for(var i=0;i<aLi.length;i++){
          aLi[i].style.border = '';
        }

        var nL = nearLi(obj);

        if(nL){
          nL.style.border = '2px red solid';
        }

      };

      document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
      };

      return false;

    };
  }

  function nearLi(obj){

    var value = 9999;
    var index = -1;

    for(var i=0;i<aLi.length;i++){
      if( pz(obj,aLi[i]) && obj!=aLi[i] ){

        var c = jl(obj,aLi[i]);

        if( c < value ){
          value = c;
          index = i;
        }

      }
    }

    if(index != -1){
      return aLi[index];
    }
    else{
      return false;
    }


  }

  function jl(obj1,obj2){

    var a = obj1.offsetLeft - obj2.offsetLeft;
    var b = obj1.offsetTop - obj2.offsetTop;

    return Math.sqrt(a*a + b*b);

  }


  function pz(obj1,obj2){
    var L1 = obj1.offsetLeft;
    var R1 = obj1.offsetLeft + obj1.offsetWidth;
    var T1 = obj1.offsetTop;
    var B1 = obj1.offsetTop + obj1.offsetHeight;

    var L2 = obj2.offsetLeft;
    var R2 = obj2.offsetLeft + obj2.offsetWidth;
    var T2 = obj2.offsetTop;
    var B2 = obj2.offsetTop + obj2.offsetHeight;

    if( R1<L2 || L1>R2 || B1<T2 || T1>B2 ){
      return false;
    }
    else{
      return true;
    }

  }

};
</script>
</head>

<body>
<ul id="ul1">
  <li><img src="photo/1.jpg" /></li>
    <li><img src="photo/2.jpg" /></li>
    <li><img src="photo/3.jpg" /></li>
    <li><img src="photo/4.jpg" /></li>
    <li><img src="photo/5.jpg" /></li>
    <li><img src="photo/1.jpg" /></li>
    <li><img src="photo/2.jpg" /></li>
    <li><img src="photo/3.jpg" /></li>
    <li><img src="photo/4.jpg" /></li>
</ul>
</body>
```

```html
//照片墙 four
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<style>
*{ margin:0; padding:0;}
#ul1{ width:660px; position:relative; margin:10px auto;}
li{ width:200px; height:150px; margin:10px; float:left; list-style:none;}
</style>
<script src="move.js"></script>
<script>
window.onload = function(){
  var aLi = document.getElementsByTagName('li');
  var izIndex = 2;
  var arr = [];

  for(var i=0;i<aLi.length;i++){
    arr.push( [ aLi[i].offsetLeft , aLi[i].offsetTop ] );
  }

  for(var i=0;i<aLi.length;i++){
    aLi[i].style.position = 'absolute';
    aLi[i].style.left = arr[i][0] + 'px';
    aLi[i].style.top = arr[i][1] + 'px';
    aLi[i].style.margin = 0;
  }

  for(var i=0;i<aLi.length;i++){
    aLi[i].index = i;
    drag(aLi[i]);
  }

  function drag(obj){
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function(ev){

      obj.style.zIndex = izIndex++;

      var ev = ev || window.event;
      disX = ev.clientX - obj.offsetLeft;
      disY = ev.clientY - obj.offsetTop;

      document.onmousemove = function(ev){
        var ev = ev || window.event;
        obj.style.left = ev.clientX - disX + 'px';
        obj.style.top = ev.clientY - disY + 'px';

        for(var i=0;i<aLi.length;i++){
          aLi[i].style.border = '';
        }

        var nL = nearLi(obj);

        if(nL){
          nL.style.border = '2px red solid';
        }

      };

      document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;

        var nL = nearLi(obj);
        var tmp = 0;

        if(nL){
          startMove( nL , { left : arr[obj.index][0] , top : arr[obj.index][1] } );
          startMove( obj , { left : arr[nL.index][0] , top : arr[nL.index][1] } );
          nL.style.border = '';

          tmp = obj.index;
          obj.index = nL.index;
          nL.index = tmp;
        }
        else{
          startMove( obj , { left : arr[obj.index][0] , top : arr[obj.index][1] } );
        }

      };

      return false;

    };
  }

  function nearLi(obj){

    var value = 9999;
    var index = -1;

    for(var i=0;i<aLi.length;i++){
      if( pz(obj,aLi[i]) && obj!=aLi[i] ){

        var c = jl(obj,aLi[i]);

        if( c < value ){
          value = c;
          index = i;
        }

      }
    }

    if(index != -1){
      return aLi[index];
    }
    else{
      return false;
    }


  }

  function jl(obj1,obj2){

    var a = obj1.offsetLeft - obj2.offsetLeft;
    var b = obj1.offsetTop - obj2.offsetTop;

    return Math.sqrt(a*a + b*b);

  }


  function pz(obj1,obj2){
    var L1 = obj1.offsetLeft;
    var R1 = obj1.offsetLeft + obj1.offsetWidth;
    var T1 = obj1.offsetTop;
    var B1 = obj1.offsetTop + obj1.offsetHeight;

    var L2 = obj2.offsetLeft;
    var R2 = obj2.offsetLeft + obj2.offsetWidth;
    var T2 = obj2.offsetTop;
    var B2 = obj2.offsetTop + obj2.offsetHeight;

    if( R1<L2 || L1>R2 || B1<T2 || T1>B2 ){
      return false;
    }
    else{
      return true;
    }

  }

};
</script>
</head>

<body>
<ul id="ul1">
  <li><img src="photo/1.jpg" /></li>
    <li><img src="photo/2.jpg" /></li>
    <li><img src="photo/3.jpg" /></li>
    <li><img src="photo/4.jpg" /></li>
    <li><img src="photo/5.jpg" /></li>
    <li><img src="photo/1.jpg" /></li>
    <li><img src="photo/2.jpg" /></li>
    <li><img src="photo/3.jpg" /></li>
    <li><img src="photo/4.jpg" /></li>
</ul>
</body>
```
```html
//照片墙 five
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<style>
*{ margin:0; padding:0;}
#ul1{ width:660px; position:relative; margin:10px auto;}
li{ width:200px; height:150px; margin:10px; float:left; list-style:none;}
</style>
<script src="move.js"></script>
<script>
window.onload = function(){
  var aLi = document.getElementsByTagName('li');
  var izIndex = 2;
  var arr = [];
  var oInput = document.getElementById('input1');

  for(var i=0;i<aLi.length;i++){
    arr.push( [ aLi[i].offsetLeft , aLi[i].offsetTop ] );
  }

  for(var i=0;i<aLi.length;i++){
    aLi[i].style.position = 'absolute';
    aLi[i].style.left = arr[i][0] + 'px';
    aLi[i].style.top = arr[i][1] + 'px';
    aLi[i].style.margin = 0;
  }

  for(var i=0;i<aLi.length;i++){
    aLi[i].index = i;
    drag(aLi[i]);
  }

  oInput.onclick = function(){

    var randomArr = [0,1,2,3,4,5,6,7,8];

    randomArr.sort(function(n1,n2){
      return Math.random() - 0.5;
    });

    for(var i=0;i<aLi.length;i++){
      startMove( aLi[i] , { left : arr[randomArr[i]][0] , top : arr[randomArr[i]][1] } );

      aLi[i].index = randomArr[i];

    }

  };

  function drag(obj){
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function(ev){

      obj.style.zIndex = izIndex++;

      var ev = ev || window.event;
      disX = ev.clientX - obj.offsetLeft;
      disY = ev.clientY - obj.offsetTop;

      document.onmousemove = function(ev){
        var ev = ev || window.event;
        obj.style.left = ev.clientX - disX + 'px';
        obj.style.top = ev.clientY - disY + 'px';

        for(var i=0;i<aLi.length;i++){
          aLi[i].style.border = '';
        }

        var nL = nearLi(obj);

        if(nL){
          nL.style.border = '2px red solid';
        }

      };

      document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;

        var nL = nearLi(obj);
        var tmp = 0;

        if(nL){
          startMove( nL , { left : arr[obj.index][0] , top : arr[obj.index][1] } );
          startMove( obj , { left : arr[nL.index][0] , top : arr[nL.index][1] } );
          nL.style.border = '';

          tmp = obj.index;
          obj.index = nL.index;
          nL.index = tmp;
        }
        else{
          startMove( obj , { left : arr[obj.index][0] , top : arr[obj.index][1] } );
        }

      };

      return false;

    };
  }

  function nearLi(obj){

    var value = 9999;
    var index = -1;

    for(var i=0;i<aLi.length;i++){
      if( pz(obj,aLi[i]) && obj!=aLi[i] ){

        var c = jl(obj,aLi[i]);

        if( c < value ){
          value = c;
          index = i;
        }

      }
    }

    if(index != -1){
      return aLi[index];
    }
    else{
      return false;
    }


  }

  function jl(obj1,obj2){

    var a = obj1.offsetLeft - obj2.offsetLeft;
    var b = obj1.offsetTop - obj2.offsetTop;

    return Math.sqrt(a*a + b*b);

  }


  function pz(obj1,obj2){
    var L1 = obj1.offsetLeft;
    var R1 = obj1.offsetLeft + obj1.offsetWidth;
    var T1 = obj1.offsetTop;
    var B1 = obj1.offsetTop + obj1.offsetHeight;

    var L2 = obj2.offsetLeft;
    var R2 = obj2.offsetLeft + obj2.offsetWidth;
    var T2 = obj2.offsetTop;
    var B2 = obj2.offsetTop + obj2.offsetHeight;

    if( R1<L2 || L1>R2 || B1<T2 || T1>B2 ){
      return false;
    }
    else{
      return true;
    }

  }

};
</script>
</head>

<body>
<input type="button" value="随机" id="input1">
<ul id="ul1">
  <li><img src="photo/1.jpg" /></li>
    <li><img src="photo/2.jpg" /></li>
    <li><img src="photo/3.jpg" /></li>
    <li><img src="photo/4.jpg" /></li>
    <li><img src="photo/5.jpg" /></li>
    <li><img src="photo/1.jpg" /></li>
    <li><img src="photo/2.jpg" /></li>
    <li><img src="photo/3.jpg" /></li>
    <li><img src="photo/4.jpg" /></li>
</ul>
</body>
```

```html
//拖拽
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<style>
*{ margin:0; padding:0;}
#main{ width:900px; height:auto; margin:10px auto;}
#mainLeft{ width:20%; min-height:30px; _height:30px; float:left; margin-right:5px;}
#mainCenter{ width:48%; min-height:30px; _height:30px; float:left; margin-right:5px;}
#mainRight{ width:30%; min-height:30px; _height:30px; float:left;}
.box{ width:100%; height:auto; background:blue; color:#FFFFFF; margin-bottom:10px; border:1px #000000 solid;}
.boxTit{ width:100%; height:30px; background:red; cursor:move; line-height:30px;}
.tmp{ width:100%; height:30px; margin-bottom:10px; border:1px #666666 dashed;}

#main:after{content:'\20';display:block;height:0;clear:both;}
#main{*zoom:1;}
</style>
<script>
window.onload = function(){
  var oDiv = document.getElementById('main');
  var aTit = getByClass(oDiv,'boxTit');
  for(var i=0;i<aTit.length;i++){
    aTit[i].index = i;
    darg(aTit[i]);
  }

  for(var j=0;j<oDiv.children.length;j++){
    if(getCookie(oDiv.children[j].id)!=''){
      var arrs = getCookie(oDiv.children[j].id).split(',');
      for(var i=0;i<arrs.length;i++){
        oDiv.children[j].appendChild(aTit[arrs[i]].parentNode);
      }
    }
  }

  function darg(obj){
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function(ev){
      var ev = ev || window.event;
      var oParent = obj.parentNode;
      var oGrandpa = obj.parentNode.parentNode;
      disX = ev.clientX - obj.offsetLeft;
      disY = ev.clientY - obj.offsetTop;

      oParent.style.left = obj.offsetLeft + 'px';
      oParent.style.top = obj.offsetTop + 'px';
      oParent.style.width = oGrandpa.offsetWidth + 'px';
      oParent.style.height = '30px';
      oParent.style.overflow = 'hidden';
      oParent.style.position = 'absolute';

      var oTmp = document.createElement('div');
      oTmp.className = 'tmp';
      oGrandpa.insertBefore(oTmp,oParent);

      document.body.appendChild(oParent);

      document.onmousemove = function(ev){
        var ev = ev || window.event;
        oParent.style.left = ev.clientX - disX + 'px';
        oParent.style.top = ev.clientY - disY + 'px';

        var mv1 = minValue(oDiv,oParent);
        var mv2 = minValue(mv1,oParent,'box');

        if(parseInt(jl(oParent,mv2)) < parseInt(jl(oParent,mv2,1))){
          mv1.insertBefore(oTmp,mv2);
        }
        else{
          if(mv2){
            appendAfter(mv1,oTmp,mv2);
          }
          else{
            mv1.appendChild(oTmp);
          }
        }
      };

      document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
        oDiv.style.height = '';
        startMove(oParent,{'top':oTmp.offsetTop,'left':oTmp.offsetLeft},function(){
          oTmp.parentNode.insertBefore(oParent,oTmp);
          oParent.style.position = '';
          oParent.style.height = 'auto';
          oParent.style.overflow = '';
          oParent.style.width = '100%';
          oTmp.parentNode.removeChild(oTmp);
          oDiv.style.height = oDiv.offsetHeight + 'px';

          for(var j=0;j<oDiv.children.length;j++){
            oDiv.children[j].arrs = [];
            for(var i=0;i<oDiv.children[j].children.length;i++){
              oDiv.children[j].arrs.push(first(oDiv.children[j].children[i]).index);
            }
            setCookie(oDiv.children[j].id,oDiv.children[j].arrs,30);
          }

        });
      };
    };
  }

  function minValue(oParent,obj,sClass){
    var iMin = 99999;
    var iMinIndex = -1;
    var children = sClass ? getByClass(oParent,sClass) : oParent.children;

    for(var i=0;i<children.length;i++){
      if(children[i].className!='tmp'){
        var a = jl(obj,children[i]);
        for(var j=0;j<a.length;j++){
          if(a[j]<iMin){
            iMin = a[j];
            iMinIndex = i;
          }
        }
      }
    }
    if(iMinIndex==-1){
      return false;
    }
    else{
      return children[iMinIndex];
    }
  }

  function jl(obj1,obj2,bBtn){
    var arrs = [];
    var a = obj1.offsetLeft - obj2.offsetLeft;
    var b = bBtn ? obj1.offsetTop - (obj2.offsetTop + obj2.offsetHeight) : obj1.offsetTop - obj2.offsetTop;
    var c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    arrs.push(c);
    return arrs;
  }
};
function getByClass(oParent,sClass){
  var aEle = oParent.getElementsByTagName('*');
  var arrs = [];
  for(var i=0;i<aEle.length;i++){
    if(aEle[i].className==sClass){
      arrs.push(aEle[i]);
    }
  }
  return arrs;
}

function appendAfter(oParent,obj1,obj2){
  if(obj2==last(oParent)){
    return oParent.appendChild(obj1);
  }
  else{
    return oParent.insertBefore(obj1,next(obj2));
  }
}

function next(obj){
  return obj.nextSibling.nodeType == 1 ? obj.nextSibling : next(obj.nextSibling);
}
function pre(obj){
  return obj.previousSibling.nodeType == 1 ? obj.previousSibling : pre(obj.previousSibling);
}
function first(obj){
  return obj.firstChild.nodeType == 1 ? obj.firstChild : next(obj.firstChild);
}

function last(obj){
  return obj.lastChild.nodeType == 1 ? obj.lastChild : pre(obj.lastChild);
}

function startMove(obj,json,fnEnd){
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
    doMove(obj,json,fnEnd);
  },30);
}
function doMove(obj,json,fnEnd){
  var iCur = 0;
  var attr = null;
  var bStop = true;
  for(attr in json){
    if(attr=='opacity'){
      if(parseInt(100*getStyle(obj,attr))==0){
        iCur = parseInt(100*getStyle(obj,attr));
      }
      else{
        iCur = parseInt(100*getStyle(obj,attr)) || 100;
      }
    }
    else{
      iCur = parseInt(getStyle(obj,attr)) || 0;
    }
    var iSpeed = (json[attr] - iCur)/3;
    iSpeed = (iSpeed>0) ? Math.ceil(iSpeed) : Math.floor(iSpeed);
    if(json[attr]!=iCur){
      bStop = false;
    }
    if(attr=='opacity'){
      obj.style.filter = 'alpha(opacity='+ (iCur + iSpeed) +')';
      obj.style.opacity = (iCur + iSpeed)/100;
    }
    else{
      obj.style[attr] = iCur + iSpeed + 'px';
    }
  }
  if(bStop){
    clearInterval(obj.timer);
    if(fnEnd){
      fnEnd.call(obj);
    }
  }
}

function getStyle(obj,attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  }
  else{
    return getComputedStyle(obj)[attr];
  }
}

function setCookie(name,value,time){
  var oDate = new Date();
  oDate.setDate(oDate.getDate()+time);
  var str = name + '=' + encodeURIComponent(value) + ';expires=' + oDate;
  document.cookie = str;
}
function getCookie(name){
  var arrs1 = document.cookie.split('; ');
  for(var i=0;i<arrs1.length;i++){
    var arrs2 = arrs1[i].split('=');
    if(arrs2[0]==name){
      return decodeURIComponent(arrs2[1]);
    }
  }
  return '';
}
function removeCookie(name){
  setCookie(name,1,-1);
}
</script>
</head>

<body>
<div id="main">
  <div id="mainLeft">
      <div class="box">
          <div class="boxTit">1</div>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
        </div>
        <div class="box">
          <div class="boxTit">2</div>
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
        </div>
        <div class="box">
          <div class="boxTit">3</div>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
        </div>
    </div>


    <div id="mainCenter">
      <div class="box">
          <div class="boxTit">4</div>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
        </div>
        <div class="box">
          <div class="boxTit">5</div>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
        </div>
        <div class="box">
          <div class="boxTit">6</div>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
        </div>
    </div>


    <div id="mainRight">
      <div class="box">
          <div class="boxTit">7</div>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
        </div>
        <div class="box">
          <div class="boxTit">8</div>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
        </div>
        <div class="box">
          <div class="boxTit">9</div>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
            <p>哈哈</p>
        </div>
    </div>
</div>
</body>
```

``` html
//轮播
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>仿FLASH的图片轮换效果 —— www.miaov.com 妙味课堂</title>
<style>
body { background: #666; } ul { padding: 0; margin: 0; } li { list-style: none; } img { border: 0; }

.play { width: 400px; height: 430px; margin: 50px auto 0; background: #999; font: 12px Arial; }

.big_pic { width: 400px; height: 320px; overflow: hidden; border-bottom: 1px solid #ccc; background: #222; position: relative; }
.big_pic li { width: 400px; height: 320px; overflow: hidden; position: absolute; top: 0; left: 0; z-index: 0; background: url(images/loading.gif) no-repeat center center; }

.mark_left { width: 200px; height: 320px; position: absolute; left: 0; top: 0; background: red; filter: alpha(opacity:0); opacity: 0; z-index:3000; }
.mark_right { width: 200px; height: 320px; position: absolute; left: 200px; top: 0; background: green; filter: alpha(opacity:0); opacity: 0; z-index:3000; }
.big_pic .prev { width: 60px; height: 60px; background: url(images/btn.gif) no-repeat; position: absolute; top: 130px; left: 10px; z-index: 3001; display: none; cursor: pointer; }
.big_pic .next { width: 60px; height: 60px; background: url(images/btn.gif) no-repeat 0 -60px; position: absolute; top: 130px; right: 10px; z-index: 3001; display: none;cursor: pointer; }

.big_pic .text { position: absolute; left: 10px; top: 302px; z-index: 3000; color: #ccc; }
.big_pic .length { position: absolute; right: 10px; bottom: 4px; z-index: 3000; color: #ccc; }
.big_pic .bg { width: 400px; height: 25px; background: #000; filter: alpha(opacity=60); opacity: 0.6; position: absolute; z-index: 2999; bottom: 0; left: 0; }
.small_pic { width: 380px; height: 94px; position: relative; top: 7px; left: 10px; overflow: hidden; }
.small_pic ul { height: 94px; position: absolute; top: 0; left: 0; }
.small_pic li { width: 120px; height: 94px; float: left; padding-right: 10px; background: url(images/loading.gif) no-repeat center center; cursor: pointer; filter: alpha(opacity=60); opacity: 0.6; }
.small_pic img { width: 120px; height: 94px; }
</style>
<script>
var g_aImgInfo=
[
  {info: "都市魅力", href: 'http://www.miaov.com/'},
  {info: "古香古色", href: 'http://www.miaov.com/'},
  {info: "沉浸舞步的舞者", href: 'http://www.miaov.com/'},
  {info: "名贵跑车", href: 'http://www.miaov.com/'},
  {info: "聆听天籁的精灵", href: 'http://www.miaov.com/'},
  {info: "绚彩光芒", href: 'http://www.miaov.com/'}
];

var oDiv=null;
var oUlContent=null;
var oUlBtn=null;

var aLiImg=null;
var aLiBtn=null;

var oBtnPrev=null;
var oBtnNext=null;

var oTxtInfo=null;
var oTxtLength=null;

var oMarkPrev=null;
var oMarkNext=null;

var g_aTimerImg=[];
var g_aTimerBtn=[];

var g_oTimerUl=null;

var g_oTimerAutoPlay=null;

var g_aLiBtnAlpha=[];

var g_iNowImg=0;

var g_iZIndexBase=2;

window.onload=function ()
{
  var i=0;

  //获取各类元素
  oDiv=document.getElementById('playimages');
  oUlContent=oDiv.getElementsByTagName('ul')[0];
  oUlBtn=oDiv.getElementsByTagName('ul')[1];

  oBtnPrev=oDiv.getElementsByTagName('div')[0];
  oBtnNext=oDiv.getElementsByTagName('div')[1];

  oTxtInfo=oDiv.getElementsByTagName('div')[2];
  oTxtLength=oDiv.getElementsByTagName('div')[3];

  oMarkPrev=oDiv.getElementsByTagName('a')[0];
  oMarkNext=oDiv.getElementsByTagName('a')[1];

  aLiImg=oUlContent.getElementsByTagName('li');
  aLiBtn=oUlBtn.getElementsByTagName('li');

  //为元素添加属性
  oTxtInfo.innerHTML=g_aImgInfo[0].info;
  oTxtLength.innerHTML='1/'+aLiImg.length;

  oMarkPrev.href=g_aImgInfo[0].href;
  oMarkNext.href=g_aImgInfo[0].href;

  oBtnPrev.miaovOpacity=0;
  oBtnNext.miaovOpacity=0;

  oBtnPrev.miaovTime=0;
  oBtnNext.miaovTime=0;

  oUlBtn.style.width=aLiBtn[0].offsetWidth*aLiBtn.length+'px';

  //为元素添加事件
  function showPrev()
  {
    showBtn(oBtnPrev);
    hideBtn(oBtnNext);

    stopAutoPlay();
  }

  function showNext()
  {
    hideBtn(oBtnPrev);
    showBtn(oBtnNext);

    stopAutoPlay();
  }

  function hideAll()
  {
    hideBtn(oBtnPrev);
    hideBtn(oBtnNext);

    startAutoPlay();
  }

  oMarkPrev.onmouseover =showPrev;
  oBtnPrev.onmouseover  =showPrev;
  oMarkNext.onmouseover =showNext;
  oBtnNext.onmouseover  =showNext;

  oBtnPrev.onmouseout   =hideAll;
  oBtnNext.onmouseout   =hideAll;
  oMarkPrev.onmouseout  =hideAll;
  oMarkNext.onmouseout  =hideAll;

  oBtnPrev.onmousedown  =gotoPrev;
  oBtnNext.onmousedown  =gotoNext;

  oUlBtn.onmouseover    =stopAutoPlay;
  oUlBtn.onmouseout   =startAutoPlay;

  for(i=0;i<aLiBtn.length;i++)
  {
    aLiBtn[i].miaovIndex=i;
    aLiBtn[i].onmouseover=function ()
    {
      if(g_iNowImg!=this.miaovIndex)
      {
        showLiBtn(this.miaovIndex);
      }
    };
    aLiBtn[i].onmouseout=function ()
    {
      if(g_iNowImg!=this.miaovIndex)
      {
        hideLiBtn(this.miaovIndex);
      }
    };
    aLiBtn[i].onmousedown=function ()
    {
      gotoImg(this.miaovIndex);
    };
    g_aTimerBtn[i]=null;
    g_aLiBtnAlpha[i]=60;
  }

  g_aLiBtnAlpha[0]=100;

  startAutoPlay();
};

function showBtn(oBtn)
{
  if(oBtn.miaovTimer)
  {
    clearInterval(oBtn.miaovTimer);
  }

  oBtn.miaovTimer=setInterval
  (
    function ()
    {
      if(oBtn.miaovOpacity<100)
      {
        oBtn.miaovOpacity+=10;

        oBtn.style.display='block';
        oBtn.style.filter="alpha(opacity:"+oBtn.miaovOpacity+")";
        oBtn.style.opacity=oBtn.miaovOpacity/100;
      }
      else
      {
        oBtn.style.filter="";
        oBtn.style.opacity="";

        clearInterval(oBtn.miaovTimer);
        oBtn.miaovTimer=0;
      }
    }, 30
  );
}

function hideBtn(oBtn)
{
  if(oBtn.miaovTimer)
  {
    clearInterval(oBtn.miaovTimer);
  }

  oBtn.miaovTimer=setInterval
  (
    function ()
    {
      if(oBtn.miaovOpacity>0)
      {
        oBtn.miaovOpacity-=10;

        oBtn.style.filter="alpha(opacity:"+oBtn.miaovOpacity+")";
        oBtn.style.opacity=oBtn.miaovOpacity/100;
      }
      else
      {
        oBtn.style.display='none';
        oBtn.style.filter="";
        oBtn.style.opacity="";

        clearInterval(oBtn.miaovTimer);
        oBtn.miaovTimer=0;
      }
    }, 30
  );
}

function gotoImg(index)
{
  if(index==g_iNowImg)
  {
    return;
  }

  aLiImg[index].style.height='0px';
  aLiImg[index].style.display='block';
  aLiImg[index].style.zIndex=g_iZIndexBase++;

  if(g_aTimerImg[index])
  {
    clearInterval(g_aTimerImg[index]);
  }
  g_aTimerImg[index]=setInterval("slideDown("+index+")", 30);

  for(i=0;i<aLiBtn.length;i++)
  {
    if(i==index)
    {
      showLiBtn(i);
    }
    else
    {
      hideLiBtn(i);
    }
  }

  moveUlBtn(index);

  oTxtInfo.innerHTML=g_aImgInfo[index].info;
  oTxtLength.innerHTML=(index+1)+'/'+aLiImg.length;

  oMarkPrev.href=g_aImgInfo[index].href;
  oMarkNext.href=g_aImgInfo[index].href;

  g_iNowImg=index;
}

function slideDown(index)
{
  var h=aLiImg[index].offsetHeight+10;

  if(h>=oUlContent.offsetHeight)
  {
    h=oUlContent.offsetHeight;

    clearInterval(g_aTimerImg[index]);
    g_aTimerImg[index]=null;
  }

  aLiImg[index].style.height=h+'px';
}

function gotoNext()
{
  gotoImg((g_iNowImg+1)%aLiImg.length);
}

function gotoPrev()
{
  gotoImg((g_iNowImg-1+aLiImg.length)%aLiImg.length);
}

function showLiBtn(index)
{
  if(g_aTimerBtn[index])
  {
    clearInterval(g_aTimerBtn[index]);
  }
  g_aTimerBtn[index]=setInterval("showLiBtnInner("+index+")", 30);
}

function showLiBtnInner(index)
{
  var alpha=g_aLiBtnAlpha[index]+10;

  if(alpha>=100)
  {
    aLiBtn[index].style.filter='';
    aLiBtn[index].style.opacity='1';

    clearInterval(g_aTimerBtn[index]);
    g_aTimerBtn[index]=null;
  }
  else
  {
    aLiBtn[index].style.filter='alpha(opacity:'+alpha+')';
    aLiBtn[index].style.opacity=alpha/100;
  }

  g_aLiBtnAlpha[index]=alpha;
}

function hideLiBtn(index)
{
  if(g_aTimerBtn[index])
  {
    clearInterval(g_aTimerBtn[index]);
  }
  g_aTimerBtn[index]=setInterval("hideLiBtnInner("+index+")", 30);
}

function hideLiBtnInner(index)
{
  var alpha=g_aLiBtnAlpha[index]-10;

  if(alpha<=60)
  {
    alpha=60;

    clearInterval(g_aTimerBtn[index]);
    g_aTimerBtn[index]=null;
  }
  aLiBtn[index].style.filter='alpha(opacity:'+alpha+')';
  aLiBtn[index].style.opacity=alpha/100;

  g_aLiBtnAlpha[index]=alpha;
}

function moveUlBtn(index)
{
  var iTarget=0;

  if(index==0)
  {
    index=1;
  }
  else if(index==aLiBtn.length-1)
  {
    index=aLiBtn.length-2;
  }

  iTarget=-(index-1)*aLiBtn[0].offsetWidth;

  if(g_oTimerUl)
  {
    clearInterval(g_oTimerUl);
  }

  g_oTimerUl=setInterval("moveUlBtnInner("+iTarget+")", 30);
}

function moveUlBtnInner(iTarget)
{
  var iSpeed=(iTarget-oUlBtn.offsetLeft)/7;

  if(iSpeed>0)
  {
    iSpeed=Math.ceil(iSpeed);
  }
  else
  {
    iSpeed=Math.floor(iSpeed);
  }

  if(oUlBtn.offsetLeft==iTarget)
  {
    clearInterval(g_oTimerUl);
    g_oTimerUl=null;
  }
  else
  {
    oUlBtn.style.left=oUlBtn.offsetLeft+iSpeed+'px';
  }
}

function startAutoPlay()
{
  if(g_oTimerAutoPlay)
  {
    clearInterval(g_oTimerAutoPlay);
  }

  g_oTimerAutoPlay=setInterval(gotoNext, 3000);
}

function stopAutoPlay()
{
  if(g_oTimerAutoPlay)
  {
    clearInterval(g_oTimerAutoPlay);
    g_oTimerAutoPlay=null;
  }
}
</script>
</head>

<body>
<div id="playimages" class="play">
    <ul class="big_pic">

    <div class="prev"></div>
    <div class="next"></div>

    <div class="text">加载图片说明……</div>
    <div class="length">计算图片数量……</div>

    <a class="mark_left" href="javascript:;"></a>
    <a class="mark_right" href="javascript:;"></a>
    <div class="bg"></div>

        <li style="z-index:1;"><img src="images/1.jpg" /></li>
        <li><img src="images/2.jpg" /></li>
        <li><img src="images/3.jpg" /></li>
        <li><img src="images/4.jpg" /></li>
        <li><img src="images/5.jpg" /></li>
        <li><img src="images/6.jpg" /></li>
    </ul>
    <div class="small_pic">
        <ul style="width:390px;">
            <li style="filter: 100; opacity: 1;"><img src="images/1.jpg" /></li>
            <li><img src="images/2.jpg" /></li>
            <li><img src="images/3.jpg" /></li>
            <li><img src="images/4.jpg" /></li>
            <li><img src="images/5.jpg" /></li>
            <li><img src="images/6.jpg" /></li>
        </ul>
    </div>
</div>

</body>
```

