var lis = document.querySelector(".contain").querySelectorAll("li")
var flexes = document.querySelectorAll(".flex")
for(var i = 0;i<lis.length;i++){
	lis[i].setAttribute("index", i);		
	lis[i].onclick = function(){	
		for(let i =0; i<lis.length;i++){
			lis[i].style.color = "black";
			this.style.color = "white";
		}
		let index = this.getAttribute("index");
		for(let i =0; i<flexes.length;i++){
			flexes[i].style.display = "none";
		}		
		flexes[index].style.display = "block";		
	}
}