var questionNumber = 0;
var totalScore = 100;
var question;
var totalAnswers;
var correctAnswer;
var quizLength;
var quizItems = [
  {
    "question": "If you cry in space the tears just stick to your face.",
    "answers": ["True", "False"],
    "correct": "1"
  },
  {
    "question": "Goldfish only have a memory of three seconds.",
    "answers": ["True", "False"],
    "correct": "2"
  },
  {
    "question": "It costs the U.S. Mint more to make pennies and nickels than the coins are actually worth.",
    "answers": ["True", "False"],
    "correct": "1"
  },
  {
    "question": "Humans can’t breathe and swallow at the same time.",
    "answers": ["True", "False"],
    "correct": "2"
  },
  {
    "question": "The average person will shed 10 pounds of skin during their lifetime.",
    "answers": ["True", "False"],
    "correct": "2"
  }  
];



$(document).ready(function(){
  nextQuestion();
});

function nextQuestion(){
  quizLength = quizItems.length;
  if(questionNumber  == quizLength){ 
    $('.quiz').fadeOut(function(){
      setTimeout(function(){
        $('#score').html("Your total score: " + totalScore).fadeIn(); 
      },500);
    });
  } else {
    $('#question, #answers').html('');
    $('#qImg').attr('src','');
    question = quizItems[questionNumber]['question'];
    totalAnswers = quizItems[questionNumber].answers.length;
    correctAnswer = quizItems[questionNumber]['correct'];
   
    $('#question').text(question);
    for(i=0;i<totalAnswers;i++){
      $('#answers').append('<div id="'+ i +'" class="answer-button">'+quizItems[questionNumber].answers[i]+'</div>');
    }
    $('.quiz').fadeTo(500,1);
    $(".answer-button").on('click',answerQuestion);
    pulseClick(0);
  }
}

function answerQuestion(){
  $(".answer-button").off('click',answerQuestion);
  var a = this.id;
  console.log("Your answer: "+ a +"; The correct answer: " + correctAnswer);
  checkScore(a); 
  questionNumber++;
  $('.quiz').fadeTo(500,0, function(){
    nextQuestion();
  });
}

function checkScore(a){ 
  console.log("Your answer to check: "+ a);
  if(a === correctAnswer){
    console.log("Right answer!");
    totalScore += 20;
    console.log(totalScore);
  } else{
    console.log("Wrong answer!");
    totalScore += 0;
    console.log(totalScore);
  }
}

function pulseClick(i){
  var btnCount = $('#answers').find('.answer-button').length-1;
  console.log(btnCount);
  $('#answers').find('.answer-button').eq(i).addClass('pulse').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',function(e) {
    $(this).removeClass('pulse');
    if(i === btnCount){
      i=0;
    } else {
      i++;
    }
    pulseClick(i);
  });
}