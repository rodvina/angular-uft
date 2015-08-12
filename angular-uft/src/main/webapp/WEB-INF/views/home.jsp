<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="resources/css/vendor/bootstrap.min.css" />
    <link rel="stylesheet" href="resources/css/main.css">
  </head>
  <body ng-app="angularUft">
    <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!-- Add your site or application content here -->
    <div class="header">
      <div class="navbar navbar-default" role="navigation">
        <div class="container">
          <div class="navbar-header">

            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <a class="navbar-brand" href="#/"></a>
          </div>

          <div class="collapse navbar-collapse" id="js-navbar-collapse">

            <ul class="nav navbar-nav">
<!--               <li class="active"><a href="#/">Home</a></li>
              <li><a ng-href="#/about">About</a></li>
              <li><a ng-href="#/">Contact</a></li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container" ng-controller="mainCtrl">
    <div id="searchDiv">
    	<input type="text" placeholder="Enter packet id" ng-model="searchtext"></input>
    	<input type="submit" value="Search" ng-click="search()"></input>
    	<input type="submit" value="Clear" ng-click="clear()"></input>
    </div>
    <div id="resultsDiv" ng-show="showResults">

		<div>
			<input type="text" placeholder="Enter filter" ng-model="resultsFilter"></input>
			{{results.length}} found
		</div>
		<table class="table table-hover">
		 	<thead>
		 		<tr>
		 			<th>Transaction Request Date</th>
		 			<th>Operating Company</th>
		 			<th>Source System</th>
		 			<th>Policy Number</th>
		 			<th>Policy Effective Date</th>
		 			<th>Reference Number</th>
		 			<th>Reference Number Type</th>
		 			<th>Event Code</th>
		 			<th>Packet Type Code</th>
		 			<th>Completed Flag</th>
		 			<th>View Details</th>		 			
		 		</tr>
		 	</thead>
		 	<tbody infinite-scroll="loadMore()">
		 		<tr ng-repeat="result in results track by $index | filter: resultsFilter">
		 			<td>{{ result.requestDate | date: 'MM/dd/yyyy HH:mm:ss' }}</td>
		 			<td>{{ result.company }}</td>
		 			<td>{{ result.source }}</td>
		 			<td>{{ result.policyNumber }}</td>
		 			<td>{{ result.effDate | date: 'MM/dd/yyyy' }}</td>
		 			<td>{{ result.referenceNo }}</td>
		 			<td>{{ result.referenceType }}</td>
		 			<td>{{ result.event }}</td>
		 			<td>{{ result.packetType }}</td>
		 			<td>{{ result.completedFlag }}</td>
		 			<td><input type="submit" value="View" ng-click="viewRequestDetail(result.uuid)"></input>		 					 			
		 		</tr>
		 		<tr><td>Load More...</td><tr>		 	
		 	</tbody>
		</table>
	</div>   
	<div id="detailsDiv" ng-show="showDetails">
		{{details}}
	</div> 

    
    <div ng-view=""></div>
    </div>

    <div class="footer">
      <div class="container">
        
      </div>
    </div>

    <script src="resources/js/vendor/jquery/jquery.js"></script>
    <script src="resources/js/vendor/angular/angular.js"></script>
    <script src="resources/js/vendor/bootstrap/dist/js/bootstrap.js"></script>
    <script src="resources/js/vendor/angular-animate/angular-animate.js"></script>
    <script src="resources/js/vendor/angular-resource/angular-resource.js"></script>
    <script src="resources/js/vendor/angular-route/angular-route.js"></script>
    <script src="resources/js/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="resources/js/vendor/ngInfiniteScroll/ng-infinite-scroll.min.js"></script>

    <script src="resources/js/app.js"></script>
    <script src="resources/js/controller/main-controller.js"></script>
    <script src="resources/js/service/tracking-service.js"></script>
    <script src="resources/js/service/mockdata-service.js"></script>
</body>
</html>

