var frame = $("#dean_page_menu");
var inited = false;
if ( frame.length!=0 ) {
	inited = true;
}

function run() {
	var container = $("<div id='dean_page_menu'></div>").appendTo("body");
	var headers = $("h1, h2, h3, h4");
	for(var i=0;i< headers.length;i++) {
		var header = headers.eq(i);
		if (!header.attr("id")) {
			header.attr("id","header_"+i);
		}
		var text="";
		if (header.children("a").length==1) {
			text = header.children("a").eq(0).text();
		}else{
			text = header.text();
		}

		var ancher = header.attr("id");
		$("<li><a href='#" + ancher+"'>" + text +"</a></li>").attr("class",header.prop("tagName") ).appendTo(container);

	}
}

if(inited == false) {
	run();
}else{
	frame.toggle();
}
