const queryString = window.location.search
const params = new URLSearchParams(queryString)

//received from Query String
let paramfname = params.get("fname")
let paramlname = params.get(lname)
let paramdate = params.get(date)
let paramgender = params.get(gender)
let paramemail = params.get(email)
let parampassword = params.get(password)

// Input in All Steps
let o_paramfname = document.getElementById("o_fname")
let o_paramlname = document.getElementById("o_lname")
let o_paramdate = document.getElementById("o_date")
let o_paramgender = document.getElementById("o_gender")
let o_paramemail = document.getElementById("o_email")
let o_parampassword = document.getElementById("o_password")

//Assign value from received params to input
o_paramfname.value = paramfname
o_paramlname.value = paramlname
o_paramdate.value = paramdate
o_paramgender.value = paramgender
o_paramemail.value = paramemail
o_parampassword.value = parampassword

