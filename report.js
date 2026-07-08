/* ==========================================
   SAMPLE DATA
========================================== */

const income = 50000;
const expenses = 30000;
const debt = 8000;

const savings = income - expenses - debt;
const savingsPercent = (savings / income) * 100;

/* ==========================================
   UPDATE SUMMARY CARDS
========================================== */

document.getElementById("income").textContent =
"₹" + income.toLocaleString();

document.getElementById("expense").textContent =
"₹" + expenses.toLocaleString();

document.getElementById("debt").textContent =
"₹" + debt.toLocaleString();

document.getElementById("savings").textContent =
"₹" + savings.toLocaleString();

/* ==========================================
   FINANCIAL HEALTH
========================================== */

let status = "";
let color = "";
let message = "";

if(savingsPercent <= 0){

    status = "🔴 Danger";
    color = "#ef4444";
    message = "You spent more than your income this month.";

}

else if(savingsPercent <=10){

    status = "🟠 Poor";
    color = "#f97316";
    message = "Your savings are very low. Try reducing unnecessary expenses.";

}

else if(savingsPercent <=20){

    status = "🟡 Average";
    color = "#facc15";
    message = "Your savings are average. Aim to save a little more.";

}

else if(savingsPercent <=35){

    status = "🟢 Good";
    color = "#22c55e";
    message = "Good job! You maintained healthy savings this month.";

}

else{

    status = "🔵 Excellent";
    color = "#3b82f6";
    message = "Excellent! You saved more than 35% of your income.";

}

document.getElementById("percentage").textContent =
savingsPercent.toFixed(1) + "%";

document.getElementById("status").textContent = status;
document.getElementById("status").style.color = color;

document.getElementById("message").textContent = message;

/* ==========================================
   MONTHLY INSIGHTS
========================================== */

const insightList = document.getElementById("insightList");

insightList.innerHTML = "";

function addInsight(text){

    const li = document.createElement("li");
    li.textContent = "✔ " + text;
    insightList.appendChild(li);

}

addInsight("Income : ₹" + income.toLocaleString());

addInsight("Expenses : ₹" + expenses.toLocaleString());

addInsight("Debt : ₹" + debt.toLocaleString());

addInsight("Savings : ₹" + savings.toLocaleString());

if(savingsPercent > 35){

    addInsight("Excellent saving habit this month.");

}

else if(savingsPercent > 20){

    addInsight("You are maintaining good financial health.");

}

else{

    addInsight("Try saving at least 20% of your income.");

}

if(debt > income * 0.30){

    addInsight("Debt is high. Try reducing borrowed money.");

}

else{

    addInsight("Debt is under control.");

}

/* ==========================================
   LINE CHART
========================================== */

new Chart(document.getElementById("savingChart"),{

    type:"line",

    data:{

        labels:[
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4"
        ],

        datasets:[{

            label:"Savings",

            data:[
                2000,
                4500,
                7000,
                savings
            ],

            borderColor:"#bb86fc",

            backgroundColor:"rgba(187,134,252,.2)",

            fill:true,

            tension:.4

        }]

    },

    options:{

        responsive:true,
maintainAspectRatio:false,

        plugins:{

            legend:{

                labels:{
                    color:"white"
                }

            }

        },

        scales:{

            x:{
                ticks:{color:"white"},
                grid:{color:"#333"}
            },

            y:{
                ticks:{color:"white"},
                grid:{color:"#333"}
            }

        }

    }

});

/* ==========================================
   PIE CHART
========================================== */

new Chart(document.getElementById("pieChart"),{

    type:"pie",

    data:{

        labels:[
            "Expenses",
            "Debt",
            "Savings"
        ],

        datasets:[{

            data:[
                expenses,
                debt,
                savings
            ],

            backgroundColor:[

                "#ef4444",
                "#facc15",
                "#22c55e"

            ]

        }]

    },

    options:{

        responsive:true,
maintainAspectRatio:false,

        plugins:{

            legend:{

                labels:{
                    color:"white"
                }

            }

        }

    }

});