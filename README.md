#How to add content (why-rad example)

###in ** routes.js ** add: 
```
$routeProvider.when('/why-rad', {
  templateUrl: 'partials/**why-rad-partial.html**',
  controller: ‘why-radCTL'
});
```

###in **controllers.js** add
```
.controller(‘why-radCTL', function(){

})
```

###Add this to **home-partial.html**
```
 <!-- ROW ITEM -->
    <div class="row faq-item" ng-class="{active: isActive('/so-rad')}">
      <div class="col-xs-10"> <p>Why is this so rad?</p></div>
      <div class="col-xs-2">
        <a href="#/why-rad">
          <img class="arrow" src="img/angle-right.svg">
        </a>
      </div>
    </div>
 <!-- /ROW ITEM—>
```
###Add this new file to Partials folder:


why-rad-partial.html

^^in this file, you can copy any other "what-evs-partial.html" and replace with whatever code you want

