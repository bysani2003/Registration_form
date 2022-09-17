 function validateform() {
            var username = document.getElementById("username").value;
            if (username.length == "") {
                window.alert("Enter your Username")
            }
            
           

            var password = document.getElementById("password").value;
            if(password.length==""){
              window.alert("Enter your Password")
            }
            form.addEventListener('Submit', function (validateform) {
              
                e.preventDefault();
            
                var phoneno =document.getElementById("phone_number").value;
                var x = /^\d{10}$/;
                if(phoneno==x)
                {
                    return true;
                }
                else
                {
                   alert("Not a valid Phone Number");
                   return false;
                }
            });
            var email = document.getElementById("email").value;
            if (email.length == "") {
                emailError.innerHTML = "!";
                return false;
            }
            if (!email.match(/[a-z]+[\.][a-z]+@vitstudent.ac.in/)) {
                emailError.innerHTML = "!";
                return false;
            }
            emailError.innerHTML = "";

            var contact = document.getElementById("contact").value;
            if(contact.length == "") {
                contactError.innerHTML = "!";
                return false;
            }
            if (!contact.match(/\d{10}/)) {
                contactError.innerHTML = "!";
                return false;
            }
            contactError.innerHTML = "";

            var zip = document.getElementById("zip").value;
            if (zip.length == "") {
                zipError.innerHTML = "!";
                return false;
            }
            if (!zip.match(/.{5}/)) {
                zipError.innerHTML = "!";
                return false;
            }
            zipError.innerHTML = "";
            
            var password = document.getElementById("password").value;
            Array.prototype.contains = function(v){
                for(var i=0; i< this.length; i++){
                    if(this[i] === v) return true;
                }
                return false;
            }
            Array.prototype.unique = function(){
                var arr = [];
                for(var i=0; i< this.length; i++){
                    if(!arr.contains(this[i])){
                        arr.push(this[i]);
                    }
                }
                return arr;
            };
            if (password.length == 0) {
                passwordError.innerHTML = "!";
                return false;
            }
            if (!password.match(/(?=(.*[A-Z]))(?=(.*[a-z]))(?=(.*\d))(?!.*\s).{10,100}/i) || !password.match(/(?=(.*[A-Z]))(?=(.*[a-z]))(?=(.*[~!@#\$%^\-_=+\[\]\{\}/;:,\.\?*]))(?!.*\s).{10,100}/i)
                || !password.match(/(?=(.*[A-Z]))(?=(.*[~!@#\$%^\-_=+\[\]\{\}/;:,\.\?*]))(?=(.*\d))(?!.*\s).{10,100}/i) 
                || !password.match(/(?=(.*[a-z]))(?=(.*[~!@#\$%^\-_=+\[\]\{\}/;:,\.\?*]))(?=(.*\d))(?!.*\s).{10,100}/i) &&
                (password.split("").unique().length >= 5)) {
                passwordError.innerHTML = "!";
                return false;
            }
            passwordError.innerHTML = "";
            
            return true;
        }
   

