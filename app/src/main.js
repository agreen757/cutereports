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

   var titleSize = new Transitionable([undefined,100])
   var titleAlign = new Transitionable([0,.4])
   var TRANSITION = {duration:1000,curve:Easing.outElastic}

   var titleSurface = new Surface({
   		content: 'Cute Reports',
   		properties: {
   			backgroundColor: 'black',
   			color: '#eee',
    		fontSize: '3.5em',
    		lineHeight: '2em'

   		}
   })
   var titleSurfaceMod = new Modifier({
   		size: function(){
   			return titleSize.get()
   		},
   		align: function(){
   			return titleAlign.get()
   		},
   		transform: 0
   })

   var rotated = false;
   titleSurface.on('mouseenter', function(){
   	  //add check here to avoid doing this twice
   	  if(!rotated){
   	  	expand();
   	  }
   	  
   })
   function expand(){
   	rotated = true;
   	titleSize.set([undefined,250],TRANSITION)
   	titleSurface.setContent('Login to get started')
   	var button = new Surface({
   		content: '<button>Login</button>',
   		properties:{
   			fontSize:'2em'
   		}
   	})
   	var buttonMod = new Modifier({
   		align: [0,.6]
   	})
   	button.on('click',function(){
   		//vanish text
   		//vanish button
   		//rotate bar 180
   		//expand bar to width of page
   		//add new view
   		console.log('uhhh, coming soon?')
   		titleSurfaceMod.setTransform(Transform.rotateZ(1.572),{curve:'linear',duration:500})
   		titleAlign.set([.5,0],{curve:'linear'},function(){
   			titleSurface.setContent('')
   			titleSize.set(mainContext.getSize(),{curve:'linear'})
   			button.render = function(){return null;}
   			
   		})
   	})
   	return mainContext.add(buttonMod).add(button)
   }

    mainContext.add(titleSurfaceMod).add(titleSurface)
})