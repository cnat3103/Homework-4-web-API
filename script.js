// Find element with "startQuiz" id (start quiz button)
let startQuiz = document.querySelector("#startQuiz");
// Find all elements within quizBtn class (all answer buttons)
let quizBtn = document.querySelectorAll(".quizBtn");
// Set index variable
let index = 0;
// Set score variable
let score = 0;

// Add event listener to initiate quiz once "Start Quiz" button is pressed.
startQuiz.addEventListener("click", function(event){
    // Stop event from bubbling up the DOM
    event.stopPropagation();
    // Initialise timer - function expressed below
    startTimer();
    // Hide boxOne
    document.querySelector("#boxOne").style.display = "none"; 
    // Render boxTwo as block-level element
    document.querySelector("#boxTwo").style.display = "block";
    // Initialise display of question responses - function below
    showQs();
});

// find element with relevant ids and render the relevant reponse
function showQs() {
    let question = questions[index];
    
    document.querySelector("#title").innerHTML = question.title;
    document.querySelector("#A").innerHTML = question.choices[0];
    document.querySelector("#B").innerHTML = question.choices[1];
    document.querySelector("#C").innerHTML = question.choices[2];
    document.querySelector("#D").innerHTML = question.choices[3];
}

// check answers
for (let i = 0; i < quizBtn.length; i++) {
    quizBtn[i].addEventListener("click", function userAnswer(event) {
        event.stopPropagation();
        

        if(event.currentTarget.innerText === questions[index].answer){
            score++;
            document.querySelector("#checkAns").innerHTML = "correct";
        } else {
            document.querySelector("#checkAns").innerHTML = "wrong";
            secondsLeft = secondsLeft - 15;
        }
        
        index++;
        
        // ensure questions continue to display until all 4 questions have been answered
        if (index < 5) {
        
        showQs();
        }
    });
}

// Create variable and find User name input 
let userName = document.querySelector("#userName");
// Create variable and find endMsg element
let endMsg = document.querySelector("#endMsg");
// Create variable and find userScore element
let userScore = document.querySelector("#userScore");

// Retrieve highscore from Local Storage (local storage set below)
let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
// Create variable and find submit button
let submitBtn = document.querySelector("#submitScore");
// Set time to 91 seconds - will render as 90
let secondsLeft = 90;

// Declare the startTimer function
function startTimer () {

  // setInterval method used to call function every 1000 ms (1 second)
  let interval = setInterval(function() {
    // Will decrease count by 1
    secondsLeft--;
    // Will render counter top right
    document.querySelector("#counterDisplay").innerHTML = secondsLeft;
    
      // Conditional statement will render boxThree (you lose) if timer reaches 0
      if (secondsLeft === 0) {
      clearInterval(interval);
      document.querySelector("#boxTwo").setAttribute("style", "display: none");
      document.querySelector("#boxThree").setAttribute("style", "display: block");
    
      // In alternative, if all questions have been answered, will render boxFour and clear interval to stop time once questions answered
    } else if (index === 5) {
      
      
      clearInterval(interval); 
      
      document.querySelector("#boxTwo").setAttribute("style", "display: none");
      document.querySelector("#boxFour").setAttribute("style", "display: block");
      
      // Score is calculated
      score = ((score)*(secondsLeft));
      
      // If string (ie "") as not finished in time or no correct reponses - outcome 1
      if (isNaN(score)) {
       userScore.innerHTML = "Your score is: 0";
      } 
      // In alterntive, render User score
      else {
        endMsg.innerHTML = "You made it to the end!";
        userScore.innerHTML = "Your score is: " + score;
      }
    }
  }, 1000) 
}



// Add event listener for submit highscore event
submitBtn.addEventListener("click", function(event) {
  // Stop bubbling up the DOM
  event.stopPropagation();

  let nickname = userName.value;

  let finalScore = {
    nickname, 
    score
  };
  
  // Store finalScore variable in local storage
  highscores.push(finalScore);
  localStorage.setItem("highscores", JSON.stringify(highscores));
});