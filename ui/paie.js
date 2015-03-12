angular.module('ludwig').directive('scenario', function() {
	return {
		scope: { test: '=' },
		template: 'Test: {{ test.scenario | json }}'
	}
});
