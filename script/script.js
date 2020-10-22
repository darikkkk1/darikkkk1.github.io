var input,search,pr,result,result_arr, locale_HTML, result_store;

function func() {
 	locale_HTML = document.body.innerHTML;   
}
setTimeout(func, 1000);  //Ждём загрузки

function FindOnPage(name, status) {

	input = document.getElementById(name).value; 
	
	if(input.length<2&&status==true) //Меньше нет смысла
	{
		alert('Введите более 2 символов...');
		function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
	}
	
	if(input.length>=2) //Функция поиска
	{
		function FindOnPageGo() {

			search = '/'+input+'/g';  
			pr = document.body.innerHTML; 
			result = pr.match(/>(.*?)</g);  //Убираем теги
			result_arr = [];   

			var warning = true; 
			for(var i=0;i<result.length;i++) {
				if(result[i].match(eval(search))!=null) { //Если поиск непустой, то предупреждение снимается
					warning = false;
				}
			}
			if(warning == true) {
				alert('Нет совпадений');
			}

			for(var i=0; i<result.length;i++) {
				result_arr[i] = result[i].replace(eval(search), '<span style="background-color:#B0E0E6;">'+input+'</span>'); //Результат выделяем
			}
			for(var i=0; i<result.length;i++) {
				pr=pr.replace(result[i],result_arr[i])  
			}
			document.body.innerHTML = pr; 
		}
	}
	function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
	if(status) { FindOnPageBack(); FindOnPageGo(); } //Стираем прошлое выделение и результат
	if(!status) { FindOnPageBack(); } 
}
