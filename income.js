/* ==========================================
   GET ELEMENTS
========================================== */

const amount = document.getElementById("amount");
const category = document.getElementById("category");
const date = document.getElementById("date");
const description = document.getElementById("description");
const addBtn = document.getElementById("addBtn");

const table = document.getElementById("incomeTable");
const totalIncome = document.getElementById("totalIncome");

/* ==========================================
   VARIABLES
========================================== */

let incomes = [];
let editIndex = -1;

/* ==========================================
   ADD / UPDATE INCOME
========================================== */

addBtn.addEventListener("click", function () {

    if (
        amount.value === "" ||
        date.value === "" ||
        description.value === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    const income = {

        amount: Number(amount.value),
        category: category.value,
        date: date.value,
        description: description.value

    };

    if (editIndex === -1) {

        incomes.push(income);

    } else {

        incomes[editIndex] = income;

        editIndex = -1;

        addBtn.innerText = "Add Income";

    }

    clearForm();

    displayIncome();

});

/* ==========================================
   DISPLAY TABLE
========================================== */

function displayIncome() {

    table.innerHTML = "";

    let total = 0;

    incomes.forEach((income, index) => {

        total += income.amount;

        table.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>₹${income.amount}</td>

            <td>${income.category}</td>

            <td>${income.date}</td>

            <td>${income.description}</td>

            <td>

                <button class="edit-btn"
                onclick="editIncome(${index})">

                Edit

                </button>

                <button class="delete-btn"
                onclick="deleteIncome(${index})">

                Delete

                </button>

            </td>

        </tr>

        `;

    });

    totalIncome.innerHTML = "₹" + total.toLocaleString();

}

/* ==========================================
   EDIT
========================================== */

function editIncome(index) {

    amount.value = incomes[index].amount;

    category.value = incomes[index].category;

    date.value = incomes[index].date;

    description.value = incomes[index].description;

    editIndex = index;

    addBtn.innerText = "Update Income";

}

/* ==========================================
   DELETE
========================================== */

function deleteIncome(index) {

    if (confirm("Delete this income?")) {

        incomes.splice(index, 1);

        displayIncome();

    }

}

/* ==========================================
   CLEAR FORM
========================================== */

function clearForm() {

    amount.value = "";

    category.selectedIndex = 0;

    date.value = "";

    description.value = "";

}