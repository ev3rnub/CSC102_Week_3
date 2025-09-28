// Chad Verbus
// CSC102
// 09/27/2025

function parseInput(){
    const firstName = document.getElementById("fname").value.trim();
    const lastName  = document.getElementById("lname").value.trim();
    const zipCode   = document.getElementById("zipCode").value.trim();
    const afirstName = document.getElementById("fname"); // grab a ref to be able to change text color later
    const alastName  = document.getElementById("lname");
    const azipCode   = document.getElementById("zipCode");
    const aTitle = document.getElementById("aTitle");
    const subTitle = document.getElementById("aSubTitle");
    const requestorsName = document.getElementById("requestorsName");
    const zipCodeCheck = /^[0-9]{5}$/;        // exactly 5 digits
    const fullName = `${firstName} ${lastName}`;

    requestorsName.classList.remove("error","valid");

    // ---- Validate zip ------------------------------------------------
    if (!zipCodeCheck.test(zipCode)){
        requestorsName.textContent = "Zip code must be 5 digits";
        requestorsName.classList.add("error");   // turn text red
        afirstName.classList.add("error");
        alastName.classList.add("error");
        azipCode.classList.add("error");
        return;                                 // stop further processing
    }

    // ---- 3️⃣ Validate name length ---------------------------------------
    if (fullName.length > 20){
        requestorsName.textContent = "Name must be ≤ 20 characters";
        requestorsName.classList.add("error");
        afirstName.classList.add("error");
        alastName.classList.add("error");
        azipCode.classList.add("error");
        return;
    }

    // ---- 4️⃣ All good – show the name ------------------------------------
    requestorsName.textContent = `Access Granted to ${fullName} @ ${zipCode}`;
    requestorsName.classList.add("valid");   // (optional) force aqua again
    afirstName.classList.add("valid");
    alastName.classList.add("valid");
    azipCode.classList.add("valid");
    resetForm()
}

function resetForm(){
    // ---- Reset any previous state ---------------------------------
    const firstName = document.getElementById("fname");
    const lastName  = document.getElementById("lname");
    const zipCode   = document.getElementById("zipCode");
    const requestorsName = document.getElementById("requestorsName");
    
    firstName.value = "";
    lastName.value = "";
    zipCode.value = "";
}