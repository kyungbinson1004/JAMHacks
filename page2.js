var myFunction = function() {
	var value = document.getElementById("name").value;
	var valuee = document.getElementById("average").value;
	var valueee = document.getElementById("course").value;
	var valueeee = document.getElementById("email").value;

	var vvvvvalue = localStorage.getItem("name");
	var vvalue = localStorage.getItem("average");
	var vvvalue = localStorage.getItem("course");
	var vvvvvvalue = localStorage.getItem("email");

	var redirect = false;

	if (valuee === vvalue && valueee === vvvalue) {
		redirect = true;
		alert("NAME:" + vvvvvalue + "   " + "CONTACT:" + vvvvvvalue);
	}

	else if (localStorage.getItem("average") === null && localStorage.getItem("course")=== null) {
		alert("Please wait until another person inputs their information.");
	}

	else {
		redirect = true
		alert("We found no Study Buddy for you! :(");

	}


	localStorage.setItem('name', value);
	localStorage.setItem('average', valuee);
	localStorage.setItem('course', valueee);
	localStorage.setItem('email', valueeee);
	window.location.redirect("page3.html");

	return false;
};

