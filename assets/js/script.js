var questions = [
    {
        question:"1. Which of the following is the correct syntax to print a page using JavaScript?",
        option: ["1. window.print();", "2. browser.print();", "3. navigator.print();", "4.  document.print();"],
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
var currentTimeEI = document.querySelector("#currentTime");
var timerEI = document.querySelector("#startTime");


var secondsLeft = 76;
var holdInterval = 0;


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
        
        }
        }, 1000);
}

});


