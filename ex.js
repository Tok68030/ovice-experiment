function retrieveGETqs() {
  var query = window.location.search.substring(1);
  if (!query) return false;
  return query;
}

function attr(d) {
  const refdata = `[
    {"domain": "ovice.com", "ref": "ovice"},
    {"domain": "ovice.in", "ref": "ovice"},
    {"domain": "flexergylab.com", "ref": "ovice"},
    {"domain": "google.", "ref": "seo_google"},
    {"domain": "yahoo.co.jp", "ref": "seo_yahoo"}, 
    {"domain": "yahoo.com", "ref": "seo_yahoo"}, 
    {"domain": "bing.com", "ref": "seo_bin"},
    {"domain": "duckduckgo.com", "ref": "seo_duckduckgo"},
    {"domain": "coccoc.com", "ref": "seo_coccoc"},
    {"domain": "yandex.com", "ref": "seo_yandex"},
    {"domain": "naver.com", "ref": "seo_naver"},
    {"domain": "baidu.com", "ref": "seo_baidu"},
    {"domain": "ecosia.org", "ref": "seo_ecosia"},
    {"domain": "msn.com", "ref": "seo_msn"},
    {"domain": "excite.co.jp", "ref": "seo_excite"},
    {"domain": "goo.ne.jp", "ref": "seo_goo"},
    {"domain": "livedoor.com", "ref": "seo_livedoor"},
    {"domain": "biglobe.ne.jp", "ref": "seo_biglobe"},
    {"domain": "ocn.ne.jp", "ref": "seo_ocn"},
    {"domain": "nifty.com", "ref": "seo_nifty"},
    {"domain": "infoseek.co.jp", "ref": "seo_infoseek"},
    {"domain": "auone.jp", "ref": "seo_au"},
    {"domain": "docomo.ne.jp", "ref": "seo_docomo"},
    {"domain": "www.itreview.jp", "ref": "review_itreview"},
    {"domain": "boxil.jp", "ref": "review_boxil"},
    {"domain": "it-trend.jp", "ref": "review_it-trend"},
    {"domain": "capterra.jp", "ref": "review_capterra"}
  ]`;
  var j = JSON.parse(refdata);
  for (var i = 0; i < j.length; i++) {
    if (d.indexOf(j[i].domain) > -1) {return j[i].ref;}
  }
  return "direct";
}


(function(){
  var str = retrieveGETqs();
  global_prm = str ? decodeURIComponent(str) : '';
  global_prm_val = new URLSearchParams(global_prm);


  if ((typeof sessionStorage !== 'undefined') & (typeof localStorage !== 'undefined')) {
    var ls = localStorage;
    var ss = sessionStorage;
    var r = document.referrer;
    ls.setItem('ovicecom_cPages', Number(ls.getItem('ovicecom_cPages')) + 1);
    if(ss.getItem('ovicecom_fEntry') === null) {
      ss.setItem('ovicecom_fEntry', 1);
      var v = Number(ls.getItem('ovicecom_cVisits'));
      ls.setItem('ovicecom_cVisits', v + 1);
      if (v === 0) {
        ls.setItem('ovicecom_sFirstRef', r);
      }
    }
    ls.setItem('ovicecom_sLastRef', r);
  }
  if (global_prm !== '') {
  }
})();
