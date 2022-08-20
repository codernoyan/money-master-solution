
document.getElementById('calculate').addEventListener('click', function () {
    const foodTotal = getInputFieldValueById('food-total');
    const rentTotal = getInputFieldValueById('rent-total');
    const clothesTotal = getInputFieldValueById('clothes-total');

    const totalExpenseAmount = foodTotal + rentTotal + clothesTotal;
    // update total Expense
    setTextElementValueById('total-expenses', totalExpenseAmount);

    // update total balance
    const totalIncome = getInputFieldValueById('income-total');
    // const totalBalance = getTextElementValueById('total-balance');

    const totalBalanceAmount = totalIncome - totalExpenseAmount;
    setTextElementValueById('total-balance', totalBalanceAmount);
});

document.getElementById('btn-save').addEventListener('click', function () {
    const saveAmount = getInputFieldValueById('save-percentage');
    const saveAmountPercentage = saveAmount / 100;
    
    const totalIncome = getInputFieldValueById('income-total');
    const totalSave = totalIncome * saveAmountPercentage;
    const totalSaveAmount = parseInt(totalSave);
    setTextElementValueById('save-amount', totalSaveAmount);

    // update remaining balance
    const totalBalanceAmount = getTextElementValueById('total-balance');

    const remainingBalance = totalBalanceAmount - totalSaveAmount;
    setTextElementValueById('remaining-balance', remainingBalance);
})