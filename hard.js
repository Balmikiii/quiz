var myQuestions = [
    {
      question: "a: 'Which CSS3 Color Feature is like RGB color and adds the alpha channel value so as to specify a color’s opacity?",
      answers: {
        a: 'AlphaRGB',
        b: 'RGBalpha',
        c: 'RGBa',
        d: 'RGB'
        },
      correctAnswer: 'c'
    },
    {
      question: "b: 'What is the correct syntax for referring an external CSS?",
      answers: {
        a: 'link rel="stylesheet" type="text/css" href="mystyle.css',
        b: 'stylesheet rel="stylesheet" type="text/css" href="mystyle.css',
        c: 'style rel="stylesheet" type="text/css" href="mystyle.css',
        d: 'iAll of the above',
      },
      correctAnswer: 'a'
    },
    {
      question: "c: 'In a CSS file, there is a CSS rule for paragraphs tags – what does p can be called?",
      answers: {
        a: 'selector',
        b: 'attribute',
        c: 'property',
        d: 'tag',
      },
      correctAnswer: 'a'
    },
    {
      question: "d:'Can comments also span multiple lines?",
      answers: {
        a: 'yes',
        b: 'no',
        c: 'yes and no',
        d: 'none of above',
      },
      correctAnswer: 'a'
    },
    {
      question: "5.Which CSS property is used to style the hyperlinks on hover (Mouse over)?",
      answers: {
        a: 'mouseover',
        b: 'move',
        c: 'mover',
        d: 'hover',
      },
      correctAnswer: 'd'
    },
    {
      question: "6.Which CSS property is used to specify the indentation of the first line of a text?",
      answers: {
        a: 'text-align',
        b: 'paqdding-left',
        c: 'margin-left',
        d: 'text-indent',
      },
      correctAnswer: 'd'
    },

    // balmik---------------------------------------------------------------------------------
    {
      question: "Which CSS property is used to specify the space between the characters in a text?",
      answers: {
        a: 'text-space',
        b: 'letter-space',
        c: 'letter-spacing',
        d: 'letter-distance',
      },
      correctAnswer: 'c'
    },
    {
      question: "Which CSS property is used to specify the space between lines?",
      answers: {
        a: 'line-space',
        b: 'line-spacing',
        c: 'line-padding',
        d: 'line-height',
      },
      correctAnswer: 'd'
    },
    {
      question: "Which CSS property adds shadow to text?",
      answers: {
        a: 'content-shadow',
        b: 'text-shadow',
        c: 'word-shadow',
        d: 'tent-outline',
      },
      correctAnswer: 'b'
    },
    {
      question: "The screen media type can be used with:",
      answers: {
        a: 'television-type devices',
        b: 'vcomputer devices',
        c: 'handheld screens',
        d: 'all devices',
      },
      correctAnswer: 'b'
    },
    {
        question: "Which CSS property is used to specify uppercase and lowercase letters in a text?",
        answers: {
            a: 'text-transform',
            b: 'text-case',
            c: 'case',
            d: 'text-casing',
    },
        correctAnswer: 'a'
    },
    {
        question: "Which of these measurements would define a measurement that is relative to the x-height of a font?",
        answers: {
            a: 'px',
            b: 'pt',
            c: 'em',
            d: 'ex',
    },
        correctAnswer: 'd'
    },
    {
        question: "Which property sets the actual amount of spacing between the various letters?",
        answers: {
            a: 'letter-spacing',
            b: ' letter-space',
            c: 'line-height',
            d: 'space',
    },
        correctAnswer: 'b'
    },
    {
    question: "Which of these protocols would enable a hyperlink to easily access any file on the available local file system?",
    answers: {
        a: 'ftp',
        b: 'https',
        c: 'telnet',
        d: 'file',
    },
        correctAnswer: 'd'
    },   
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }







  