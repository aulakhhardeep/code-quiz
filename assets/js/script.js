var questions = [
    {
        question:"1. Which of the following is the correct syntax to print a page using JavaScript?",
        option: ["1. window.print()", "2. browser.print()", "3. navigator.print()", "4.  document.print()"],
        answer: "1. window.print()"
    },
    {
        question: "2. Which event occurs when the user clicks on an HTML element?",
        option: ["1. onmouseover", "2. onchange", "3. onclick", "4. onmouseclick"],
        answer: "3. onclick"
    },

    {
       question: "3. What are variables used for in JavaScript Programs",
       option: ["1. Storing numbers, dates, or other values", "2. Varying randomly", "3. Causing high-school algebra flashbacks", 
       "4. None of the above"],
       answer: "1. Storing numbers, dates, or other values"
    },

    {
        question: "4. Choose the client-side JavaScript object?",
        option: ["1. Database", "2. Cursor", "3. Client", "4. FileUpload"],
        answer: "4. FileUpload"
    },
    {
        question: "5. Using _______ statement is how you test for a specific condition.",
        option: ["1. Select", "2. If", "3. Switch", "4. For"],
        answer: "2. If"
    },
];
//Set variables
var score = 0;
var questionNum = 0;
var currentTimeEI = document.querySelector("#currentTime");
var timerEI = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");

var secondsLeft = 76;
var holdInterval = 0;
var ulNewEI = document.createElement("ul");

var penalty = 10;


//set Timer
timerEI.addEventListener("click", function()
{
if (holdInterval === 0)
{
    holdInterval = setInterval(function(){
        secondsLeft--;
        currentTimeEI.textContent = "Time: " + secondsLeft;
        if(secondsLeft <= 0)
        {
            clearInterval(holdInterval);
            finishedQuiz();
            currentTimeEI.textContent = "Time's up!";
        }
        }, 1000);
}
   questionpage(questionNum);
});

function questionpage(questionNum)
{
    questionsDiv.innerHTML = "";
    ulNewEI.innerHTML = "";
    for (var i=0; i < questions.length; i++)
    {
        var userQuestion = questions[questionNum].question;
        var userOptions = questions[questionNum].option;
        questionsDiv.textContent = userQuestion;
    }
    userOptions.forEach(function(newItem)
    {
        var listItemEI = document.createElement("li");
        listItemEI.textContent = newItem;
        questionsDiv.appendChild(ulNewEI);
        ulNewEI.appendChild(listItemEI);
        listItemEI.addEventListener("click", (compare));
       
    })

}

function compare(event)
{
    var element = event.target;
    if (element.matches("li"))
    {
        var createDivEI = document.createElement("div");
        createDivEI.setAttribute("id", "createDiv");
        if (element.textContent == questions[questionNum].answer)
        {
            score++;
            createDivEI.textContent = "Correct Answer!";
            createDivEI.setAttribute('style', 'color:Green; font-size:25px;');
        }
        else{
            secondsLeft = secondsLeft - penalty;
            createDivEI.textContent = "Wrong!";
            createDivEI.setAttribute('style', 'color:Green; font-size:25px;');

        }
    }
    questionNum++;
    if(questionNum >= questions.length)
    {
        finishedQuiz();
        createDivEI.textContent = "End of quiz";
        }
        else{
            questionpage(questionNum);
        }
        questionsDiv.appendChild(createDivEI);
    }

    function finishedQuiz() {
        questionsDiv.innerHTML = "";
        currentTime.innerHTML = "";
    
        // Heading:
        var h1EI = document.createElement("h1");
        h1EI.setAttribute("id", "createH1");
        h1EI.textContent = "You have completed the quiz!"
    
        questionsDiv.appendChild(h1EI);
    
        // Paragraph
        var para1EI = document.createElement("p");
        para1EI.setAttribute("id", "createP");
    
        questionsDiv.appendChild(para1EI);
    
        // Calculates time remaining and replaces it with score
        if (secondsLeft >= 0) {
            var timeRemaining = secondsLeft;
            var para2EI = document.createElement("p");
            clearInterval(holdInterval);
            para2EI.textContent = "Your final score is: " + timeRemaining;
    
            questionsDiv.appendChild(para2EI);
        }
    
        // Label for initials
        var labelforInitialsEI = document.createElement("label");
        labelforInitialsEI.setAttribute("id", "createLabel");
        labelforInitialsEI.textContent = "Enter your initials: ";
    
        questionsDiv.appendChild(labelforInitialsEI);
    
        // input Initials
        var inputInitialEI = document.createElement("input");
        inputInitialEI.setAttribute("type", "text");
        inputInitialEI.setAttribute("id", "initials");
        inputInitialEI.textContent = "";
    
        questionsDiv.appendChild(inputInitialEI);
    
        // submit
        var submitButtonEI = document.createElement("button");
        submitButtonEI.setAttribute("type", "submit");
        submitButtonEI.className = ".info button";
        submitButtonEI.setAttribute("id", "Submit");
        submitButtonEI.textContent = "Submit";
    
        questionsDiv.appendChild(submitButtonEI);
    
        // Event listener to capture initials and local storage for initials and score
        submitButtonEI.addEventListener("click", function () {
            var initials = inputInitialEI.value;
    
            if (initials === null) {
    
                console.log("No value entered!");
    
            } else {
                var finalScore = {
                    initials: initials,
                    score: timeRemaining
                }
                console.log(finalScore);
                var allScores = localStorage.getItem("allScores");
                if (allScores === null) {
                    allScores = [];
                } else {
                    allScores = JSON.parse(allScores);
                }
                allScores.push(finalScore);
                var newScore = JSON.stringify(allScores);
                localStorage.setItem("allScores", newScore);
                // Travels to final page
                window.location.replace("./highscore.html");
            }
        });
    
    }
    

