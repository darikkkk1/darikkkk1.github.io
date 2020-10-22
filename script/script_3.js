


function GetRand (){
var mass = ['Film_1.html', 'Film_2.html','Film_3.html','Film_4.html','Film_5.html','Film_6.html','Film_7.html'];
var res, min = 0, max = 6;
var i = Math.floor(Math.random() * (max - min + 1)) + min;
res = '<a href="' + mass[i] + '"style="background-color:#B0E0E6;">'+'<Big>' + 'Enjoy&#160;&#160;&#160;&#160;&#160;'+'<Big>'+'<----------------------' + '</a>';
var resDiv = document.getElementById("link_box");
  resDiv.innerHTML = res;
}

