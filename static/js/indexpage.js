for(var i=0;i<$(".halfList").length;i++){
	var node=$("#pList1").children()[i];
	$($(".halfList")[i]).append($(node).clone());
}

var str="";
for(var i=0;i<$(".hotList").length;i++)
	str+="<li>"+$($(".hotList")[i]).html()+"</li>";
$("#pList2").html(str);

setTimeout(function(){
	var ww=$(window).width();
	if(ww<520){
		resetWidth();
		if($(".left-side li").css("margin-left")){
			var mW=$(".left-side li").css("margin-left").replace(/px/ig,"");
			if(mW<1){
				var w=parseInt(ww/3)-10;
				$(".cover-list li").width(w);
				$(".cover-list li").css("min-width",w.toString()+"px");
				$(".cover-list li").css("max-width",w.toString()+"px");
				$(".cover-list").css("padding-left","10px");
				//mW=parseInt((ww-$(".left-side li").width()*3)/7);
				//$(".cover-list li").css("margin-left",mW.toString()+"px");
				//$(".cover-list li").css("margin-right",mW.toString()+"px");
			}
		}
	}
	else if(ww>991&&$(".hsuggests").length>0){
		$(".hsuggests .suggestCover").on("mouseover",function(e){
			$(".hsuggests .booktip").remove();
			var bookId=$(e.target).attr("ari-bookid");
			$(e.target).parents("p").append("<a href='/function/feed/sameBooks?bookId="+bookId+"&hmsr=find' target='_blank' class='booktip'><img src='//imgcn.ihuaben.com/images/bookbottom.png'/></a>");
		});
		$(".hsuggests li div:last-child").each(function(index,item){
			var text=$(item).text().replace(/[ \r\n\t]+/g,"");
			if(text){
				var h=(Math.floor(Math.random()*5)+2)*20;
				$(item).css("max-height",h.toString()+"px");
			}
		});
		$('.hsuggests ul').masonry({
			// options...
			itemSelector: '.hsuggests ul li',
			columnWidth: 270
		});
	}

	if($(".hsuggests").length>0){
		var traceId=encodeURIComponent(h_traceId);
		var h = hmsr || "tuijian";
		for(var i=0;i<$(".hsuggests a").length;i++){
			var url=$($(".hsuggests a")[i]).attr("href");
			url=url.replace(/www\.ihuaben\.com\/book\/(\d+)\.html/ig,"www.ihuaben.com/function/bookservice/redirectBook?bookId=$1&traceId="+traceId+"&hmsr="+h);
			$($(".hsuggests a")[i]).attr("href",url);
		}
	}
},1000);

$(window).resize(function(){
	resetWidth();
});

function resetWidth(){
	var ww=$(window).width();
	var ow=$(".slide").width();
	var oh=$(".slide").height();
	var w=ow;
	var h=oh;
	if(ww<=520){
		w=ww;
		h=oh*w/ow;
	}
	$(".slide").width(w);
	$(".slide img").width(w);
	$(".slide").height(h);
	$(".slide img").height(h);
}

(function(){
	if($(window).width()>=1024||$(window).width()<340||navigator.userAgent.match(/(HuabenApp|html5plus|pureweb)/ig))
		return;
	var divName="indexTop_"+Math.floor(Math.random()*10000);
	var html = "";
		html += "<div class='container hidden-md hidden-lg "+divName+"' style='background:#000;position:relative;margin-top:10px;width:100%;padding-left:10px;padding-right:15px;'>"
			+	"<ul class='HuabenListUL' style='padding-top:0;padding-bottom:5px;margin:0;' onclick='javascript:AppDownload(\"网站首页\");'>"
			+		"<li style='margin-top:5px;padding:0;vertical-align:top;'>"
			+			"<a href='javascript:;'><img src='../img/logo.png' alt='iManga' style='width:50px;height:50px;'/></a>"
			+		"</li>"
			+		"<li style='vertical-align:top;color:#fff;'>"
			+			"<h3 style='font-size:16px;font-weight:500;margin:8px 0 0 0;padding:0;'>More comics being updated</h3>"
			+			"<p style='font-size:14px;font-weight:500;margin:10px 0 0 0;padding:0;'>Free! Free! Free!</p>"
			+		"</li>"
			+		"<li style='position:absolute;right:5px;top:0;'>"
			+"    <a style='background:#f17316;border-radius:5px;line-height:26px;padding:5px 15px 5px 15px;margin:12px 0 0 0;font-size:16px;border:0;' class='btn btn-danger' href='javascript:AppDownload(\"网站首页\");'>Enjoy</a></li>"
			+	"</ul>"
			+"</div>"
		$(".middleButtons").after(html);
})();