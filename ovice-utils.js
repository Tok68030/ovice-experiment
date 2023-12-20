// by Tok
var prm;
var btn_position;

function retrieveGETqs() {

	var query = window.location.search.substring(1);
	return query;
	 /* 引数がない時は処理しない */
	if (!query) return false;

}

// inperit query parameter
$(function(){
	jQuery('a').click(function() {
	var target_url = $(this).attr("href");
	var str = retrieveGETqs();
	prm = decodeURIComponent(str);

	if (prm) {
     if (target_url.indexOf('?') != -1) {
         $('a').attr('href', target_url + '&' + prm + '&lp_type=' + btn_position);
       } else {
         $('a').attr('href', target_url + '?' + prm + '&lp_type=' + btn_position);
       }
  }	
 })	
})
