function myId(id){
	return document.getElementById(id);
}

function getFirstElementChild(Ele){//解决firstElementChild的兼容性
	var node,nodes = Ele.childNodes,i=0;
	while(node = nodes[i++]){
		if(node.nodeType === 1){return node;}
	}
	return null;
}

function getNextElementSibling(element){//解决nextElementSibling的兼容性
	var el = element;
	while(el = el.nextSibling){
		if(el.nodeType === 1){
			return el;
		}
	}
	return null;
}

function getPreviousElementSibling(element){//解决previousElementSibling的兼容性
	var el = element;
	while(el = el.previousSibling){
		if(el.nodeType === 1){
			return el;
		}
	}
	return null;
}

function loadStyle(css){//动态的嵌入伪元素
	var style = document.createElement('style');
	style.type = 'text/css';
	try{
		style.appendChild(document.createTextNode(css));
	}catch(ex){
		style.styleSheet.cssText = css;
	}
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(style);
}

function extend(target, source){
	for(var key in source){
		target[key] = source[key];
	}
}

/*
一下为2019.8.26测试
 */
// function fn(){
// 	var a = 1;
// 	return function(){
// 		a++;
// 		console.log(a);
// 	};
// }

// function sb(){
// 	var a = {};
// 	return function(){
// 		return a;
// 	};
// }

// var o1 = sb();
// var o2 = sb();
// console.log(o1 == o2);

// var p1 = sb(); //创建一个新的对象,放在p1可以访问的位置
// var p2 = sb();
// console.log(p1 == p2);

// var test1 = p1(); //a还是那个a
// var test2 = p1(); //a还是那个a  因为test1和test2的词法作用域和p1一样
// console.log(test1 == test2);

// var p3 = sb();
// var test3 = p3();
// console.log(test3 == test1); //还是词法作用域不同,因为p3和p1的词法作用域不同
// //不同词法作用域里面的变量 不同
// var ktv = function KTV(){
// 	var leastPrice = 1000;
// 	var total = 0;
// 	return {
// 		buy:function (price){
// 			total += price;
// 		},
// 		pay:function (){
// 			if(total < leastPrice){
// 				console.log("不满足最低金额");
// 			}else{
// 				console.log("欢迎下次光临");
// 			}
// 		},
// 		editLeastPrice:function(id,price){
// 			if(id === 888){
// 				leastPrice = price;
// 				console.log("修改成功");
// 			}else{
// 				console.log("没有权限");
// 			}
// 		}
// 	};
// }();
// ktv.buy(400);
// ktv.buy(400);
// ktv.editLeastPrice(888,500);
// ktv.pay();
function fn(){
	var a = 1;
	return function (){
		a++;
		console.log(a);
	};
}

var p1 = fn();
var p2 = fn();
p1();
p1();
p2();
console.log(p1() === p2());
