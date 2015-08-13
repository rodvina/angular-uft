<div id="searchDiv">
   	<form class="form-horizontal" name="searchform" novalidate>
   	  <div class="form-group">
   	  	<label for="searchinput" class="control-label">Packet Id</label>
    	<input type="text" name="searchinput" placeholder="Enter packet id" class="form-control" ng-model="searchtext" required></input>
    	<div class="has-error" ng-show="searchform.searchinput.$invalid && searchform.searchinput.$dirty">
    		<span class="help-block" ng-show="searchform.searchinput.$error.required">Packet ID is required.</span>
    	</div>
      </div>
      <div class="form-group">
      	<button type="submit" class="btn btn-default" ng-click="search()" ng-disabled="searchform.searchinput.$invalid">Search</button>
    	<button type="submit" class="btn" ng-click="clear()">Clear</button>
      </div>
    </form>
</div>
<div id="resultsDiv" ng-show="showResults">
	<div>
		<input type="text" placeholder="Enter filter" ng-model="resultsFilter"></input>
		Found <span class="badge">{{totalCount}}</span> | Displaying <span class="badge">{{filtered.length}}</span>
	</div>
	<table infinite-scroll="loadMore()" class="table table-hover">
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
	 		</tr>
		 </thead>
		<tbody ng-repeat="result in results | filter:resultsFilter as filtered track by $index" on-finish-render>
	 		<tr data-toggle="collapse" data-target="#details{{$index}}">
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
		 	</tr>
		 	<tr>
		 		<td colspan="10" class="hiddenrow">
		 		 	<div class="collapse" id="details{{$index}}>
 						the details
 					</div>
		 		</td>
		 	</tr>
		 		<tr><td>Load More...</td><tr>		 	
		</tbody>
	</table>
</div>   