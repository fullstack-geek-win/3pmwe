const queryString = window.location.search
const params = new URLSearchParams(queryString)
let p_fname = params.get("fname")
let p_lname = params.get("lname")

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");


fname.value = p_fname;
lname.value = p_lname;

