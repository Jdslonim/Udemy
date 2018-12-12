var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var AppData = {
    budjet : money,
    timeData : time,
    expenses : {},
    optionalExpenses : "",
    income : [],
    savings : false
};

for (let i = 0; i <= 1; i++) {
    var a = prompt("Введите обязательную статью расходов в этом месяце");
    var b = prompt("Во сколько обойдется?");   

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50) {
        console.log("done");
        AppData.expenses[a] = b;
    }
};

/*
var i = 0;

while (i <= 1) {
    var a = prompt("Введите обязательную статью расходов в этом месяце");
    var b = prompt("Во сколько обойдется?");  

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50) {
        console.log("done");
        AppData.expenses[a] = b;
    }  
    i++;
}

do {
    var a = prompt("Введите обязательную статью расходов в этом месяце");
    var b = prompt("Во сколько обойдется?");  

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50) {
        console.log("done");
        AppData.expenses[a] = b;
    }  
    i++;
}
while (i <= 1);
*/

AppData.one_day = AppData.budjet / 30;

alert("Бюджет на 1 день составляет: " + AppData.one_day);

if (AppData.one_day < 100 ) {
    console.log("Минимальный уровень достатка");
} else if (AppData.one_day > 100 && AppData.one_day < 2000) {
    console.log("Средний уровень достатка");
} else if (AppData.one_day > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}