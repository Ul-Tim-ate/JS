let calculate = document.getElementById('start'),
	btnPlusExpensesAdd = document.getElementsByTagName('button')[0],
	btnPlusIncomeAdd = document.getElementsByTagName('button')[1],
	depositCheck = document.querySelector('#deposit-check'),
	additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[0],
	additionalIncomeItem2 = document.querySelectorAll('.additional_income-item')[1],
	budgetDayValue = document.getElementsByClassName('result-total')[1],
	expensesMonthValue = document.getElementsByClassName('result-total')[2],
	additionalIncomeValue = document.getElementsByClassName('result-total')[3],
	additionalExpensesValue = document.getElementsByClassName('result-total')[4],
	incomePeriodValue = document.getElementsByClassName('result-total')[5],
	targetMonthValue = document.getElementsByClassName('result-total')[6],
	salaryAmount = document.querySelector('.salary-amount'),
	incomeTitle = document.querySelector('.income-title'),
	incomeAmount = document.querySelector('.income-amount'),
	expensesTitle = document.querySelector('.expenses-title'),
	expensesAmount = document.querySelector('.expenses-amount'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	depositAmount = document.querySelector('.deposit-amount'),
	depositPercent = document.querySelector('.deposit-percent'),
	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select');

// console.log(calculate);
// console.log(btnPlusExpensesAdd);
// console.log(btnPlusIncomeAdd);
// console.log(depositCheck);
// console.log(additionalIncomeItem1);
// console.log(additionalIncomeItem2);
// console.log(budgetDayValue);
// console.log(expensesMonthValue);
// console.log(additionalIncomeValue);
// console.log(additionalExpensesValue);
// console.log(incomePeriodValue);
// console.log(targetMonthValue);
// console.log(salaryAmount);
// console.log(incomeTitle);
// console.log(incomeAmount);
// console.log(expensesTitle);
// console.log(expensesAmount);
// console.log(additionalExpensesItem);
// console.log(depositAmount);
// console.log(depositPercent);
// console.log(targetAmount);
// console.log(periodSelect);
