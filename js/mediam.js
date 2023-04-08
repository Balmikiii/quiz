var myQuestions = [
    {
      question: "a: 'The “color:red” in CSS can be known as _____________:",
      answers: {
        a: 'value',
        b: 'declaration',
        c: 'selector',
        d: 'rule'
        },
      correctAnswer: 'b'
    },
    {
      question: "b: 'Which selector do we use to specify the rule for binding some particular unique element?",
      answers: {
        a: 'class',
        b: 'tag',
        c: 'both tag and class',
        d: 'id',
      },
      correctAnswer: 'd'
    },
    {
      question: "c: 'Which of these functions would convert the color of an element by the filter property to a grey shade, for use?",
      answers: {
        a: 'grayscale()',
        b: 'shade()',
        c: 'brightness()',
        d: 'black()',
      },
      correctAnswer: 'a'
    },
    {
      question: "d:'Which of these functions is the 2D transformation in the matrix format?",
      answers: {
        a: 'perspective',
        b: 'matrix3d()',
        c: 'matrix2d()',
        d: '4matrix()',
      },
      correctAnswer: 'd'
    },
    {
      question: "5.Which value is a slightly bolder weight than the standard bold in the font attribute?",
      answers: {
        a: 'dark',
        b: 'Llighter',
        c: 'light',
        d: 'emphasizee',
      },
      correctAnswer: 'a'
    },
    {
      question: "6.The CSS property that is equivalent to the align attribute is:",
      answers: {
        a: 'text-align',
        b: 'float',
        c: 'text-align&float',
        d: 'centre',
      },
      correctAnswer: 'b'
    },

    // balmik---------------------------------------------------------------------------------
    {
      question: "No single, integrated ____________________ specification exists, because it gets split into various separate modules:",
      answers: {
        a: 'css4',
        b: 'css3',
        c: 'css2',
        d: 'css1',
      },
      correctAnswer: 'a'
    },
    {
      question: "___________ describes the CSS properties for manipulating the “ruby” position, that are small annotations next to or on top of words, especially common in Japanese and Chinese.",
      answers: {
        a: 'text-align',
        b: 'lang',
        c: 'ruby',
        d: 'align',
      },
      correctAnswer: 'c'
    },
    {
      question: "What tag do you use to directly write the style rules within a document found within the document’s head?",
      answers: {
        a: 'css',
        b: 'style',
        c: 'php',
        d: 'script',
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
        question: "Which one is NOT the audio element’s attribute?",
        answers: {
            a: 'check',
            b: 'controls',
            c: 'loop',
            d: 'src',
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







  