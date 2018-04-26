$('#quiz').quiz({
  

  counterFormat: 'Question %current of %total',
 
  questions: [
    {
      'q': 'Is coding hard?',
      'options': [
        'Yes',
        'No'
      ],
      'correctIndex': 0,
      'correctResponse': 'of course',
      'incorrectResponse': 'Sorry, wrong answer.'
    },
    {
      'q': 'question 2',
      'options': [
        'answer 1',
        'answer 2',
        'answer 3'
      ],
      'correctIndex': 2,
      'correctResponse': 'oops',
      'incorrectResponse': 'Great job!'
    },
    {
      'q': 'question 3',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 0,
      'correctResponse': 'Great job!',
      'incorrectResponse': 'wrong'
    },
    {
      'q': 'question 4',
      'options': [
        'answer 1',
        'answer 2',
        'answer 3'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! ',
      'incorrectResponse': 'Wrong!'
    }
  ]
});；