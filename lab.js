$('#quiz').quiz({
  
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'If you cry in space the tears just stick to your face.',
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
        'True',
        'Seven seconds',
        'Goldfish can remember more.'
      ],
      'correctIndex': 2,
      'correctResponse': 'Great job! Godlfish can actucally remember a little more!',
      'incorrectResponse': 'Goldfish is not as dumb as we think.'
    },
    {
      'q': 'It costs the U.S. Mint more to make pennies and nickels than the coins are actually worth.',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 0,
      'correctResponse': 'Great job! You know a lot!',
      'incorrectResponse': 'Sorry, try again!'
    },
    {
      'q': 'The average person will shed 10 pounds of skin during their lifetime.',
      'options': [
        'Ture',
        'False',
        'More than 10 pounds'
      ],
      'correctIndex': 2,
      'correctResponse': 'One person shed more than 10 pounds of skin, it is 40 pounds.',
      'incorrectResponse': 'Sorry, thanks for playing.'
    }
  ]
});