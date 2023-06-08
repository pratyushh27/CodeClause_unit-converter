function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var result = 0;
    
    // formulas

    if (fromUnit === "meters" && toUnit === "feet") {
        result = inputValue * 3.28084;
    } else if (fromUnit === "feet" && toUnit === "meters") {
        result = inputValue / 3.28084;
    } else if (fromUnit === "meters" && toUnit === "inches") {
        result = inputValue * 39.3701;
    } else if (fromUnit === "inches" && toUnit === "meters") {
        result = inputValue / 39.3701;
    } else if (fromUnit === "feet" && toUnit === "inches") {
        result = inputValue * 12;
    } else if (fromUnit === "inches" && toUnit === "feet") {
        result = inputValue / 12;
    } else if (fromUnit === "meters" && toUnit === "meters"){
        result = inputValue;
    } else if (fromUnit === "feet" && toUnit === "feet") {
        result = inputValue;
    } else if (fromUnit === "inches" && toUnit === "inches"){
        result = inputValue;
    } else if (fromUnit === "kilogram" && toUnit === "kilogram"){
        result = inputValue;
    } else if (fromUnit === "kilogram" && toUnit === "gram"){
        result = inputValue*1000 ;
    }  else if (fromUnit === "gram" && toUnit === "kilogram"){
        result = inputValue/1000;
    }
    
    document.getElementById("result").innerHTML = inputValue + " " + fromUnit + " is equal to " + result + " " + toUnit;
}
 
function reset() {
    document.getElementById("inputValue").value = "";
    document.getElementById("fromUnit").selectedIndex = 0;
    document.getElementById("toUnit").selectedIndex = 0;
    document.getElementById("result").innerHTML = "";
}