<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/vendor/bootstrap.min.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/main.css">
  </head>
  <body ng-app="myApp">
    <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div ng-controller="UserCtrl">
	    <h3>Click row to revel last name!</h3>
	    <table class="table table-hover table-condensed">
	        <thead>
	            <td>First Name</td>
	        </thead>
	        
	        <tbody ng-repeat="user in users" on-finish-render>
	            <tr data-toggle="collapse" data-target="#row{{user.id}}">
	                <td>{{user.firstName}}</td>
	            </tr>
	            <tr>
	                <td class="hiddenRow">
	                    <div id="row{{user.id}}" class="collapse">
	                        <h4>{{user.lastName}}</h4>
	                    </div>
	                </td>
	            </tr>
	        </tbody>
	    </table>
	</div>

    <script src="${pageContext.request.contextPath}/resources/js/vendor/jquery/jquery.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/vendor/angular/angular.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/vendor/bootstrap/dist/js/bootstrap.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/vendor/angular-animate/angular-animate.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/vendor/angular-resource/angular-resource.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/vendor/angular-route/angular-route.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/vendor/ngInfiniteScroll/ng-infinite-scroll.min.js"></script>

    <script src="${pageContext.request.contextPath}/resources/js/test.js"></script>

</body>
</html>

