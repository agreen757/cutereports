/ * globals defind */

define(function(require,exports,module){
	'use strict';

	var Engine = require('famous/core/Engine')
	var View = require('famous/core/View')
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var StateModifier = require('famous/modifiers/StateModifier')
    var Transform = require('famous/core/Transform');
    var Lightbox = require('famous/views/Lightbox')
    var HFLayout = require('famous/views/HeaderFooterLayout')
    //enabling dragging things
    //var Draggable = require("famous/modifiers/Draggable");
    var LightBox = require('famous/views/Lightbox')
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var GridLayout = require('famous/views/GridLayout');
    var ScrollView = require('famous/views/Scrollview');
    var RenderNode = require('famous/core/RenderNode');
    var Transitionable = require("famous/transitions/Transitionable");
    var Easing = require('famous/transitions/Easing')
    var FastClick = require('famous/inputs/FastClick')

    //*******************DEFINE MAIN CONTEXT*******************

   var mainContext = Engine.createContext();

    var surface = new Surface({
    	content: '<center><p>CuteReports</p></center>',
    	properties: {
    		fontSize: '3.5em',
    		marginTop: '5em'
    	}
    })

    var surfaceMod = new Modifier({
    	origin: [.5,.5],
    	align: [.5,.5]
    })
    mainContext.add(surfaceMod).add(surface)
})