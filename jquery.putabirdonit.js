/*
	title: Put a Bird on It
	author: David Schwerstein
	email: david.schwerstein@gmail.com
	license:
		The MIT License (MIT)

		Copyright (c) 2013 David Schwerstein

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE.

	Based on the Portlandia episode, this jquery plugin livens up websites by adding birds to elements.
*/

(function($) {

	var methods = {
		destroy: function(options) {
			return $(this).each(function() {
				$(this).removeData('BirdOnIt');
			});
		}
	};

	$.fn.BirdOnIt = function(options) {

		var defaults = {
			file : "birds-svg.xml",
			scale : .3,
			onBefore : function() {},
			onComplete : function() {}
		};

		var settings = $.extend({}, defaults, options),
			x,
			y,
			flip,
			$this = this;

		$.ajax({
	        type: "GET",
	        url: settings.file,
	        beforeSend: settings.onBefore,
	        dataType: "xml",
	        success: function(xml) {
				init(xml, settings, $this);
	        },
	        complete: settings.onComplete
	    });

	};
}( jQuery ));

function init(xml, settings, $this) {
	var svg = $(xml).find('svg'),
		svg_number = svg.length;

	// Go through each element to put a bird on
    $this.each(function() {

		// Declaring variables
		var corner = Math.floor((Math.random() * 4) + 1),
			random_svg = Math.floor((Math.random() * svg_number));

		// Choose corner
		switch (corner) {
			case 1:
				x = "left: ",
				y = "top: 0;";
				flip = "flip";
			break;

			case 2:
				x = "right: ",
				y = "top: ";
				flip = "";
			break;

			case 3:
				x = "left: ",
				y = "bottom: ";
				flip = "flip";
			break;

			default:
				x = "right: ",
				y = "bottom: ";
				flip = "";
			break;
		}

		var size = ($this.width() * settings.scale);

		// Prepend svg
		$(this).addClass('birdOnItContainer');
		$(this).prepend('<img class="' + flip + ' birdOnIt" style="' + x + '-' + (size / 2) + 'px; ' + y + '0px; width: ' + size + 'px;" src="' + svg.eq(random_svg - 1).text() + '" />');

	});
}