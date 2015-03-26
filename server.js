var http = require('http'),
	path = require('path');

var config = require('./config.json');

var express = require('express');

var app = express();

var possibleValues = config.possibleValues;

delete config.possibleValues;	// avoid sending unused data to UI

config.scenarioTemplatePath = path.resolve(config.scenarioTemplatePath);


process.env.MONGODB_URL = process.env.MONGODB_URL || require('url').format({
	protocol	: 'mongodb',
	slashes		: true,
	host		: process.env.npm_package_config_mongoHost,
	pathname	: process.env.npm_package_name
});


app.use(config.baseApiPath, require('ludwig-api')({
	possibleValues: possibleValues,
	simulate: function(test, done) {
		http.get(test.scenario, function(res) {
			var result = '';

			res.on('data', function(chunk) {
				result += chunk;
			});
			res.on('end', function() {
				done(null, JSON.parse(result).values);
			});
			res.on('error', done);
		});
	}
}));

app.use(config.baseUrl, require('ludwig-ui')(config));


var port = process.env.PORT || process.env.npm_package_config_port;

// Start server
app.listen(port, function () {
	console.log('Serving Ludwig on http://localhost:' + port + config.baseUrl + ' in mode', app.get('env'));
});

module.exports = app;
