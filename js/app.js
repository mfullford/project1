$(document).ready(function() {

  			// create a container and a box to move around 
	var game = $('#game'),
	    buddy = $('#buddy'),
	    maxValue = game.width() - buddy.width(),
	    keysPressed = {},
	    distancePerIteration = 10;
	    	// make it make it move yo
	function calculateNewValue(oldValue, keyCode1, keyCode2) {
	    var newValue = parseInt(oldValue, 10)
	                   - (keysPressed[keyCode1] ? distancePerIteration : 0)
	                   + (keysPressed[keyCode2] ? distancePerIteration : 0);
	    return newValue < 0 ? 0 : newValue > maxValue ? maxValue : newValue;
	}

	$(window).keydown(function(event) { keysPressed[event.which] = true; });
	$(window).keyup(function(event) { keysPressed[event.which] = false; });

	setInterval(function() {
	    buddy.css({
	        left: function(index ,oldValue) {
	            return calculateNewValue(oldValue, 37, 39);
	        },
	        top: function(index, oldValue) {
	            return calculateNewValue(oldValue, 38, 40);
	        }
	    });
	}, 20);
		// basic timer layout
	// function startTimer(duration, display) {
	//     var timer = duration, minutes, seconds;
	//     setInterval(function () {
	//         minutes = parseInt(timer / 60, 10);
	//         seconds = parseInt(timer % 60, 10);

	//         minutes = minutes < 10 ? "0" + minutes : minutes;
	//         seconds = seconds < 10 ? "0" + seconds : seconds;

	//         display.text(minutes + ":" + seconds);
	//         	// need to cap it at 30 secs
	//         if (--timer < 0) {
	//         	alert ("Sorry out of time! Player 2, you're up!")
	//             timer = duration;
	//         }
	//     }, 1000);
	// }
	// 	// 30 seconds per round
	// jQuery(function ($) {
	//     var thirtySeconds = 30 * 1,
	//         display = $('#counter');
	//     startTimer(thirtySeconds, display);
	// });



var score = 0;

function random(min,max){
 	return Math.round(Math.random() * (max-min) + min);
}

function setBG(){
  if (Math.round(Math.random())){
    return "https://ak3.picdn.net/shutterstock/videos/24706739/thumb/1.jpg";
  } else {
    return "https://ak5.picdn.net/shutterstock/videos/24116350/thumb/1.jpg?i10c=img.resize(height:160)";
  } 
}



function dropBox(){
  var length = random(100, ($(".game").width() - 100));
  var velocity = random(8000, 12000);
  var size = random(100, 150);
  var thisBox = $("<div/>", {
    class: "box",
    style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
  });
  
  //set data and bg based on data
  thisBox.data("test", Math.round(Math.random()));
  if(thisBox.data("test")){
    thisBox.css({"background": "url('https://ak3.picdn.net/shutterstock/videos/24706739/thumb/1.jpg')", "background-size":"contain", "background-repeat":"no-repeat"});
  } else {
    thisBox.css({"background": "url('https://ak5.picdn.net/shutterstock/videos/24116350/thumb/1.jpg?i10c=img.resize(height:160)')", "background-size":"contain", "background-repeat":"no-repeat"});
  } 
  
  
  //insert gift element
  $(".game").append(thisBox);
  
  //random start for animation
  setTimeout(function(){
    thisBox.addClass("move");
  }, random(0, 5000) );
  
  //remove this object when animation is over
  thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    $(this).remove();
  });
}

for (i = 0; i < 10; i++) { 
  dropBox();
}

$(document).on('click', '.box', function(){

  
  if($(this).data("test")){
    score += 1;
  } else {
    score -= 1;
  }
  
  $(".score").html(score);
  $(this).remove();
});

var runGame = setInterval(function(){
                for (i = 0; i < 10; i++) { 
                  dropBox();
                }  
              }, 5000);

// function countdown() {
//     	var seconds = 60;
// 	    function tick() {
// 	        var counter = document.getElementById("counter");
// 	        seconds--;
// 	        counter.innerHTML = (seconds < 10 ? "0" : "")  + String(seconds) + "S";
// 	        if( seconds > 0 ) {
// 	            setTimeout(tick, 1000);
// 	            draw();
// 	   			update();
// 	        } else {
// 	            alert("Game over");
// 	            clearInterval(runGame);
// 	        }
// 	    }
//     	tick();
// 	}

// countdown();


});


