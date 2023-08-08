const queryString = window.location.search
const params = new URLSearchParams(queryString)
let p_fname = params.get("fname")
let p_lname = params.get("lname")
let p_dob = params.get("dob")
let p_gender = params.get("gender")
let p_email = params.get("email")

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const email = document.getElementById("email");

fname.value = p_fname;
lname.value = p_lname;
dob.value = p_dob;
gender.value = p_gender;
email.value = p_email;


function ValidatePassword() {
    let password = document.getElementById("password").value
    let cpassword = document.getElementById("cpassword").value
    if (password != cpassword) {
        document.getElementById("err").innerHTML = "Password & ConfirmPassward not Matching."
        return false;
    }
    else
        return true;

        
}