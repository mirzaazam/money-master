
function getValueFromInputField(value) {
    const inputField = document.getElementById(value);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}


function getTextFromInnerText(value) {
    const textField = document.getElementById(value);
    const textFieldString = textField.innerText;
    const textFieldValue = parseFloat(textFieldString);
    return textFieldValue;
}


function calculate() {
    const foodValue = getValueFromInputField('food-field');
    const rentValue = getValueFromInputField('rent-field');
    const clothesValue = getValueFromInputField('Clothes-field');
    const incomeValue = getValueFromInputField('income-field');

    const totalExpenses = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');

    const expensesCalculate = foodValue + rentValue + clothesValue;
    const totalExpensesBalance = totalExpenses.innerText = expensesCalculate;

    const dueBalance = incomeValue - expensesCalculate;
    const mainBalance = balance.innerText = dueBalance;

    return mainBalance, totalExpensesBalance;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodValue = getValueFromInputField('food-field');
    const rentValue = getValueFromInputField('rent-field');
    const clothesValue = getValueFromInputField('Clothes-field');
    const incomeValue = getValueFromInputField('income-field');

    if (incomeValue > foodValue && incomeValue > rentValue && incomeValue > clothesValue) {
        if (isNaN(foodValue, rentValue, clothesValue, incomeValue)) {
            alert('Invalid type or write a number!');

        }

        else {
            if (0 <= foodValue && 0 <= rentValue && 0 <= clothesValue && 0 <= incomeValue) {
                calculate();
            }
            else {
                alert('Nagetive number is not allow!');
            }
        }
    }
    else {
        alert('insuficient balance!')
    }



});

document.getElementById('save-btn').addEventListener('click', function () {

    const saveAmmount = document.getElementById('save-ammount');
    const remainingBalance = document.getElementById('remaining-balance');

    const mainBalanceValue = getTextFromInnerText('balance');
    const totalExpenses = getTextFromInnerText('total-expenses');
    const discountField = getValueFromInputField('discount-field');

    if (isNaN(discountField)) {
        alert('Please type valid!')
    }
    else {
        const saveingAmmountValue = totalExpenses * discountField / 100;
        saveAmmount.innerText = saveingAmmountValue;

        const totalRemaining = mainBalanceValue + saveingAmmountValue;
        remainingBalance.innerText = totalRemaining;
    }
});
