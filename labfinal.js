$('#quiz').quiz({
  

  counterFormat: 'Question %current of %total',
 
  questions: [
    {
      'q': ' If you cry in space the tears just stick to your face.',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 0,
      'correctResponse': 'Yes, it sticks on your face',
      'incorrectResponse': 'Sory, nice try!'
    },
    {
      'q': 'Goldfish only have a memory of three seconds.',
      'options': [
        'Yes',
        'Seven seconds',
        'Goldfish can remember more'
      ],
      'correctIndex': 2,
      'correctResponse': 'Great job! Godlfish can actucally remember a little more!',
      'incorrectResponse': 'Goldfish is not as dumb as we think...'
    },
    {
      'q': 'It costs the U.S. Mint more to make pennies and nickels than the coins are actually worth.',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 0,
      'correctResponse': 'Great job! You know a lot!',
      'incorrectResponse': 'Sorry...wrong'
    },
    {
      'q': 'Humans can’t breathe and swallow at the same time.',
      'options': [
        'True',
        'False',
        'I can do both at the same time!'
      ],
      'correctIndex': 0,
      'correctResponse': 'Correct! Keep going! ',
      'incorrectResponse': 'Sorry...you will never be able to do both at the same time.',
    }
  ]
});