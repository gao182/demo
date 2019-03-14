//if-else
var a = 10;
if(a > 0) {
	console.log(a);
}else {
	console.log("error");
}

//switch-case 
switch(true) {
	case a<0 :
	console.log("a<0");
	break

	case 0<a<10 :
	console.log("0<a<10");
	break

	case 10<a<20 :
	console.log("10<a<20");
	break

	default:
	console.log("a>20");
}

//while 
while(a>0) {
	console.log(a);
	a--;
}

//do-while 
do {
	console.log(a);
	a--;
}while (a>0)

//for 遍历数组
var arry = [1,2,3,4,5,6];
for(var i=0 ; i < arry.length ; i++) {
	console.log("第"+(i+1)+"个数是："+arry[i]);
}

//for-in 遍历对象的用法
for(var i in arry) {
	console.log(arry[i]);
}


//break 和 continue 的用法
for(var i=1 ; i < 10 ; i++) {
	if(i%2 === 0) {
		break
	}
	console.log(i);
}

for(var i=1 ; i < 10 ; i++) {
	if(i%2 === 0) {
		continue
	}
	console.log(i);
}