$(document).ready(function(){

var timer = 6;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var Questions = ["What is Michael's Last Name?", "Bears, Beets, ?", "Michael's Nickname is?", "Dwight's Choice of Crop is", "Jim is to Pam, as Dwight is to"];
var Answers = ["Scott", "Battlestar Galactica", "Michael Klump", "Beets", "Angela"];
var intervalId;


//*****Timer******/////
$("#impButton").on("click", run);

function run() {
	intervalId = setInterval(decrement, 1000);

	
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

///********Questions*******///
function Loops(arr){
	for (var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

Loops(Questions);
Loops(Answers);

var wut = Questions[0];
var derp = Answers[0];

$("#impButton").on("click", firstQuestion);

function firstQuestion(result){

	$("#Q").html(Questions[0]);

	$("#firstCho").html("<h3>Jordan</h3>");
	$("#secondCho").html("<h3>McCringleBerry</h3>");
	$("#thirdCho").html("<h3>Pepperwood</h3>");
	$("#fourthCho").html(Answers[0]);

	if (result === Answers[0]) {
		correctAnswers++
		
	}

	else if(timer === 0){
		unanswered++
		$("#Q").html("<h2>Correct Answer was Scott!</h2>")
	}

	else{
		incorrectAnswers++
		
	}
}

$("#nextButton").on("click", secondQuestion,);

function secondQuestion(result){

	$("#Q").html(Questions[1]);

	$("#firstCho").html("<h3>Battleships</h3>");
	$("#secondCho").html("<h3>Boyz N the Hood</h3>");
	$("#thirdCho").html(Answers[1]);
	$("#fourthCho").html("<h3>China</h3>");

	if (result === Answers[1]) {
		correctAnswers++
		
	}

	else if(timer === 0){
		unanswered++
		$("#Q").html("<h2>Correct Answer was Battlestar Galactica!</h2>")
	}

	else{
		incorrectAnswers++
		
	}
}

function reset(){
	timer = 6;
}
});
// ****On the backburner, trying another method***///
// setTimeout(fiveSeconds, 1000 * 5);

// function fiveSeconds(){
// 	$("#Clock").append("<h2>wut</h2>");
	
// }




// *****Start of Questions*****/////
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