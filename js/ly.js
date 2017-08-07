var roll = (function(){
	var max = 7,timer = null;
	now = 0;
	var main = document.getElementById('cut');
	var whole = document.getElementById('whole');
	var context1 = document.getElementById('context1');
	var div = document.getElementsByTagName('div');
	screenh =document.documentElement.clientHeight;
	var changee = function () {
		screenh =document.documentElement.clientHeight;
		var screenw =document.documentElement.clientWidth;
		whole.style.height = screenh*4 +'px';
			for(var i=0;i<div.length;i++){
			if(div[i].id == 'cut'){
				div[i].style.height = screenh + 'px';
			}
		}
		for(var i=0;i<div.length-1;i++){
			if(div[i].id == 'sblock'){
				div[i].style.height = screenh +'px';
				div[i].style.width = screenw +'px';
			}
		}
	};
	var scrollfunc = function(e){
		window.onmousewheel = document.onmousewheel = function(){return false;};
		if(e.wheelDelta){
			if(e.wheelDelta<0){
				if(now<max){
					now++;
					settimer(now*screenh);
				}
			}else {
				if(now > 0){
					now--;
					settimer(now*screenh);
				}
			}
		}
	};
	var settimer = function(num){
		clearInterval(timer);
		timer = setInterval(function(){
			var stop = gettop();
			var speed = (num-stop)/8;
			speed =speed > 0? Math.ceil(speed): Math.floor(speed);
			if(stop == num){
				clearInterval(timer);
				window.onmousewheel = document.onmousewheel = scrollfunc;
			}else{
				settop(speed+stop);
			}
		},30);
	};
	var gettop = function(){
		var scrotop = 0;
		if(document.documentElement.scrollTop){
			return document.documentElement.scrollTop;
		}else {
			return scrotop;
		}
	};
	var settop = function(num){
		if(document.documentElement.scrollTop ){
			document.documentElement.scrollTop = num;
		}else{
			window.scrollTo(0,num);
		}
	};
	changee();
	window.onload = function () {
	 	changee();
	};
	window.onresize = function () {
		changee();
	};
    document.addEventListener("mousewheel",scrollfunc,false);
    window.onbeforeunload = function(e){
    	window.scrollTo(0,0);
    };
})();
var time =(function(){
	var time1 = document.getElementById('time1');
	var p1 = document.getElementById('p1');
	var xtime = function(){
		var hour = new Date().getHours();
		var minute = new Date().getMinutes();
		var seconds = new Date().getSeconds();
		var handletime = function(num){
		if(num <10){
			return '0' + num;
		}else {
			return '' +num;
		}
	};
		p1.innerHTML = handletime(hour)+':'+handletime(minute) + ':'+handletime(seconds);
	};
	setInterval(xtime,500);
})();
// var Follow = (function () {
//  var $ = function (i) {return document.getElementById(i)},
//  addEvent = function (o, e, f) {
//   o.addEventListener ? o.addEventListener(e, f, false) : o.attachEvent('on'+e, function(){f.call(o)})},
//  OBJ = [], sp, rs, N = 0, m;
//  var init = function (id, config) {
//   this.config = config || {};
//   this.obj = $(id);
//   sp = this.config.speed || 4;
//   rs = this.config.animR || 1;
//   m = {x: $(id).offsetWidth * .5, y: $(id).offsetHeight * .5};
//   this.setXY();
//   this.start();
//  };
//  init.prototype = {
//   setXY : function () {
//    var _this = this;
//    addEvent(this.obj, 'mousemove', function (e) {
//     e = e || window.event;
//     m.x = e.clientX;
//     m.y = e.clientY;
//    });
//   },
//   start : function () {
//    var k = 180 / Math.PI, OO, o, _this = this, fn = this.config.fn;
//    OBJ[N++] = OO = new CObj(null, 0, 0);
//    for(var i=0;i<360;i+=20){
//     var O = OO;
//     for(var j=10; j<35; j+=1){
//      var x = fn(i, j).x,
//      y = fn(i, j).y;
//      OBJ[N++] = o = new CObj(O , x, y);
//      O = o;
//     }
//    }
//    setInterval(function() {
//     for (var i = 0; i < N; i++) OBJ[i].run();
//    }, 16);
//   }
//  };
//  var CObj = function (p, cx, cy) {
//   var obj = document.createElement("span");
//   this.css = obj.style;
//   this.css.position = "absolute";
//   this.css.left = "-1000px";
//   this.css.zIndex = 1000 - N;
//   document.getElementById("whole").appendChild(obj);
//   this.ddx = 0;
//   this.ddy = 0;
//   this.PX = 0;
//   this.PY = 0;
//   this.x = 0;
//   this.y = 0;
//   this.x0 = 0;
//   this.y0 = 0;
//   this.cx = cx;
//   this.cy = cy;
//   this.parent = p;
//  };
//  CObj.prototype.run = function () {
//   if (!this.parent) {
//    this.x0 = m.x;
//    this.y0 = m.y;
//   } else {
//    this.x0 = this.parent.x;
//    this.y0 = this.parent.y;
//   }
//   this.x = this.PX += (this.ddx += ((this.x0 - this.PX - this.ddx) + this.cx) / rs) / sp;
//   this.y = this.PY += (this.ddy += ((this.y0 - this.PY - this.ddy) + this.cy) / rs) / sp;
//   this.css.left = Math.round(this.x) + 'px';
//   this.css.top =  Math.round(this.y) + 'px';
//  };
//  return init;
// })();
// new Follow('whole', {
//  speed: 4,
//  animR : 2,
//  fn : function (i, j) {
//   return {
//    x : j/4*Math.cos(i),
//    y : j/4*Math.sin(i)
//   };
//  }
// });
// var weather = (function(){
// 	var click1 = function(id){
// 		var script = document.createElement('script');
// 		script.type = 'text/javascript';
// 		script.src = 'http://v.juhe.cn/weather/index?callback=today&key=923a9bdc68a9fc006cbb25be02cd42b4';
// 		script.src = addUrl(script.src,'cityname',id);
// 		document.body.insertBefore(script,document.body.firstChild);
// 		function addUrl(url,name,value){
// 			url += url.indexOf('?')==-1?'?':'&';
// 			url += name + '=' + encodeURIComponent(value);
// 			return url;
// 		}
// 	};
// 	var i1 = document.getElementById('i1');
// 	var i2 = document.getElementById('i2');
// 	var l1 = document.getElementById('l1');
// 	window.onload = function(){
// 		click1(i1.value);
// 	};
// 	i2.onclick = function(){
// 		click1(i1.value);
// 		l1.style.opacity = 0.6;
// 	};
// })();
// function today(str) {
//   console.log(str);
//   if(str.reason == 'successed!' && str.resultcode == '200'){
//   var ul1 = document.getElementById('ul1');
//   var li = ul1.getElementsByTagName('li');
//   li[0].innerHTML =str.result.today.city;
//   li[1].innerHTML = str.result.today.date_y;
//   li[2].innerHTML = str.result.today.week;
//   li[3].innerHTML = '温度' +': '+ str.result.today.temperature;
//   li[4].innerHTML = '天气' +': '+ str.result.today.weather;
//   li[5].innerHTML = '风向' +': '+ str.result.today.wind;
//   li[6].innerHTML = '紫外线强度' +': '+ str.result.today.uv_index;
//   li[7].innerHTML = '穿衣建议' +': '+ str.result.today.dressing_advice;
//   }else {
//   	alert("抱歉，查询不到该城市的信息！");
//   }
// }
// var ball = {
// 	main : document.getElementById('whole'),
// 	// colors : ['#A0FB98','#E0F085','#7F9EF5','#F4B161','#F689A8','#68F3F2','#DC63F5'],
// 	text : ['女女','野子','你还碰','蓝色碰','黄色碰','红色碰','反了你了'],
// 	maxW : 0,//空间大小
// 	maxH : 0,
// 	json : [],
// 	circles : document.getElementsByClassName('qiu'),
// 	//创建div（小球）
// 	cdiv : function() {
// 		var colors = [];
// 		var st = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
// 		for(var i =0;i<10;i++){
// 			for (var j = 0; j < 6; j++) {
// 				colors[j]=st[Math.floor(Math.random()*16)];
// 			}
// 			var div = document.createElement('div');
// 			div.className = 'qiu';
// 			var index = ball.randomnum();
// 			div.style.backgroundColor = '#' +colors.join('');
// 			div.innerHTML = ball.text[index];
// 			ball.main.appendChild(div);
// 		}
// 	},
// 	//产生随机文字
// 	stylezi : function(num){
// 		var index = ball.randomnum();
// 		ball.circles[num].innerHTML = ball.text[index];
// 	},
// 	//产生随机数
// 	randomnum : function(){
// 		var index = Math.floor(Math.random()*7);
// 		return index;
// 	},
// 	//获得小球的生存空间
// 	mainroom : function(){
// 		ball.maxW = window.innerWidth - ball.circles[0].clientWidth;
// 		ball.maxH = window.innerHeight - ball.circles[0].clientHeight;
// 		ball.main.style.width = window.innerWidth + 'px';
// 		ball.main.style.height = window.innerHeight + 'px';
// 	},
// 	//初始化小球
// 	init : function(){
// 		for (var i = 0; i < ball.circles.length; i++) {
// 			var arr = [];
// 			arr.x = Math.floor(Math.random()*(ball.maxW+1));
// 			arr.y = Math.floor(Math.random()*(ball.maxH+1));
// 			arr.cx = arr.x +ball.circles[0].offsetWidth/2;
// 			arr.cy = arr.y +ball.circles[0].offsetHeight/2;
// 			arr.movex = Math.floor(Math.random()*2);
// 			arr.movey = Math.floor(Math.random()*2);
// 			arr.speed = 2+Math.floor(Math.random()*5);
// 			arr.timer = null;
// 			arr.index =i;
// 			ball.json.push(arr);
// 			ball.circles[i].style.left = arr.x + 'px';
// 			ball.circles[i].style.top = arr.y + 'px';
// 		}
// 	},
// 	//碰撞事件
// 	collision : function(num){
// 		var x1 = ball.json[num].cx;
// 		var y1 = ball.json[num].cy;
// 		for (var i = 0; i < ball.circles.length; i++) {
// 			if(i != num ){
// 				var x2 = ball.json[i].cx;
// 				var y2 = ball.json[i].cy;
// 				var len = (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);
// 				if(len <= ball.circles[0].clientWidth*ball.circles[0].clientWidth){
//                     if(x1 >x2){
//                         if(y1 > y2){
//                             ball.json[num].movex=1;
//                             ball.json[num].movey=1;
//                         }else if(y1 < y2){
//                             ball.json[num].movex=1;
//                             ball.json[num].movey=0;
//                         }else{
//                             ball.json[num].movex=1;
//                         }
//                     }else if(x1 < x2){
//                         if(y1 > y2){
//                             ball.json[num].movex=0;
//                             ball.json[num].movey=0;
//                         }else if(y1 < y2){
//                             ball.json[num].movex=0;
//                             ball.json[num].movey=1;
//                         }else{
//                                 ball.json[num].movex=0;
//                         }
//                     }else{
//                         if(y1 > y2){
//                             ball.json[num].movey=1;
//                         }else if(y1 < y2){
//                             ball.json[num].movey=0;
// 			   			}
// 					}
// 					ball.stylezi(num)
// 				}
// 			}
// 		}
// 	},
// 	//小球移动
// 	move : function (circle) {
// 		circle.timer = setInterval(function() {
// 			if(circle.movex == 1){
// 				circle.x +=circle.speed;
// 				if(circle.x +circle.speed >= ball.maxW){
// 					circle.x = ball.maxW;
// 					circle.movex = 0;
// 				}
// 			}else {
// 				circle.x -=circle.speed;
// 				if(circle.x -circle.speed <= 0){
// 					circle.x = 0;
// 					circle.movex = 1;
// 				}
// 			}
// 			if(circle.movey == 1){
// 				circle.y +=circle.speed;
// 				if(circle.y + circle.speed >= ball.maxH){
// 					circle.y = ball.maxH;
// 					circle.movey =0;
// 				}
// 			}else {
// 				circle.y -= circle.speed;
// 				if(circle.y -circle.speed <=0){
// 					circle.y =0;
// 					circle.movey =1;
// 				}
// 			}
// 			circle.cx =circle.x + ball.circles[0].offsetWidth/2;
// 			circle.cy = circle.y + ball.circles[0].offsetHeight/2;
// 			ball.circles[circle.index].style.left = circle.x + 'px';
// 			ball.circles[circle.index].style.top = circle.y + 'px';
// 			ball.collision(circle.index);
// 		},15);
// 	},
// 	//让小球全部动起来
// 	go : function(){
// 		for (var i = 0; i < ball.circles.length; i++) {
// 			ball.move(ball.json[i]);
// 		}
// 	}
// };
// ball.cdiv();
// ball.mainroom();
// ball.init();
// ball.go();
// var dong3 = (function(){
// 	var pchange = function(){
// 		var i1 =3+Math.floor(Math.random()*3);
// 		for(var i=3;i<6;i++){
// 			if(i == i1){
// 				div[i].style.display = 'block';
// 			}else {
// 				div[i].style.display = 'none';
// 			}
// 		}
// 		var i2 =7+Math.floor(Math.random()*3);
// 		for(var i=7;i<10;i++){
// 			if(i == i2){
// 				div[i].style.display = 'block';
// 			}else {
// 				div[i].style.display = 'none';
// 			}
// 		}
// 		var i3 =11+Math.floor(Math.random()*3);
// 		for(var i=11;i<14;i++){
// 			if(i == i3){
// 				div[i].style.display = 'block';
// 			}else {
// 				div[i].style.display = 'none';
// 			}
// 		}
// 		var i4 =15+Math.floor(Math.random()*3);
// 		for(var i=15;i<18;i++){
// 			if(i == i4){
// 				div[i].style.display = 'block';
// 			}else {
// 				div[i].style.display = 'none';
// 			}
// 		}
// 		var i5 =19+Math.floor(Math.random()*3);
// 		for(var i=19;i<22;i++){
// 			if(i == i5){
// 				div[i].style.display = 'block';
// 			}else {
// 				div[i].style.display = 'none';
// 			}
// 		}
// 		var i6 =23+Math.floor(Math.random()*3);
// 		for(var i=23;i<26;i++){
// 			if(i == i6){
// 				div[i].style.display = 'block';
// 			}else {
// 				div[i].style.display = 'none';
// 			}
// 		}
// 		var i7 =27+Math.floor(Math.random()*3);
// 		for(var i=27;i<30;i++){
// 			if(i == i7){
// 				div[i].style.display = 'block';
// 			}else {
// 				div[i].style.display = 'none';
// 			}
// 		}
// 	};
// 	window.onload = function(){
// 		setInterval(pchange,4000);
// 	};
// })();
var cookbook = (function(){
	var menu = function(str){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'http://apis.juhe.cn/cook/query.php?key=71c00f768afbc2a22494f075f1113328&callback=step';
		script.src = addUrl(script.src,'menu',str);
		function addUrl(url,name,value){
			url += url.indexOf('?')==-1?'?':'&';
			url += name + '=' +value;
			return url;
		}
		document.body.insertBefore(script,document.body.firstChild);
	};
	var i3 = document.getElementById('i3');
	var i4 = document.getElementById('i4');
	console.log(i3)
	window.onload = function(){
		menu(i3.value);
	};
	i4.onclick = function(){
		menu(i3.value);
	};
})();
function step(str){
	var arr = [];
	var strr = str.result.data[0].steps;
	for(var i=0;i<strr.length;i++){
		arr.push(strr[i].step);
	}
	var food3 = document.getElementById('food3');
	var food4 = document.getElementById('food4');
	food4.innerHTML = str.result.data[0].tags;
	food3.innerHTML = arr;
	console.log(str);
}