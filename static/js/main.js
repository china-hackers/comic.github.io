/**
 * 基础js源码
 */
var Q = {
  protocol: "https:" == document.location.protocol ? "https:" : "http:",
  resDir: "//imgcn.ihuaben.com/ihuaben",
  imgDir: "//piccn.ihuaben.com/",
  toFullUrl: function (url, width, domain) {
    if (!url) {
      return "";
    }
    width = width || 100;
    domain = domain || Q.imgDir;
    var result = url;
    if (!url.match(/\/\/[^\.]+\.ihuaben\.com\//i)) {
      result = Q.protocol + domain + url;
    }
    if (!result.match(/(\@\d+w|\?x\-oss\-process\=)/)) {
      result += "?x-oss-process=image/resize,w_" + width;
      if (Q.cookie("webp")) {
        result += "/format,webp";
      }
    }
    return result;
  },
  isBlockAdBrowser: function () {
    var blockAdBrowser = false;
    if (
      navigator.userAgent.match(
        /(baiduboxapp|sogoumobilebrowser|vivobrowser|baidubrowser|liebaofast|mqqbrowser)\/\d+/gi
      ) &&
      navigator.userAgent.match(/android \d+/gi)
    )
      blockAdBrowser = true;
    return blockAdBrowser;
  },
  /**
   * 是否是 Webview
   * @returns {RegExpMatchArray}
   */
  isWebview: function () {
    return navigator.userAgent.match(/HuabenApp/gi);
  },
  getImageOrigin: function (url) {
    var result = url.replace(/(\@\d+w|\?x\-oss\-process\=)[^\&\?]*$/g, "");
    return result;
  },
  loadCss: function (url) {
    var container = document.getElementsByTagName("head")[0];
    var addStyle = document.createElement("link");
    addStyle.rel = "stylesheet";
    addStyle.type = "text/css";
    addStyle.media = "screen";
    var reg = /^http[s]*\:\/\//gi;
    if (!reg.test(url)) addStyle.href = Q.protocol + Q.resDir + url;
    else addStyle.href = url;
    container.appendChild(addStyle);
  },
  loadScript: function (url) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    var container = document.getElementsByTagName("head")[0];
    s.src = url;
    container.appendChild(s);
  },
  defaultCharacterPic: "pic/character/default.jpg",
  getNumberStr: function (num) {
    var max = 10000;
    var str = "";
    if (num < max) {
      str = num;
    } else {
      str = parseInt(num / max) + "万";
    }
    return str;
  },
  //封装localStorage和sessionStorage，以解决浏览器无痕模式出错
  storage: function (key, val) {
    if (!localStorage) return null;
    try {
      if (val != undefined) {
        val = val.toString();
        localStorage.setItem(key, val);
        return val;
      } else if (val === null) {
        localStorage.removeItem(key);
        return null;
      } else {
        return localStorage.getItem(key);
      }
    } catch (e) {
      return null;
    }
  },
  //封装localStorage，以解决浏览器无痕模式出错
  session: function (key, val) {
    if (!sessionStorage) return null;
    try {
      if (val != undefined) {
        val = val.toString();
        sessionStorage.setItem(key, val);
        return val;
      } else if (val === null) {
        sessionStorage.removeItem(key);
        return null;
      } else {
        return sessionStorage.getItem(key);
      }
    } catch (e) {
      return null;
    }
  },
  isLogin: function () {
    return !!Q.cookie("i_u");
  },
  user: function () {
    var tokenId = Q.cookie("i_u");
    if (!tokenId) return null;
    var datas = decodeURI(tokenId).split("&");
    var code = datas[0].split("l");
    var nickName = "";
    for (var i = 0; i < code.length; i++) {
      nickName += String.fromCharCode(code[i]);
    }
    var user = {};
    user.userId = datas[1];
    user.nickName = nickName;
    return user;
  },
  cookie: function (name, value, day, domain, path) {
    domain = domain ? "domain=" + domain + ";" : "";
    path = "path=" + (path || "/") + ";";
    var re,
      date = new Date(),
      reg = new RegExp(name + "=(.*?)(;|$)", "i");
    switch (value) {
      case undefined:
        re = document.cookie.match(reg);
        if (re != null) {
          re = decodeURIComponent(re[1]);
        }
        break;
      case null:
        document.cookie =
          name + "=;" + domain + path + "expires=" + new Date(0).toUTCString();
        re = true;
        break;
      default:
        if (day == 0) {
          day = "";
        } else {
          date.setTime(date.getTime() + (day || 30) * 864e5);
          day = "expires=" + date.toUTCString();
        }
        document.cookie =
          name + "=" + encodeURIComponent(value) + ";" + domain + path + day;
        re = true;
    }
    return re || "";
  },
  /**
   * 获取查询数据
   */
  getQueryString: function () {
    var result = location.search.match(new RegExp("[?&][^?&]+=[^?&]+", "g"));
    var params = {};
    if (result) {
      for (var i = 0; i < result.length; i++) {
        result[i] = result[i].substring(1);
      }
      if (result && result.length > 0) {
        for (var i = 0; i < result.length; i++) {
          if (result[i]) {
            var kv = result[i].split("=");
            params[kv[0]] = kv[1];
          }
        }
      }
    }
    return params;
  },
};

