const questions = [
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Lettuce", "Avocado", "Onion"],
    correctAnswer: "Avocado",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Marie Curie",
      "Albert Einstein",
      "Alexander Fleming",
      "Isaac Newton",
    ],
    correctAnswer: "Alexander Fleming",
  },
  {
    question: "How many chambers does the human heart have?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Earth", "Mars", "Mercury", "Venus"],
    correctAnswer: "Mercury",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Pb", "Hg"],
    correctAnswer: "Au",
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "United Kingdom", "United States"],
    correctAnswer: "Brazil",
  },
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "Florence", "Milan", "Venice"],
    correctAnswer: "Rome",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Who was the first man to walk on the moon?",
    options: [
      "Neil Armstrong",
      "Buzz Aldrin",
      "Michael Collins",
      "Yuri Gagarin",
    ],
    correctAnswer: "Neil Armstrong",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
    correctAnswer: "Hydrogen",
  },
  {
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    correctAnswer: "Cairo",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "India", "Japan", "South Korea"],
    correctAnswer: "Japan",
  },
  {
    question: "What is the main language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    correctAnswer: "Portuguese",
  },
  {
    question: "Who wrote 'The Odyssey'?",
    options: ["Homer", "Plato", "Aristotle", "Sophocles"],
    correctAnswer: "Homer",
  },
  {
    question: "What is the currency of the United Kingdom?",
    options: ["Euro", "Dollar", "Pound", "Franc"],
    correctAnswer: "Pound",
  },
  // Added Questions Below
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: "Vatican City",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    correctAnswer: "Diamond",
  },
  {
    question: "Which country is the largest producer of coffee?",
    options: ["Colombia", "Brazil", "Vietnam", "Ethiopia"],
    correctAnswer: "Brazil",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    correctAnswer: "Canberra",
  },
  {
    question: "What is the most spoken language in the world?",
    options: ["Spanish", "English", "Chinese", "Hindi"],
    correctAnswer: "Chinese",
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Skin", "Lung"],
    correctAnswer: "Skin",
  },
  {
    question: "Which element has the chemical symbol O?",
    options: ["Oxygen", "Osmium", "Oganesson", "Osmium"],
    correctAnswer: "Oxygen",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: "Ottawa",
  },
  {
    question: "Which planet is known as the Earth's twin?",
    options: ["Mars", "Jupiter", "Venus", "Mercury"],
    correctAnswer: "Venus",
  },
  {
    question: "What is the smallest bone in the human body?",
    options: ["Stapes", "Femur", "Humerus", "Clavicle"],
    correctAnswer: "Stapes",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "Christopher Marlowe",
      "John Milton",
      "William Shakespeare",
      "Geoffrey Chaucer",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the largest desert in the world?",
    options: [
      "Sahara Desert",
      "Arabian Desert",
      "Gobi Desert",
      "Antarctic Desert",
    ],
    correctAnswer: "Antarctic Desert",
  },
  {
    question: "Which is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    correctAnswer: "Nile River",
  },
  {
    question: "What is the most abundant gas in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    correctAnswer: "Nitrogen",
  },
  {
    question: "Which country has the most islands in the world?",
    options: ["Norway", "Canada", "Indonesia", "Sweden"],
    correctAnswer: "Sweden",
  },
  {
    question: "Who was the first female Prime Minister of India?",
    options: [
      "Indira Gandhi",
      "Sonia Gandhi",
      "Pratibha Patil",
      "Sarojini Naidu",
    ],
    correctAnswer: "Indira Gandhi",
  },
  {
    question: "Which planet is known for having a ring system?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correctAnswer: "Saturn",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
    correctAnswer: "Tokyo",
  },
  {
    question: "Who is the author of '1984'?",
    options: [
      "George Orwell",
      "Aldous Huxley",
      "J.K. Rowling",
      "Ernest Hemingway",
    ],
    correctAnswer: "George Orwell",
  },
  {
    question: "Which country is home to the kangaroo?",
    options: ["Australia", "New Zealand", "South Africa", "India"],
    correctAnswer: "Australia",
  },
  {
    question: "What is the most populated country in the world?",
    options: ["India", "United States", "China", "Indonesia"],
    correctAnswer: "China",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Thomas Edison",
      "Nikola Tesla",
      "Alexander Graham Bell",
      "Guglielmo Marconi",
    ],
    correctAnswer: "Alexander Graham Bell",
  },
  {
    question:
      "Which organ is responsible for pumping blood throughout the human body?",
    options: ["Lungs", "Liver", "Brain", "Heart"],
    correctAnswer: "Heart",
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["India", "China", "Japan", "South Korea"],
    correctAnswer: "Japan",
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: "100°C",
  },
  {
    question: "Who wrote the famous book 'War and Peace'?",
    options: [
      "Leo Tolstoy",
      "Fyodor Dostoevsky",
      "Charles Dickens",
      "Mark Twain",
    ],
    correctAnswer: "Leo Tolstoy",
  },
  {
    question: "Which city is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Who is the inventor of the light bulb?",
    options: [
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Albert Einstein",
      "Thomas Edison",
    ],
    correctAnswer: "Thomas Edison",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question:
      "Which country gifted the Statue of Liberty to the United States?",
    options: ["Canada", "France", "Germany", "United Kingdom"],
    correctAnswer: "France",
  },
  {
    question: "What is the main component of the sun?",
    options: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
    correctAnswer: "Hydrogen",
  },
  {
    question: "Who was the first President of the United States?",
    options: [
      "Abraham Lincoln",
      "John Adams",
      "George Washington",
      "Thomas Jefferson",
    ],
    correctAnswer: "George Washington",
  },
  {
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Mars", "Uranus"],
    correctAnswer: "Saturn",
  },
  {
    question: "What is the capital city of Spain?",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    correctAnswer: "Madrid",
  },
  {
    question: "Who is the famous scientist known for his theory of evolution?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Charles Darwin",
      "Galileo Galilei",
    ],
    correctAnswer: "Charles Darwin",
  },
  {
    question: "Which element is known as the 'King of Chemicals'?",
    options: ["Sulfur", "Chlorine", "Sodium", "Hydrochloric Acid"],
    correctAnswer: "Sulfur",
  },
  {
    question: "What is the main function of red blood cells?",
    options: [
      "Fight infections",
      "Carry oxygen",
      "Produce antibodies",
      "Clot blood",
    ],
    correctAnswer: "Carry oxygen",
  },
  {
    question: "Which country is known for the Great Wall?",
    options: ["India", "China", "Egypt", "Mexico"],
    correctAnswer: "China",
  },
  {
    question: "Which is the smallest continent by land area?",
    options: ["Europe", "Antarctica", "Australia", "South America"],
    correctAnswer: "Australia",
  },
  {
    question: "Who is the author of 'Pride and Prejudice'?",
    options: [
      "Charlotte Brontë",
      "Jane Austen",
      "Emily Brontë",
      "Mary Shelley",
    ],
    correctAnswer: "Jane Austen",
  },
  {
    question: "What is the hottest planet in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Venus",
  },
  {
    question: "Which country has the longest coastline?",
    options: ["Russia", "Canada", "Australia", "Indonesia"],
    correctAnswer: "Canada",
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    options: [
      "Marie Curie",
      "Mother Teresa",
      "Rosalind Franklin",
      "Jane Goodall",
    ],
    correctAnswer: "Marie Curie",
  },
  {
    question: "Which planet is known for its Great Red Spot?",
    options: ["Saturn", "Jupiter", "Mars", "Neptune"],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is the main ingredient in sushi?",
    options: ["Rice", "Noodles", "Bread", "Fish"],
    correctAnswer: "Rice",
  },
  {
    question: "Which country is the largest in the world by land area?",
    options: ["United States", "China", "Russia", "Canada"],
    correctAnswer: "Russia",
  },
  {
    question: "Who was the first man in space?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    correctAnswer: "Yuri Gagarin",
  },
  {
    question: "Which is the most abundant element in the Earth's crust?",
    options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
    correctAnswer: "Oxygen",
  },
  {
    question: "What is the capital of South Korea?",
    options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    correctAnswer: "Seoul",
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Elephant", "Lion", "Tiger", "Leopard"],
    correctAnswer: "Lion",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    correctAnswer: "Mount Everest",
  },
  {
    question: "Who is the Greek god of the sea?",
    options: ["Zeus", "Poseidon", "Apollo", "Hades"],
    correctAnswer: "Poseidon",
  },
  {
    question: "What is the main ingredient in chocolate?",
    options: ["Vanilla", "Sugar", "Cocoa", "Milk"],
    correctAnswer: "Cocoa",
  },
  {
    question: "Which planet is known as the Morning Star?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    correctAnswer: "Venus",
  },
  {
    question: "Who wrote the Harry Potter series?",
    options: [
      "J.K. Rowling",
      "George R.R. Martin",
      "J.R.R. Tolkien",
      "Stephen King",
    ],
    correctAnswer: "J.K. Rowling",
  },
  {
    question: "Which country is the largest producer of rice?",
    options: ["India", "China", "Thailand", "Vietnam"],
    correctAnswer: "China",
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
    correctAnswer: "Moscow",
  },
  {
    question: "Which planet has the most volcanoes?",
    options: ["Earth", "Venus", "Mars", "Io"],
    correctAnswer: "Venus",
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    correctAnswer: "Charles Babbage",
  },
  {
    question: "What is the national sport of Japan?",
    options: ["Soccer", "Cricket", "Baseball", "Sumo Wrestling"],
    correctAnswer: "Sumo Wrestling",
  },
  {
    question: "Which ocean is the smallest?",
    options: [
      "Indian Ocean",
      "Arctic Ocean",
      "Atlantic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Arctic Ocean",
  },
  {
    question: "Who was the first woman to fly solo across the Atlantic Ocean?",
    options: [
      "Amelia Earhart",
      "Sally Ride",
      "Valentina Tereshkova",
      "Harriet Quimby",
    ],
    correctAnswer: "Amelia Earhart",
  },
  {
    question: "Which country is known as the 'Land of a Thousand Lakes'?",
    options: ["Finland", "Norway", "Sweden", "Iceland"],
    correctAnswer: "Finland",
  },
  {
    question: "Which element has the atomic number 6?",
    options: ["Oxygen", "Carbon", "Nitrogen", "Helium"],
    correctAnswer: "Carbon",
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: ["Mars", "Venus", "Mercury", "Pluto"],
    correctAnswer: "Mercury",
  },
  {
    question: "Who was the first President of India?",
    options: [
      "Jawaharlal Nehru",
      "Rajendra Prasad",
      "Indira Gandhi",
      "Sardar Vallabhbhai Patel",
    ],
    correctAnswer: "Rajendra Prasad",
  },
  {
    question: "Which country is the largest producer of tea?",
    options: ["India", "China", "Sri Lanka", "Japan"],
    correctAnswer: "China",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Dollar", "Euro"],
    correctAnswer: "Yen",
  },
  {
    question: "Which organ in the human body produces insulin?",
    options: ["Liver", "Pancreas", "Kidney", "Stomach"],
    correctAnswer: "Pancreas",
  },
  {
    question: "What is the capital of Norway?",
    options: ["Oslo", "Bergen", "Stockholm", "Copenhagen"],
    correctAnswer: "Oslo",
  },
  {
    question: "Who is the author of 'The Catcher in the Rye'?",
    options: [
      "J.D. Salinger",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "Mark Twain",
    ],
    correctAnswer: "J.D. Salinger",
  },
  {
    question: "Which country is the largest producer of bananas?",
    options: ["India", "Brazil", "China", "Indonesia"],
    correctAnswer: "India",
  },
  {
    question: "Which is the longest bone in the human body?",
    options: ["Femur", "Tibia", "Fibula", "Humerus"],
    correctAnswer: "Femur",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: "100°C",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Albert Einstein",
    ],
    correctAnswer: "Alexander Graham Bell",
  },
  {
    question: "Which organ is known as the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
    correctAnswer: "Mitochondria",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let currentPrize = "0 Rs";
const userAnswers = [];
const shuffledOptions = new Array(15).fill(null); // Adjusted to match the number of selected questions

const totalQuestionsToShow = 15;
let selectedQuestions = [];

// Function to select random 15 questions
function selectRandomQuestions() {
  const shuffledQuestions = [...questions];
  shuffle(shuffledQuestions); // Shuffle the questions array
  selectedQuestions = shuffledQuestions.slice(0, totalQuestionsToShow); // Select the first 15 questions
}

const ladderPrizes = document.querySelectorAll("#ladder li");

// Lifeline usage tracking
const usedLifelines = {
  audiencePoll: false,
  fiftyFifty: false,
  expertAdvice: false,
};

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const playAgainButton = document.getElementById("play-again");
const lifelineDiv = document.getElementById("lifelines");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuestion() {
  nextButton.disabled = false;
  prevButton.disabled = currentQuestionIndex === 0;

  // Reset all money ladder items to their default color
  ladderPrizes.forEach((li, index) => {
    if (userAnswers[index]) {
      li.style.backgroundColor =
        userAnswers[index] === selectedQuestions[index].correctAnswer
          ? "green"
          : "red";
    } else {
      li.style.backgroundColor = "";
    }
  });

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";

  // Highlight the current prize in yellow
  ladderPrizes[currentQuestionIndex].style.backgroundColor = "yellow";

  // Check if options have been shuffled for this question
  if (!shuffledOptions[currentQuestionIndex]) {
    shuffledOptions[currentQuestionIndex] = [...currentQuestion.options];
    shuffle(shuffledOptions[currentQuestionIndex]);
  }

  shuffledOptions[currentQuestionIndex].forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;

    // Check if this option was previously selected
    if (userAnswers[currentQuestionIndex] === option) {
      if (option === currentQuestion.correctAnswer) {
        button.classList.add("correct");
        ladderPrizes[currentQuestionIndex].style.color = "black";
      } else {
        button.classList.add("incorrect");
        button.disabled = true;
        ladderPrizes[currentQuestionIndex].style.color = "black";
      }
    }

    button.addEventListener("click", () => selectAnswer(option, button));
    optionsEl.append(button);
  });

  // Disable all buttons if an answer has already been selected for the current question
  if (userAnswers[currentQuestionIndex]) {
    Array.from(optionsEl.children).forEach((btn) => (btn.disabled = true));
    nextButton.disabled = false;
  }
}

