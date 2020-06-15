//set variable and retrieve Highscores from localStorage || print ""
let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
// Find element with rankings ID
let rankings = document.querySelector("#rankings");
// Find element with clear ID
let clearHighScore = document.querySelector("#clear");


// Add an event listener to print the User generated score to the highscores html page
window.addEventListener("load", function(){printHighScore()});

function printHighScore() {
    highscores = scoresRanked(highscores, 'score')
    
    for (let i = 0; i < highscores.length; i++) {
      //create new list element
      let list = document.createElement("li"); 
      // create text node (text content) within list element
      let entry = document.createTextNode(highscores[i].nickname + ": " + highscores[i].score); 
      list.appendChild(entry);
      rankings.appendChild(list);
    }
}

//Function to sort scores
function scoresRanked(array, key) {
  return array.sort(function(a,b) {
    if (a.score < b.score) {
      return 1;
    }
    return -1;
  });
}

// Add event listener to clear scores and remove from local storage on User clicking "Clear High Scores"
clearHighScore.addEventListener("click", function() {
    localStorage.removeItem("highscores");
    window.location.reload();
});