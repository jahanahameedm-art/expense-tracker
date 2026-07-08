let income = Number(localStorage.getItem("income")) || 0;

let expense = Number(localStorage.getItem("expense")) || 0;

let debt = Number(localStorage.getItem("debt")) || 0;



let balance = income - expense - debt;



document.getElementById("incomeValue").innerHTML = "₹ " + income;

document.getElementById("expenseValue").innerHTML = "₹ " + expense;

document.getElementById("debtValue").innerHTML = "₹ " + debt;

document.getElementById("balanceValue").innerHTML = "₹ " + balance;




function addIncome(){

let amount = prompt("Enter income amount");

if(amount){

income += Number(amount);

localStorage.setItem("income",income);

location.reload();

}

}



function addExpense(){

let amount = prompt("Enter expense amount");

if(amount){

expense += Number(amount);

localStorage.setItem("expense",expense);

location.reload();

}

}



function addDebt(){

let amount = prompt("Enter debt amount");

if(amount){

debt += Number(amount);

localStorage.setItem("debt",debt);

location.reload();

}

}



function viewBalance(){

alert("Available Balance : ₹ " + balance);

}