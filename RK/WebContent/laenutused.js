function addLaenutamineLugejaValimine() {
	$
			.getJSON(
					"http://localhost:8080/rk_projekt/rest/lugejad/",
					function(lugejad) {
						var tableContent = "<h1 id='header'>L U G E J A  &nbsp V A L I M I N E</h1>";
						tableContent = tableContent
								+ "<table id='lugejad' class='table table-striped table-bordered table-hover'>";
						tableContent = tableContent
						+ "<thead><tr><div class='input-group' input class='form-control col-sm-3' type='text'id='lugejadFilter' onkeyup='lugejadFilter()' title='Nimi'>" +
						"<th>id</th><th>nimi</th><th></th></div></tr></thead><tbody>";
						for (var i = 0; i < lugejad.length; i++) {
							tableContent = tableContent
									+ "<tr><td class='col-sm-1'>"
									+ lugejad[i].idlugejad + "</td><td id='perenimi'>"
									+ lugejad[i].perenimi + ", "
									+ lugejad[i].eesnimi + "</td><td>"
									+ "<button class='btn btn-info' type='button' data-toggle='modal' data-target='#choose' onClick='addLaenutusedRaamatuValimine("
									+ lugejad[i].idlugejad + ",\""
									+ lugejad[i].eesnimi + "\",\""
									+ lugejad[i].perenimi
									+ "\")'>Vali</button></td></tr>";
						}
						tableContent = tableContent + "</tbody></div></table></div>";
						console.log(tableContent);
						document.getElementById("content").innerHTML = tableContent;
						$('#example').DataTable();
					});
	
}

function addLaenutusedRaamatuValimine(idLugeja, eesnimi, perenimi ) {
	$
			.getJSON(
					"http://localhost:8080/rk_projekt/rest/raamatud/",
					function(raamatud) {
						var tableContent = "<h1 id='header'>R A A M A T U &nbsp V A L I M I N E</h1><br>";
						tableContent = tableContent	+ "<h2> Lugeja : "+eesnimi+" "+perenimi+"</h2>";
						tableContent = tableContent
						+ "<div><table id='raamatud' class='table table-striped table-bordered table-hover'>";
				tableContent = tableContent
				+ "<thead><tr><div class='input-group' input class='form-control col-sm-3' type='text' id='raamatudFilter' onkeyup='raamatudFilter()' title='Nimi'></div>" +
						"<th>id</th><th>Autorid</th><th>Pealkiri</th><th>Aasta</th><th></th></tr><thead><tbody>";
				for (var i = 0; i < raamatud.length; i++) {
					tableContent = tableContent
					+ "<tr><td class='col-sm-1'>"
					+ raamatud[i].idRaamatud + "</td><td>"
					+ raamatud[i].autor1Eesnimi + " "
					+ raamatud[i].autor1Perenimi + ", "
					+ raamatud[i].autor2Eesnimi + " "
					+ raamatud[i].autor2Perenimi + "</td><td>"
					+ raamatud[i].pealkiri + "</td><td>"
					+ raamatud[i].aasta + "</td><td>"
					+ "<button class='btn btn-info' type='button' data-toggle='modal' data-target='#choose' onClick='addLaenutused("
					+ raamatud[i].idRaamatud + "," + idLugeja+")'>Vali</button></td></tr>";
				}
				tableContent = tableContent + "</tbody></table></div>";
						console.log(tableContent);
						document.getElementById("content").innerHTML = tableContent;
						$('#example').DataTable();
					});
	
}

function addLaenutused(idRaamatud, idLugejad) {
					var newLaenutusedJSON = {
							"idLugejad" : idLugejad,
							"idRaamatud" : idRaamatud
						};
						console.log(newLaenutusedJSON);
						$
								.ajax({
									url : "http://localhost:8080/rk_projekt/rest/laenutused/",
									cache : false,
									type : 'POST',
									data : JSON.stringify(newLaenutusedJSON),
									contentType : "application/json; charset=utf-8",
									success : function(addLaenutused) {
										alert = "<div class='alert alert-success alert-dismissible'><button type='button' class='close' data-dismiss='alert' aria-label='Close'>"
											+ "<span aria-hidden='true'>&times;</span></button><strong> Uus laenutus lisatud </strong></div>";
									document.getElementById("content1").innerHTML = alert;
									$(".alert").delay(20000).slideUp(200, function() {
										$(this).alert('close');
									});
//										getAllRaamatud();
									},
									error : function(XMLHttpRequest, textStatus, errorThrown) {
										console.log("Status : " + textStatus);
										console.log("error :" + errorThrown)
									}
								});
					}


function LugejadFilter() {
	var lugejad, filter, table, tr, td, i;
	lugejad = document.getElementById("lugejadFilter");
	filter = lugejad.value;
	table = document.getElementById("example");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function RaamatudFilter() {
	var raamatud, filter, table, tr, td, i;
	raamatud = document.getElementById("raamatudFilter");
	filter = raamatud.value;
	table = document.getElementById("example");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}