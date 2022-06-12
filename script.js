'use strict';

//greetings prompt at webpage load
let userName = prompt("Hello, beautiful Human! What is your name?");
alert("Nice to meet you, " + userName + ". Welcome to my page!");

//keep tally of total points
	let pointCounter = 0;
	//alert with rules for quiz
	function quizAlert(){
		alert("Welcome to the Stormy Time Quiz. Please respond to each question with Y for yes and N for no");
	}

	//question 1/7
	function questionOne(){
		let pronouns = prompt("Does Storm appreciate it if you refer to them with 'she' or 'her'?");
		//if user's lowercase answer equals y
		if (pronouns.toLowerCase() === "y"){
			alert("That answer is definitely not correct.");
		}else{
			alert("You're correct! Storm uses they/them, not she/her");
			//add a point to overall quiz point counter
			pointCounter += 1;
		}
}
	//question 2/7
	function questionTwo(){
	 	let business = prompt("Is Storm a small business owner?");
		if (business.toLowerCase() === "y"){
			alert("You're correct! Storm sells their crocheted wares!");
			pointCounter += 1;
		}else{
			alert("I'm sorry, but that isn't correct");
		}
	}

	//question 3/7
	function questionThree(){
		let education = prompt("Did Storm ever study theatre?");
		if (education.toLowerCase() === "y"){
			alert("You're correct! Storm studied at the National Theatre Institute.");
			pointCounter += 1;
		}else{
			alert("That answer is incorrect.");
		}
	}

	//question 4/7
	function questionFour(){
		let jobs = prompt("Can Stormy keep a job?")
		if (jobs.toLowerCase() === "y"){
			alert("You didn't really read, did you?");
		}else{
			alert("You're correct! Storm has a lot of job experience!");
			pointCounter += 1;
		}
	}

	//question 5/7 
	function questionFive(){
		//creates loop for the 4 tries the user gets
		for (let i = 0; i < 4; i++){
			let howMany = prompt("Guess how many jobs Storm has had?");
			if (howMany == 12){
				alert("That's correct!");
				pointCounter += 1;
				//if they guess correctly, i want the loop to stop, don't need more tries
				break;
			}else if(howMany < 12){
				alert("Too low!");
			}else if(howMany > 12){
				alert("Too high!");
			}
		}
		alert("The correct answer was 12!");
	}

	function questionSix(){
		//declares and initializes variable to count number of correct guesses
		let counter = 0;
		let charArray = [];
		//array of possible correct answers
		charArray = ['chel', 'esmerelda', 'princess kida', 'crysta', 'prince zuko'];
		//creates loop for 6 attempts the user gets
		for(let attempts = 0; attempts < 6; attempts++){
			//during the 6 attempts, if the user gets 3 correct answers,the user gets an overall point for the quiz and the attempt loop breaks 
			if(counter === 3){
				alert("You win a point for this question!");
				pointCounter += 1;
				break;
			}
			//prompts the user to guess 3 correct choices
			let userGuess = prompt("Guess 3 of Storm's top 5 fav animated characters!");
			//creates loop to cycle through names in the charArray array
			for(let i = 0; i < charArray.length; i++){
				//checks the user's guess against all items in the array, if correct, tells user they're right, adds point to the guess counter, and breaks out of the loop checking character names
				if(userGuess.toLowerCase() === charArray[i]){
					alert("You right");
					counter += 1;
					break;
				}
			//tells the user to try again, works if the question is wrong or right since you need 3 correct guesses to win an overall point anyway
			}do{
				alert("Try again!");
			}while(userGuess === false);
		}
		if(counter !== 3){
			alert("I'm sorry, you didnt' win a point for this round");
		}
	}

	//question 7/7
	function questionSeven(){
		let goals = prompt("Did you have fun reading about Storm?");
		//if lowercase user response strictly equals 'y'
		if (goals.toLowerCase() === "y"){
			//gives alert and adds point to overall counter
			alert("Aww, I love that!");
			pointCounter += 1;
		}else{
			//gives alert if wrong
			alert("Damn. Welp, can't win them all");
		}
		//gives personalized alert with user's total points for the quiz
		alert("Thank you so much for taking my quiz, " + userName + " You got " + pointCounter + " points out of 7!");
	}
	
	//put all question functions in a singular array
	let quizQuestions = [];
	quizQuestions = [quizAlert, questionOne, questionTwo, questionThree, questionFour,
		questionFive, questionSix, questionSeven];

	//quiz starts when you press the html button
	document.getElementById("button").onclick = function quizTime(){
		// function that'll iterate through array of functions, calling one at a time
		for(let qCount = 0; qCount < quizQuestions.length; qCount++){
			quizQuestions[qCount]();
		}
	};