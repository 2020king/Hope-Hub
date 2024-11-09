function handleSubmit() {
    const form = document.getElementById('questionnaire');
    const answers = {
        q1: form.querySelector('input[name="q1"]:checked')?.value,
        q2: form.querySelector('input[name="q2"]:checked')?.value,
        q3: form.querySelector('input[name="q3"]:checked')?.value
    };

    const yesAnswers = Object.values(answers).filter(answer => answer === 'yes').length;

    if (yesAnswers === 3) {
        window.location.href = "3.html"; // Перенаправление на страницу для 3-х "Да"
    } else if (yesAnswers === 2) {
        window.location.href = "2.html"; // Перенаправление на страницу для 2-х "Да"
    } else {
        window.location.href = "1.html"; // Перенаправление на страницу для 1-го "Да"
    }
}

function startTest() {
    // Переход на страницу с иконкой загрузки
    window.location.href = 'loading.html'; // Перенаправляем на страницу загрузки
}