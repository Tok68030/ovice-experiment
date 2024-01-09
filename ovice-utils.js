// by Tok
var global_prm;
var global_btn_position = "";

function retrieveGETqs() {

	var query = window.location.search.substring(1);
	return query;
	 /* 引数がない時は処理しない */
	if (!query) return false;

}

$(function(){
  jQuery('a').click(function() {
    var target_url = $(this).attr("href");
    var str = retrieveGETqs();
    global_prm = decodeURIComponent(str);

    if (global_prm) {
      if (global_btn_position) {
        target_url = target_url + '&lp_type=' + global_btn_position);
      }
      if (target_url.indexOf('?') != -1) {
        $('a').attr('href', target_url + '&' + global_prm);
      } else {
        $('a').attr('href', target_url + '?' + global_prm);
      }
    }
  })
})
