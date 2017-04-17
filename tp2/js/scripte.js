function validation() {


var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var adresse = document.getElementById("adresse").value;
var mail = document.getElementById("mail").value;
var date = document.getElementById("date").value;

var element = "";
	if(nom.length<5){

		element = element + "Nom, ";

	}

	if(prenom.length<5){

		element = element + "Prenom, ";

	}
	if(adresse.length<5){

		element = element + "Adresse, ";

	}
	if(mail.length<5){

		element = element + "E-mail, ";

	}
	if(date.length<5){

		element = element + "Date de Naissance, ";

	}

	if(element.length > 0){

		document.getElementById("erreur").innerHTML = "<p>Les champs: "+ element +" ont moins de 5 caracteres!</p>";
			document.getElementById("valide").style.display = "none";
			document.getElementById("erreur").style.display = "block";

	}else{

			document.getElementById("valide").innerHTML = "<p> Bienvenu "+nom+element+" ! </p>";
			document.getElementById("valide").style.display = "block";
			document.getElementById("erreur").style.display = "none";
	}
}