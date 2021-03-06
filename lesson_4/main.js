let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

var AppData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i <= 1; i++) {
            var a = prompt("Введите обязательную статью расходов в этом месяце");
            var b = prompt("Во сколько обойдется?");

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                AppData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        };
    },
    detectedDayBudget: function () {
        AppData.one_day = (AppData.budjet / 30).toFixed();
        alert("Бюджет на 1 день составляет: " + AppData.one_day);
    },
    detectedLevel: function () {
        if (AppData.one_day < 100) {
            console.log("Минимальный уровень достатка");
        } else if (AppData.one_day > 100 && AppData.one_day < 2000) {
            console.log("Средний уровень достатка");
        } else if (AppData.one_day > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (AppData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            AppData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + AppData.monthIncome);
        }
    },
    chooseOptExtenses: function () {
        for (let i = 0; i <= 2; i++) {
            let a = prompt("Статья необязательных расходов " + (i + 1), '');
            if ((typeof (a)) != null && a != '' && a.length < 50) {
                AppData.optionalExpenses[i + 1] = a;
            }
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            if ((typeof (items)) != null && items != '' && (typeof (items)) === 'string') {
                AppData.income = items.split(', ');
                AppData.income.push(prompt('Может что-то еще?'));
                AppData.income.sort();
            } else {
                i = i - 1;
            }
        }
        let listIncome = AppData.income.forEach(function(i, item) {
            alert("Способы доп.заработка: " + (item + 1) + " "  + i);
        });
    }
};

console.log("Наша программа содержит в себе данные: ");
for (let key in AppData) {
    console.log(key + " : " + AppData[key]);
}