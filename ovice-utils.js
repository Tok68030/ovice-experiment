// by Tok
var global_prm;
var global_btn_position = "";

function retrieveGETqs() {

	var query = window.location.search.substring(1);
	return query;
	if (!query) return false;

}

(function(){
    var str = retrieveGETqs();
    global_prm = decodeURIComponent(str);
})();

$(function(){
    $('a').click(function() {
    var target_url = $(this).attr("href");

    if (global_prm) {
      if (global_btn_position) {
        target_url = target_url + '&lp_type=' + global_btn_position;
      }
      if (target_url.indexOf('?') != -1) {
        $('a').attr('href', target_url + '&' + global_prm);
      } else {
        $('a').attr('href', target_url + '?' + global_prm);
      }
    }
  })
})
