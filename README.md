HTML5-canvas-matrix-digital-rain
================================

Animated matrix digital rain theme, made using the HTML5 canvas element and plain javascript.
Simulates the "digital rain" visual effects from the movie The Matrix.

A working example can be executed by opening index.html in a supported browser.
Tested and confirmed to be working in Google Chrome/Chromium 30, Firefox 25.
Should work in up to date major browsers, and IE9+.

In order to use the script for yourself, check out the existing index.html file.
The mandatory components are:
-matrix.js (or matrix.min.js)
-a canvas element with id of "DigiRain"
and that's it. Though for best results, it's a good idea to include the (minimal) CSS provided.

The absolute bare bones of a HTML page implementing this script could be as simple as:

<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="css/matrix.min.css">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Digital Rain</title>
</head>
<body>
	<canvas id="DigiRain"></canvas>
</body> 
<script type="text/javascript" src="js/matrix.min.js" async defer></script>
</html>


For a pure javascript alternative (ie. for browsers that don't implement the HTML5 canvas element properly/at all), check out my previous html/js matrix script, jQuery Matrix Digital Rain: https://github.com/koroshiya/jquery-matrix-digital-rain
*Note: contrary to the title, my previous script does not require jquery (anymore).