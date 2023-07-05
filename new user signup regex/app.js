
const userName = document.getElementById('username');
const email = document.getElementById('Email');
const password = document.getElementById('password');
const mobileno = document.getElementById('mob');


function validateNameInput(){

    var validUser = /^[a-zA-Z0-9]{6,15}$/;

    if(validUser.test(userName.value)){
        userName.style.outlineColor = 'green';
        document.getElementById('name_error').innerText = '';
        document.getElementById('success1').innerText = `Valid user Name`;

        }else{
        
        userName.style.outlineColor = 'red';
        document.getElementById('name_error').innerText = 'Enter Valid User Name';
        inputstatus = false;
        }
      
    }  

        function validateEmailInput(){
            const validemail = /^[a-z0-9._@]{1,16}[a-z]{1,5}.com$/;
                                
            if(validemail.test(email.value)){
                email.style.outlineColor = "green";
                document.getElementById('email_error').innerText = '';
                document.getElementById('success2').innerText = 'Valid mail Id';
                inputstatus = true;
            }else{
                email.style.outlineColor = "red";
                document.getElementById('email_error').innerText = 'not a Valid mail Id';
                inputstatus = false;
            }
        
        }
        
        function validatePasswordInput(){
            const validPassword = /^[a-zA-Z0-9_@]{8,16}$/;

            if(validPassword.test(password.value)){
                password.style.outlineColor = "green";
                document.getElementById('password_error').innerText = '';
                document.getElementById('success3').innerText = `valid password`;
                inputstatus = true;
            }else{
                password.style.outlineColor = "red";
                document.getElementById('password_error').innerText = `password'@','_' letters also accepted`;
                inputstatus = false;
            }
        
        }
         
        function validatePhnoInput(){
            const validMbno = /^[6-9][0-9]{9}$/;

            if(validMbno.test(mobileno.value)){
                mobileno.style.outlineColor = "green";
                document.getElementById('mob_error').innerText = '';
                document.getElementById('success4').innerText = `valid Mobile number`;
                inputstatus = true;
            }else{
                mobileno.style.outlineColor = "red";
                document.getElementById('mob_error').innerText = `Enter valid Indian Mobile number`;
                inputstatus = false;
            }
            
        }
        userName.addEventListener('keyup',validateNameInput);
        email.addEventListener('keyup',validateEmailInput);
        password.addEventListener('keyup',validatePasswordInput);
        mobileno.addEventListener('keyup',validatePhnoInput);
        

       