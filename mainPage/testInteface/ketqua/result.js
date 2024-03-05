document.addEventListener('DOMContentLoaded', () => {
    const reviewButton = document.getElementById('rvBtn');
    const reviewQuestions = document.getElementById('reviewQuestions');

    reviewButton.addEventListener('click', () => {
        reviewQuestions.style.display = 'block';

        // Clear previous content
        reviewQuestions.innerHTML = '';

        // Array of questions with correct answers
        const questions = [
            {
                question: "Thành Manchester có màu gì?",
                correctAnswer: "A",
                explanation: "Thành Manchester có màu đỏ."
            },
            {
                question: "ai có khả năng lấy chồng sớm nhất?",
                correctAnswer: "B",
                explanation: "Hiếu lam bô có khả năng lấy chồng sớm nhất."
            },
            {
                question: "Bài này sẽ được mấy điểm?",
                correctAnswer: "D",
                explanation: "Bài này sẽ được nhóm 9 điểm Hưng 1 điểm."
            }
        ];

        // Loop through questions and add to reviewQuestions div
        questions.forEach((item, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `<p><strong>Câu ${index + 1}: ${item.question}</strong></p>
                                         <p>Đáp án đúng: ${item.correctAnswer}</p>
                                         <p>Giải thích: ${item.explanation}</p>`;
            reviewQuestions.appendChild(questionElement);
        });
    });
});
