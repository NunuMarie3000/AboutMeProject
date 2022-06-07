"use strict"
"use strict"
//greetings prompt at webpage load
let userName = prompt("Hello, beautiful Human! What is your name?");
alert("Nice to meet you, " + userName + ". Welcome to my quiz!");

//prompt on button click
function quizTime(){

	alert("Welcome to the Stormy Time Quiz. Please respond to each question with Y for yes and N for no");

	//question 1/5
	let pronouns = prompt("Does Storm appreciate it if you refer to them with 'she' or 'her'?");
	if (pronouns.toLowerCase() === "y"){
		// console.log("That answer is definitely not correct.");
		alert("That answer is definitely not correct.");
	}else{
		// console.log("You're correct! Storm uses they/them, not she/her");
		alert("You're correct! Storm uses they/them, not she/her");
	}

	//question 2/5
	let business = prompt("Is Storm a small business owner?");
	if (business.toLowerCase() === "y"){
		// console.log("You're correct! Storm sells their crocheted wares!");
		alert("You're correct! Storm sells their crocheted wares!");
	}else{
		// console.log("I'm sorry, but that isn't correct");
		alert("I'm sorry, but that isn't correct");
	}

	//question 3/5
	let education = prompt("Did Storm ever study theatre?");
	if (education.toLowerCase() === "y"){
		// console.log("You're correct! Storm studied at the National Theatre Institute.");
		alert("You're correct! Storm studied at the National Theatre Institute.");
	}else{
		// console.log("That answer is incorrect.");
		alert("That answer is incorrect.");
	}

	//question 4/5
	let jobs = prompt("Can Stormy keep a job?")
	if (jobs.toLowerCase() === "y"){
		// console.log("You didn't really read, did you?");
		alert("You didn't really read, did you?");
	}else{
		// console.log("You're correct! Storm has a lot of job experience!");
		alert("You're correct! Storm has a lot of job experience!");
	}

	//question 5/5
	let goals = prompt("Did you have fun reading about Storm?");
	if (goals.toLowerCase() === "y"){
		// console.log("Aww, I love that!");
		alert("Aww, I love that!");
	}else{
		// console.log("Damn. Welp, can't win them all");
		alert("Damn. Welp, can't win them all");
	}
	alert("Thank you so much for taking my quiz, " + userName);
}

