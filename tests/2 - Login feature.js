description: 'A user should be able to log in',

scenario: [
	LoginWidget.goto(),
	LoginWidget.setEmailField(email),
	LoginWidget.setPasswordField(password),
	LoginWidget.submit(),
	{
		'LoginWidget.gotoLink': false
	}
]
