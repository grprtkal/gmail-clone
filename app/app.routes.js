app.config(function($routeProvider) {
	$routeProvider
		.when("/inbox", {
			templateUrl: "inbox/inbox.html",
			controller: "InboxCtrl",
			controllerAs: "inbox"
		})
		.otherwise({
			redirectTo: "/inbox"
		})
});
