$(document).ready(function(){

var timer = 6;
var correctAnswers = 0;
var incorrectAnswers = 0;
var Questions = ["What is Michael's Last Name?", "Bears, Beets, ?", "Michael's Nickname is?", "Dwight's Choice of Crop is", "Jim is to Pam, as Dwight is to"];
var Answers = [""]
var intervalId;

$("#impButton").on("click", run);

function run() {
	intervalId = setInterval(decrement, 1000);

// ***Questions will appear when button is clicked***///
}



function decrement(){
	timer--;

	$("#Clock").html("<h2>Time Left: " + timer + " Seconds</h2>");


	if (timer === 0) {
		stop();
	}
}

function stop() {
	clearInterval(intervalId);
}

});
// ****On the backburner, trying another method***///
// setTimeout(fiveSeconds, 1000 * 5);

// function fiveSeconds(){
// 	$("#Clock").append("<h2>wut</h2>");
	
// }




// *****Start of Questions*****/////

var position = 0;
var correct = 0;
var choices = 0;
var A="";
var B="";
var C="";
var D="";

var Questions = [
	["What is Michael's Last Name?", "Jordan", "McCringleBerry", "Pepperwood","Scott", "D"],
	["Bears, Beets, ?", "Battleships", "Boyz N the Hood", "Battlestar Galactica", "China", "C"],
	["Michael's Nickname is?", "Michael Klump", "Jackhammer", "Michael Scarn", "Sebring Seranator", "A"],
	["Dwight's Choice of Crop is", "Potatos", "Beets", "Garden Gnomes", "Corn", "B"],
	["Jim is to Pam, as Dwight is to", "Esther", "Meredith", "Kelly", "Angela", "D"]
];


// function get(x){
// 	return.document.getElementbyId(x);
// }