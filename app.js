console.log('have fun !');

var form = {
	first_name: " ",
	last_name: " ",
	city: " "
}

function hello() {
	$("#button").click(function() {
		form["first_name"] = $("#first_name").val();
		form["last_name"] = $("#last_name").val();
		form["city"] = $("#city").val();
		$("#username").text(form["first_name"] + form["last_name"]);
		console.log(form);
	});
}

hello();