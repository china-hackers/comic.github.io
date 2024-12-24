
function checkLanguage(url,lang){
  var urlList = url.split('/');
  switch(urlList[3]){
    case '': urlList[3] = lang; break;
    case 'en': urlList[3] = lang; break;
    case 'fr': urlList[3] = lang; break;
    case 'es': urlList[3] = lang; break;
    case 'ru': urlList[3] = lang; break;
    case 'id': urlList[3] = lang; break;
    case 'ar': urlList[3] = lang; break;
    case 'bn': urlList[3] = lang; break;
    case 'pt': urlList[3] = lang; break;
    case 'hi': urlList[3] = lang; break;
    default: urlList.splice(3,0,lang);
  }
  return urlList.join('/');
}
$(document).ready(function() {
  // 点击当前国旗，显示/隐藏国旗列表
  $('.language-switcher .current-flag').click(function() {
    $('.flag-list').toggle();
  });

  // 点击列表中的国旗，跳转到对应语言的URL
  $('.language-switcher .flag-list span').click(function() {
    var selectedLang = $(this).data('lang');
    var url = window.location.href;

    // 这里假设你的 URL 结构中语言是通过查询参数传递，例如：?lang=en
    var newUrl = checkLanguage(url, selectedLang);
    window.location.href = newUrl;
  }
);



  // 点击页面其他地方时，隐藏国旗列表
  $(document).click(function(e) {
  if (!$(e.target).closest('.language-switcher').length) {
  $('.flag-list').hide();
}
});
});

(function () {
  $("#huabenMore").click(function () {
    if ($(".TopButtonsBG").is(":hidden")) {
      $(".TopButtonsBG").show();
      $(".TopButtons").slideDown();
    } else {
      $(".TopButtonsBG").hide();
      $(".TopButtons").slideUp();
    }
    return false;
  });
})();




//通用下载方法
function AppDownload(src) {
}