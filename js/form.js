
//表单验证
function Check()  // 验证表单数据有效性
{
    if (document.send.username.value=="")
    {
        window.alert('请输入用户名!');
        return false;
    }
    if (document.send.username.value.length<3)
    {
        window.alert('用户名长度必须大于3!');
        return false;
    }
    if (document.send.password.value=="")
    {
        alert('请输入密码!');
        return false;
    }
    if (document.send.password.value.length<6)
    {
        alert('密码长度必须大于6!');
        return false;
    }
    if (document.send.password.value!= document.send.chkpwd.value)
    {
        alert('确认密码与密码不一致!');
        return false;
    }
    if (document.send.email.value=="")
    {
        alert('请输入Email!');
        return false;
    }
    if(document.send.email.value.indexOf("@")==-1)
    {
        alert('请输入有效的email地址!'); return false;
    }
       if (document.send.authcode.value =="")
    {
        alert('请输入验证码!');
        return false;
    }
    return true;
}


//头像上传
$("#uploadImage").on("change", function(){
    // Get a reference to the fileList
    var files = !!this.files ? this.files : [];
 
    // If no files were selected, or no FileReader support, return
    if (!files.length || !window.FileReader) 
        return;
 
    // Only proceed if the selected file is an image
    if (/^image/.test( files[0].type))
    {
        // Create a new instance of the FileReader
        var reader = new FileReader();
        // Read the local file as a DataURL
        reader.readAsDataURL(files[0]);
        // When loaded, set image data as background of div
        reader.onloadend = function(){
            $("#uploadPreview").css("background-image", "url("+this.result+")");
        }
    }
}
);

