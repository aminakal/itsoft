function checkQuiz() {
    var correctAnswers = {
        q1: 'a',
        q2: 'c',
        q3: 'a',
        q4: 'c',
        q5: 'a'
    };

    var form = document.getElementById('quiz-form');
    var resultDiv = document.getElementById('quiz-result');
    var userAnswers = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value,
        q4: form.q4.value,
        q5: form.q5.value
    };

    var score = 0;
    for (var question in correctAnswers) {
        if (correctAnswers[question] === userAnswers[question]) {
            score++;
        }
    }

    resultDiv.textContent = `Сіз ${score} сұрақтың ${Object.keys(correctAnswers).length}-іне дұрыс жауап бердіңіз.`;
}
function checkQuiz() {
    const answers = {
        q1: 'b',
        q2: 'a',
        q3: 'b',
        q4: 'b',
        q5: 'b'
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    for (let key in answers) {
        const userAnswer = document.querySelector(`input[name="${key}"]:checked`);
        if (userAnswer && userAnswer.value === answers[key]) {
            score++;
        }
    }

    const result = document.getElementById('quiz-result');
    result.style.display = 'block';
    result.innerHTML = `Сіздің нәтижеңіз: ${score} / ${totalQuestions}`;
}
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Подключаем middleware для обработки JSON-запросов
app.use(bodyParser.json());

// Обработка POST-запроса на вход пользователя
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Проверка учетных данных пользователя в базе данных
    // Предположим, что у вас есть функция для проверки пользовательских данных
    // Например, функция checkCredentials(username, password)
    if (checkCredentials(username, password)) {
        res.status(200).send('Успешный вход');
    } else {
        res.status(401).send('Ошибка входа: неправильные учетные данные');
    }
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

        const formData = new FormData(form);
        const requestData = {
            username: formData.get('username'),
            password: formData.get('password')
        };

        // Отправка данных на сервер
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => {
            if (response.ok) {
                return response.text(); // Получаем текстовый ответ от сервера
            } else {
                throw new Error('Ошибка входа');
            }
        })
        .then(data => {
            message.textContent = data; // Отображаем ответ сервера
        })
        .catch(error => {
            message.textContent = error.message; // Отображаем сообщение об ошибке
        });
    });
});

