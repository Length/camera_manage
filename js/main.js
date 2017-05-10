//导航栏菜单按钮点击展现隐藏侧边栏

window.onload = function () {
	var hidebtn = document.getElementById('hiddenside');
	var hidediv = document.getElementById('left');

	hidebtn.onclick = function (){
		if (hidediv.style.display != "none"){
			hidediv.style.display = "none";
		}
		else {
			hidediv.style.display = "block";
		}
	}
}

//登录页面忘记密码提示
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


