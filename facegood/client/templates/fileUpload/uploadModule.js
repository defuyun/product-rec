Template.formSubmit.events({
	'click .button': function (event) {
    	$("#fileform").on("submit",function(event){		
			$(".bubble").show();
			event.preventDefault();
			var file = $('#fileform [name=fileField]')[0].files[0];
  			var reader = new FileReader();
  			reader.onloadend = postrequest
  			reader.readAsDataURL(file);			
		});
  	}
});

function postrequest(event){
		var content = event.target.result;
		var request = {
    		requests: [{
	      		image: {
	        		content: content.replace("data:image/jpeg;base64,",""),
	      		},
	      		features: [{
	        		type: "LABEL_DETECTION",
	        		maxResults: 5
	      		}]
    		}]
			};

			var url = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCSFfXRAJ0TOUIslbUsDMEu7YquON3kI9A";
			Meteor.HTTP.post( 'http://jsonplaceholder.typicode.com/posts/1', JSON.stringify(request),
		   function( error, response ) {
			
		   if ( error ) {
		      console.log( error );
		   } else {
		      console.log( response );
		   }
			
		});
}