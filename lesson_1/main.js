var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var AppData = {
    budjet : money,
    timeData : time,
    expenses : {
        question1 : question2  
    },
    optionalExpenses : "",
    income : [],
    savings : false
};

for (let i = 0; i <= 1; i++) {
    var question1 = prompt("Введите обязательную статью расходов в этом месяце");
    var question2 = prompt("Во сколько обойдется?");    
}


var one_day = AppData.budjet / 30;

alert("Бюджет на 1 день составляет: " + one_day);