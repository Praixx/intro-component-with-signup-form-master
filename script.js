(function(){

    "use strict"

    const errorIcon = document.querySelectorAll("label");
    const errorMsg = document.querySelectorAll(".error-msg");
    const form = document.querySelector("form");
    const fnameField = document.getElementById("fname");
    const lnameField = document.getElementById("lname");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const inputField = document.querySelectorAll("form input");
    
    let stat;


    form.addEventListener("submit", emailprocessor)

    function emailprocessor(event){
        event.preventDefault()
        
        let error = 0;

        inputField.forEach(function(eachInput){
            eachInput.style.border = "1px solid var(--Dark-Blue)";
        })

        errorIcon.forEach(function(icon){
            icon.style.display = "none"
        });

        errorMsg.forEach(function(message){
            message.style.display = "None";
        })

        
        const reName = /^[a-zA-Z]+(([\'\- ][a-zA-Z])?[a-zA-Z]*)*$/;
        const reEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        if(!reName.test(fnameField.value)){

            errorIcon[0].style.display = "block";
            errorMsg[0].style.display = "block";
            fnameField.focus();
            fnameField.style.border = "2px solid red";
            error++;
            // emailprocessor();

        }else if(!reName.test(lnameField.value)){

            errorIcon[1].style.display = "block";
            errorMsg[1].style.display = "block";
            lnameField.focus();
            lnameField.style.border = "2px solid red";
            error++;
            // emailprocessor();
            
        }else if(!reEmail.test(emailField.value)){

            errorIcon[2].style.display = "block";
            errorMsg[2].style.display = "block";
            emailField.focus();
            emailField.style.border = "2px solid red";
            error++;
            // emailprocessor();

        }else if(passwordField.value == ""){

            errorIcon[3].style.display = "block";
            errorMsg[3].style.display = "block";
            passwordField.focus();
            error++;
            // emailprocessor();

        } else if(error == 0){
            stat = "success"
            result();

        }

        

    };

    function result(){
        if(stat == "success"){
        setTimeout(function(){
            fnameField.value = "";
            lnameField.value = "";
            emailField.value = "";
            passwordField.value ="";
            fnameField.focus();
            fnameField.style.border = "2px solid var(--Dark-Blue)";
            
        }, 2000)
        }
    }

}());