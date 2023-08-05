/*
	Alerts the user that they have either been subscribed to the
	newsletter or have not entered a name and email address.
*/
function subscribe() {
	var name = document.getElementById("name").value; // Get name entered
	var email = document.getElementById("mail").value; // Get email entered
	if (name.trim() !== '' && email.trim() !== '') { // Check if the name and email contain any text
		alert("Thank you "+name+". You have been subscribed to the newsletter."); // Name and email entered, notify the user they've subscribed
	} else {
		alert("Please enter a name and email."); // No email or name entered, alert the user
	}
}