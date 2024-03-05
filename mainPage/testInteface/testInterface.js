
var testKey = localStorage.getItem('testKey');

console.log(testKey);

const testDoc = [
    {'key' : 1, 'questions' : [
        {
            question: "Thành Manchester có màu gì?",
            answers: [
                { key: 'A', value: "Đỏ" },
                { key: 'B', value: "Red" },
                { key: 'C', value: "Chọn A đi" },
                { key: 'D', value: "Chọn B đi" }
            ],
            correctAnswer: "A"
        },
        {
            question: "ai có khả năng lấy chồng sớm nhất?",
            answers: [
                { key: 'A', value: "Hưng ựbu" },
                { key: 'B', value: "Hiếu lam bô" },
                { key: 'C', value: "Đào Quang Hưng" },
                { key: 'D', value: "Hiếu Lào Cai" }
            ],
            correctAnswer: "B"
        },
        {
            question: "Bài này sẽ được mấy điểm?",
            answers: [
                { key: 'A', value: "10" },
                { key: 'B', value: "10/100" },
                { key: 'C', value: "100" },
                { key: 'D', value: "nhóm 9 điểm Hưng 1 điểm" }
            ],
            correctAnswer: "D"
        }]
    },
    {'key' : 2, 'questions' : [
        {
            question: "Thành Manchester có màu gì?",
            answers: [
                { key: 'A', value: "Đỏ" },
                { key: 'B', value: "Red" },
                { key: 'C', value: "Chọn A đi" },
                { key: 'D', value: "Chọn B đi" }
            ],
            correctAnswer: "A"
        },
        {
            question: "ai có khả năng lấy chồng sớm nhất?",
            answers: [
                { key: 'A', value: "Hưng ựbu" },
                { key: 'B', value: "Hiếu lam bô" },
                { key: 'C', value: "Đào Quang Hưng" },
                { key: 'D', value: "Hiếu Lào Cai" }
            ],
            correctAnswer: "B"
        },
        {
            question: "Bài này sẽ được mấy điểm?",
            answers: [
                { key: 'A', value: "10" },
                { key: 'B', value: "10/100" },
                { key: 'C', value: "100" },
                { key: 'D', value: "nhóm 9 điểm Hưng 1 điểm" }
            ],
            correctAnswer: "D"
        },
        {
            question: "Bài này sẽ được mấy điểm?",
            answers: [
                { key: 'A', value: "10" },
                { key: 'B', value: "10/100" },
                { key: 'C', value: "100" },
                { key: 'D', value: "nhóm 9 điểm Hưng 1 điểm" }
            ],
            correctAnswer: "D"
        },
        {
            question: "Bài này sẽ được mấy điểm?",
            answers: [
                { key: 'A', value: "10" },
                { key: 'B', value: "10/100" },
                { key: 'C', value: "100" },
                { key: 'D', value: "nhóm 9 điểm Hưng 1 điểm" }
            ],
            correctAnswer: "D"
        },
        {
            question: "Bài này sẽ được mấy điểm?",
            answers: [
                { key: 'A', value: "10" },
                { key: 'B', value: "10/100" },
                { key: 'C', value: "100" },
                { key: 'D', value: "nhóm 9 điểm Hưng 1 điểm" }
            ],
            correctAnswer: "D"
        },
        {
            question: "Bài này sẽ được mấy điểm?",
            answers: [
                { key: 'A', value: "10" },
                { key: 'B', value: "10/100" },
                { key: 'C', value: "100" },
                { key: 'D', value: "nhóm 9 điểm Hưng 1 điểm" }
            ],
            correctAnswer: "D"
        },
        {
            question: "Bài này sẽ được mấy điểm?",
            answers: [
                { key: 'A', value: "10" },
                { key: 'B', value: "10/100" },
                { key: 'C', value: "100" },
                { key: 'D', value: "nhóm 9 điểm Hưng 1 điểm" }
            ],
            correctAnswer: "D"
        },
        {
            question: "Bài này sẽ được mấy điểm?",
            answers: [
                { key: 'A', value: "10" },
                { key: 'B', value: "10/100" },
                { key: 'C', value: "100" },
                { key: 'D', value: "nhóm 9 điểm Hưng 1 điểm" }
            ],
            correctAnswer: "D"
        }]
    }
];

var questions = testDoc.find(element => element.key == testKey);
questions = questions.questions;

console.log(questions);

document.addEventListener('DOMContentLoaded', () => {

    console.log("running")
    const submitBtn = document.getElementById('submit-btn');
    const resultElement = document.getElementById('result');
    let correctAnswersCount = 0;

    const timerElement = document.getElementById('timer');
    let time = 60 * 60;

    const updateTimer = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        time--;
        if (time < 0) {
            clearInterval(timer);
            alert("Time's up! The test will be submitted automatically.");
            submitBtn.click(); // Gọi sự kiện click trên nút submit
        }
    };

    const timer = setInterval(updateTimer, 1000);

    const questionsContainer = document.getElementById('questions');
    const statusList = document.getElementById('status-list');

    console.log("tai sao ko chay");
    console.log(questions);
    for (let index = 0; index < questions.length; index++) {
        const item = questions[index];
        console.log("chay di");

        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `Question ${index + 1}: ${item.question}`;
        questionElement.appendChild(questionText);

        const answerList = document.createElement('ul');

        for (let i = 0; i < item.answers.length; i++) {
            const answerItem = document.createElement('li');

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = item.answers[i].key;

            const label = document.createElement('label');
            label.textContent = `${item.answers[i].key}. ${item.answers[i].value}`;

            answerItem.appendChild(input);
            answerItem.appendChild(label);
            answerList.appendChild(answerItem);
        }

        questionElement.appendChild(answerList);
        questionsContainer.appendChild(questionElement);

        const statusElement = document.createElement('div');
        statusElement.id = `status-${index + 1}`;
        statusElement.classList.add('status-item');
        statusElement.textContent = index + 1;
        statusList.appendChild(statusElement);

        questionElement.querySelectorAll('input[type="radio"]').forEach(input => {
            input.addEventListener('click', () => {
                statusElement.classList.add('answered');
                if (input.value === item.correctAnswer) {
                    console.log(`Câu ${index + 1}: Đúng`);
                } else {
                    console.log(`Câu ${index + 1}: Sai`);
                }
                // questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        });
    }

    submitBtn.addEventListener('click', () => {
        clearInterval(timer);
        window.alert("Bạn đã nộp bài thành công!!!");
        window.location.href = 'ketqua/result.html?';
    });
});
