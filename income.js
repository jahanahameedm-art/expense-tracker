const amount = document.getElementById("amount");
const category = document.getElementById("category");
const date = document.getElementById("date");
const description = document.getElementById("description");
const addBtn = document.getElementById("addBtn");

const table = document.getElementById("incomeTable");
const totalIncome = document.getElementById("totalIncome");


// Load saved incomes from Local Storage
let incomes = JSON.parse(localStorage.getItem("incomes")) || [];

let editIndex = -1;


// Display saved incomes when page loads
displayIncome();


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

    // Save to Local Storage
    localStorage.setItem("incomes", JSON.stringify(incomes));

    clearForm();

    displayIncome();

});


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


function editIncome(index) {

    amount.value = incomes[index].amount;

    category.value = incomes[index].category;

    date.value = incomes[index].date;

    description.value = incomes[index].description;

    editIndex = index;

    addBtn.innerText = "Update Income";

}


function deleteIncome(index) {

    if (confirm("Delete this income?")) {

        incomes.splice(index, 1);

        // Save updated list
        localStorage.setItem("incomes", JSON.stringify(incomes));

        displayIncome();

    }

}


function clearForm() {

    amount.value = "";

    category.selectedIndex = 0;

    date.value = "";

    description.value = "";

}