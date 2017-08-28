//var boarder=$('#boarder');
//boarder.on('mouseenter',function(){
//	"use strict";
//	boarder.slideDown();	
//});
//boarder.on('mouseleave',function(){
//	"use strict";
//	boarder.slideUp();
//});
var music= document.getElementById("au");
function playaudio(){
	"use strict";
	music.play();}
function pauseaudio(){
	"use strict";
	music.pause();}
playaudio();
pauseaudio();

//function getLyric(url){
//	var request =new XMLHttpRequest();
//	request.open(
//	'GET','阿里郎 - 兰花指.krc',true
//	);
//	request.responseType=('text');
//	request.onload=(function(){
//		var lyric=request.response;	
//	});
//	request.send();