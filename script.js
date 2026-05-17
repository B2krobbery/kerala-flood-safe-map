function updateDistrict(
name,
risk,
info,
shelters,
helpline
){

document.getElementById("districtName").innerText = name;
document.getElementById("riskLevel").innerText = risk;
document.getElementById("safetyInfo").innerText = info;
document.getElementById("helpline").innerText = helpline;

const shelterContainer =
document.getElementById("shelters");

shelterContainer.innerHTML = "";

shelters.forEach(function(shelter){

const p = document.createElement("p");

p.innerHTML = "🏠 " + shelter;

shelterContainer.appendChild(p);

});

}

function showGuide(){

alert(
"KERALA FLOOD EMERGENCY PREPAREDNESS GUIDE\n\n" +

"✅ Store clean drinking water\n\n" +

"✅ Keep emergency food supplies\n\n" +

"✅ Charge phones and power banks\n\n" +

"✅ Save emergency contact numbers\n\n" +

"✅ Locate nearest relief shelter\n\n" +

"✅ Keep first aid kit ready\n\n" +

"✅ Follow Kerala flood alerts"
);

}
