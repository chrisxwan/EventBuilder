// THIS SHEET FOR SOME REASON DOESNT WORK, THE CODE BELOW WAS DIRECTLY COPIED INTO INIT.JS


// var gridSize = 10; /** starting size **/

// $(document).ready(function () {
// 	create_grid(gridSize);
// 	rand();
// 	trace();
// });

// function create_grid(gridSize) {
// 	var boxSize = (400/gridSize-1.5);
// 	var boxBorder = Math.ceil(boxSize/24) + "px solid grey";
// 	var boxRadius = Math.ceil(boxSize/12) + "px";
// 	for (var i = 0; i<gridSize*gridSize*1.5/3; i++) {
// 		$("<div/>", {
// 			class: "sameDiv",
// 			width: 3*boxSize,
// 			height: boxSize,
// 			// border: boxBorder, NOT WORKING??
// 			// border-radius: boxRadius, 


// 		}).appendTo("div#grid");
// 	};
// 	$(".sameDiv").css({
// 		'border': boxBorder,
// 		'border-radius': boxRadius,
// 	});

// };

// function rand() {
// 	$(".sameDiv").mouseenter(function(){
// 		$(this).css("background-color", randomColor());
// 	});
// };

// function randomColor() {
// 	var alphabet = "0123456789abcdef".split('');
// 	var randColor = "#";
// 	for (var i = 1; i <= 6; i++) {
// 		randColor += alphabet[Math.round(Math.random()*15)];
// 	};
// 	return randColor;
// };

// function trace(){
// 	$('.sameDiv').mouseleave(function(){
// 		$(this).animate({
// 			backgroundColor: 'white',
// 		}, 600);
// 	});
// };