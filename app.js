// Select all the questions
const questions = document.querySelectorAll('.question');

// For each question...
questions.forEach(function(question) {
    // Select the plus button and the answer inside the question
    const btn = question.querySelector('.question-btn');
    const answer = question.querySelector('.question-text');

    // When the plus button is clicked...
    btn.addEventListener('click', function() {
        // Toggle the 'hidden' class on the answer
        answer.classList.toggle('hidden');
    });
});
