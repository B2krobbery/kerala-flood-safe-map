function updateDistrict(
name,
risk,
info,
shelter,
helpline
){
document.getElementById("districtName").innerText = name;
document.getElementById("riskLevel").innerText = risk;
document.getElementById("safetyInfo").innerText = info;
document.getElementById("shelters").innerText = shelter;
document.getElementById("helpline").innerText = helpline;
}

function showGuide() {
alert(
"KERALA FLOOD EMERGENCY PREPAREDNESS GUIDE\n\n" +

"1. Store clean drinking water\n\n" +

"2. Keep emergency food supplies\n\n" +

"3. Charge power banks and phones\n\n" +

"4. Save emergency contact numbers\n\n" +

"5. Locate nearest relief shelters\n\n" +

"6. Keep a first aid kit ready\n\n" +

"7. Follow Kerala flood alerts and weather warnings"
);
}
