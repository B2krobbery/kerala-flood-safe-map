function updateDistrict(
    name,
    risk,
    info,
    shelters,
    helpline
) {

    document.getElementById("districtName").innerText = name;
    document.getElementById("riskLevel").innerText = risk;
    document.getElementById("safetyInfo").innerText = info;
    document.getElementById("helpline").innerText = helpline;

    const shelterContainer =
        document.getElementById("shelters");

    shelterContainer.innerHTML = "";

    shelters.forEach(function(shelter) {

        const p = document.createElement("p");

        p.innerText = shelter;

        shelterContainer.appendChild(p);

    });

}

function showGuide() {

    alert(
        "KERALA FLOOD EMERGENCY PREPAREDNESS GUIDE\n\n" +

        "1. Store clean drinking water\n\n" +

        "2. Keep emergency food supplies\n\n" +

        "3. Charge phones and power banks\n\n" +

        "4. Save emergency contact numbers\n\n" +

        "5. Locate nearest relief shelter\n\n" +

        "6. Keep a first aid kit ready\n\n" +

        "7. Follow Kerala flood alerts"
    );

}

function showHelplines() {

    alert(
        "KERALA EMERGENCY HELPLINE NUMBERS\n\n" +

        "State Emergency: 1077\n\n" +

        "Disaster Management: 1070\n\n" +

        "Police: 100 / 112\n\n" +

        "Ambulance: 108\n\n" +

        "Fire & Rescue: 101\n\n" +

        "Women Helpline: 1091\n\n" +

        "Child Helpline: 1098"
    );

}
