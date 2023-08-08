const queryString = window.location.search
const params = new URLSearchParams(queryString)
let p_fname = params.get("fname")
let p_lname = params.get("lname")
let p_dob = params.get("dob")
let p_gender = params.get("gender")



const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");

fname.value = p_fname;
lname.value = p_lname;
dob.value = p_dob;
gender.value = p_gender;