function submitForm(){
 
    let pass = document.getElementById("pass").value;
    let confirmpass = document.getElementById("confirmPass").value;
    let p = document.querySelector(".submit-message")


    if(pass != confirmpass){
        p.textContent = "Passwords do not match."
        p.style.color = "#f88379"

    }
    else{
        p.textContent = "Success!"
        console.log("Matched")
    }

}
    
    