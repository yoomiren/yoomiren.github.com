$('#quiz').quiz({
  

  counterFormat: 'Question %current of %total',
 
  questions: [
    {
      'q': 'What kind of pet you have?',
      'options': [
        'Cat',
        'Dog'
      ],
      'correctIndex': 0,
      'correctResponse': 'Regular meals, treats as well as sepcial diets.',
      'incorrectResponse': 'We have special recipes for your dog!'
    },
    {
      'q': 'How often do you feed your pet?',
      'options': [
        'No schedule',
        '1~3 meals only',
        '1~3 meals, with treats'
      ],
      'correctIndex': 2,
      'correctResponse': 'You can subscribe to a 3-day meal package and up to 2-week meal plan.',
      'incorrectResponse': 'It is better to have a feeding schedule!'
    },
    {
      'q': 'Does your pet have special needs?',
      'options': [
        'I have a healthy and happy pet!',
        'My pet has special needs... (hairball control, hyper/hypo allergenic and etc)'
      ],
      'correctIndex': 0,
      'correctResponse': 'Great job!Keep your pet healthy and happy with us, by switching to feeding real food today',
      'incorrectResponse': 'Check out our special diet recipes'
    },
    {
      'q': 'Do you wish to give a free 3-day trial with us?',
      'options': [
        'Yes, please!',
        'Not now, thank you!',
       
      ],
      'correctIndex': 2,
      'correctResponse': 'You can decide later',
      'incorrectResponse': 'Great! Go check out our product page! '
    }
  ]
});