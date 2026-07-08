let income = Number(localStorage.getItem("income")) || 0;

let expense = Number(localStorage.getItem("expense")) || 0;

let debt = Number(localStorage.getItem("debt")) || 0;



let balance = income - expense - debt;



document.getElementById("incomeValue").innerHTML = "₹ " + income;

document.getElementById("expenseValue").innerHTML = "₹ " + expense;

document.getElementById("debtValue").innerHTML = "₹ " + debt;

document.getElementById("balanceValue").innerHTML = "₹ " + balance;




function addIncome(){
window.location.href="income.html";

}

function addExpense(){
    window.location.href="expense.html";

}

function addDebt(){

 window.location.href="debt.html";

}

function viewBalance(){

 window.location.href="balance.html";

}