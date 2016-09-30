

var conversions = {"A": "._", "B": "_...", "C": "_._.", "D": "_..", "E": ".", "F": ".._.", "G": "_ _ .", "H": "....", "I": "..", "J": "._ _ _",
					"K": "_._", "L": "._..", "M": "_ _", "N": "_.", "O": "_ _ _", "P": ". _ _ .", "Q": "_ _ . _", "R": ". _ .", "S": "...",
					"T": "_", "U": ".. _", "V": "..._", "W": "._ _", "X": "_.._", "Y": "_._ _", "Z": "_ _ .."};

var el = document.getElementById("conversion");
var str = prompt("Please enter a phrase to be converted: ").toUpperCase();

var replaceIt = function(str){
	var doWork = "";
	for(var i = 0; i < str.length; i++){
		doWork += str[i].replace(str[i],conversions[str[i]]) + " | ";
	}
	return doWork;
}

var result = replaceIt(str);
//	console.log(result);
el.innerHTML = result;





