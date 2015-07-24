#How to add content (why-rad example)

###In your  JS folder, find **routes.js** and **controllers.js** add:

in ** routes.js ** add: 
'''
$routeProvider.when('/**why-rad**', {
  templateUrl: 'partials/**why-rad-partial.html**',
  controller: ‘**why-radCTL**'
});
'''
