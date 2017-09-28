$(document).ready(function() {

	$("body").css('cursor', 'url(images/hand.png) 6 6, auto');



 //  THIS WAS MY OG collision detection but I couldn't figure it out): create a container and a box to move around 
	// var game = $('#game'),
	//     buddy = $('#buddy'),
	//     maxValue = game.width() - buddy.width(),
	//     keysPressed = {},
	//     distancePerIteration = 10;
	//     	// make it make it move yo
	// function calculateNewValue(oldValue, keyCode1, keyCode2) {
	//     var newValue = parseInt(oldValue, 10)
	//                    - (keysPressed[keyCode1] ? distancePerIteration : 0)
	//                    + (keysPressed[keyCode2] ? distancePerIteration : 0);
	//     return newValue < 0 ? 0 : newValue > maxValue ? maxValue : newValue;
	// }

	// $(window).keydown(function(event) { keysPressed[event.which] = true; });
	// $(window).keyup(function(event) { keysPressed[event.which] = false; });

	// setInterval(function() {
	//     buddy.css({
	//         left: function(index ,oldValue) {
	//             return calculateNewValue(oldValue, 37, 39);
	//         },
	//         top: function(index, oldValue) {
	//             return calculateNewValue(oldValue, 38, 40);
	//         }
	//     });
	// }, 20);


		function random(min,max){
 	 		return Math.round(Math.random() * (max-min) + min);
 		}

 		//

		function setBG(){
			if (Math.round(Math.random())){
				return "http://www.pholody.com/img/running_dog.png";
			 } else {
 	    		return "https://s-media-cache-ak0.pinimg.com/originals/30/82/d0/3082d0250b91ff5dc176160101f744e4.jpg";																								  } 
			 	}	
	// dropping puppies everywhere	

		function dropBox(){																								
			var length = random(100, ($(".game").width() - 100));
			var velocity = random(8000, 12000);
			var size = random(100, 120);
			var thisBox = $("<div/>", {
			class: "box",
			style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
 			});

	  
//have to set/css the data
		thisBox.data("test", Math.round(Math.random()));
			if(thisBox.data("test")){
				thisBox.css({"background": "url('http://www.pholody.com/img/running_dog.png')", "background-size":"contain", "background-repeat":"no-repeat"});
			} else {
				thisBox.css({"background": "url('https://s-media-cache-ak0.pinimg.com/originals/30/82/d0/3082d0250b91ff5dc176160101f744e4.jpg')", "background-size":"contain", "background-repeat":"no-repeat"});
			} 
	  
//CUE PUPPIES
		$(".game").append(thisBox);
  
//random start for animation
		setTimeout(function(){
		thisBox.addClass("move");
		}, random(0, 6000) );
  
//remove this object when animation is over
		thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
               function(event) {
    			$(this).remove();
	  			});
				
		}
		
		for (i = 0; i < 10; i++) { 
			dropBox();
		}

		var currentScore = 0;

		$(document).on('click', '.box', function(){
  			if($(this).data("test")){
				currentScore++;
			} else {
				currentScore++;
			}
   			$(".score").html(currentScore);
  			$(this).remove();
 		});

		var runGame = setInterval(function(){
                 for (i = 0; i < 10; i++) { 
                  dropBox();
                }  
              }, 6000);

// 	//basic timer layout
// 			// function startTimer(duration, display) {
// 			//     var timer = duration, minutes, seconds;
// 			//     setInterval(function () {
// 			//         minutes = parseInt(timer / 60, 10);
// 			//         seconds = parseInt(timer % 60, 10);

// 			//         minutes = minutes < 10 ? "0" + minutes : minutes;
// 			//         seconds = seconds < 10 ? "0" + seconds : seconds;

// 			//         display.text(minutes + ":" + seconds);
// 			//         	// need to cap it at 30 secs
// 			//         if (--timer < 0) {
// 			//         	alert ("Sorry out of time! Player 2, you're up!")
// 			//             timer = duration;
// 			//         }
// 			//     }, 1000);
// 			// }
// 			// 	// 30 seconds per round
// 			// jQuery(function ($) {
// 			//     var thirtySeconds = 30 * 1,
// 			//         display = $('#counter');
// 			//     startTimer(thirtySeconds, display);
// 			// });


// pseudo code for other collision detection

// need to calculate the position of each box and the position of buddy 
// need to then compare those positions continiously

// function addPoint() {
// 	var score = 0 ++1 function collision;
// 	if($(this).data("test")){
// 	    score += 1;
// 	  }
// }


	// function petting () {
	// 	collision(buddy, box)
	// 	}


	// var buddy = $("#buddy");
	// var box = $(".box");


	// function collision($div1, $div2) {
	//         var x1 = $div1.offset().left;
	//         var y1 = $div1.offset().top;
	//         var h1 = $div1.outerHeight(true);
	//         var w1 = $div1.outerWidth(true);
	//         var b1 = y1 + h1;
	//         var r1 = x1 + w1;
	//         var x2 = $div2.offset().left;
	//         var y2 = $div2.offset().top;
	//         var h2 = $div2.outerHeight(true);
	//         var w2 = $div2.outerWidth(true);
	//         var b2 = y2 + h2;
	//         var r2 = x2 + w2;

	//        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	//         return true;
	//     }

	// function repeat() {
 //        if (collision(buddy, box)) {
 //            stopthegame();
 //            return;
 //        }
 //    }

 //    function stopthegame () {

 //    }


	var highscore = localStorage.getItem("highscore");

	if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);      
    }
}
else{
    localStorage.setItem("highscore", currentscore);
}


});