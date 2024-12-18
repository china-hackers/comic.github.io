
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
  $('.language-switcher .flag-list img').click(function() {
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
      if (navigator.userAgent.match(/UCBrowser/gi)) $(".TopButtons").show();
      else $(".TopButtons").slideDown();
    } else {
      $(".TopButtonsBG").hide();
      if (navigator.userAgent.match(/UCBrowser/gi)) $(".TopButtons").hide();
      else $(".TopButtons").slideUp();
    }
    return false;
  });
  $(".TopButtonsBG").click(function () {
    $(".TopButtonsBG").hide();
    $(".TopButtons").slideUp();
  });
  function setUserInfo(user) {
    var userPic = user.pic;
    if (userPic && userPic.indexOf("@") == -1) {
      //userPic += "@1e_1c_0o_0l_80h_80w_90q.src" ;
      userPic = Q.toFullUrl(userPic, 80);
    }
    $("#nav_usercenter_bar img").attr("src", userPic);
    $("#nav_usercenter_bar img").attr("alt", user.nickName);
    if (user.isMember)
      $("#nav_usercenter_bar img").after("<em class='vip_icon_s'></em>");
    $("#nav_usercenter_bar span").html(user.nickName);
    $("#nav_usercenter_bar").show();
    $("#nav_login_bar").hide();
    var c = Q.cookie("isMember");
    if (user.isMember.toString() !== c) {
      Q.cookie(
        "isMember",
        user.isMember.toString().toLowerCase(),
        0,
        ".ihuaben.com",
        "/"
      );
    }
    //Q.cookie("isMember","true",0,".ihuaben.com","/");
  }
  if (!Q.isLogin()) {
    $("#nav_login_bar").show();
    if (Q.cookie("isMember") !== "false")
      Q.cookie("isMember", "false", 0, ".ihuaben.com", "/");
  } else {
    $.ajax({
      async: false,
      url:
        Q.protocol +
        "//user.ihuaben.com/api/userinfo?r=" +
        new Date().getTime(),
      dataType: "jsonp",
      type: "GET",
      jsonp: "callback",
      success: function (data) {
        if (data.code == 0) {
          setUserInfo(data);
        }
      },
    });
  }
})();