function selectAnswer(selectedOption, button) {
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const correct = selectedOption === currentQuestion.correctAnswer;

  Array.from(optionsEl.children).forEach((btn) => {
    if (btn === button && !correct) {
      btn.classList.add("incorrect");
    } else if (btn.innerText === currentQuestion.correctAnswer) {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });

  if (correct) {
    ladderPrizes[currentQuestionIndex].style.backgroundColor = "green";
    currentPrize =
      ladderPrizes[currentQuestionIndex].getAttribute("data-prize");
  } else {
    ladderPrizes[currentQuestionIndex].style.backgroundColor = "red";
    setTimeout(() => {
      endQuiz();
    }, 2000);
    return;
  }

  userAnswers[currentQuestionIndex] = selectedOption;

  // Update the score display
  scoreEl.textContent = `You Won: ${currentPrize}`;

  // Disable the Next button initially
  nextButton.disabled = true;

  // Automatically move to the next question after a short delay
  setTimeout(() => {
    nextQuestion();
  }, 1000); // Adjust delay as needed (e.g., 1000 milliseconds = 1 second)
}

function restartQuiz() {
  currentQuestionIndex = 0;
  currentPrize = "0 Rs";
  scoreEl.textContent = `You Won: ${currentPrize}`; // Reset score display
  userAnswers.length = 0;
  shuffledOptions.fill(null); // Reset shuffled options
  nextButton.style.display = "inline";
  prevButton.style.display = "inline";
  nextButton.disabled = false;
  prevButton.disabled = true;

  // Reset the money ladder colors
  ladderPrizes.forEach((li) => {
    li.style.backgroundColor = ""; // Reset to default
  });

  // Re-select random questions
  selectRandomQuestions();

  // Load the first question
  loadQuestion();

  // Reset lifelines
  usedLifelines.audiencePoll = false;
  usedLifelines.fiftyFifty = false;
  usedLifelines.expertAdvice = false;

  // Reset lifeline button styles
  const lifelineButtons = document.querySelectorAll("#lifelines button");
  lifelineButtons.forEach((button) => {
    button.style.backgroundColor = "";
    button.disabled = false;
  });

  // Hide the "Play Again" button
  playAgainButton.style.display = "none";

  // Hide all modals
  document.getElementById("audiencePollModal").style.display = "none";
  document.getElementById("expertAdviceModal").style.display = "none";
}

// Initial call to select random questions and start the quiz
selectRandomQuestions();
loadQuestion();

nextButton.addEventListener("click", () => {
  nextQuestion();
});

prevButton.addEventListener("click", () => {
  previousQuestion();
});

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < totalQuestionsToShow) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function endQuiz() {
  questionEl.textContent = `Quiz Over! You won: ${currentPrize}`;
  optionsEl.innerHTML = "";

  // Hide Next and Prev buttons
  nextButton.style.display = "none";
  prevButton.style.display = "none";
  lifelineDiv.style.display = "none";

  // Show the "Play Again" button
  playAgainButton.style.display = "block";
}

