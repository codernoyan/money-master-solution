
document.getElementById('calculate').addEventListener('click', function () {
    const foodTotal = getInputFieldValueById('food-total');
    const rentTotal = getInputFieldValueById('rent-total');
    const clothesTotal = getInputFieldValueById('clothes-total');

    // validation check for expenses if expenses value are not negative or NaN
    if (foodTotal < 0 || rentTotal < 0 || clothesTotal < 0) {
        alert('You can not give a negative number');
        return;
    } else if (isNaN(foodTotal) || isNaN(rentTotal) || isNaN(clothesTotal)) {
        alert('Input field must be filled with a number');
        return;
    }
    // update total balance
    const totalIncome = getInputFieldValueById('income-total');
    const totalExpenseAmount = foodTotal + rentTotal + clothesTotal;
    // validation check for if total expenses value are greater than income balance
    if (totalExpenseAmount > totalIncome) {
        // alert('You do not have enough income to effort this items. Please update your income balance.');
        alert('ইনকাম এর চাইতে বেশি খরচ করা যাবে না');
        return;
    }

    // update total Expense
    setTextElementValueById('total-expenses', totalExpenseAmount);

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

    // validation check for if total save amount is greater than balance
    const totalBalance = getTextElementValueById('total-balance');
    if (saveAmount > 100) {
        alert('You can not save more than 100%');
        return;
    } else if (totalSaveAmount > totalBalance) {
        alert('You do not save more than your current balance');
        return;
    }

    setTextElementValueById('save-amount', totalSaveAmount);

    // update remaining balance
    const totalBalanceAmount = getTextElementValueById('total-balance');

    const remainingBalance = totalBalanceAmount - totalSaveAmount;
    setTextElementValueById('remaining-balance', remainingBalance);
})