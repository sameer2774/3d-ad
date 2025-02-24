const questions = [
    {
        images: [
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2U5nircwkvqjy57jZuFhXpqnjVnw5uxH7g&s", correct: true },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgevSvdV8zKLPhV7XU3f8RlbtSoQqcLGh5vw&s", correct: false }
        ],
        message: "Try Again!"
    },
    {
        images: [
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0vzjLTHSDflIcz9nIkBrMWdVv8oUa8LC-g&s", correct: true },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Gwf6oP1efvx4aC3bh-_-lQURscC2Lod2w&s", correct: false }
        ],
        message: "Oops, not this one!"
    },
    {
        images: [
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfABTvdShrFNkVr5CFSnCoSqQgghi3M7WPoA&s", correct: false },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHoJBnr7PM6JxHzQrMDcIgcYaw7Av1M2ttt977lhHpPLq0Qskb7YqV0iBnQbliDaHq2E&usqp=CAU", correct: false }
        ],
        message: "Answer is wrong!",
        finalSlide: true
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const container = document.getElementById("question-container");
    const title = document.getElementById("title");
    container.innerHTML = "";

    const message = document.getElementById("message");
    message.innerText = "";

    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "none";

    if (questions[currentQuestion].finalSlide) {
        title.innerText = "Which is the MOON ! ";
    }

    questions[currentQuestion].images.forEach((imgObj) => {
        let img = document.createElement("img");
        img.src = imgObj.src;
        img.onclick = () => checkAnswer(imgObj.correct);
        container.appendChild(img);
    });
}

function checkAnswer(isCorrect) {
    const message = document.getElementById("message");
    const nextBtn = document.getElementById("next-btn");

    if (questions[currentQuestion].finalSlide) {
        message.innerText = "Answer is wrong!";
        setTimeout(() => showFinalSlide(), 2000);
    } else if (isCorrect) {
        message.innerText = "Correct! 🎉";
        nextBtn.style.display = "block";
    } else {
        message.innerText = questions[currentQuestion].message;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    }
}

function showFinalSlide() {
    const container = document.getElementById("question-container");
    const title = document.getElementById("title");
    const message = document.getElementById("message");

    container.innerHTML = "";
    title.innerText = "🫵🏻 You are the moon 🙈😁❤️✨";
    message.innerText = "";
}

loadQuestion();