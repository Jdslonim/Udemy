let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time, expensesSum = 0;

function disabledBtns() {
    expensesBtn.disabled = true;
    optionalExpensesBtn.disabled = true;
    countBtn.disabled = true;
}
disabledBtns();

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
   AppData.budjet = money;
   AppData.timeData = time;
   budgetValue.textContent = money.toFixed();
   yearValue.value = new Date(Date.parse(time)).getFullYear();
   monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
   dayValue.value = new Date(Date.parse(time)).getDate();

   expensesBtn.disabled = false;
   optionalExpensesBtn.disabled = false;
   countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function(){
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            AppData.expenses[a] = b;
            expensesSum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = expensesSum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let a = optionalExpensesItem[i].value;
        if ((typeof (a)) != null && a != '' && a.length < 50) {
            AppData.optionalExpenses[i] = a;
            optionalExpensesValue.textContent += AppData.optionalExpenses[i] + ' '; 
        }
    }
});

countBtn.addEventListener('click',function(){
    if (AppData.budjet != undefined) {
        AppData.one_day = ((AppData.budjet - expensesSum) / 30).toFixed();
        dayBudgetValue.textContent = AppData.one_day;

        if (AppData.one_day < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (AppData.one_day > 100 && AppData.one_day < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (AppData.one_day > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    AppData.income = items.split(', ');
    incomeValue.textContent = AppData.income;
});

checkSavings.addEventListener('click', function(){
    if (AppData.savings == true) {
        AppData.savings = false;
    } else {
        AppData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if (AppData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        AppData.monthIncome = sum / 100 / 12 * percent;
        AppData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = AppData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = AppData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if (AppData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        AppData.monthIncome = sum / 100 / 12 * percent;
        AppData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = AppData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = AppData.yearIncome.toFixed(1);
    }
});

var AppData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};