function addCSS(cssText){
    var style = document.createElement('style'),  //创建一个style元素
        head = document.head || document.getElementsByTagName('head')[0]; //获取head元素
    style.type = 'text/css'; //这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
    if(style.styleSheet){ //IE
        var func = function(){
            try{ //防止IE中stylesheet数量超过限制而发生错误
                style.styleSheet.cssText = cssText;
            }catch(e){

            }
        }
        //如果当前styleSheet还不能用，则放到异步中则行
        if(style.styleSheet.disabled){
            setTimeout(func,10);
        }else{
            func();
        }
    }
		else{ //w3c
        //w3c浏览器中只要创建文本节点插入到style元素中就行了
        var textNode = document.createTextNode(cssText);
        style.appendChild(textNode);
    }
    head.appendChild(style); //把创建的style元素插入到head中    
}

var HuabenThemeList={
	"theme-white":{
		"background-color":"#fff",
		"color":"#333"
	},
	"theme-pink":{
		"background-color":"#fce4ec",
		"color":"#880e4f"
	},
	"theme-green":{
		"background-color":"#e0f2f1",
		"color":"#004d40"
	},
	"theme-blue":{
		"background-color":"#e1f5fe",
		"color":"#01579b"
	},
	"theme-dark":{
		"background-color":"#1a1c23",
		"color":"#c6c7c8"
	}
}

if(document.location.href.match(/\/book\/\d+\/\d+\.html/ig)){
	var str=Q.storage("settings");
	if(str){
		var settings=JSON.parse(str);
		if(settings["theme"]){
			var theme=HuabenThemeList[settings["theme"]];
			if(theme){
				addCSS("body{ background-color:"+theme["background-color"]+"; color:"+theme["color"]+";}");
				if($(window).width()<992){
					addCSS(".HuabenNavTop{ background-color:"+theme["background-color"]+";}");
					if(settings["theme"]=="theme-dark")
						addCSS(".HuabenNavTop{ border-bottom:1px solid #363f46;}");
				}
			}
			$("body").addClass(settings["theme"]);
		}
	}
}