// Quiz data
const questions = [
    {
        question: "On which day did God create the heavens and the earth?",
        options: ["First day", "Second day", "Third day"],
        correct: "First day"
    },
    {
        question: "What did God create on the fourth day?",
        options: ["Sun, Moon, and Stars", "Land and Seas", "Birds and Fish"],
        correct: "Sun, Moon, and Stars"
    },
    {
        question: "From what did God create man?",
        options: ["Dust of the ground", "Water", "Light"],
        correct: "Dust of the ground"
    }
];

let usedQuestions = [];
let selectedOption = null;

// Function to display a random question
function displayQuestion() {
    // Hide and reset buttons
    document.getElementById("next-question-button").style.display = "none";
    document.getElementById("submit-button").disabled = true;
    document.getElementById("feedback").innerText = "";

    // Filter out already used questions
    const availableQuestions = questions.filter((q, index) => !usedQuestions.includes(index));

    if (availableQuestions.length === 0) {
        document.getElementById("feedback").innerText = "No more questions! Go back to Topics to start over.";
        document.getElementById("question-container").style.display = "none";
        return;
    }

    // Pick a random question from available ones
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];

    // Add to used questions
    const originalIndex = questions.indexOf(question);
    usedQuestions.push(originalIndex);

    // Update question and options in the DOM
    document.getElementById("question").innerText = question.question;
    const optionsButtons = document.querySelectorAll(".option");

    question.options.forEach((option, index) => {
        optionsButtons[index].innerText = option;
        optionsButtons[index].dataset.correct = (option === question.correct);
        optionsButtons[index].disabled = false;
        optionsButtons[index].classList.remove('selected');
    });

    selectedOption = null;  // Reset selected option
}

// Function to select an option
function selectOption(button) {
    const optionsButtons = document.querySelectorAll(".option");
    optionsButtons.forEach(btn => btn.classList.remove('selected'));  // Remove selection from all
    button.classList.add('selected');  // Highlight selected option
    selectedOption = button;  // Store selected option
    document.getElementById("submit-button").disabled = false;  // Enable submit button
}

// Function to submit the answer
function submitAnswer() {
    if (!selectedOption) return;

    const feedback = document.getElementById("feedback");

    if (selectedOption.dataset.correct === "true") {
        feedback.innerText = "Correct!";
    } else {
        // Provide correct answer if the selected option is incorrect
        const correctAnswer = questions.find(q => q.question === document.getElementById("question").innerText).correct;
        feedback.innerText = `Incorrect. The correct answer is: ${correctAnswer}.`;
    }

    // Disable all options after answering
    const optionsButtons = document.querySelectorAll(".option");
    optionsButtons.forEach(btn => btn.disabled = true);

    // Show the "Next Question" button
    document.getElementById("next-question-button").style.display = "block";
}

// Initialize the quiz
displayQuestion();
