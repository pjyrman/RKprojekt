function alertMessage(alertType, message) {
	return "<div class='alert alert-"
			+ alertType
			+ " alert-dismissible'><button type='button' class='close' data-dismiss='alert' aria-label='Close'>"
			+ "<span aria-hidden='true'>&times;</span></button><strong>"
			+ alertType + "</strong></div>";
}