
const quiz = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is 5 multiplied by 6?", answer: "30" },
  { question: "Who wrote 'Romeo and Juliet'?", answer: "shakespeare" },
  { question: "What is the largest mammal?", answer: "blue whale" }
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < quiz.length; i++) {
    let userAnswer = prompt(quiz[i].question);

    if (userAnswer) {
      userAnswer = userAnswer.toLowerCase().trim();
    }
    if (userAnswer === quiz[i].answer) {
      alert(" Correct!");
      score++;
    } else {
      alert(" Wrong! The correct answer is: " + quiz[i].answer);
    }
  }


  alert("🎉 Quiz Over! Your final score is: " + score + " out of " + quiz.length);
}

runQuiz();