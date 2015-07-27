console.log("we are up!");

var api_key = "?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d";
var searchTerm;

$(document).ready(function() {

	$("body").on("click", ".submitbutton", function(event){
		event.preventDefault();
		searchTerm = $("#searchinput").val();
		searchResults(searchTerm);
	});

});

function callback(data){
	$("#results").html("");
	$("#results").append("<div><p>this should be username: " + data.login + "</p></div>");
	$("#results").append("<div><p><a href='" + data.url + "'>this should be the link to the users</a></p></div>");
	$("#results").append("<div><p>this is the profile img:</p><img src='" + data.avatar_url + "'></div>");
	$("#results").append("<div><p>this is my random public data: " + data.public_repos + "</p></div>");
}

function searchResults(query) {
	$.ajax({
		url: 'https://api.github.com/users/' + encodeURI(searchTerm) + api_key,
		type: 'GET',
		dataType: 'json',
		success: function(data){
			callback(data);
		},
		error: function(){
			alert("whoopsie lala");
		}
	});
}

// function callback(data){
// 	$("#accordion").html("");
// 	$("#accordion").append("<h3>username</h3><div><p>this should be username: " + data.login + "</p></div>");
// 	$("#accordion").append("<h3>site url</h3><div><p>this should be the link to the users site: " + data.url + "</p></div>");
// 	$("#accordion").append("<h3>profile picture</h3><div><p>this is the profile img:</p><img src='" + data.avatar_url + "'></div>");
// 	$("#accordion").append("<h3>public repos</h3><div><p>this is my random public data: " + data.public_repos + "</p></div>");
// }
