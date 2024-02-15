(function(){
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
})();
