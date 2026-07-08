const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;
        const current = +counter.innerText;

        const increment = target / 120;

        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(update,15);

        }else{

            counter.innerText = target;

        }

    };

    update();

});

document.getElementById("startBtn").addEventListener("click",()=>{

    alert("Welcome to FinTrack!");

});