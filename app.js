var YT_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
	part: 'snippet',
    key: 'AIzaSyBBBSjpMtDk0ESA3E4FPDbzb_qqO3s1B0g',
	q: searchTerm,
	maxResults: 10
  	}
  $.getJSON(YT_BASE_URL, query, callback);
}


function displayOMDBSearchData(data) {
  var resultElement = '';
  if (data.items) {
    data.items.forEach(function(item) {
     resultElement +=
		 '<h3>' + item.snippet.title + '</h3>' +
		 '<a href="https://www.youtube.com/watch?v=' + item.id.videoId + '">' + '<img src="' + item.snippet.thumbnails.medium.url + '">' + '</a>';
    });
	 resultElement += '<a href="https';
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayOMDBSearchData);
  });
}

$(function(){watchSubmit();});
