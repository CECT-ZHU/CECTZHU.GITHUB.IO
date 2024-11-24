// 定义三个变量
	var pic = document.getElementById('pic');
	var btnPrev = document.getElementById('prev');
	var btnNext = document.getElementById('next');

// 定义三个轮番递增/减的数值
	var minPic = 1,maxPic = 12; curPic = minPic;
	
	btnNext.onclick = function(){
		if(curPic === maxPic){
			curPic = minPic;
		}
		curPic++;
		pic.setAttribute('src','img/K'+curPic+'.jpg')
	}
	
	btnPrev.onclick = function(){
		if(curPic === minPic){
			curPic = maxPic
		}
		curPic--;
		pic.setAttribute('src','img/K'+curPic+'.jpg')
	}		