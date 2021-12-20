var buttonEL= document.querySelector("#start");
var headingEl= document.querySelector(".heading");
var questionEl= document.querySelector(".question");
var randomQuestion = document.getElementById("randomQuestion");
var randomAnswers = document.querySelector(".choices");
var checkStatus = document.querySelector("#check-status");
var timerEl = document.querySelector("#timer");
var answerEl=document.querySelector(".answers");
questionCounter=1;
var random = function(array){
    var value = Math.floor(Math.random()*array.length);
    return value;
}


var colours = ["red","blue", "yellow","green","orange","purple"];
var texts = ["RED","BLUE", "YELLOW","GREEN","ORANGE","PURPLE"];
var question = {
    class: function (){
        return colours[random(colours)]
    },
    textContent: function(){
        return texts[random(texts)]
    }
};
var answer = "";
var recordedAnswers = [];
var startTime = 30;
var intervalID = 0;

var countdown = function(){
    startTime = Math.max(0, startTime-1);
    timerEl.textContent = "Time: "+ startTime;
    if(startTime === 0 ){
        clearInterval(intervalID);
        endGame();
    }
};
var startGame = function(){
    intervalID=setInterval(countdown, 1000);
    startQuiz();
}

var startQuiz = function(){
    buttonEL.remove();
    checkStatus.textContent="";
    if (startTime>0){
    headingEl.textContent= "Question " + questionCounter + ":";
    questionEl.textContent= "What is the FONT COLOUR of the following word?";
    displayQuestion();
    }
}

var displayQuestion = function(){
    var questionText= question.textContent();
    var questionColour= question.class();
    randomQuestion.innerHTML = questionText;
    randomQuestion.className = questionColour;
    createAnswers(questionColour);
}

var createAnswers = function (answer) {
    var answers = [0,1,2,3];
    answers.splice(Math.floor(Math.random()*answers.length),1,answer);
    for (var i =0; i<answers.length; i++) {
        if (typeof(answers[i]) === "number"){
            var generateOption = function(){
                var possibleOption = colours[random(colours)];
                return possibleOption;
            }
            var option = generateOption();
            while (answers.includes(option)){
                var option = generateOption();
            }
            answers.splice(i,1,option);
        }
    }
    for (var i =0; i<answers.length; i++){
        var listItemEl = document.createElement("li");
        listItemEl.textContent = answers[i];
        if (listItemEl.textContent === answer){
            listItemEl.setAttribute("data-Id", "answer");
        }
        listItemEl.setAttribute("Id", "list-item");
        randomAnswers.appendChild(listItemEl);
    }
};

var checkAnswer = function (event){
    var targetEl = event.target;
    if (targetEl.matches("#list-item")){
        var answer = document.querySelector("[data-Id='answer']")
        if (targetEl.textContent === answer.textContent){
           checkStatus.innerHTML= "Correct!"
           recordedAnswers.push("true");
        }
        else{
            checkStatus.innerHTML= "Incorrect!"
            recordedAnswers.push("false");
            startTime= Math.max(0, startTime-10);
        }
    }
    questionCounter++;
    resetAnswers();
    newQuestion ();
}
var resetAnswers = function(){
    while (randomAnswers.hasChildNodes()){
        randomAnswers.removeChild(randomAnswers.childNodes[0]);
    }
 
};
var newQuestion = function(){
    setTimeout (startQuiz, 500);
};
var endGame = function(){
    resetAnswers();
    answerEl.remove();
    randomQuestion.innerHTML = "";
    headingEl.textContent= "Game Over";
    questionEl.textContent= "";
    var correctAnswers=0
    var wrongAnswers=0
    var totalScore=0
    for (var i=0; i<recordedAnswers.length; i++){
        if(recordedAnswers[i]==="true"){
            correctAnswers++;
        }
        else{
            wrongAnswers++;
        }
    }
    totalScore=correctAnswers - wrongAnswers;
    checkStatus.className= "score";
    checkStatus.innerHTML= "You answered "+recordedAnswers.length+" questions. <p> you got "+correctAnswers+" questions correct.</p><p> You got " +wrongAnswers+ " questions wrong.</p><p> TOTAL SCORE:"+totalScore+ ".";
}

buttonEL.addEventListener("click", startGame);
randomAnswers.addEventListener("click", checkAnswer);