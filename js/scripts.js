function greet() {

	let yourName = document.getElementById('yourname').value;

    let greetingText = "Wassup " + yourName;

	document.getElementById("greeting").innerHTML = greetingText;

}

function getAGreeting(name) {

	if (name === "boris") {
		return "Boris";
	} else {
		return "Not boris";
	}
}
