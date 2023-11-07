
// const foodField = document.getElementsByClassName('food-field');
// const rentField = document.getElementsByClassName('rent-field');
// const clothesField = document.getElementsByClassName('Clothes-field');

function getValueFromInputField(value) {
    const inputField = document.getElementById(value);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodValue = getValueFromInputField('food-field');
    const rentValue = getValueFromInputField('rent-field');
    const clothesValue = getValueFromInputField('Clothes-field');
    const totalExpenses = document.getElementById('total-expenses');

    const expensesCalculate = foodValue + rentValue + clothesValue;
    totalExpenses.innerText = expensesCalculate;
});
