//新增数据
function addRow(){
	var table = document.getElementById("table");
	//获取插入的位置
	var length = table.rows.length;	
	//获取行节点
	var newRow = table.insertRow(length);	
	// 插入列节点对象
	var nameCol = newRow.insertCell(0);
	var phoneCol = newRow.insertCell(1);
	var birthCol = newRow.insertCell(2);
	var operateCol = newRow.insertCell(3);
	//添加文本信息
	nameCol.innerHTML = "未命名";
	phoneCol.innerHTML = "无联系方式";
	birthCol.innerHTML = "未知";
	operateCol.innerHTML = "<button onclick='editRow(this)'>编辑</button><button onclick='deleteRow(this)'>删除</button>";
}
//删除数据
function deleteRow(button){	
	var row = button.parentNode.parentNode;
	//从父节点删除子节点行
	row.parentNode.removeChild(row);
}
//编辑数据
function editRow(button){
	var row = button.parentNode.parentNode;
	var name = row.cells[0];
	var phone = row.cells[1];
	var birth = row.cells[2];
	
	
	var inputName = prompt("请输入名字：");
	var inputPhone = prompt("请输入手机号：");
	var inputBirth = prompt("请输入生日：");
	name.innerHTML = inputName;
	phone.innerHTML = inputPhone;
	birth.innerHTML = inputBirth;
}