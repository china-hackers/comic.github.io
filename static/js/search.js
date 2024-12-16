
var tempList=[];
var searchClass={
	noShowHistory:false,
	showHistory:function(){
		if(searchClass.noShowHistory)
			return;
		
		var remoteStorage = new $.XDStorage(Q.protocol+"//imanga.net", "/search");
		remoteStorage.getValue("searchhistory",function(data){
			if(!data)
				return;
			var list=JSON.parse(data);
			if(list.length>0){
				/*
				var str="<div class=\"hotsearch\"><ul class=\"list-inline\">";
				str+="<li><span>热搜</span></li>";
				for(var i=0;i<hotList.length;i++)
					str+="<li><a href=\"\" class=\"btn btn-default btn-xs\">"+hotList[i]+"</a></li>";
				str+="<li><a href==\"\" class=\"btn btn-default btn-xs\">更多</a></li>";
				str+="</ul></div>";
				*/
				var str="<ul class=\"list-group\">";
				str+="<li class=\"list-group-item list-group-item-success\">搜索历史</li>";
				for(var i=0;i<list.length;i++){
					if(i>=10)
						break;
					str+="<li class=\"list-group-item\" aria-data=\""+list[i]+"\">";
					str+="<a class=\"listSpan\" href=\"/search/"+encodeURIComponent(list[i])+"\">"+list[i]+"</a>";
					str+="<span class=\"pull-right removeButton\"><i class=\"icon-remove\"></i></span></li>";
				}
				str+="<li class=\"list-group-item list-group-item-success\">";
				str+="<a class=\"clearHistory\" href=\"#\">清空搜索历史</a>";
				str+="<a class=\"pull-right closeHistoryButton\" href=\"#\">Close</a></li>";
				str+="</ul>";
				$(".searchhistory").html(str);
				$(".searchhistory").show();
				searchClass.moveSearchHistory();
				$(".removeButton").click(function(e){
					var obj=$(e.target).parents(".list-group-item");
					var keyword=obj.attr("aria-data");
					for(var i=0;i<list.length;i++){
						if(list[i].toLowerCase()==keyword.toLowerCase()){
							list.splice(i,1);
							break;
						}
					}
					remoteStorage.setValue("searchhistory",JSON.stringify(list));				
					obj.remove();
				});
				$(".clearHistory").click(function(){
					remoteStorage.delValue("searchhistory");
					$(".searchhistory").hide();
				});
				$(".closeHistoryButton").click(function(){
					$(".searchhistory").hide();
				});
			}
		});
	},

	showSearchTip:function(){
		if(tempList.length>0){
			var str="<ul class=\"list-group\">";
			for(var i=0;i<tempList.length;i++){
				if(i>=10)
					break;
				str+="<li class=\"list-group-item\">";
				str+="<a class=\"listSpanFull\" href=\"/search/"+encodeURIComponent(tempList[i])+"\">"+tempList[i]+"</a></li>";
			}
			str+="<li class=\"list-group-item list-group-item-success\">";
			str+="<span>&nbsp;</span><a class=\"pull-right closeHistoryButton\" href=\"#\">Close</a></li>";
			str+="</ul>";
			$(".searchhistory").html(str);
			$(".searchhistory").show();
			searchClass.moveSearchHistory();
			
			$(".closeHistoryButton").click(function(){
				$(".searchhistory").hide();
			});
		}
	},
	moveSearchHistory:function(){
		var obj=$("#newSearchInput").parent();
		if($(window).width()<768)
			obj=$("#newSearchInput");
		$(".searchhistory").width($(obj).outerWidth());
		$(".searchhistory").offset({
			left:$(obj).offset().left,
			top:$(obj).offset().top+52
		});
		$(".searchhistory").css("z-index","999");
	},
	init:function(){
		var v=navigator.appVersion;
		var reg=/like Mac OS X/ig;
		if(reg.test(v)){
			reg=/mqq|uc|MicroMessenger|mxios|Chrome/ig;
			if(reg.test(v)){
				searchClass.noShowHistory=true;
				return;
			}
		}
		$(document).ready(function(){
			var url=document.location.href;
			if(url.match(/\/search\/\?/ig)){
				var reg=/\/search\/(.*?)/ig;
				var group=reg.exec(url);
				if(group){
					var keyword=decodeURIComponent(group[2]);
					$("#newSearchInput").val(keyword);
				}
			}
			if($(".searchhistory").length==0){
				var div=$("<div class=\"searchhistory\"></div>");
				div.appendTo(document.body);
			}
			$(".navbar-toggle").click(function(){
				$(".searchhistory").hide();
			});
			$("#newSearchInput").click(function(){
				if(navigator.userAgent.match(/\((iPhone|iPad)\;[^\n]+ (QQ|baidubrowser|baiduhd)\/\d+/ig))
					return;
				if($(".searchhistory").is(":visible"))
					return;
				var txt=$("#newSearchInput").val();
				if(!txt&&txt!="")
					searchClass.showHistory();
				else{
					$.get('/api/suggest/'+txt,function(data){
						tempList=data;
						searchClass.showSearchTip();
					},"json");
				}
			});
			$("#newSearchForm").submit(function(e){
				e.preventDefault();
				e.stopPropagation();
				var remoteStorage = new $.XDStorage(Q.protocol+"//staticcn.ihuaben.com", "/localdb/proxy.html");
				var txt=$("#newSearchInput").val();
				txt=$.trim(txt).replace(/[^\u4e00-\u9fa5\w\d ]/g,"");
				if(txt){
					remoteStorage.getValue("searchhistory",function(searchhistory){
						if(searchhistory){
							var list=JSON.parse(searchhistory);
							for(var i=0;i<list.length;i++){
								if(list[i].toLowerCase()==txt.toLowerCase()){
									list.splice(i,1);
									break;
								}
							}
							list.splice(0,0,txt);
							if(list.length>100)
								list.length=100;
							remoteStorage.setValue("searchhistory",JSON.stringify(list),function(){
								document.location.href="/search/"+encodeURIComponent($("#newSearchInput").val());
							});
						}
						else
							remoteStorage.setValue("searchhistory",JSON.stringify([txt]),function(){
								document.location.href="/search/"+encodeURIComponent($("#newSearchInput").val());
							});						
					});
				}
				else
					document.location.href="/search";
			});
			$("#newSearchInput").on("change input",function(e){
				var txt=$.trim($(e.target).val());
				var otxt=$(e.target).attr("aria-data");
				if(txt!=otxt){
					$(e.target).attr("aria-data",txt);
					if(!txt&&txt!="")
						searchClass.showHistory();
					else{
						$.post("/api/search", {
							word: txt
						}, function(data) {
							tempList=data;
							searchClass.showSearchTip();
						})
					}
				}
			});
		});
	}
}

$(document).ready(function(){
	searchClass.init();
});