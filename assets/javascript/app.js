$(document).ready(function(){
	//$('.card-img-overlay').hide();
	var host = 'https://api.giphy.com/';
	var path = 'v1/gifs/trending?';
	var key = 'LC3ygSPHGjMF54zVYGTs7E3lFidCfmdd';
	var rating = 'pg';
	var rtn = 1;
	var queryURL = host + path + '&api_key=' + key + '&limit=' + rtn + '&rating=' + rating;
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function(response){
		console.log('results: ' + response);
		console.log('queryURL: ' + queryURL);
		var results = response.data;

	for (var i = 0; i < results.length; i++){
		$('#trending-gif').attr('src', results[i].images.original.url);
		console.log(results[i].images.original.url);
	}
	});
});