(function () {
  var ua = navigator.userAgent;
  var url = document.location.href;

  //var chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/)
  //var webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)
  if (url.match(/plan\=ios/gi) && !Q.cookie("iosAPP"))
    Q.cookie("iosAPP", "1", 0, ".ihuaben.com", "/");

  var planType = Q.getQueryString()["planType"];
  if (ua.match(/\- HuabenApp/gi) || Q.cookie("iosAPP") || planType) {
    $(".huabenheader").hide();
    $(".navFooter").hide();
    $(".navtop").hide();
    //$("body").css("padding-top","20px");
    $(".CommentDetail").css("margin-top", 0);

    if (url.match(/user\.ihuaben\.com\//gi)) {
      $("#user_nav_bar").hide();
      //$("button[aria-data='WECHART']").hide();
      var reg = /http[s]*\:\/\/user\.ihuaben\.com\/(\d+)$/gi;
      for (var i = 0; i < $("a").length; i++) {
        var href = $($("a")[i]).attr("href");
        if (href && href.match(/user\.ihuaben\.com\/\d+$/gi)) {
          href = href.replace(reg, "ihuaben://user/$1");
          $($("a")[i]).attr("href", href);
          $($("a")[i]).removeAttr("target");
        }
      }
    } else if (url.match(/author\.ihuaben\.com\/contract/gi)) {
      $(".nav").hide();
    }
  } else if ($(window).width() > 991) {
    if (ua.match(/(msie \d|trident\/\d)/gi))
      $(document.body).append(
        "<style>.CommentContent .discription .userImage img{max-width:660px;}</style>"
      );

    if (url.match(/\/comment\.ihuaben\.com\//gi)) $(".navFooter").hide();

    /*
		$(document).ready(function(){
			var reg=/\/book\/(\d+|createChapterPage)/ig;
			if(!reg.test(url)){
				var obj=$(".footer").parent();
				if(obj.length>0&&obj[0].tagName.toLowerCase()=="div"){
					if(obj.offset().top<$(window).height()-obj.height()-100)
						obj.offset({top:$(window).height()-obj.height()});
				}
			}
		});
		*/
  } else if (
    $(window).width() < 768 &&
    ua.match(/android/gi) &&
    !ua.match(/ mqqbrowser\/\d+/gi)
  ) {
    $("ul.list-inline").removeClass("list-inline").addClass("HuabenListUL");
  }
  if (ua.match(/msie 9/gi)) {
    $("#pc_bookinfo").css("margin-top", "0");
    $(".bgcontainer").remove();
  }
  /**
	if(document.location.href.match(/\/list\/\d+\.html/ig) || document.location.href.match(/\/book\/\d+\.html/ig)){
		var ww=$(window).width();
		if(ww<640){
			var pw=$($(".chapters .chapterTitle").parent()).width();
			if(pw){
				$(".chapters .chapterTitle").width(pw-140);
			}
		}
	}**/
})();

(function () {
  if (
    $(window).width() >= 992 ||
    Q.cookie("PureRead") === "true" ||
    navigator.userAgent.match(/(html5plus|HuabenApp)/gi)
  )
    return;
  var str = "";
  var url = document.location.href;

  var divName = "indexTop_" + Math.floor(Math.random() * 10000);

  //分享书首页
  var group = /\/book\/(\d+)\.html\?hmsr\=share\-(\w+)\-(\d+)/gi.exec(url);
  if (group && navigator.userAgent.match(/ (MicroMessenger|QQ\/\d+)/gi)) {
    $.ajax({
      url: Q.protocol + "//user.ihuaben.com/api/userinfo?userId=" + group[3],
      dataType: "jsonp",
      type: "GET",
      jsonp: "callback",
      success: function (data) {
        if (data.code == 0) {
          str += '	<div class="appdownload">';
          str += '		<ul class="HuabenListUL">';
          str += "			<li>";
          str +=
            '				<a href="javascript:AppDownload(\'应用宝跳转\')"><img src="' +
            data.pic +
            '" style="border-radius:15px;width:30px;height:30px;margin-top:3px;"/></a>';
          str += "			</li>";
          str += "			<li onclick=\"javascript:AppDownload('应用宝跳转')\">";
          str +=
            "				<p>" + data.nickName + " 邀请你</p><h3>下载话本APP免费看小说</h3>";
          str += "			</li>";
          str += '			<li class="pull-right">';
          str +=
            '				<a href="javascript:AppDownload(\'应用宝跳转\')" class="btn">立即下载</a>';
          str += "			</li>";
          str += "		</ul>";
          str += "	</div>";
          $(str).insertAfter(".tabbar");
        }
        $(window).scroll(function () {
          if ($(window).scrollTop() > $(".aboutbook").offset().top - 50) {
            $(".appdownload").css({
              position: "fixed",
              "z-index": "99",
              top: "0",
              "margin-top": "0",
            });
            $(".appdownload .btn").css({ "background-color": "#F14C36" });
          } else {
            $(".appdownload").css({ position: "relative", "z-index": "0" });
            $(".appdownload .btn").css({ "background-color": "#f47216" });
          }
        });
      },
    });
  }
  //书首页
  else if (url.match(/\/book\/\d+\.html/gi)) {
    if (Q.isBlockAdBrowser()) {
      $("#tagList").removeClass("HuabenListUL").addClass("list-inline");
      $(".aboutbutton .HuabenListUL")
        .removeClass("HuabenListUL")
        .addClass("list-inline");

      str +=
        '	<div class="' +
        divName +
        "\" style='width:100%;background-color:#000;padding-left:10px;padding-right:10px;'>";
      str +=
        '		<div style="display:flex;height:52px;justify-content:space-between;align-items:center;">';
      str += "			<canvas class='imgCanvas' width='210' height='50'/>";
      str += "			<canvas class='buttunCanvas' width='74' height='26'/>";
      str += "		</div>";
      str += "	</div>";
      $(str).insertAfter(".tabbar");
      $("." + divName).click(function () {
        AppDownload("书首页下载");
      });
      $("." + divName + " .buttunCanvas").detectPixelRatio(function (ratio) {
        $("." + divName + " .buttunCanvas")
          .drawRect({
            fillStyle: "#F14C36",
            x: 0,
            y: 0,
            width: 74,
            height: 26,
            cornerRadius: 13,
            fromCenter: false,
          })
          .drawText({
            text: "立即下载",
            fontSize: 14,
            x: 8,
            y: 5,
            fillStyle: "#fff",
            fromCenter: false,
          });
      });
      $("." + divName + " .imgCanvas").detectPixelRatio(function (ratio) {
        $("." + divName + " .imgCanvas")
          .drawImage({
            source:
              Q.protocol +
              "//imgcn.ihuaben.com/common/logo.jpg?x-oss-process=image/resize,w_150,h_150/rounded-corners,r_30/format,png",
            x: 0,
            y: 7,
            fromCenter: false,
            width: 36,
            height: 36,
          })
          .drawText({
            text: "话本小说无广告纯净版",
            fontSize: 14,
            x: 43,
            y: 10,
            fromCenter: false,
            fillStyle: "#fff",
          })
          .drawText({
            text: "新手免费 离线下载 无网阅读",
            fontSize: 12,
            x: 43,
            y: 30,
            fromCenter: false,
            fillStyle: "#ddd",
          });
        $(window).scroll(function () {
          if ($(window).scrollTop() > $(".tabbar").offset().top - 50) {
            $("." + divName).css({
              position: "fixed",
              "z-index": "99",
              top: "0",
              "margin-top": "0",
            });
          } else {
            $("." + divName).css({ position: "relative", "z-index": "0" });
          }
        });
      });
    } else {
      str += '	<div class="container appdownload">';
      str += '		<ul class="HuabenListUL">';
      str += "			<li>";
      str +=
        "				<img src=\"//imgcn.ihuaben.com/common/logo.jpg\" alt='话本小说'/>";
      str += "			</li>";
      str += "			<li>";
      str += "				<h3>话本小说无广告纯净版</h3>";
      str += "				<p>新手免费 离线下载 无网阅读</p>";
      str += "			</li>";
      str += '			<li class="pull-right">';
      str += '				<button class="btn">立即下载</button>';
      str += "			</li>";
      str += "		</ul>";
      str += "	</div>";
      $(str).insertAfter(".tabbar");
      $(".appdownload").click(function () {
        AppDownload("书首页下载");
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() > $(".tabbar").offset().top - 50) {
          $(".appdownload").css({
            position: "fixed",
            "z-index": "99",
            top: "0",
            "margin-top": "0",
          });
          $(".appdownload .btn").css({ "background-color": "#F14C36" });
        } else {
          $(".appdownload").css({ position: "relative", "z-index": "0" });
          $(".appdownload .btn").css({ "background-color": "#f47216" });
        }
      });
    }
  }
  //搜索界面，错误页，用户首页
  else if (
    url.match(/\/\/so\.ihuaben\.com\/search\?keyword\=/gi) ||
    url.match(/\/\/www\.ihuaben\.com\/common\/inc\/\d+\.html/gi) ||
    url.match(/\/\/user\.ihuaben\.com\/(\d+)/gi) ||
    url.match(/\/\/www\.ihuaben\.com\/character\/characterListPage\/(\d+)/gi)
  ) {
    str =
      '	<div class="container appdownload ' +
      divName +
      '" style="margin-top:-20px;">';
    str += '		<ul class="t_' + divName + ' HuabenListUL">';
    str += "			<li>";
    str += '				<img src="//imgcn.ihuaben.com/common/logo.jpg"/>';
    str += "			</li>";
    str += "			<li>";
    str += "				<h3>话本小说无广告纯净版</h3>";
    str += "				<p>新手免费 离线下载 无网阅读</p>";
    str += "			</li>";
    str += '			<li class="pull-right">';
    str += '				<button class="btn">立即下载</button>';
    str += "			</li>";
    str += "		</ul>";
    str += "	</div>";
    $(str).insertAfter(".HuabenNav");
    $("." + divName).click(function () {
      AppDownload("搜索界面");
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() > $(".HuabenNavTop").height()) {
        $("." + divName).css({
          position: "fixed",
          "z-index": "99",
          top: "0",
          "margin-top": "0",
        });
      } else {
        $("." + divName).css({
          position: "relative",
          "z-index": "0",
          top: "0",
          "margin-top": "-20px",
        });
      }
    });
  }
  //书架，排行榜
  else if (
    url.match(/\/\/top\.ihuaben\.com\//gi) ||
    url.match(/\/\/user\.ihuaben\.com\/bookShelf\//gi)
  ) {
    str =
      '	<div class="container appdownload ' +
      divName +
      '" style="margin-top:-20px;margin-bottom:20px;">';
    str += '		<ul class="t_' + divName + ' HuabenListUL">';
    str += "			<li>";
    str += '				<img src="//imgcn.ihuaben.com/common/logo.jpg"/>';
    str += "			</li>";
    str += "			<li>";
    str += "				<h3>话本小说无广告纯净版</h3>";
    str += "				<p>新手免费 离线下载 无网阅读</p>";
    str += "			</li>";
    str += '			<li class="pull-right">';
    str += '				<button class="btn">立即下载</button>';
    str += "			</li>";
    str += "		</ul>";
    str += "	</div>";
    $(str).insertAfter(".HuabenNav");
    $("." + divName).click(function () {
      AppDownload("书架及排行");
    });

    str =
      "<li id='dlButtonNav' style='display:none;'><button class='btn btn-default' style='background-color:#fff;padding:3px 8px 3px 8px;border-color:#ff9a66;color:#ff9a66;'>下载</button></li>";
    $(".HuabenNavTop .TopNav ul.pull-right").prepend(str);
    $("#dlButtonNav button").click(function (e) {
      AppDownload("标签页");
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() > $("." + divName).offset().top) {
        $("#dlButtonNav").show();
      } else {
        $("#dlButtonNav").hide();
      }
    });
  }
  //标签页
  else if (
    url.match(
      /\/\/www\.ihuaben\.com\/(category|exo|tfboys|gudaiyanqing|xuanhuanyanqing|dushiyanqing|mingxingtongren|girl|boy|dushi|xuanhuan|xianxia|lingyi|youxi|kehuan|junshi|qihuan|lishi|jingji|qingxiaoshuo|wuxia|duanpian|lingyiyanqing|chuanyueyanqing|xiaoyuanyanqing|xuanhuanqihuan|lishijunshi|wuxiaxianxia|youxijingji|kehuanmoshi|tongren|dongmantongren|youxitongren|yingshitongren|xiaoshuotongren|juese)\//gi
    )
  ) {
    str =
      '	<div class="container appdownload ' +
      divName +
      '" style="margin-top:10px;margin-bottom:-10px;">';
    str += '		<ul class="t_' + divName + ' HuabenListUL">';
    str += "			<li>";
    str += '				<img src="//imgcn.ihuaben.com/common/logo.jpg"/>';
    str += "			</li>";
    str += "			<li>";
    str += "				<h3>话本小说无广告纯净版</h3>";
    str += "				<p>新手免费 离线下载 无网阅读</p>";
    str += "			</li>";
    str += '			<li class="pull-right">';
    str += '				<button class="btn">立即下载</button>';
    str += "			</li>";
    str += "		</ul>";
    str += "	</div>";
    $(str).insertBefore(".catalogList");

    $("." + divName).click(function () {
      AppDownload("标签页");
    });

    str =
      "<li id='dlButtonNav' style='display:none;'><button class='btn btn-default' style='background-color:#fff;padding:3px 8px 3px 8px;border-color:#ff9a66;color:#ff9a66;'>下载</button></li>";
    $(".HuabenNavTop .TopNav ul.pull-right").prepend(str);
    $("#dlButtonNav button").click(function (e) {
      AppDownload("标签页");
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() > $("." + divName).offset().top) {
        $("#dlButtonNav").show();
      } else {
        $("#dlButtonNav").hide();
      }
    });
  }
  //作者后台
  else if (url.match(/\/author\.ihuaben\.com\/book\/*$/gi)) {
    str += '	<div class="container appdownload" style="margin-top:-10px;">';
    str +=
      '		<ul class="t_' +
      divName +
      ' HuabenListUL" style="height:40px;padding-bottom:0;padding-top:0;border-bottom:1px solid #eee;">';
    str += "			<li onclick=\"javascript:AppDownload('写作首页')\">";
    str += '				<h3 style="line-height:40px;">下载话本APP写作，体验更流畅</h3>';
    str += "			</li>";
    str += '			<li class="pull-right">';
    str +=
      '				<a href="javascript:AppDownload(\'写作首页\')" class="btn">立即下载</a>';
    str += "			</li>";
    str += "		</ul>";
    str += "	</div>";
    $(str).insertAfter(".HuabenNav");
  }
  //写作界面
  else if (url.match(/\/author\.ihuaben\.com\/book\/createChapterPage/gi)) {
    str += '	<div class="container appdownload">';
    str +=
      '		<ul class="t_' +
      divName +
      ' HuabenListUL" style="height:40px;padding-bottom:0;padding-top:0;border-top:1px solid #eee;">';
    str += "			<li onclick=\"javascript:AppDownload('写作界面')\">";
    str += '				<h3 style="line-height:40px;">下载话本APP写作，体验更流畅</h3>';
    str += "			</li>";
    str += '			<li class="pull-right">';
    str +=
      '				<a href="javascript:AppDownload(\'写作界面\')" class="btn">立即下载</a>';
    str += "			</li>";
    str += "		</ul>";
    str += "	</div>";
    $(str).insertBefore(".navFooter");
  }
})();


function showFeedback() {
  if (!Q.isLogin()) {
    var url = document.location.href;
    document.location.href =
      Q.protocol + "//passport.ihuaben.com/?nextUrl=" + encodeURIComponent(url);
  } else {
    var dialog = $.dialog({
      title: "意见反馈",
      content:
        "<div id='dialogDiv'>" +
        $($(".feedbackDiv").parent()).html() +
        "</div>",
    });
    $("#dialogDiv .feedbackDiv li").click(function (e) {
      if ($(e.target).hasClass("active")) $(e.target).removeClass("active");
      else $(e.target).addClass("active");
      var str = "";
      for (var i = 0; i < $("#dialogDiv .feedbackDiv .active").length; i++) {
        str += $($("#dialogDiv .feedbackDiv .active")[i]).text() + ",";
      }
      str = str.replace(/\,$/g, "");
      $("#dialogDiv .feedbackDiv input[name='types']").val(str);
    });
    $("#dialogDiv .feedbackDiv form").submit(function () {
      var types = $("#dialogDiv .feedbackDiv input[name='types']").val();
      if (!types) {
        $.alert({
          title: "错误提示",
          content: "<h1 class='text-center'>请选择反馈标签！</h1>",
        });
        return false;
      }
      var content = $("#dialogDiv .feedbackDiv textarea").val();
      if (!content) {
        $.alert({
          title: "错误提示",
          content: "<h1 class='text-center'>请填写反馈内容！</h1>",
        });
        return false;
      }
      var ua = navigator.userAgent;
      if (ua.length > 150) ua.length = 150;
      $("#dialogDiv .feedbackDiv input[name='devices']").val(ua);
      var data = $("#dialogDiv .feedbackDiv form").serialize();
      $.ajax({
        url: Q.protocol + "//www.ihuaben.com/function/feedback/add",
        type: "post",
        data: data,
        dataType: "jsonp",
        jsonp: "callback",
        success: function (data) {
          if (data.code == 0) {
            dialog.close();
            $.alert({
              title: "提交成功",
              content: "<h1 class='text-center'>提交成功，谢谢！</h1>",
            });
          } else
            $.alert({
              title: "错误提示",
              content: "<h1 class='text-center'>" + data.msg + "</h1>",
            });
        },
        error: function () {
          $.alert({
            title: "错误提示",
            content: "<h1 class='text-center'>服务器未知错误！</h1>",
          });
        },
      });
      return false;
    });
  }
}
function closeAppTip() {
  $(".bgGround").css("display", "none");
  $(".bottomTip").css("display", "none");
  Q.cookie("apptip", 1, 3, ".ihuaben.com");
}

function showQCodeTip() {
  $(".qcodetip").fadeIn(500);
}
function hideQCodeTip() {
  $(".qcodetip").fadeOut(500);
  hideQTip = true;
  Q.cookie("qtip", 1, 3, ".ihuaben.com");
}

(function () {
  var str =
    '					<li><a href="#" onclick="javascript:return false;" class="text-dark" title="扫码，下载客户端" ari-url="//imgcn.ihuaben.com/images/appcode_um.png@200w">下载客户端</a></li>';
  str +=
    '					<li><a href="#" target="_blank" class="text-dark">关注微博</a></li>';
  str +=
    '					<li><a href="#" class="text-dark">FaceBook：123</a></li>';
  str +=
    '					<li><a href="#" onclick="javascript:return false;" class="text-dark" title="扫码，关注QQ公众号" ari-url="//imgcn.ihuaben.com/images/qqcode.png@200w">QQ公众号</a></li>';
  str +=
    '					<li><a href="#" onclick="javascript:return false;" class="text-dark" title="扫码，关注微信公众号" ari-url="//imgcn.ihuaben.com/images/weixincode.png@200w">微信公众号</a></li>';

  $("#QRlist").html(str);

  $("#QRlist")
    .find("a[href='#']")
    .on("mouseover", function (e) {
      $("#QRcode img").attr("src", $(e.target).attr("ari-url"));
      $("#QRcode p").html($(e.target).attr("title"));
      var offset = $(e.target).offset();
      $("#QRcode").css("display", "inline-block");
      $("#QRcode").offset({
        top: offset.top - 270,
        left: offset.left - 80,
      });
    });
  $("#QRlist")
    .find("a[href='#']")
    .on("mouseout", function () {
      $("#QRcode").hide();
    });
})();

function appaddownload() {
  AppDownload();
}
function bookAppDownload() {
  AppDownload();
}

//通用下载方法
function AppDownload(src) {
}