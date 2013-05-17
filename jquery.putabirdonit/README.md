 _______           _          _        ______    _                 __     ___              _____  _
|_   __ \         / |_       / \      |_   _ \  (_)               |  ]  .'   `.           |_   _|/ |_
  | |__) |__   _ `| |-'     / _ \       | |_) | __   _ .--.   .--.| |  /  .-.  \ _ .--.     | | `| |-'
  |  ___/[  | | | | |      / ___ \      |  __'.[  | [ `/'`\]/ /'`\' |  | |   | |[ `.-. |    | |  | |
 _| |_    | \_/ |,| |,   _/ /   \ \_   _| |__) || |  | |    | \__/  |  \  `-'  / | | | |   _| |_ | |,
|_____|   '.__.'_/\__/  |____| |____| |_______/[___][___]    '.__.;__]  `.___.' [___||__] |_____|\__/

Liven up your site with birds!

Based on the Portlandia skit, this jQuery plugin adds a random svg image of a bird on the selected element.

Source
=======

The project source and licensing information is available on [github](http://github.com/daveschwerstein/PutABirdOnIt/).

You can view the annotated source listing [here](http://daveschwerstein.github.com/PutABirdOnIt/docs/index.html).

Example
========


Put A Bird On It is a very simple plugin to use. Select the elements to put a bird on it, and the plugin will adjust the size accordingly.

    <script type="text/javascript">
        $(element).BirdOnIt({
        	file : "birds-svg.xml", // XML file with list of birds is located [default: "birds-svg.xml"]
			scale : .3, // scale of bird sizes compared to containing elements [default: .3]
			onBefore : function() {}, // callback function for before ajax call
			onComplete : function() {} // callback function for on complete of ajax call
        });
    </script>

License
========

The MIT License (MIT)

Copyright (c) 2013 David Schwerstein

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.