function addLaenutamine() {
	$
			.getJSON(
					"http://localhost:8080/rk_projekt/rest/lugejad/",
					function(lugejad) {
						var tableContent = "<h1 id='header'>L U G E J A  &nbsp O T S I M I N E</h1>";
						tableContent = tableContent
								+ "<table id='example' class='table table-striped table-bordered table-hover'>";
						tableContent = tableContent
								+ "<thead>	<tr><div class='input-group'>" +
										"</th><td>id</td><td>nimi</td><th></th></tr></thead><tbody></div>";
						for (var i = 0; i < lugejad.length; i++) {
							tableContent = tableContent
									+ "<tr><td class='col-sm-1'>"
									+ lugejad[i].idlugejad + "</td><td>"
									+ lugejad[i].perenimi + ", "
									+ lugejad[i].eesnimi + "</td><td>"
									+ "<button class='btn btn-info' type='button' data-toggle='modal' data-target='#choose' onClick='addLaenutused("
									+ lugejad[i].idlugejad + ",\""
									+ lugejad[i].eesnimi + "\",\""
									+ lugejad[i].perenimi
									+ "\")'>Vali</button></td></tr>";
						}
						tableContent = tableContent + "</tbody></table></div>";
						console.log(tableContent);
						document.getElementById("content").innerHTML = tableContent;
						$('#example').DataTable();
					});
	
}

function addLaenutused() {
	$
			.getJSON(
					"http://localhost:8080/rk_projekt/rest/raamatud/",
					function(raamatud) {
						var tableContent = "<h1 id='header'>R A A M A T U  &nbsp O T S I M I N E</h1>";
						tableContent = tableContent+ lugejad[i].eesnimi + "\",\""+ lugejad[i].perenimi+"</br>";
						tableContent = tableContent
								+ "<div><table id='example' class='table table-striped table-bordered table-hover'>";
						tableContent = tableContent
								+ "<thead><tr></tr><div class='input-group'><input class='form-control col-sm-3' type='number' placeholder ='Flat'  id='flatFilter' onkeyup='flatFilter()' title='Flat number'></th><td>id</td><td>nimi</td><th></th></tr></thead><td>id</td><td>nimi</td><tbody></div>";
						for (var i = 0; i < lugejad.length; i++) {
							tableContent = tableContent
									+ "<tr><td class='col-sm-1'>"
									+ lugejad[i].idlugejad + "</td><td>"
									+ lugejad[i].eesnimi + " "
									+ lugejad[i].perenimi + "</td><td>"
									+ "<button class='btn btn-danger' type='button' data-toggle='modal' data-target='#choose' onClick='fillDeleteOwner("
									+ lugejad[i].idlugejad + ",\""
									+ lugejad[i].eesnimi + "\",\""
									+ lugejad[i].perenimi
									+ "\")'>Vali</button></td></tr>";
						}
						tableContent = tableContent + "</tbody></table></div>";
						console.log(tableContent);
						document.getElementById("content").innerHTML = tableContent;
						$('#example').DataTable();
					});
}
