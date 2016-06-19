angular
	.module('portfolioApp')
	.config(config);
config.$inject = ['$routeProvider'];

function config($routeProvider){
	$routeProvider
		.when('/', {
			template: '<home-page></home-page>'
		})
		.when('/about', {
			template: '<about-page></about-page>'
		})
		.when('/projects/:id/:slug', {
			template: '<project-page></project-page>'
		})
		.when('/contact', {
			template: '<contact-page></contact-page>'
		})
		.when('/error', {
			template: '<error-page></error-page>'
		})
		.otherwise({
			redirectTo: '/error'
		});
}