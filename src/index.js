const { getCardType, luhnCheck } = require('./cardValidator');

document.getElementById('card-number').addEventListener('input', () => {
    const cardNumber = document.getElementById('card-number').value;
    const cardType = getCardType(cardNumber);
    
    const logos = document.querySelectorAll('.card-logo');
    logos.forEach(logo => {
        if (logo.id === cardType) {
            logo.classList.remove('inactive');
        } else {
            logo.classList.add('inactive');
        }
    });
});

document.getElementById('validate-button').addEventListener('click', () => {
    const cardNumber = document.getElementById('card-number').value;
    const isValid = luhnCheck(cardNumber);
    
    document.getElementById('validation-result').innerText = isValid ? 'Валидный номер карты' : 'Невалидный номер карты';
});
