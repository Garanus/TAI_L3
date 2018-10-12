(function() {
    const myQuestions = [
        {
            question: "Co jest lepsze? ",
            answers: {
                a: "C++",
                b: "JavaScript",
                c: "Python"
            },
            correctAnswer: "b"
        },
        {
            question: "Ile przecietny czlowiek zjada",
            answers: {
                a: "4 cheeseburgery",
                b: "3 porcje frytek",
                c: "8 kebabow"
            },
            correctAnswer: "a"
        },
        {
            question: "Jaki jest cel testowania umiejetnosci kodowania",
            answers: {
                a: "Odkrywanie zycia",
                b: "Przygotowanie na studia",
                c: "Bo tak",
                d: "Nie wiem"
            },
            correctAnswer: "b"
        },
        {
            question: "Ktora strona nie kradnie informacji o Tobie",
            answers: {
                a: "facebook",
                b: "google",
                c: "Wszyscy kradną"
            },
            correctAnswer: "c"
        },
        {
            question: "Co jest zdrowe na śniadanie",
            answers: {
                a: "Barszcz z uszkami",
                b: "Mleko",
                c: "Jajeczniczka"
            },
            correctAnswer: "b"
        },
        {
            question: "Kto jest najlepszy?",
            answers: {
                a: "Lewandowski",
                b: "Ronaldo",
                c: "Misiek"
            },
            correctAnswer: "c"
        },
        {
            question: "Czy misiek wszystko zda?",
            answers: {
                a: "TAK",
                b: "Nie",
                c: "Nie wiem"
            },
            correctAnswer: "c"
        },
        {
            question: "Ile wynosi czas ładowanie strony w html?",
            answers: {
                a: "Nie wiem",
                b: "Nie mam pojęcia",
                c: "Testuje"
            },
            correctAnswer: "c"
        },
        {
            question: "Ile masz lat jeżeli jesteś z 95 roku?",
            answers: {
                a: "23",
                b: "22",
                c: "100"
            },
            correctAnswer: "a"
        },
        {
            question: "Ile trwają studia inżynierskie na kierunku informatyka?",
            answers: {
                a: "3 lata",
                b: "7 semestrów",
                c: "10 misięcy"
            },
            correctAnswer: "b"
        }
    ];

    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} Poprawne na : ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();