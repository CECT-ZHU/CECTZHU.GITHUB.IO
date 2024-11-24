var arr = [1,2,3,4,5];
arr[5] ="hello"
arr[6] =7
//document.write(arr[arr.length-1]);

for(var i=0;i < arr.length;i++){
	document.write(arr[i],"<br/>")
}

//arr.forEach(function(value){
//	document.write(value,"<br/>")
//})

var str = arr.join("-");
document.write(str,"<br/>")
arr.push("world")
document.write(arr,"<br/>")
arr.unshift("first")
document.write(arr,"<br/>")
arr.splice(1,1,10)
document.write(arr,"<br/>","<br/>")

var arr1 = [1,2,3],arr2 = [3,4,5,6,7],arr3 = ['a','b']
var narr = arr1.concat(arr2,arr3)
document.write(narr,"<br/>")
document.write(narr.slice(1,3),"<br/>")

var x;
var d = new Date().getDay();
switch(d){
	case 0: x = '今天是星期日';break;
	case 1: x = '今天是星期一';break;
	case 2: x = '今天是星期二';break;
	case 3: x = '今天是星期三';break;
	case 4: x = '今天是星期四';break;
	case 5: x = '今天是星期五';break;
	case 6: x = '今天是星期六';break;
}
alert(x); 