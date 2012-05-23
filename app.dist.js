/**
 * Configure routing and URL handling
 */
ngMobile.config(function($routeProvider, $locationProvider) {
    // configure your routes to load the partials / views and bind controllers
    $routeProvider.when('/start', { template: 'partials/start.html', controller: StartCntl });
    $routeProvider.when('/demo', { template: 'partials/demo.html', controller: DemoCntl });
    $routeProvider.when('/form', { template: 'partials/form.html', controller: FormCntl });
    $routeProvider.when('/list', { template: 'partials/list.html', controller: ListCntl });
    $routeProvider.when('/basics', { template: 'partials/basics.html', controller: BasicsCntl });
    $routeProvider.when('/markup', { template: 'partials/markup.html', controller: MarkupCntl });

    $routeProvider.otherwise({ redirectTo: '/start' });

    // this must be to get it work! dont't change if you don't know exactly what you do...
    $locationProvider.html5Mode(false).hashPrefix('');
});

ngMobile.directive('ngmBackButton', function() {

});


/**
 * Startpage Controller
 */
function StartCntl($scope, $location) {
    // Set partials for Header and Footer in MainCntl
    $scope.setHeaderText('Start');

    // the header and footer are set to this value in MainCntl already (see lib/ng-mobile.js)...
    // but this way, you can set them to another file
    /*
    $scope.setPartial('header', 'partials/default_header.html');
    $scope.setPartial('footer', 'partials/other_footer.html');
    */
}

/**
 * Demo Page
 */
function DemoCntl($scope) {
    $scope.setHeaderText('Custom Header with back-btn');
}

/**
 * Example form page
 */
function FormCntl($scope) {
    $scope.setHeaderText('Form Demo');
}

/*
 * Example list page
 */
function ListCntl($scope) {
    $scope.setHeaderText('A List Demo');

    $scope.listData = [{
        'title':'Title #1'
        ,'text':'This ist the Text #1'
    },{
        'title':'Title #2'
        ,'text':'This ist the Text #2'
    },{
        'title':'Title #3'
        ,'text':'This ist the Text #3'
    },{
        'title':'Title #4'
        ,'text':'This ist the Text #4'
    },{
        'title':'Title #5'
        ,'text':'This ist the Text #5'
    }];
}

function BasicsCntl($scope) {
    var s = $scope;

    s.setHeaderText('Basics');
}

function MarkupCntl($scope) {
    var s = $scope;
    $scope.setHeaderText('Markup');
    $scope.naviInc = 'partials/default_navigation.html';
    $scope.setPartial('footer', 'partials/start.html');
    $scope.setPartial('navigation', 'partials/start.html');
}
