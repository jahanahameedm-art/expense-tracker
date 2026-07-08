let editMode = false;

function toggleEdit(){

    const inputs = document.querySelectorAll("input");

    const button = document.getElementById("editBtn");

    if(!editMode){

        inputs.forEach(input=>{

            input.removeAttribute("readonly");

        });

        button.textContent="Save Changes";

        editMode=true;

    }

    else{

        inputs.forEach(input=>{

            input.setAttribute("readonly",true);

        });

        button.textContent="Edit Profile";

        editMode=false;

        alert("Profile updated successfully!");

    }

}

function logout(){

    if(confirm("Are you sure you want to logout?")){

        alert("Logged out successfully!");

        // Example:
        // window.location.href = "login.html";

    }

}