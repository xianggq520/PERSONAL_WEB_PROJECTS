function setCookie(name, value, expires){
	var date = new Date();
	date.setDate(date.getDate() + expires);
	document.cookie = name + "=" + value + ";expires=" + date;
}

function getCookie(name){
	var arr = document.cookie.split("; ");
	var arr2;
	for(var i =0; i < arr.length; i++){
		arr2 = arr[i].split("=");
		if(arr2[0] == name){
			return arr2[1];
		}
	}
	return null;
}
function removeCookie(name){
	setCookie(name, null, -1);
}
