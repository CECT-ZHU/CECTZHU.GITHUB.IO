let imgs = document.querySelector("ul").querySelectorAll("img")
for (let i = 0; i < imgs.length; i++) {
	imgs[i].onclick = function() {
		document.body.style.backgroundImage = "url(" + this.src + ")" // 注意图片路径的表达方式 this.src
	}
}