var config = require('./config.json');

var express = require('express');

var app = express();

var possibleValues = config.possibleValues;

delete config.possibleValues;	// avoid sending unused data to UI


require('ludwig-ui')(app, __dirname, config);

app.use('/api', require('ludwig-api')({
	possibleValues: possibleValues,
	simulate: function(test, done) {
		console.log('Simulating', test);

		done(null, {
			valueId: 0
		});
	},

	onCreate: function(test, done) {
		done();	// nothing to do at the moment
	}
}));


var port = process.env.PORT || 9000;

// Start server
app.listen(port, function () {
	console.log('Express server listening on port', port, 'in mode', app.get('env'));
});

module.exports = app;
