// get querystring from page 1
const queryString = window.location.search
const params = new URLSearchParams(queryString)
let p_fname = params.get("fname")
let p_lname = params.get("lname")

// current page - page 2
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

// assign value
fname.value = p_fname;
lname.value = p_lname;

// Password validation
function ValidatePassword() {
    let pass1 = document.getElementById("password").value
    let cnfmpass1 = document.getElementById("cpassword").value
    if (pass1 != cnfmpass1) {
        document.getElementById("err").innerHTML = "Password & ConfirmPassward not Matching."
        return false;
    }
    else
        return true;

        
}