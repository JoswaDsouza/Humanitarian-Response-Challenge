function yourFunctionName(element, JSONString) {
    const JObject = JSON.parse(JSONString);

    for (let i = 0; i < JObject.length; i++) {
        document.getElementById("customerfirstname").value = JObject[i]["First Name"];
        document.getElementById("customerlastname").value = JObject[i]["Last Name"];
        document.getElementById("email").value = JObject[i]["Email"];
        document.getElementById("city").value = JObject[i]["City"];
        document.getElementById("state").value = JObject[i]["State"];
	
	var originalDate = JObject[i]["Date of Birth"];
	var dateObject = new Date(originalDate);
	var formattedDate = (dateObject.getMonth() + 1).toString().padStart(2, '0') + '/' +
                    dateObject.getDate().toString().padStart(2, '0') + '/' +
                    dateObject.getFullYear();
	document.getElementById("dateofbirth").value = formattedDate;



        if (JObject[i]["Clothing Size"] === "S") {
            document.getElementById("clothingsize-s").checked = true;
        } else if (JObject[i]["Clothing Size"] === "M") {
            document.getElementById("clothingsize-m").checked = true;
        } else if (JObject[i]["Clothing Size"] === "L") {
            document.getElementById("clothingsize-l").checked = true;
        }

        add_button.click();
    }

    submit_button.click();
}
