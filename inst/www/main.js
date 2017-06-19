
//load the function once DOM is ready
$(document).ready(function(){
	console.log('DOM ready');
	callprcomp();
});

//make ajax call to opencpu server
function callprcomp(){
	$("#get-btn").click(function(){

		//remove previous list if there is any
		$("#display-graphlist").empty();
		$("#display").empty();
		$("#all-in-progress").text("Fetching data to server...");

		//the url specify to R package "prcomdemo" on opencpu server
		//for localhost server test
		ocpu.seturl("http://localhost:5656/ocpu/library/prcompdemo/R")
		//for public server test
		//ocpu.seturl("http://34.223.213.252/ocpu/library/prcompdemo/R")

		//call() function specify the R script to call, in this case, "prcomp_test"
		//input file is the only argument needed for the function
		var req_exp = ocpu.call(
			"prcomp_test",
			{
				filename: $("#input-file")[0].files[0],
			},
			function(session){
				$("#all-in-progress").text("Data processing complete. The following files were generated: ");

				//you can check the complete returning result from session here 
				console.log(session);

				//get the plots in .png and .txt from /file directory
				var fileArray = [];
				for(var i = 0; i < session.output.length; i++){
					if(session.output[i].includes("/files")){
						if(!session.output[i].includes("DESCRIPTION")){
							var array = session.output[i].split("/");
							fileArray.push(array[array.length-1]);
						}
					}
				}
				for(var i = 0; i< fileArray.length; i++){
					$("#display-graphlist").append('<li><a download href="' + session.loc + 'files/' + fileArray[i] + '">' + fileArray[i] + '</a></li>');
					if(fileArray[i].includes(".png")){
						$("#display").append('<div><img src="'+ session.loc+'files/'+fileArray[i]+'"></div>');
					}
				}

				//getObject function will directly output x and y data
				session.getObject(function(data){
					//data is returned as type of array
					console.log(data);
					$("#labelx").append(data[0])
					$("#valuex").append(data[1]);
					$("#valuey").append(data[2]);
				});
			}
		);		
	});
}

