patt1 = /[a-z]g/;
patt2 = /[A-Z]g/;
patt3 = /[0-9]g/;
patt4 = /[~!@#$%^&*_+=-:><?]g/;

//Validation of password
function passwordIsValid(password){
    //password should exist
    try {
        (password.toString() == "")
        throw "password should exist"
    } catch(error) {
        console.error("Error: "+ error);     
    }

    //password should be minimum of 8 digits long
    try {
        (password.toString().length < 8)
        throw "password should be longer than 8 characters"
    } catch(error) {
        console.error("Error: "+ error);     
    }   

    //password should have lowercase letters
    try {
        (!password.toString().match(patt1))
        throw "password should have at least one lowercase letter"
    } catch(error) {
        console.error("Error: "+ error);
    }

    //password should have uppercase letters
    try {
        (!password.toString().match(patt2))
        throw "password should have at least one uppercase letter"
    } catch(error) {
        console.error("Error: "+ error);
    } 

    //password should have digits
    try {
        (!passwprd.toString().match(patt3))
        throw "password should have at least one digit"
    } catch(error) {
        console.error("Error: "+ error);
    } 

    //password should have special characters
    try {
        (!password.toString().match(patt4))
        throw "password should have at least one special character"
    } catch (error) {
        console.error("Error: "+ error);
    }
}

//Is password okay?
function passwordIsOk(password){
   if (((password.toString() !== "") && (password.toString().length >= 8)) && ((password.toString().match(patt1) || password.toString().match(patt2) || password.toString().match(patt3) || password.toString().match(patt4)))){
        return true;
    }
    else{
      return false;
    }
}
