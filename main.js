let questionsData = [
    {
        text: "Est-ce qu'une femme peut être allergique à votre sperme ?",
        answers: [
            {
                text: "Vrai",
                isCorrect: true
            },
            {
                text: "Faux",
                isCorrect: false
            }
        ]
    },
    {
        text: "Que faut-il faire en cas de rupture du frein",
        answers: [
            {
                text: "Je ne fais rien",
                isCorrect: false
            },
            {
                text: "Je previens un proche et je vais aux urgences",
                isCorrect: true
            },
            {
                text: "Je me recoud tout seul",
                isCorrect: false
            },
            {
                text: "Je mets un pensemant",
                isCorrect: false
            }
        ]
    },
    {
        text: "Qu'est-ce que le point G",
        answers: [
            {
                text: "Une zone très sensible sur la face antérieure du vagin",
                isCorrect: true
            },
            {
                text: "Un point sur une carte",
                isCorrect: false
            },
            {
                text: "Une figure de style",
                isCorrect: false
            },
            {
                text: "Une fonction en mathématiques",
                isCorrect: false
            }
        ]
    },
    {
        text: "Quel âge doit-on avoir pour acheter des préservatifs ?",
        answers: [
            {
                text: "12",
                isCorrect: false
            },
            {
                text: "15",
                isCorrect: false
            },
            {
                text: "18",
                isCorrect: false
            },
            {
                text: "Il n'y a pas d'âge pour en acheter",
                isCorrect: true
            }
        ]
    },
    {
        text: "Quel est le temps moyen d'un rapport sexuel ?",
        answers: [
            {
                text: "52 secondes",
                isCorrect: true
            },
            {
                text: "2,1 minutes",
                isCorrect: false
            },
            {
                text: "5,4 minutes",
                isCorrect: true
            },
            {
                text: "7,6 minutes",
                isCorrect: false
            }
        ]
    },
    {
        text: "Peut-on attraper le sida en embrassant une personne séropositive",
        answers: [
            {
                text: "Oui",
                isCorrect: false
            },
            {
                text: "Non",
                isCorrect: true
            }
        ]
    },
    {
        text: "Quel est le temps moyen d'un rapport sexuel ?",
        answers: [
            {
                text: "52 secondes",
                isCorrect: true
            },
            {
                text: "2,1 minutes",
                isCorrect: false
            },
            {
                text: "5,4 minutes",
                isCorrect: true
            },
            {
                text: "7,6 minutes",
                isCorrect: false
            }
        ]
    }
];

// variables initialization
let questions = [];
let score = 0,
    answeredQuestions = 0;
let appContainer = document.getElementById("questions-container");
let scoreContainer = document.getElementById("score-container");
scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;

/**
 * Shuffles array in place. ES6 version
 * @param {Array} arr items An array containing the items.
 */
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

shuffle(questionsData);

// creating questions
for (var i = 0; i < questionsData.length; i++) {
    let question = new Question({
        text: questionsData[i].text,
        answers: questionsData[i].answers
    });

    appContainer.appendChild(question.create());
    questions.push(question);
}

document.addEventListener("question-answered", ({ detail }) => {
    if (detail.answer.isCorrect) {
        score++;
    }

    answeredQuestions++;
    scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
    detail.question.disable();

    if (answeredQuestions == questions.length) {
        setTimeout(function () {
            alert(`Quiz terminé ! \nScore Final : ${score}/${questions.length}`);
        }, 100);
    }
});

console.log(questions, questionsData);
