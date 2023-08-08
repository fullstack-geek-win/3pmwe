const queryString = window.location.search
const params = new URLSearchParams(queryString)


let paramfname = params.get(fname)
let paramlname = params.get(lname)
let paramdob = params.get(dob)
let paramgender = params.get(gender)
let paramemail = params.get(email)
let parampassword = params.get(password)

let o_paramfname = document.getElementById("o_fname");
let o_paramlname = document.getElementById("o_lname");
let o_paramdob = document.getElementById("o_dob");
let o_paramgender = document.getElementById("o_gender");
let o_paramemail = document.getElementById("o_email");
let o_parampassword = document.getElementById("o_password");

o_paramfname.value = paramfname;
o_paramlname.value = paramlname;
o_paramdob.value = paramdob;
o_paramgender.value = paramgender;
o_paramemail.value = paramemail;
o_parampassword.value = parampassword;