 var PARSE_APP="bDq7QVeHEqxN7dTA3m5j9o8x9SCXSZbdmgklYzDu";
 var PARSE_JS="uYd7CzRKVUcCG7sHrkPUQ6MjP8wxvh5BHtCko0eP";
 
var id;
var aa;
$(document).ready(function(){
	
	id=localStorage.getItem("id")
	geting_values();
	
	$("#addingfunction").click(function(){
		var purpose=$("#purpose").val();
		var amt=$("#amount").val();
		var dd=$("#data").val();
		var pamm=parseInt(amt);
		var amounttt=aa-pamm;
		Parse.initialize(PARSE_APP,PARSE_JS);
  var connection = Parse.Object.extend("account");
  var SearchlocQuery = new connection;
		SearchlocQuery.set("myAccount_Id",id);
		 SearchlocQuery.set("Purpose",purpose);
		 SearchlocQuery.set("Amount",amt);
		 SearchlocQuery.set("Date",dd);
		 
		 
		 SearchlocQuery.set("TotalAmount",amounttt.toString());
		 SearchlocQuery.set("addingAmount","--");
		 SearchlocQuery.save(null, {
			success: function(SearchlocQuery) {
			alert('New object created with objectId: ' + SearchlocQuery.id);
			geting_values();
			},
			error: function(SearchlocQuery, error) {
   
			alert('Failed to create new object, with error code: ' + error.message);
			}
	
	
		
	})
	
});


$("#adding_amount").click(function(){
		
		var dd=$("#data1").val();
		var tt=$("#adding_amount1").val();
		alert(aa)
		var amm=parseInt(tt)+aa;
		var amm1=amm.toString();
		Parse.initialize(PARSE_APP,PARSE_JS);
  var connection = Parse.Object.extend("account");
  var SearchlocQuery = new connection;
		SearchlocQuery.set("myAccount_Id",id);
		 SearchlocQuery.set("Purpose","Adding");
		 SearchlocQuery.set("Amount","0");
		 SearchlocQuery.set("Date",dd);
		  SearchlocQuery.set("TotalAmount",amm1);
		  SearchlocQuery.set("addingAmount",tt);
		 SearchlocQuery.save(null, {
			success: function(SearchlocQuery) {
			alert('New object created with objectId: ' + SearchlocQuery.id);
			geting_values();
			},
			error: function(SearchlocQuery, error) {
   
			alert('Failed to create new object, with error code: ' + error.message);
			}
	
	
		
	})
	
});







});

		function geting_values()
		{
			
	  Parse.initialize(PARSE_APP,PARSE_JS);
  var connection = Parse.Object.extend("account");
  var SearchlocQuery = new Parse.Query(connection);
		 SearchlocQuery.equalTo("myAccount_Id",id);
		 SearchlocQuery.find().then(function(result){
			 
			 if(result.length==0)
			 {
				 alert("invalid id")
				 
			 }
			 
			 var table= "<table id='acrylic'><thead><tr><th>Purpose</th><th>purchase Amount</th><th>Date</th><th>Amount</th><th>Adding Amount</th></tr></thead><tbody>";
			 var tot_amt=0;
			 for (var i=0;i<result.length;i++)
			 {
				 
				 var td1='<tr><td data-label="Purpose">'+result[i].get("Purpose")+'</td><td data-label="purchase Amount">'+result[i].get("Amount")+'</td><td data-label="Date">'+result[i].get("Date")+'</td><td data-label="Amount">'+result[i].get("TotalAmount")+'</td><td data-label="Adding Amount">'+result[i].get("addingAmount")+'</td></tr>';
			table=table+td1;
			var b = parseInt(result[i].get("Amount"))
			var a = parseInt(result[i].get("TotalAmount"))
			aa=a;
				 tot_amt=tot_amt+b;
				 
				  document.getElementById("presentamount").value=result[i].get("TotalAmount");
			 }
			
			 document.getElementById("demo").innerHTML =table+"<tr><b><td data-label='Total'>Total</td> </b><td><tddata-label='Weight'>"+tot_amt+"</td><td></td><td>"+aa+"</td><td></td></table>";



		}, 
		function(err) {
		console.log(err);
		});
	
	
	
	
	
		}