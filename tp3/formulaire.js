$(function(){
    $("#valider").click(function(){
	if ($("#Nom").val().length <1 || $("#Adresse").val().length <1 || $("#Prenom").val().length <1 || $("#DateDeNaissance").val().length <1 || $("#Mail").val().length <1 ) {
			$("#myModal").modal("show");	
			//$("#ModalMaps").modal("hide");
		}else{
			$("#ModalMaps .modal-body").html("<img width = '100%' src='https://maps.googleapis.com/maps/api/staticmap?center="+$("#Adresse").val()+"&markers="+$("#Adresse").val()+"&size=640x400'/>");
			$("#ModalMaps").modal("show");
			//$("#myModal").modal("hide");
		}
		//$("#ModalMaps").modal("show");
    });
	});