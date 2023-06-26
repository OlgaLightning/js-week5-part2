const birthDate = document.getElementById('birthDate');
const addBtn = document.querySelector('button');
const result = document.getElementById('result');

addBtn.addEventListener('click', function () {
    const selectedDate = birthDate.value;

    if (selectedDate === '') {
        const p = document.createElement('p');
        p.textContent = 'Пожалуйста, введите дату рождения';
        p.classList.add('red');
        result.innerHTML = '';
        result.appendChild(p);
    } else {
        const currentDate = new Date();
        const dateOfBirth = new Date(selectedDate);
        const timeDiff = dateOfBirth - currentDate;
        const daysToGo = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        const days = (daysToGo === 1 || daysToGo % 10 === 1 && daysToGo % 100 !== 11) ? 'день' :
            (daysToGo >= 2 && daysToGo <= 4 || daysToGo % 10 >= 2 && daysToGo % 10 <= 4 && (daysToGo % 100 < 10 || daysToGo % 100 >= 20)) ? 'дня' :
                'дней';

        const p = document.createElement('p');
        p.textContent = `До вашего дня рождения осталось ${daysToGo} ${days} 🎉`

        const previousP = result.querySelector('p');
        if (previousP) {
            result.removeChild(previousP);
        }

        result.appendChild(p);

        birthDate.value = '';
    }
})