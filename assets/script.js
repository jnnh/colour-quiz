var buttonEL= document.querySelector("#start");
var headingEl= document.querySelector(".heading");
var questionEl= document.querySelector(".question");
var randomQuestion = document.querySelector("#randomQuestion");
questionCounter=1;
var random = function(array){
    var value = Math.floor(Math.random()*array.length);
    return value;
}


var colours = [".red",".blue", ".yellow",".green",".orange",".purple"];
var texts = ["RED","BLUE", "YELLOW","GREEN","ORANGE","PURPLE"];
var question = {
    class: function (){colours[random(colours)]},
    textContent: function(){texts[random(texts)]}
}
var answers = [];

var startQuiz = function(){
    buttonEL.remove();
    headingEl.textContent= "Question " + questionCounter + ":";
    questionEl.textContent= "What is the FONT COLOUR of the following word?";
    displayQuestion();
}

var displayQuestion = function(){
    var questionText= question.textContent();
    randomQuestion.textContent = questionText;
    return questionText;
}

var createAnswers = function (questionText) {

}




console.log(question);
buttonEL.addEventListener("click", startQuiz);