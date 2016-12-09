function showPassword() {
    
    var key_attr = $('#key').attr('type');
    
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }
    
}

 var PARSE_APP="bDq7QVeHEqxN7dTA3m5j9o8x9SCXSZbdmgklYzDu";
  var PARSE_JS="uYd7CzRKVUcCG7sHrkPUQ6MjP8wxvh5BHtCko0eP";

$(document).ready(function(){
    $("#login_submit").click(function(){
        var email=$("#email").val();
		 var pwd=$("#key").val();
		
  Parse.initialize(PARSE_APP,PARSE_JS);
  var connection = Parse.Object.extend("myAccount");
  var SearchlocQuery = new Parse.Query(connection);
		 SearchlocQuery.equalTo("Email",email);
		 SearchlocQuery.find().then(function(result){
			 
			 if(result.length==0)
			 {
				 alert("invalid id")
				 
			 }
			 else{
				 //console.log(result[0].get("User"));
				 if(result[0].get("Password")==pwd)
				 {
				
					 localStorage.setItem("id",result[0].id);
					window.open(result[0].get("Url"),"_self")
									 
				 }
				 else
				 {
					 alert("password wrong")
					 
				 }
				 
			 }
			 



		}, 
		function(err) {
		console.log(err);
		});
    });
});