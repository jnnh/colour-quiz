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
    class: function (){
        return colours[random(colours)]
    },
    textContent: function(){
        return texts[random(texts)]
    }
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
    var questionColour= question.class();
    randomQuestion.textContent = questionText;
    randomQuestion.className = questionColour;
    console.log(questionText);
    console.log(questionColour);
    console.log(randomQuestion);
}

var createAnswers = function () {

}




console.log(question);
buttonEL.addEventListener("click", startQuiz);