// Add this to your existing code
playAgainButton.addEventListener("click", () => {
  restartQuiz();

  // Hide the "Play Again" button
  playAgainButton.style.display = "none";
});

// Initial setup: Hide the "Play Again" button
playAgainButton.style.display = "none";

// Audience Poll Function
function useAudiencePoll() {
  if (usedLifelines.audiencePoll) {
    alert("Audience Poll already used!");
    return;
  }

  usedLifelines.audiencePoll = true;

  // Grey out the button
  const audiencePollButton = document.getElementById("audience-poll");
  audiencePollButton.style.backgroundColor = "grey";
  audiencePollButton.disabled = true;

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const options = currentQuestion.options;
  const correctOption = currentQuestion.correctAnswer;

  // Randomly determine the percentage for the correct answer between 50% and 100%
  const minPercentage = 50;
  const maxPercentage = 100;
  const correctAnswerPercentage =
    Math.floor(Math.random() * (maxPercentage - minPercentage + 1)) +
    minPercentage;

  // Initialize votes
  const votes = options.reduce((acc, option) => {
    acc[option] = 0;
    return acc;
  }, {});

  // Allocate votes
  votes[correctOption] = correctAnswerPercentage;
  const remainingPercentage = 100 - correctAnswerPercentage;

  // Distribute remaining percentage among other options
  const remainingOptions = options.filter((option) => option !== correctOption);
  if (remainingOptions.length > 0) {
    const perOptionPercentage = Math.floor(
      remainingPercentage / remainingOptions.length
    );
    remainingOptions.forEach((option) => {
      votes[option] = perOptionPercentage;
    });

    // Adjust to ensure total is exactly 100%
    const adjustedRemainingPercentage =
      remainingPercentage - perOptionPercentage * remainingOptions.length;
    if (remainingOptions.length > 0) {
      votes[remainingOptions[0]] += adjustedRemainingPercentage;
    }
  }

  // Display results
  const pollResultsList = document.getElementById("pollResultsList");
  pollResultsList.innerHTML = "";
  for (const option in votes) {
    const listItem = document.createElement("li");
    listItem.textContent = `${option}: ${votes[option]}%`;
    pollResultsList.appendChild(listItem);
  }

  // Show the audience poll modal
  document.getElementById("audiencePollModal").style.display = "block";
}

