'use strict';

angular.module('services', [])
	.factory('Rest', ['$http', function($http) {
		var Rest = {
			get: function(action) {
				var promise = $http.get('/rest/get/'+action).then(function(response) {
					return response.data;
				});
				return promise;
			},
			post: function(data) {
				var promise = $http.post('/rest/post', data).then(function(response) {
					return response.data;
				});
				return promise;
			}
		};
		return Rest;
	}])
	.factory('Analytics', [function() {
		var Analytics = {
			_track: function(category, action, label) {
				//console.log('Logged Event: '+category+' > '+action+'>'+label);
				//ga.push(['_trackEvent', category, action, label]);
				ga('send', 'event', category, action, label);
			},
			general: function(category, action, label) {
				this._track(category, action, label);	
			},
			link: function(label) {
				this._track('Link Click', action);
			}
		}
		return Analytics;
	}]);