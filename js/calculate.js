
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
    const totalExpensesBalance =  totalExpenses.innerText = expensesCalculate;
    
    const dueBalance = incomeValue - expensesCalculate;
    const mainBalance = balance.innerText = dueBalance;
    
    return mainBalance, totalExpensesBalance;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    calculate();
});

document.getElementById('save-btn').addEventListener('click', function(){

    const saveAmmount = document.getElementById('save-ammount');
    const remainingBalance = document.getElementById('remaining-balance');

    const mainBalanceValue = getTextFromInnerText('balance');
    const totalExpenses = getTextFromInnerText('total-expenses');
    
    
    const discountField = getValueFromInputField('discount-field');
    const saveingAmmountValue = totalExpenses * discountField / 100;
    saveAmmount.innerText = saveingAmmountValue;

    const totalRemaining = mainBalanceValue + saveingAmmountValue;
    remainingBalance.innerText = totalRemaining;
    
});
