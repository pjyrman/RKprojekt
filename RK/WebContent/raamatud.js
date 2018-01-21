function getAllRaamatud() {
	$
			.getJSON(
					"http://localhost:8080/rk_projekt/rest/raamatud/",
					function(raamatud) {
						var tableContent = "<h1 id='header'>R A A M A T U D</h1>";
						tableContent = tableContent
						+ "<div><table id='raamatud' class='table table-striped table-bordered table-hover'>";
				tableContent = tableContent
				+ "<thead><tr><div class='input-group' input class='form-control col-sm-3' type='text' id='raamatudFilter' onkeyup='raamatudFilter()' title='Nimi'></div>" +
						"<th>id</th><th>Autorid</th><th>Pealkiri</th><th>Aasta</th></tr><thead><tbody>";
				for (var i = 0; i < raamatud.length; i++) {
					tableContent = tableContent
					+ "<tr><td class='col-sm-1'>"
					+ raamatud[i].idRaamatud + "</td><td>"
					+ raamatud[i].autor1Eesnimi + " "
					+ raamatud[i].autor1Perenimi + ", "
					+ raamatud[i].autor2Eesnimi + " "
					+ raamatud[i].autor2Perenimi + "</td><td>"
					+ raamatud[i].pealkiri + "</td><td>"
					+ raamatud[i].aasta + "</td></tr>"
				}
				tableContent = tableContent + "</tbody></table></div>";	
				console.log(tableContent);
						document.getElementById("content").innerHTML = tableContent;						
						$('#example').DataTable();
					});
	
}
	function addRaamatudForm() {
		var formContent = "<h2 id='header'>RAAMATU &nbsp  LISAMINE</h2>";
		formContent = formContent
				+ "<form name='raamatud' method='post'><Table class='addTable'><tr>"
		formContent = formContent
				+ "</table></br><button type='button' class='btn btn-info' onClick='validateFormRaamatud()''>Lisa</button>";
		document.getElementById("content").innerHTML = formContent;
		$('#example').DataTable();
	}
	
	function validateFormRaamatud() {
		if (document.forms["raamatud"]["pealkiri"].value == "") {
			alert = "<div class='alert alert-danger alert-dismissible'><button type='button' class='close' data-dismiss='alert' aria-label='Close'>"
				+ "<span aria-hidden='true'>&times;</span></button><strong>Pealkiri puudub!</strong></div>";
			document.getElementById("content1").innerHTML = alert;
			$(".alert").delay(20000).slideUp(200, function() {
				$(this).alert('close');
			});
		} else {
				addRaamtud();
		}
	}
	
	
function addRaamatud() {
		var newRaamatudJSON = {
			"pealkiri" : document.getElementById("pealkiri").value,
		};
		console.log(newRaamatudJSON);
		$
				.ajax({
					url : "http://localhost:8080/rk_projekt/rest/raamatud/",
					cache : false,
					type : 'POST',
					data : JSON.stringify(newRaamatudJSON),
					contentType : "application/json; charset=utf-8",
					success : function(addRaamatud) {
						alert = "<div class='alert alert-success alert-dismissible'><button type='button' class='close' data-dismiss='alert' aria-label='Close'>"
							+ "<span aria-hidden='true'>&times;</span></button><strong> Uus isik lisatud </strong></div>";
					document.getElementById("content1").innerHTML = alert;
					$(".alert").delay(20000).slideUp(200, function() {
						$(this).alert('close');
					});
						getAllRaamatud();
					},
					error : function(XMLHttpRequest, textStatus, errorThrown) {
						console.log("Status : " + textStatus);
						console.log("error :" + errorThrown)
					}
				});
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