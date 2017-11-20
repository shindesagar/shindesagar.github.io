var keys = {37: 1, 38: 1, 39: 1, 40: 1};
var $window = $(window);
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
	  e.preventDefault();
  e.returnValue = false;  
}
function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}
function disableScroll() {
  if (window.addEventListener)
	  window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault;
  window.onmousewheel = document.onmousewheel = preventDefault;
  window.ontouchmove  = preventDefault;
  document.onkeydown  = preventDefaultForScrollKeys;
}
function enableScroll() {
	if (window.removeEventListener)
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	window.onmousewheel = document.onmousewheel = null; 
	window.onwheel = null; 
	window.ontouchmove = null;  
	document.onkeydown = null;  
}
function whichTransitionEvent(){
  var t,
	  el = document.createElement("fakeelement");

  var transitions = {
	"transition"      : "transitionend",
	"OTransition"     : "oTransitionEnd",
	"MozTransition"   : "transitionend",
	"WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
	if (el.style[t] !== undefined){
	  return transitions[t];
	}
  }
}
$(window).load(function(){
	$("body").addClass("loaded");
});

setInterval(function () {
  $('#wrap0, #wrap1').toggleClass("visibel");
}, 2500)

$(function(){
	$(".burger_menu").click(function(){
		if($(this).hasClass("open")) {
			$(this).removeClass("open");
			$(".menus").removeClass("open");
		}
		else {
			$(this).addClass("open");
			$(".menus").addClass("open");
		}
	});
	

});
$window.scroll(function(){
	$(".animate_up").each(function(i,el){
		var $self = $(this);
		var topoffset = $self.offset().top;
		var bottomoffset = topoffset + $self.innerHeight();
		var scrolltop = $window.scrollTop();
		if(scrolltop + $window.height() > topoffset + $self.height() / 8) {
			$self.addClass("animated");
		}
	});
});