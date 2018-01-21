function getAllLugejad() {
	$
			.getJSON(
					"http://localhost:8080/rk_projekt/rest/lugejad/",
					function(lugejad) {
						var tableContent = "<h1 id='header'>L U G E J A D</h1>";
						tableContent = tableContent
								+ "<div><table id='example' class='table table-striped table-bordered table-hover'>";
						tableContent = tableContent
								+ "<thead>	<tr></tr></thead><td>id</td><td>nimi</td><tbody></div>";
						for (var i = 0; i < lugejad.length; i++) {
							tableContent = tableContent
									+ "<tr><td class='col-sm-1'>"
									+ lugejad[i].idlugejad + "</td><td>"
									+ lugejad[i].eesnimi + " "
									+ lugejad[i].perenimi + "</td>"
						}
						tableContent = tableContent + "</tbody></table></div>";
						document.getElementById("content").innerHTML = tableContent;
						$('#example').DataTable();
					});
	
}
	function addLugejadForm() {
		var formContent = "<h2 id='header'>LUGEJA &nbsp  LISAMINE</h2>";
		formContent = formContent
				+ "<form name='lugejad' method='post'><Table class='addTable'><tr>"
		formContent = formContent
				+ "<div class='input-group'><tr><td>Eesnimi : </td> <td><input id='eesnimi' name='eesnimi' class='form-control' type='text'></div></td></tr>";
		formContent = formContent
				+ "<div class='input-group'><tr><td>Perenimi : </td> <td><input id='perenimi' name='perenimi' class='form-control' type='text'></div></td></tr>";
		formContent = formContent
				+ "</table></br><button type='button' class='btn btn-info' onClick='validateFormLugejad()''>Lisa</button>";
		document.getElementById("content").innerHTML = formContent;
		$('#example').DataTable();
	}
	
	function validateFormLugejad() {
		if (document.forms["lugejad"]["eesnimi"].value == "") {
			alert = "<div class='alert alert-danger alert-dismissible'><button type='button' class='close' data-dismiss='alert' aria-label='Close'>"
				+ "<span aria-hidden='true'>&times;</span></button><strong>Eesnimi puudub!</strong></div>";
			document.getElementById("content1").innerHTML = alert;
			$(".alert").delay(20000).slideUp(200, function() {
				$(this).alert('close');
			});
		} else {
			if (document.forms["lugejad"]["perenimi"].value == "") {
					alert = "<div class='alert alert-danger alert-dismissible'><button type='button' class='close' data-dismiss='alert' aria-label='Close'>"
							+ "<span aria-hidden='true'>&times;</span></button><strong>Perekonnanimi puudub!</strong></div>";
					document.getElementById("content1").innerHTML = alert;
					$(".alert").delay(20000).slideUp(200, function() {
						$(this).alert('close');
					});
			} else {
				addLugejad();
			}
		}
	}
	
	
function addLugejad() {
		var newLugejadJSON = {
			"eesnimi" : document.getElementById("eesnimi").value,
			"perenimi" : document.getElementById("perenimi").value
		};
		console.log(newLugejadJSON);
		$
				.ajax({
					url : "http://localhost:8080/rk_projekt/rest/lugejad/",
					cache : false,
					type : 'POST',
					data : JSON.stringify(newLugejadJSON),
					contentType : "application/json; charset=utf-8",
					success : function(addLugejad) {
						alert = "<div class='alert alert-success alert-dismissible'><button type='button' class='close' data-dismiss='alert' aria-label='Close'>"
							+ "<span aria-hidden='true'>&times;</span></button><strong> Uus isik lisatud </strong></div>";
					document.getElementById("content1").innerHTML = alert;
					$(".alert").delay(20000).slideUp(200, function() {
						$(this).alert('close');
					});
						getAllLugejad();
					},
					error : function(XMLHttpRequest, textStatus, errorThrown) {
						console.log("Status : " + textStatus);
						console.log("error :" + errorThrown)
					}
				});
	}

