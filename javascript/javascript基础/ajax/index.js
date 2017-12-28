function doAjax(option, sucess_callback, error_callback){
	if(window.XMLHttpRequest){
		var ajax = new XMLHttpRequest();
	}else{
		var ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//1.
	ajax.open(option.method, option.url, true);
	//2.
	ajax.send();   
	//3
	ajax.onreadystatechange = function(){
		/**
		 * readyState = 0  还没有调用open()方法
		 * readyState = 1 已调用send()方法，正在发送请求
		 * readyState = 2 send()方法完成，已收到服务器响应内容
		 * readyState = 3  解析响应内容中
		 * readyState = 4  解析完成，能直接访问响应数据
		 * */
		if(ajax.readyState === 4){
			if(ajax.status === 200){
				sucess_callback(ajax.responseText);
			} else {
				if(error_callback){
					error_callback(ajax.status);
				}
			}
		}
	}
}
