// ==UserScript==
// @name		Live Site Warning
// @description		Visual Warning when on "live" site
// @version		0.1
// @copyright		2013+, "Will Palmer" <will@do-it-well.co.uk>
// @namespace		https://raw.github.com/wpalmer/tamper/master/live-site-warning.js
// @updateURL		https://raw.github.com/wpalmer/tamper/master/live-site-warning.js
// @require		https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @match		http://www.example.com/LIVE-ADMIN/
// ==/UserScript==
(function($){
	var $top = $("<div />");
	var $bottom = $("<div />");
	var $left = $("<div />");
	var $right = $("<div />");
	$(unsafeWindow.document.body).append($top);
	$(unsafeWindow.document.body).append($bottom);
	$(unsafeWindow.document.body).append($left);
	$(unsafeWindow.document.body).append($right);
	var style = "4px dotted red";
	window.setInterval(function(){
		style = (style === "4px dotted red") ? "4px dashed red" : "4px dotted red";
		$top.css({
			display: "block",
			position: "fixed",
			top: "0px",
			left: "0px",
			width: "100%",
			height: "0px",
			margin: "0px",
			padding: "0px",
			borderBottom: style
		});
		$bottom.css({
			display: "block",
			position: "fixed",
			bottom: "0px",
			left: "0px",
			width: "100%",
			height: "0px",
			margin: "0px",
			padding: "0px",
			borderTop: style
		});
		$left.css({
			display: "block",
			position: "fixed",
			top: "0px",
			left: "0px",
			width: "0px",
			height: "100%",
			margin: "0px",
			padding: "0px",
			borderRight: style
		});
		$right.css({
			display: "block",
			position: "fixed",
			top: "0px",
			right: "0px",
			width: "0px",
			height: "100%",
			margin: "0px",
			padding: "0px",
			borderLeft: style
		});
	}, 800);
}(jQuery));
