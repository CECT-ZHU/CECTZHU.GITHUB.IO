
var bigPic=document.getElementById('bigPic');
var smallPics = document.getElementsByClassName("smallPic");

 for(var i = 0; i < smallPics.length; i++){
	 smallPics[i].onmouseover = function(){		
		 for(var j = 0;j<smallPics.length;j++){
			 smallPics[j].parentNode.parentNode.setAttribute('class','')
		 }
		 var picSrc = this.getAttribute('src');
		 bigPic.setAttribute('src',picSrc);
		 this.parentNode.parentNode.setAttribute('class','active')
		 
	 }
}



