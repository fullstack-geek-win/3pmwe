const QueryString = window.location.search;
const params = new URLSearchParams(QueryString);
//input parameters
let firstname = params.get("firstname");
let lastname = params.get("lastname");
let gendr = params.get("gender");
let dateofbirth = params.get("DOB");

//output parameters
let out_firstname = document.getElementById("out_firstname");
let out_lastname = document.getElementById("out_lastname");
//let out_gendr = document.getElementsByTagName("out_gendr");
//let out_dateofbirth=document.getElementById("out_dateofbirth");
//Assign values
out_firstname.value = firstname;
out_lastname.value = lastname;
//out_gendr.value=gendr;
//out_dateofbirth=dateofbirth;

function dobValidation() {
    let dob = document.getElementById("DOB").value;
    let currentDate = new Date().toJSON().slice(0, 10);
    let age = parseInt(currentDate.slice(0, 4)) - parseInt(dob.slice(0, 4));
    document.getElementById("age").value = age;
    if (age < 18) {
        document.getElementById("agemsg").innerHTML = "You are not able to create an account if your DOB is under 18 years";
        return false;
    }
    // else if (age = NaN) {
    // document.getElementById("agemsg").innerHTML = "Please select DOB";
    // return false;
    //}
    return true;


}

function genderValidation() {
    if (document.getElementById("female").checked == false && document.getElementById("male").checked == false) {
        document.getElementById("genderr").innerHTML = "Please select any Gender";
        return false;
    }
    return true;

}

function IndexPageValidation() {
    if (!firstNameValidation())
        return false;

    if (!lastNameValidation())
        return false;

    return true;
}

function firstNameValidation(){
    document.getElementById("firstnameerr").innerHTML = "";

    let firstName = document.getElementById("firstname");
    let firstNameError = document.getElementById("firstnameerr");

    // let firstName1 = firstName.trim();
    if(firstName.value=="" || firstName.value==null){
        firstNameError.innerHTML = "Please enter the first name";
        return false;
    }

    return true;
}

function lastNameValidation(){

    document.getElementById("lastnameerr").innerHTML = "";


    let lastName = document.getElementById("lastname");
    let lastNameError = document.getElementById("lastnameerr");
    
    // let lastName1 = lastName.trim();
    if(lastName.value == "" || lastName.value==null){
        lastNameError.innerHTML = "Please enter the last name";
        return false;
    }

    return true;
}

