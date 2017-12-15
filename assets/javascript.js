$(document).ready(function(){

var timer = 30;
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

	$("#Q").html("<h3>" + Questions[0] + "</h3>");

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


// *****Big problem with the next Button; keeps overwriting the previous question!****//
$("#nextButton").on("click", secondQuestion);

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


$("#nextButton").on("click", thirdQuestion);

function thirdQuestion(result){

	$("#Q").html(Questions[2]);

	$("#firstCho").html(Answers[2]);
	$("#secondCho").html("<h3>Jackhammer</h3>");
	$("#thirdCho").html("<h3>Michael Scarnt</h3>");
	$("#fourthCho").html("<h3>Sebring Seranator</h3>");

	if (result === Answers[2]) {
		correctAnswers++
		
	}

	else if(timer === 0){
		unanswered++
		$("#Q").html("<h2>Correct Answer was Michael Klump!</h2>")
	}

	else{
		incorrectAnswers++
		
	}
}


$("#nextButton").on("click", fourthQuestion);

function fourthQuestion(result){

	$("#Q").html(Questions[3]);

	$("#firstCho").html("<h3>Potatos</h3>");
	$("#secondCho").html(Answers[3]);
	$("#thirdCho").html("<h3>Garden Gnomes</h3>");
	$("#fourthCho").html("<h3>Corn</h3>");

	if (result === Answers[3]) {
		correctAnswers++
		
	}

	else if(timer === 0){
		unanswered++
		$("#Q").html("<h2>Correct Answer was Michael Klump!</h2>")
	}

	else{
		incorrectAnswers++
		
	}
}

$("#nextButton").on("click", fifQuestion);

function fifQuestion(result){

	$("#Q").html(Questions[4]);

	$("#firstCho").html("<h3>Esther</h3>");
	$("#secondCho").html("<h3>Meredith</h3>");
	$("#thirdCho").html("<h3>Kelly</h3>");
	$("#fourthCho").html(Answers[4]);

	if (result === Answers[4]) {
		correctAnswers++
		
	}

	else if(timer === 0){
		unanswered++
		$("#Q").html("<h2>Correct Answer was Michael Klump!</h2>")
	}

	else{
		incorrectAnswers++
		
	}
}


function reset(){
	timer = 6;
}
});
