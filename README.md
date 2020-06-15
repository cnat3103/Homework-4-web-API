# Homework-4-web-API
Homework task 4
Created a Coding Quiz Challenge.

* Requires 6 primary elements:
    - primary HTML page that contains
        - nav bar with link to Highscores page and timer
        - boxOne - displays instructions and contains "Start Quiz" button to which event listener will be added to trigger quiz;
        - boxTwo - displays questions. Hidden until Start Quiz click event
        - boxThree - displays only if timer runs out to notify User that she has lost
        - boxFour - displays option for User to input highScore on successful completion
    - highScores html page that contains:
        - Nav bar
        - leaderboard with rankings (requires retrieval of item in local storage)
        - option to clear
    - Primary JS doc that sets value of variables, includes our event listeners, sets interval for timer and stores items in local storage
    - Questions JS that defines the questions to be rendered and identifies correct reponses
    - highScores JS that retrieves information from local storage, displays and sorts the highscores
    - CSS stylesheet that provides:
        - styling for elements across both HTML documents
        - padding and spacing of elements

* Please refer to extensive commentary in relevant pages