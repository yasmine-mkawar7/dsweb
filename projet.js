function calculateScore() {
    const questions = document.querySelectorAll('.question');
    let score = 0;
    let correctAnswers = [];

    questions.forEach((question, index) => {
      const selectedAnswer = document.querySelector(`input[name="q${index + 1}"]:checked`);

      if (selectedAnswer) {
        if (selectedAnswer.value === 'a') {
          score++;
        }
      }

      const correctAnswer = question.querySelector('input[value="a"]').parentNode.textContent.trim();
      correctAnswers.push(`Question ${index + 1}: ${correctAnswer}`);
    });

    alert(`Your Score: ${score}/${questions.length}\n\nCorrect Answers:\n${correctAnswers.join('\n')}`);
  }
  