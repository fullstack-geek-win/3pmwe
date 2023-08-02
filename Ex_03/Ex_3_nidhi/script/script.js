const queryString = window.location.search;
const params = new URLSearchParams(queryString);

let paramname = params.get("name")
let parammobile = params.get("mobile")
let paramaddress = params.get("address")
let paramtometosoup = params.get("tometosoup")
let paramhotandsour = params.get("hotandsour")
let paramManchowsoup = params.get("Manchowsoup")
let paramPanipuri = params.get("Panipuri")
let paramSevPuri = params.get("SevPuri")
let paramManchurian = params.get("Manchurian")
let paramTawaPaneer = params.get("TawaPaneer")

let o_paramname = document.getElementById("o_name")
let o_parammobile = document.getElementById("o_mobile")
let o_paramaddress = document.getElementById("o_address")
let o_paramtometosoup = document.getElementById("o_tometosoup")
let o_paramhotandsour = document.getElementById("o_hotandsour")
let o_paramManchowsoup = document.getElementById("o_Manchowsoup")
let o_paramPanipuri = document.getElementById("o_Panipuri")
let o_paramSevPuri = document.getElementById("o_SevPuri")
let o_paramManchurian = document.getElementById("o_Manchurian")
let o_paramTawaPaneer = document.getElementById("o_TawaPaneer")

o_paramname.value = paramname
o_parammobile.value = parammobile
o_paramaddress.value = paramaddress
o_paramtometosoup.value = paramtometosoup
o_paramhotandsour.value = paramhotandsour
o_paramManchowsoup.value = paramManchowsoup
o_paramPanipuri.value = paramPanipuri
o_paramSevPuri.value = paramSevPuri
o_paramManchurian.value = paramManchurian
o_paramTawaPaneer.value = paramTawaPaneer