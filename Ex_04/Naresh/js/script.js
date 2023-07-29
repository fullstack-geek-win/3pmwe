// var
// let
// const

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

// Received from querystring
let paramname = params.get("name")
let parammobile = params.get("mobile")
let paramordernote = params.get("ordernote")
let paramaddress = params.get("address")
let paramfrenchonionsoup = params.get("frenchonionsoup")
let paramplainscsoup = params.get("plainscsoup")
let paramsweetcornvegsoup = params.get("sweetcornvegsoup")
let paramfriedpappad = params.get("friedpappad")
let paramcucumbersalad = params.get("cucumbersalad")
let paramtomatosalad = params.get("tomatosalad")
let paramvegsalad = params.get("vegsalad")


// Input in Payment page
let o_paramname = document.getElementById("o_name")
let o_parammobile = document.getElementById("o_mobile")
let o_paramordernote = document.getElementById("o_ordernote")
let o_paramaddress = document.getElementById("o_address")
let o_paramfrenchonionsoup = document.getElementById("o_frenchonionsoup")
let o_paramplainscsoup = document.getElementById("o_plainscsoup")
let o_paramsweetcornvegsoup = document.getElementById("o_sweetcornvegsoup")
let o_paramfriedpappad = document.getElementById("o_friedpappad")
let o_paramcucumbersalad = document.getElementById("o_cucumbersalad")
let o_paramtomatosalad = document.getElementById("o_tomatosalad")
let o_paramvegsalad = document.getElementById("o_vegsalad")

//Assign value from received params to input
o_paramname.value = paramname
o_parammobile.value = parammobile
o_paramordernote.value = paramordernote
o_paramaddress.value = paramaddress
o_paramfrenchonionsoup.value = paramfrenchonionsoup
o_paramplainscsoup.value = paramplainscsoup
o_paramsweetcornvegsoup.value = paramsweetcornvegsoup
o_paramfriedpappad.value = paramfriedpappad
o_paramcucumbersalad.value = paramcucumbersalad
o_paramtomatosalad.value = paramtomatosalad
o_paramvegsalad.value = paramvegsalad





