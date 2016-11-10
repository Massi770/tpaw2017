

$(document).ready(function(){

/*$( ".selector" ).datepicker({
  altFormat: "jj-mm-yyyy"
});
$( "#datepicker" ).datepicker();*/
var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var adresse = document.getElementById("adresseT").value;
var mail = document.getElementById("mail").value;
var date = document.getElementById("date").value;

$("#valider").click(function () {


			if ($("#nom").val().length <5 ||  $("#prenom").val().length <5 || $("#mail").val().length <5 ) {
			$("#modalE").modal("show");	
		}else{



            localStorage.setItem("nom", nom);
            localStorage.setItem("prenom", prenom);
            localStorage.setItem("adresse", adresse);
            localStorage.setItem("dateNaissance", date);
            localStorage.setItem("mail", mail);

            document.getElementById("valideT").style.display = "block";
			
		}

});
$( "#nom" ).keypress(function() {

  $("#basic-nom").html($("#nom").val().length);
});
$( "#prenom" ).keypress(function() {

  $("#basic-prenom").html($("#prenom").val().length);
});
$( "#date" ).keypress(function() {

  $("#basic-dateNaissance").html($("#date").val().length);
});
$( "#adresseT" ).keypress(function() {

  $("#basic-geo").html($("#adresseT").val().length);
});
$( "#mail" ).keypress(function() {

  $("#basic-mail").html($("#mail").val().length);
});

});
var x = document.getElementById("valide");



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        x.style.display = "none";
    } else {
       
        x.innerHTML = "<p>Geolocation is not supported by this browser.</p>";
		x.style.display = "block";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?markers="+latlon+"&size=400x350&zoom=10"; 

    document.getElementById("mapholder").innerHTML = "<img class='img-responsive' src='"+img_url+"'>";
    document.getElementById("adresseT").value = latlon;
}

function showError(error) {
    x.style.display = "block";
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}





