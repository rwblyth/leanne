function greet() {

	let yourName = document.getElementById('yourname').value;

    let greetingText = "";

    let cabinet = ["boris", "gove", "javid", "monopoly man"];

	if (cabinet.includes(yourName) ) {
		printTheGreeting("Fuck you");

	} else if (yourName==="Fergie") {
		greetingText="suck robs dick";

	} else if (yourName==="Mourinho") {
		greetingText="go and park your bus";

	} else if (yourName==="Yaya") {

		for (let i = 0 ;	// Start the loop 
			 i < 7 ;		// Check to see if you are finished or should run the code in the { }
			 i = i + 1) // Do this after each time you run the code in the { } block
		{

			greetingText = greetingText + "Yaya ";
		}

		greetingText = greetingText + "Toure";

	} else if (yourName === "cabinet") {
		for (let j = 0;
			 j < cabinet.length ;
			 j = j + 1) {

			greetingText = greetingText + " Fuck off " + cabinet[j];
		}

	} else {
		greetingText = "Wassup " + yourName;
	}

	// document.getElementById("greeting").innerHTML = greetingText;
	let newGreeting = getAGreeting(yourName);

	printTheGreeting(newGreeting);
}

function printTheGreeting(theGreetingText) {

	// let theGreetingText = "hello";

	document.getElementById("greeting").innerHTML = theGreetingText;

}

function getAGreeting(name) {

	if (name === "boris") {
		return "Boris";
	} else {
		return "Not boris";
	}
}
