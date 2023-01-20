// produce a list of questions javascript fundementals for a quiz
// 1. create an array of questions
// 2. create a function to display the questions
// 3. create a function to display the answers
// 4. create a function to check the answers
// 5. create a function to display the score
// 6. create a function to display the results

// 1. create an array of questions
var questions = [
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",

        answers: {
            a: "<script href='xxx.js'>",
            b: "<script name='xxx.js'>",
            c: "<script tag='xxx.js"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: {
            a: "msgBox('Hello World');",
            b: "alertBox('Hello World');",
            c: "alert('Hello World');"
        },
        correctAnswer: "c"
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: {
            a: "function = myFunction()",
            b: "function myFunction()",
            c: "function:myFunction()"
        },
        correctAnswer: "b"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answers: {
            a: "call function myFunction()",
            b: "call myFunction()",
            c: "myFunction()"
        },
        correctAnswer: "c"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: {
            a: "if i = 5",
            b: "if i == 5 then",
            c: "if (i == 5)"
        },
        correctAnswer: "c"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: {
            a: "if (i != 5)",
            b: "if i <> 5",
            c: "if (i <> 5)"
        },
        correctAnswer: "a"
    },
    {
        question: "How does a WHILE loop start?",
        answers: {
            a: "while (i <= 10)",
            b: "while i = 1 to 10",
            c: "while (i <= 10; i++)"
        },
        correctAnswer: "a"
    },
    {
        question: "How does a FOR loop start?",
        answers: {
            a: "for (i = 0; i <= 5)",
            b: "for (i <= 5; i++)",
            c: "for (i = 0; i <= 5; i++)"
        },
        correctAnswer: "c"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: {
            a: "'This is a comment",
            b: "//This is a comment",
            c: "<!--This is a comment-->"
        },
        correctAnswer: "b"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: {
            a: "rnd(7.25)",
            b: "Math.rnd(7.25)",
            c: "Math.round(7.25"
        },
        correctAnswer: "c"
    }
];