var questions=[{
	"question":"What does HTML stand for?",
	"option1":"Hypertext Machine language",
	"option2":"Hypertext and links markup language",
	"option3":"Hypertext Markup Language",
	"option4":"Hightext machine language",
	"answer":"3"
},
{
	"question":"How is document type initialized in HTML5.?",
	"option1":"</DOCTYPE HTML>",
	"option2":"</DOCTYPE>",
	"option3":"<!DOCTYPE HTML>",
	"option4":"</DOCTYPE html>",
	"answer":"3"
},
{
	"question":"What does CSS stand for ?",
	"option1":"Creative Style Sheets",
	"option2":"Cascading Style Sheets",
	"option3":"Colorful Style Sheets",
	"option4":"Computer Style Sheets",
	"answer":"2"
},
{
	"question":"Which HTML attribute is used to define inline styles ?",
	"option1":"font",
	"option2":"styles",
	"option3":"class",
	"option4":"style",
	"answer":"4"
},
{
	"question":"Which of the following characters indicate closing of a tag ?",
	"option1":".",
	"option2":"/",
	"option3":"!",
	"option4":"\\",
	"answer":"2"
},
{
	"question":"What is the font-size of the h1 heading tag ?",
	"option1":"3.5em",
	"option2":"2.17em",
	"option3":"2em",
	"option4":"1em",
	"answer":"3"
},
{
	"question":"How many heading tags are there in HTML5 ?",
	"option1":"4",
	"option2":"6",
	"option3":"5",
	"option4":"2",
	"answer":"2"
},
{
	"question":"Which of the following attributes is used to add link to any element?",
	"option1":"link",
	"option2":"ref",
	"option3":"href",
	"option4":"newref",
	"answer":"3"
},
{
	"question":"Which CSS property controls the text size?",
	"option1":"font-style",
	"option2":"font-size",
	"option3":"text-size",
	"option4":"text-style",
	"answer":"2"
},
{
	"question":"What is the purpose of using div tags in HTML?",
	"option1":"For creating Different styles",
	"option2":"For creating different sections",
	"option3":"For adding headings.",
	"option4":"For adding titles",
	"answer":"2"
}
]
var currentQuestion=0;
var totalQues=questions.length;
var submitButton= document.getElementById("next-btn")
var score=0;
var container=document.getElementById("question-container");
var ques=document.getElementById("question");
var opt1=document.getElementById("op1");
var opt2=document.getElementById("op2");
var opt3=document.getElementById("op3");
var opt4=document.getElementById("op4");
function startGame() 
{
	var submitButton= document.getElementById("next-btn")
	var startButton = document.getElementById("start-btn")
    var questionContainerElement = document.getElementById("question-container")
	//console.log("startgame")
	startButton.classList.add('hide');
	questionContainerElement.classList.remove('hide');
    submitButton.classList.remove('hide');
 	loadQuestion(currentQuestion);

}
function loadQuestion(questionIndex) 
{
	var ques=document.getElementById("question");
	var opt1=document.getElementById("op1");
	var opt2=document.getElementById("op2");
	var opt3=document.getElementById("op3");
	var opt4=document.getElementById("op4");
	var q=questions[questionIndex];
	ques.innerHTML=(questionIndex+1)+"."+q.question;
	opt1.textContent=q.option1;
	opt2.textContent=q.option2;
	opt3.textContent=q.option3;
	opt4.textContent=q.option4;


}
function loadNextQuestion()
{
	var submitButton= document.getElementById("next-btn");
	submitButton.style.display='block';
	var nextButton= document.getElementById("next");
	nextButton.style.display='none';
	var cBtn=document.getElementById("correctOrNot");
		cBtn.style.display='none';
	var selectOpt=document.querySelector('input[type=radio]:checked')
	selectOpt.checked=false;
	++currentQuestion;
	if(currentQuestion==totalQues-1)
	{
		nextButton.innerHTML='Finish';
	}
	if(currentQuestion==totalQues)
	{
		
		showScore();
		return;
	}
    loadQuestion(currentQuestion);
}


function showCorrect()
{
	var submitButton= document.getElementById("next-btn");
	var selectOpt=document.querySelector('input[type=radio]:checked')
	if(!selectOpt)
	{
		alert("Please select your answer!")
		return;
	}
	var ans=selectOpt.value;
	submitButton.style.display='none';
	var nextButton= document.getElementById("next");
	nextButton.style.display='block';
	var cBtn=document.getElementById("correctOrNot");
	cBtn.innerHTML="Correct";
	if(questions[currentQuestion].answer===ans)
	{
		score+=1;
		//var nextButton= document.getElementById("next");
		var cBtn=document.getElementById("correctOrNot");
		cBtn.style.backgroundColor='rgb(77, 255, 77)';
		cBtn.style.color='rgb(0, 102, 0)';
		cBtn.style.display='block';
		nextButton.addEventListener('click',loadNextQuestion);
	}
	else
	{
		showInCorrect();
		nextButton.addEventListener('click',loadNextQuestion);
	}
	

}
function showInCorrect()
{
	var cBtn=document.getElementById("correctOrNot");
	cBtn.innerHTML="Incorrect";
	cBtn.style.backgroundColor='rgb(255, 77, 77)';
	cBtn.style.color='rgb(153, 0, 0)';
	cBtn.style.display='block';
}
function showScore()
{
	    var container=document.getElementById("question-container");
	    container.innerHTML='';
	    var heading=document.getElementById("head");
		var resultContainer=document.getElementById("result");
		var next=document.getElementById("next-btn");
		next.style.display='none';
		container.style.display='none';
		heading.innerHTML="QUIZ RESULTS";
		resultContainer.style.display='block';
		resultContainer.innerHTML="<b>Your Score "+score+"<br><br></b>"+
		"1) What does HTML stand for? :- Hypertext Markup Language"+"<br><br>"+
		"2) How is document type initialized in HTML5.? :- <!DOCTYPE HTML>"+"<br><br>"+
		"3) What does CSS stand for ? :- Cascading Style Sheets"+"<br><br>"+
		"4) Which HTML attribute is used to define inline styles ? :- style"+"<br><br>"+
		"5) Which of the following characters indicate closing of a tag ? :- /"+"<br><br>"+
		"6) What is the font-size of the h1 heading tag ? :- 2rem"+"<br><br>"+
		"7) How many heading tags are there in HTML5 ? :- 6"+"<br><br>"+
		"8) Which of the following attributes is used to add link to any element? :- href"+"<br><br>"+
		"9) Which CSS property controls the text size? :- font-size"+"<br><br>"+
		"10) What is the purpose of using div tags in HTML? :- For creating different sections";
		var re=document.getElementById("re-btn");
		re.style.display='block';
		re.addEventListener('click',function(){
			window.location.reload();
		})

}
