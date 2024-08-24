// Quiz data
const questions = [
    {
        question: "FILL IN THE BLANK: In the ___ God created the heavens and the earth. Genesis 1:1",
        options: ["beginning", "morning", "times"],
        correct: "beginning"
    },
    {
        question: "FILL IN THE BLANK: In the beginning God created the ___ and the ___. Genesis 1:1",
        options: ["moon, sun", "heavens, earth", "night, day"],
        correct: "heavens, earth"
    },
    {
        question: "FILL IN THE BLANK: The ___ was without form, and void… Genesis 1:2",
        options: ["man", "water", "earth"],
        correct: "earth"
    },
    {
        question: "FILL IN THE BLANK: The earth was without ___, and void… Genesis 1:2",
        options: ["form", "water", "life"],
        correct: "form"
    },
    {
        question: "FILL IN THE BLANK: The earth was without form, and void; and ___ was on the face of the deep… Genesis 1:2",
        options: ["God", "darkness", "emptiness"],
        correct: "darkness"
    },
    {
        question: "FILL IN THE BLANK: The earth was without form, and void; and darkness was on the face of the deep. And the Spirit of God was hovering over the face of the ___. Genesis 1:2",
        options: ["earth", "deep", "waters"],
        correct: "waters"
    },
    {
        question: "FILL IN THE BLANK: Then God said, “Let there be ___”; and there was ___. Genesis 1:3",
        options: ["light", "life", "night"],
        correct: "light"
    },
    {
        question: "FILL IN THE BLANK: And God saw the light, that it was ___... Genesis 1:4",
        options: ["formed", "good", "bright"],
        correct: "good"
    },
    {
        question: "FILL IN THE BLANK: … and God divided the light from the ___. Genesis 1:4",
        options: ["heavens", "void", "darkness"],
        correct: "darkness"
    },
    {
        question: "FILL IN THE BLANK: … So the ___ and the morning were the first day. Genesis 1:5",
        options: ["evening", "night", "darkness"],
        correct: "evening"
    },
    {
        question: "FILL IN THE BLANK: Then God said, “Let there be a firmament in the midst of the ___, and let it divide the waters from the waters.” Genesis 1:6",
        options: ["darkness", "waters", "earth"],
        correct: "waters"
    },
    {
        question: "QUESTION: Who created the heavens and the earth? Genesis 1: 1",
        options: ["God", "Adam", "Moses"],
        correct: "God"
    },
    {
        question: "QUESTION: When did God create the heavens and the earth? Genesis 1:1",
        options: ["In the day", "In the beginning", "In the night"],
        correct: "In the beginning"
    },
    {
        question: "QUESTION: When the earth was without form and void and when darkness was on the face of the deep, who was hovering over the face of the waters? Genesis 1:2",
        options: ["God", "Man", "the Spirit of God"],
        correct: "the Spirit of God"
    },
    {
        question: "QUESTION: In Genesis 1:2, what was without form and void?",
        options: ["The earth", "The waters", "The Spirit of God"],
        correct: "The earth"
    },
    {
        question: "QUESTION: In Genesis 1:4, what did God divide from the darkness? Genesis 1:4",
        options: ["the heavens", "the light", "earth"],
        correct: "the light"
    },
    {
        question: "QUESTION: In Genesis 1:4, what did God say let there be on the first day? Genesis 1:4",
        options: ["man", "land", "light"],
        correct: "light"
    },
    {
        question: "QUESTION: In Genesis 1:5, what did God call the light? Genesis 1:5",
        options: ["Day", "Sun", "Morning"],
        correct: "Day"
    },
    {
        question: "QUESTION: In Genesis 1:5, what did God call the darkness? Genesis 1:5",
        options: ["Moon", "Night", "Noon"],
        correct: "Night"
    },
    {
        question: "TRUE OR FALSE: God created the heavens and the earth. Genesis 1:1",
        options: ["TRUE", "FALSE", " "],
        correct: "TRUE"
    },
    {
        question: "TRUE OR FALSE: God created the heavens and the earth last. Genesis 1:1",
        options: ["TRUE", "FALSE", " "],
        correct: "FALSE"
    },
    {
        question: "TRUE OR FALSE: In the beginning, the earth was without form and void. Genesis 1:2",
        options: ["TRUE", "FALSE", " "],
        correct: "TRUE"
    },
    {
        question: "TRUE OR FALSE: Then God said, “Let there be light”; and there was light. Genesis 1:3",
        options: ["TRUE", "FALSE", " "],
        correct: "TRUE"
    },
    {
        question: "TRUE OR FALSE: God created light on the second day. Genesis 1:4",
        options: ["TRUE", "FALSE", " "],
        correct: "FALSE"
    },
    {
        question: "TRUE OR FALSE: God divided the light from the darkness on the first day. Genesis 1:4",
        options: ["TRUE", "FALSE", " "],
        correct: "TRUE"
    },
    {
        question: "GUESS THE VERSE: In Genesis chapter 1, what verse reads: In the beginning God created the heavens and the earth.",
        options: ["1", "2", "3"],
        correct: "1"
    },
    {
        question: "GUESS THE VERSE: In Genesis chapter 1, what verse reads: Then God said, “Let there be light”; and there was light.",
        options: ["2", "3", "4"],
        correct: "3"
    },
    {
        question: "GUESS THE VERSE: In Genesis chapter 1, what verse reads: And God saw the light, that it was good; and God divided the light from the darkness.",
        options: ["2", "3", "4"],
        correct: "4"
    },
    {
        question: "FILL IN THE BLANK: And God called the firmament ___. So the evening and the morning were the second day. Genesis 1:8",
        options: ["sky", "water", "Heaven"],
        correct: "Heaven"
    },
    {
        question: "FILL IN THE BLANK: And God called the firmament Heaven. So the evening and the morning were the ___ day. Genesis 1:8",
        options: ["second", "third", "fourth"],
        correct: "second"
    },
    {
        question: "FILL IN THE BLANK: Then God said, “Let the waters under the heavens be gathered together into one place, and let the ___ ___ appear; and it was so. Genesis 1:9",
        options: ["tall trees", "dry land", "high mountains"],
        correct: "dry land"
    },
    {
        question: "FILL IN THE BLANK: And God called the dry land___, and the gathering together of the waters He called Seas. And God saw that it was good. Genesis 1:10",
        options: ["dirt", "plains", "Earth"],
        correct: "Earth"
    },
    {
        question: "FILL IN THE BLANK: And God called the dry land Earth, and the gathering together of the waters He called ___. And God saw that it was good. Genesis 1:10",
        options: ["Seas", "lakes", "rivers"],
        correct: "Seas"
    },
    {
        question: "FILL IN THE BLANK: Then God said, “Let the earth bring forth ___, the ___ that yields seed, and the ___ tree that yields fruit according to its kind, whose seed is in itself, on the earth”; and it was so. Genesis 1:11",
        options: ["fruit, kind, leafy", "grass, herb, fruit", "fruit, herb, tall"],
        correct: "grass, herb, fruit"
    },
    {
        question: "FILL IN THE BLANK: Then God said, “Let there be lights in the firmament of the heavens to divide the day from the ___; and let them be for signs and seasons, and for days and years; Genesis 1:14",
        options: ["void", "darkness", "night"],
        correct: "night"
    },
    {
        question: "QUESTION: What did God call the ‘dry land’ in Genesis chapter 1? Genesis 1:10",
        options: ["Land", "Dirt", "Earth"],
        correct: "Earth"
    },
    {
        question: "QUESTION: What did God call the ‘gathering together of the waters’ in Genesis chapter 1? Genesis 1:10",
        options: ["Seas", "Lakes", "Rivers"],
        correct: "Seas"
    },
    {
        question: "QUESTION: What did God create on the 3rd day? Genesis 1:11-13",
        options: ["birds", "grass, herbs, and fruit trees", "dry land"],
        correct: "grass, herbs, and fruit trees"
    },
    {
        question: "TRUE OR FALSE: God called the ‘dry land’ Land. Genesis 1:10",
        options: ["TRUE", "FALSE", " "],
        correct: "FALSE"
    },
    {
        question: "TRUE OR FALSE: God called the ‘gathering together of the waters’ Seas. Genesis 1:10",
        options: ["TRUE", "FALSE", " "],
        correct: "TRUE"
    },
    {
        question: "TRUE OR FALSE: Then God said, “Let the earth bring forth fruit, the herb that yields seed, and the fruit tree that yields fruit according to its kind… Genesis 1:11",
        options: ["TRUE", "FALSE", " "],
        correct: "FALSE"
    },
    {
        question: "GUESS THE VERSE: In Genesis chapter 1, what verse reads: Then God said, “Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.”",
        options: ["6", "5", "8"],
        correct: "6"
    },
    {
        question: "GUESS THE VERSE: In Genesis chapter 1, what verse reads: Thus God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament; and it was so.",
        options: ["9", "7", "12"],
        correct: "7"
    },
    {
        question: "GUESS THE VERSE: In Genesis chapter 1, what verse reads: And God called the firmament Heaven. So the evening and the morning were the ___ day.",
        options: ["5", "7", "8"],
        correct: "8"
    },
    {
        question: "GUESS THE VERSE: In Genesis chapter 1, what verse reads: Then God said, “Let the waters under the heavens be gathered together into one place, and let the dry land appear; and it was so..",
        options: ["9", "12", "10"],
        correct: "9"
    },
    {
        question: "GUESS THE VERSE: In Genesis chapter 1, which verse reads: And God called the dry land Earth, and the gathering together of the waters He called Seas. And God saw that it was good.",
        options: ["8", "10", "12"],
        correct: "10"
    },
    {
        question: "GUESS THE VERSE: In Genesis chapter 1, which verse reads: Then God said, “Let the earth bring forth grass, the herb that yields seed, and the fruit tree that yields fruit according to its kind, whose seed is in itself, on the earth”; and it was so.",
        options: ["5", "9", "11"],
        correct: "11"
    },
    {
        question: "GUESS THE VERSE: In Genesis chapter 1, which verse reads: Then God said, “Let there be lights in the firmament of the heavens to divide the day from the night; and let them be for signs and seasons, and for days and years;",
        options: ["14", "20", "22"],
        correct: "14"
    },
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
