
var fEvent = function(element,event){
  var evt = document.createEvent( 'HTMLEvents' );
  evt.initEvent(event, true, true);  
  return !element.dispatchEvent(evt);
}
// 触发事件方法

var del = function (){
	var dropDown = document.getElementsByClassName("screen_box")[0];
	fEvent(dropDown.children[0],"click");
	//用fevent绑定dom和事件，并触发
	var delBox = document.getElementsByClassName("layer_menu_list");
	var ul = delBox[1].children;
	var a = ul[0].children[0].children[0];
	fEvent(a,"click")
	var ok = document.getElementsByClassName("screen_box")[0].children[2].children[0].children[2].children[0];
	fEvent(ok,"click");
}

setInterval(function(){
	del();
},1000);