"use strict";

//greetings prompt at webpage load
let userName = prompt("Hello, beautiful Human! What is your name?");
alert("Nice to meet you, " + userName + ". Welcome to my page!");

//keep tally of total points
	let pointCounter = 0;
	function quizAlert(){
		alert("Welcome to the Stormy Time Quiz. Please respond to each question with Y for yes and N for no");
	}

	//question 1/7
	function questionOne(){
		let pronouns = prompt("Does Storm appreciate it if you refer to them with 'she' or 'her'?");
		if (pronouns.toLowerCase() === "y"){
			// console.log("That answer is definitely not correct.");
			alert("That answer is definitely not correct.");
		}else{
			// console.log("You're correct! Storm uses they/them, not she/her");
			alert("You're correct! Storm uses they/them, not she/her");
			pointCounter += 1;
		}
}
	//question 2/7
	function questionTwo(){
	 	let business = prompt("Is Storm a small business owner?");
		if (business.toLowerCase() === "y"){
			// console.log("You're correct! Storm sells their crocheted wares!");
			alert("You're correct! Storm sells their crocheted wares!");
			pointCounter += 1;
		}else{
			// console.log("I'm sorry, but that isn't correct");
			alert("I'm sorry, but that isn't correct");
		}
	}

	//question 3/7
	function questionThree(){
		let education = prompt("Did Storm ever study theatre?");
		if (education.toLowerCase() === "y"){
			// console.log("You're correct! Storm studied at the National Theatre Institute.");
			alert("You're correct! Storm studied at the National Theatre Institute.");
			pointCounter += 1;
		}else{
			// console.log("That answer is incorrect.");
			alert("That answer is incorrect.");
		}
	}

	//question 4/7
	function questionFour(){
		let jobs = prompt("Can Stormy keep a job?")
		if (jobs.toLowerCase() === "y"){
			// console.log("You didn't really read, did you?");
			alert("You didn't really read, did you?");
		}else{
			// console.log("You're correct! Storm has a lot of job experience!");
			alert("You're correct! Storm has a lot of job experience!");
			pointCounter += 1;
		}
	}

	//question 5/7 
	function questionFive(){
		for (let i = 0; i < 4; i++){
			let howMany = prompt("Guess how many jobs Storm has had?")
			if (howMany == 12){
				// console.log("That's correct!");
				alert("That's correct!");
				pointCounter += 1;
				break;
			}else if(howMany < 12){
				// console.log("Too low! Try again.");
				alert("Too low!");
			}else if(howMany > 12){
				// console.log("Too high! Try again.");
				alert("Too high!");
			}
		}alert("The correct answer was 12!");
	}


	//question 6/7 i hate this, but technically it works...technically
	function questionSix(){
		let regCount = 0;
		let charArray = [];
		charArray =["chel"," esmerelda"," princess kida"]; 
		for(let i = 0; i< 6; i ++){

			if (regCount == 3){
				alert("Congrats, you guessed the all!");
				break;
			}

			let guess = prompt("Guess 3 favorite characters from Storm's top 10 list");
			
			if (guess === "chel" || guess === "princess kida" || guess === "esmerelda"){
			// 	console.log("You're correct!");
				regCount++;
				alert("You're correct");
	
				pointCounter += 1;
			
		}else{
				// console.log("I'm sorry, good try");
				alert("I'm sorry, good try.");
				alert("Here were the possible answers: " + charArray);
			}
		
	}
}
	











	//question 7/7
	function questionSeven(){
		let goals = prompt("Did you have fun reading about Storm?");
		if (goals.toLowerCase() === "y"){
			// console.log("Aww, I love that!");
			alert("Aww, I love that!");
			pointCounter += 1;
		}else{
			// console.log("Damn. Welp, can't win them all");
			alert("Damn. Welp, can't win them all");
		}
		alert("Thank you so much for taking my quiz, " + userName + " You got " + pointCounter + " points out of 7!");
	}
	
	//put all question functions in a singular array
	let quizQuestions = [];
	quizQuestions = [quizAlert, questionOne, questionTwo, questionThree, questionFour,
		questionFive, questionSix, questionSeven];
	// quizQuestions = [quizAlert, questionFive];

	//function that'll iterate through array of functions, calling one at a time
	// function quizTime(){
	// 	for(let qCount = 0; qCount < quizQuestions.length; qCount++){
	// 		quizQuestions[qCount]();
	// 	}
	// }

	document.getElementById("button").onclick = function quizTime(){
		for(let qCount = 0; qCount < quizQuestions.length; qCount++){
			quizQuestions[qCount]();
		}
	};



