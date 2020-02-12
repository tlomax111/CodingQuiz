    const hsButton = document.getElementById("high-scores")

    const startbutton = document.getElementById("startbutton")

    const question1 = document.getElementById("first-question")

    const question2 = document.getElementById("second-question")

    const question3 = document.getElementById("third-question")

    const question4 = document.getElementById("fourth-question")

    const question5 = document.getElementById("fifth-question")
       
        var questionList = [

            {
                q: "Commonly used data types DO NOT include",
                a: "strings",
                b: "booleans",
                c: "alerts",
                d: "numbers",
                answer: "c"
            },
            {
                q: "The condition in an if else statement is enclosed witihn ____", a: "quotes",
                b: "curly bracket",
                c: "parantheses",
                d: "square brackets",
                answer: "c"
            },
            {
                q: "Arrays in Javascript can be used to store",
                a: "numbers and strings",
                b: "other arrays",
                c: "booleans",
                d: "All of the above",
                answer: "d"
            },
            {
                q: "Sting values must be enclosed within____ when being assigned to variables.",
                a: "commas",
                b: "curly brackets",
                c: "quotes",
                d: "parentheses",
                answer: "c"
            },
            {
                q: "A very useful tool uded during development and debbugging for pronting content tot he debugger is:",
                a: "Javascritp",
                b: "terminal/bash",
                c: "for loops",
                d: "console log",
                answer: "d",
                useranswer: ""
            }];

            // var userScore=0;
            
            // function startQuiz(){
            //     document.getElementById("#first-question")
            //     firstquestionfunction()

            // }

            questionList[0].q

            questionList[0].a

            questionList[0].b
            
            questionList[0].c

            questionList[0].d

            questionList[0].answer
            
            

            let lastQuestionIndex = questionList.length-1

            let goQuiz = 0;

            function renderQuestion() {
                let quiz = questions[goQuiz];
                question.innerHTML 

            }
            
            const start = document.getElementById("start");
            

            const quiz = document.getElementById("startbutton");

            const question = document.getElementById("quiz");

            const counter = document.getElementById("timeGauge");


            const choiceA= document.getElementById("A");
            const choiceB = document.getElementById("B");
            const choiceC = document.getElementById("C");
            const choiceD= document.getElementById("D");
        


            const score = document.getElementById("userScore");



           