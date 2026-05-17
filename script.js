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
