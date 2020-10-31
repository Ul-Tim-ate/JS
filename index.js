'use strict';
let calculate = document.getElementById('start'),
	btnPlusIncomeAdd = document.getElementsByTagName('button')[0],
	btnPlusExpensesAdd = document.getElementsByTagName('button')[1],
	depositCheck = document.querySelector('#deposit-check'),
	additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
	budgetDayValue = document.getElementsByClassName('result-total')[1],
	budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
	expensesMonthValue = document.getElementsByClassName('result-total')[2],
	additionalIncomeValue = document.getElementsByClassName('result-total')[3],
	additionalExpensesValue = document.getElementsByClassName('result-total')[4],
	incomePeriodValue = document.getElementsByClassName('result-total')[5],
	targetMonthValue = document.getElementsByClassName('result-total')[6],
	salaryAmount = document.querySelector('.salary-amount'),
	incomeTitle = document.querySelector('.income-title'),
	expensesTitle = document.querySelector('.expenses-title'),
	expensesItems = document.querySelectorAll('.expenses-items'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	depositAmount = document.querySelector('.deposit-amount'),
	depositPercent = document.querySelector('.deposit-percent'),
	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select'),
	periodAmount = document.querySelector('.period-amount'),
	incomeItems = document.querySelectorAll('.income-items');
function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
let appData = {
	income: {},
	addIncome: [],
	incomeMonth: 0,
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	period: 6,
	budget: 0,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	start: function () {
		appData.budget = salaryAmount.value;
		appData.getExpenses();
		appData.getExpensesMonth();
		appData.getAddExpenses();
		appData.getAddIncome();
		appData.getIncome();
		appData.getBudget();
		appData.showResult();
	},
	addExpensesBlock: function () {
		let cloneExpensesItem = expensesItems[0].cloneNode(true);
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnPlusExpensesAdd);
		expensesItems = document.querySelectorAll('.expenses-items');
		if (expensesItems.length === 3) {
			btnPlusExpensesAdd.style.display = 'none';
		}
	},
	addIncomeBlock: function () {
		let cloneIncomeItem = incomeItems[0].cloneNode(true);
		incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnPlusIncomeAdd);
		incomeItems = document.querySelectorAll('.income-items');
		if (incomeItems.length === 3) {
			btnPlusIncomeAdd.style.display = 'none';
		}
	},
	getAddExpenses: function () {
		let addExpenses = additionalExpensesItem.value.split(',');
		addExpenses.forEach(function (item) {
			item = item.trim();
			if (item !== '') {
				appData.addExpenses.push(item);
			}
		});
	},
	getAddIncome: function () {
		additionalIncomeItem.forEach(function (item) {
			let itemValue = item.value.trim();
			if (itemValue !== '') {
				appData.addIncome.push();
			}
		});
	},
	getExpensesMonth: function () { 
		for (let i  in  appData.expenses) {
			appData.expensesMonth += +appData.expenses[i]; 
		}
	},
	getBudget: function () {
		appData.budgetMonth = appData.budget - appData.expensesMonth + appData.incomeMonth;
		appData.budgetDay = Math.floor(appData.budgetMonth / 30);
		return appData.budgetMonth;
	},
	getTargetMonth: function () {
		return Math.ceil(targetAmount.value / appData.budgetMonth);
	},
	getStatusIncome: function () { 
		if (appData.budgetDay >= 1200) {
			return 'У вас высокий уровень дохода';
		}else if (appData.budgetDay >= 600) {
			return 'У вас средний уровень дохода';
		}else if (appData.budgetDay >= 0) {
			return 'У вас низкий уровень дохода';
		} else {
			return 'Что-то пошло не так';
		}
	},
	getInfoDeposit: function () { 
		appData.deposit = confirm('Есть ли у вас депозит в банке?');
		if (appData.deposit) {
			do {
				appData.percentDeposit = prompt('Какой годовой процент?', '10');				
			} while (!isNumber(appData.percentDeposit));
			do {
				appData.moneyDeposit = prompt('Какая сумма заложена', 100000);
			} while (!isNumber(appData.moneyDeposit));
		}
	},
	getExpenses: function () {
		expensesItems.forEach(function (item) {
			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;
			if (itemExpenses !== '' && cashExpenses !== '') {
				appData.expenses[itemExpenses] = cashExpenses;
			}
		});
	},
	getIncome: function (params) {
		incomeItems.forEach(function (item) {
			let itemIncome = item.querySelector('.income-title').value;
			let cashIncome = item.querySelector('.income-amount').value;
			if (isNumber(cashIncome) && !isNumber(itemIncome)) {
				appData.income[itemIncome] = cashIncome;
			}
		});
		for (let key in appData.income) {
			appData.incomeMonth += +appData.income[key];
		}
	},
	showPeriodSelect: function () { 
		periodAmount.textContent = periodSelect.value;
	},
	showIncomePeriodValue: function () { 
		incomePeriodValue.value = periodAmount.textContent * appData.budgetMonth;
	},
	showResult: function () {
		budgetMonthValue.value = appData.budgetMonth;
		budgetDayValue.value = appData.budgetDay;
		expensesMonthValue.value = appData.expensesMonth;
		additionalExpensesValue.value = appData.addExpenses.join(', ');
		additionalIncomeValue.value = appData.addIncome.join(', ');
		targetMonthValue.value = appData.getTargetMonth();
		incomePeriodValue.value = appData.calcSavedMoney();
		periodSelect.addEventListener('input', appData.showIncomePeriodValue);
	},
	checkSalaryAmount: function () {
		if (isNumber(salaryAmount.value)) {
			calculate. removeAttribute("disabled");
		}
		else { 
			calculate.setAttribute("disabled", "disabled");
		}
	},
	calcSavedMoney: function () {
		return appData.budgetMonth * periodSelect.value ;
	}
};
calculate.addEventListener('click', appData.start);
btnPlusExpensesAdd.addEventListener('click', appData.addExpensesBlock);
btnPlusIncomeAdd.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.showPeriodSelect);
salaryAmount.addEventListener('input', appData.checkSalaryAmount )


