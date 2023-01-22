export function questions() {

  // questions and answers from https://www.interviewbit.com/javascript-mcq/
  
  let questionsList = [
    {
      title:
        'Javascript is an _______ language?',
      answers: ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above'],
      correct: 0,
    },

    {
      title:
        'Which of the following keywords is used to define a variable in Javascript??',
      answers: ['var', 'let', 'Both A and B', 'None of the above'],
      correct: 2,
    },

    {
      title:
        'Which of the following methods is used to access HTML elements using Javascript?',
      answers: ['getElementById()', 'getElementsByClassName()', 'Both A and B', 'none of the above'],
      correct: 2,
    },

    {
      title:
        'Which of the following methods can be used to display data in some form using Javascript?',
      answers: ['document.write()', 'console.log()', 'window.alert()', 'All of the above'],
      correct: 3,
    },

    {
      title:
        'How can a datatype be declared to be a constant type?',
      answers: ['const', 'var', 'let', 'constant'],
      correct: 0,
    },

    {
      title:
        'What keyword is used to check whether a given property is valid or not?',
      answers: ['in', 'is in', 'exists', 'lies'],
      correct: 0,
    },

    {
      title:
        'What is the use of the <noscript> tag in Javascript?',
      answers: ['The contents are displayed by non-JS-based browsers', 'Clears all the cookies and cache', 'Both A and B', 'None of the above'],
      correct: 0,
    },

    {
      title:
        'When an operator’s value is NULL, the typeof returned by the unary operator is:',
      answers: ['Boolean', 'Undefined', 'Object', 'Integer'],
      correct: 2,
    },

    {
      title:
        'Which of the following is not a Javascript framework?',
      answers: ['Node', 'Vue', 'React', 'Cassandra'],
      correct: 3,
    },

    {
      title:
        'How do we write a comment in javascript?',
      answers: ['/* */', '//', '#', '$$'],
      correct: 1,
    },

  ];

  questionsList = questionsList.slice(0, 10);
  return questionsList;
}
