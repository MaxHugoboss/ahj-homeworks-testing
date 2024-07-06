function getCardType(cardNumber) {
    const cardTypes = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^(5[1-5][0-9]{14})$/,
        amex: /^3[47][0-9]{13}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        mir: /^220[0-4][0-9]{12}$/
    };

    for (const [type, pattern] of Object.entries(cardTypes)) {
        if (pattern.test(cardNumber)) {
            return type;
        }
    }
    return null;
}

function luhnCheck(cardNumber) {
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i], 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return (sum % 10) === 0;
}

module.exports = { getCardType, luhnCheck };
