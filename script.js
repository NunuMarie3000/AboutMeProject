"use strict"
//greetings prompt at webpage load
// let userName = prompt("Hello, beautiful Human! What is your name?");
// alert("Nice to meet you, " + userName + ". Welcome to my quiz!");

// //prompt on button click
// function quizTime(){

// 	alert("Welcome to the Stormy Time Quiz. Please respond to each question with Y for yes and N for no");

// 	//question 1/5
// 	let pronouns = prompt("Does Storm appreciate it if you refer to them with 'she' or 'her'?");
// 	if (pronouns.toLowerCase() === "y"){
// 		// console.log("That answer is definitely not correct.");
// 		alert("That answer is definitely not correct.");
// 	}else{
// 		// console.log("You're correct! Storm uses they/them, not she/her");
// 		alert("You're correct! Storm uses they/them, not she/her");
// 	}

// 	//question 2/5
// 	let business = prompt("Is Storm a small business owner?");
// 	if (business.toLowerCase() === "y"){
// 		// console.log("You're correct! Storm sells their crocheted wares!");
// 		alert("You're correct! Storm sells their crocheted wares!");
// 	}else{
// 		// console.log("I'm sorry, but that isn't correct");
// 		alert("I'm sorry, but that isn't correct");
// 	}

// 	//question 3/5
// 	let education = prompt("Did Storm ever study theatre?");
// 	if (education.toLowerCase() === "y"){
// 		// console.log("You're correct! Storm studied at the National Theatre Institute.");
// 		alert("You're correct! Storm studied at the National Theatre Institute.");
// 	}else{
// 		// console.log("That answer is incorrect.");
// 		alert("That answer is incorrect.");
// 	}

// 	//question 4/5
// 	let jobs = prompt("Can Stormy keep a job?")
// 	if (jobs.toLowerCase() === "y"){
// 		// console.log("You didn't really read, did you?");
// 		alert("You didn't really read, did you?");
// 	}else{
// 		// console.log("You're correct! Storm has a lot of job experience!");
// 		alert("You're correct! Storm has a lot of job experience!");
// 	}

// 	//question 5/5
// 	let goals = prompt("Did you have fun reading about Storm?");
// 	if (goals.toLowerCase() === "y"){
// 		// console.log("Aww, I love that!");
// 		alert("Aww, I love that!");
// 	}else{
// 		// console.log("Damn. Welp, can't win them all");
// 		alert("Damn. Welp, can't win them all");
// 	}
// 	alert("Thank you so much for taking my quiz, " + userName);
// }

//question 6/7
// let howMany = parseInt(prompt("How many jobs do you think Storm has had so far? Type a number."));
// for (let i = 0; i < 4; i++){
// 	if (howMany === 12){
// 		console.log("That's correct!")
// 	}else{
// 		while (howMany !== 12){
// 			console.log("I'm sorry, try again!");
// 		}
// 	}console.log("The correct answer is 12!");
//}

//Starting again

//greetings prompt + get user name

let pointCounter = 0;

let userName = prompt("Hello, beautiful Human! What is your name?");
alert("Nice to meet you, " + userName + ". Welcome to my quiz!");

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

	//question 5/7 Pls fix this code
	function questionFive(){
		let howMany = parseInt(prompt("How many jobs do you think Storm has had so far? Type a number."));
		for (let i = 0; i < 4; i++){
			if (howMany === 12){
				console.log("That's correct!")
			}else{
				while (howMany !== 12){
					console.log("I'm sorry, try again!");
				}
			}console.log("The correct answer is 12!");
		}
	}

	//question 6/7 Pls fix this code
	function questionSix(){
		let charArray = [];
		charArray = ["chel", "crysta", "korra", "esmerelda", "shego", "miss sara bellum", "prince zuko", "princess kida", "the hex girls", "debbie thornberry"]
		for (let tries = 0; tries < 6; tries++){
			let charGuess = prompt("List 1 of animated characters from Storm's Top Ten list.");
			for (const choice of charArray){
				if (charGuess === choice.toLocaleLowerCase){
					console.log("Correct!");
				}else{
					console.log("Nope. Try again.");
				}
			}
		}
	}
	
	//question 7/7
	function questionSeven(){
		let goals = prompt("Did you have fun reading about Storm?");
		if (goals.toLowerCase() === "y"){
			// console.log("Aww, I love that!");
			alert("Aww, I love that!");
		}else{
			// console.log("Damn. Welp, can't win them all");
			alert("Damn. Welp, can't win them all");
		}
		alert("Thank you so much for taking my quiz, " + userName + " You got " + pointCounter + " points out of 7!");
	}

	let quizQuestions = [];
	quizQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];

	function quizTime(){
		//this will iterate through array of functions, calling one after the other
		for(let qCount = 0; qCount < quizQuestions.length; qCount++){
			quizQuestions[qCount]();
		}
	}
	document.getElementById("button").onclick = quizTime();

	console.log(quizQuestions);


