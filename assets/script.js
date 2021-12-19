var buttonEL= document.querySelector("#start");
var headingEl= document.querySelector(".heading");
var questionEl= document.querySelector(".question");
var randomQuestion = document.getElementById("randomQuestion");
var randomAnswers = document.querySelector(".choices");
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
var answer = ""

var startQuiz = function(){
    buttonEL.remove();
    headingEl.textContent= "Question " + questionCounter + ":";
    questionEl.textContent= "What is the FONT COLOUR of the following word?";
    displayQuestion();
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
    console.log(answers);
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
        listItemEl.setAttribute("data-question-Id", i);
        listItemEl.setAttribute("Id", "list-item");
        randomAnswers.appendChild(listItemEl);
    }
    answer=answer;
    return answer;
};

var checkAnswer = function (event){
    var targetEl = event.target;
    if (targetEl.matches("#list-item")){
        console.log(event.target.textContent)
        console.log(answer);
    }
}


console.log(question);
buttonEL.addEventListener("click", startQuiz);
randomAnswers.addEventListener("click", checkAnswer);