Q.guid = (function () {
  function a() {
    return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
  }
  var c = Q.cookie("guid");
  c ||
    ((c =
      a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()),
    Q.cookie("guid", c, 365 * 5, ".ihuaben.com", "/"));
  return c;
})();

$(document).ready(function () {
  var ua = navigator.userAgent;
  var isMobile = !!ua.match(/AppleWebKit.*Mobile.*/);
  if (isMobile) $("a").removeAttr("target");

  if (ua.match(/MSIE [5-8]\./gi))
    alert("本网站不支持IE9以下浏览器，请更换浏览器访问！");
});

if (localStorage) {
  try {
    sessionStorage.setItem("localStorage", 1);
    sessionStorage.removeItem("localStorage");
    localStorage.setItem("localStorage", 1);
    localStorage.removeItem("localStorage");
  } catch (e) {
    Storage.prototype._setItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function () {};
    console.log(
      'Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.'
    );
  }
}

if (Q.cookie("PureRead") === "true") {
  Q.loadCss(Q.protocol + "//staticcn.ihuaben.com/css/pure.css");
}

Q.ajax = function (params) {
  if (!params.headers) {
    var jsonType = "application/json";
    params.headers = { accepts: jsonType, contentType: jsonType };
  }
  $.ajax(params);
};

// 创建360广告
/**
 * @id 容器ID
 * @adId 广告位ID
 * @adOptions 广告参数
 * @otherParams
 */
function create360Ad(id, adId, adOptions, otherParams) {
  otherParams = otherParams || {
    onClose: () => {},
    w: undefined,
    h: undefined,
  };
  return new Promise((resolve, reject) => {
    if (QIHOO_WAP_FEEDAD) {
      QIHOO_WAP_FEEDAD({
        w: otherParams.w, // 选填, 广告位区域宽度（不传值则按指定的广告容器宽度适配展示）
        h: otherParams.h, // 选填，广告位区域高度（不传值则按模板默认高度展示）
        placeholderId: id, // 异步插入必填! 指定插入位置-广告容器id，同步插入不需要此参数
        showid: adId, // 必填，广告位id，按产品运营约定传值
        adOptions,
        // adOptions: {
        //   // 广告请求所需透传参数
        //   queryword: "", // 必填，广告位关键词（广告位关键词为抓取的页面内容的关键词）：可以传多个关键字，以空格分割，示例:queryword=URLencode(男装 女装 袜子)
        //   title: "", // 必填，title为抓取的页面内容标题，urlencode过的内容标题
        //   uid: "", // 必填，标识PV的hash值
        // },
        // 选填，无广告返回回调
        onFail: reject,
        // 选填，有广告返回回调
        onSuccess: resolve,
        // 选填，广告点击关闭返回回调
        onClose: otherParams.onClose,
      });
    } else {
      reject();
    }
  });
}
(function () {
  var feedts = document.createElement("script");
  feedts.src = "//static-ssl.mediav.com/js/qihoo_wap_feedad_sdk.js";
  feedts.type = "text/javascript";
  feedts.async = "async";
  var scriptItem = document.getElementsByTagName("script")[0];
  scriptItem.parentElement.insertBefore(feedts, scriptItem);
})();
