const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

window.onload = function(){

    const profile = JSON.parse(localStorage.getItem("profile"));

    if(profile){

        nameInput.value = profile.name;
        emailInput.value = profile.email;
        phoneInput.value = profile.phone;

        disableInputs();
    }

};

function saveProfile(){

    const profile={

        name:nameInput.value,
        email:emailInput.value,
        phone:phoneInput.value

    };

    localStorage.setItem("profile",JSON.stringify(profile));

    disableInputs();

    alert("Profile saved successfully!");

}

function editProfile(){

    nameInput.disabled=false;
    emailInput.disabled=false;
    phoneInput.disabled=false;

}

function disableInputs(){

    nameInput.disabled=true;
    emailInput.disabled=true;
    phoneInput.disabled=true;

}

function logout(){

    if(confirm("Are you sure you want to logout?")){

        localStorage.removeItem("profile");

        window.location.href="home.html";

    }

}