// 50-50 Function
function useFiftyFifty() {
  if (usedLifelines.fiftyFifty) {
    alert("50-50 already used!");
    return;
  }

  usedLifelines.fiftyFifty = true;

  // Grey out the button
  document.getElementById("fifty-fifty").style.backgroundColor = "grey";
  document.getElementById("fifty-fifty").disabled = true;

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const correctAnswer = currentQuestion.correctAnswer;
  const options = [...currentQuestion.options];

  // Remove two incorrect options
  const incorrectOptions = options.filter((option) => option !== correctAnswer);
  shuffle(incorrectOptions);
  incorrectOptions.slice(0, 2).forEach((option) => {
    options.splice(options.indexOf(option), 1);
  });

  // Update the options display
  optionsEl.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", () => selectAnswer(option, button));
    optionsEl.appendChild(button);
  });
}

// Expert Advice Function
function useExpertAdvice() {
  if (usedLifelines.expertAdvice) {
    alert("Expert Advice already used!");
    return;
  }

  usedLifelines.expertAdvice = true;

  // Grey out the button
  document.getElementById("expert-advice").style.backgroundColor = "grey";
  document.getElementById("expert-advice").disabled = true;

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const expertAdviceText = document.getElementById("expertAdviceText");
  expertAdviceText.textContent = `The expert advises that the correct answer is "${currentQuestion.correctAnswer}".`;
  document.getElementById("expertAdviceModal").style.display = "block";
}

// Close Modal Function
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function handleDrag() {
  const ladderContainer = document.getElementById("money-ladder");

  // Check if the screen width is less than or equal to 480px (or any other breakpoint for small devices)
  if (window.innerWidth <= 480) {
    // Check the current transform style
    const currentTransform = ladderContainer.style.transform;

    // Toggle between translateY(0px) and translateY(600px) for small devices
    if (currentTransform === "translateY(0px)") {
      ladderContainer.style.transform = "translateY(600px)";
    } else {
      ladderContainer.style.transform = "translateY(0px)";
    }
  }
}


document.getElementById("puller").addEventListener("click", handleLadderDrag);
