
var fillColorFromGlobalColors0 = function(context) { fillColorFormColors(0, context); }
var fillColorFromGlobalColors1 = function(context) { fillColorFormColors(1, context); }
var fillColorFromGlobalColors2 = function(context) { fillColorFormColors(2, context); }
var fillColorFromGlobalColors3 = function(context) { fillColorFormColors(3, context); }
var fillColorFromGlobalColors4 = function(context) { fillColorFormColors(4, context); }
var fillColorFromGlobalColors5 = function(context) { fillColorFormColors(5, context); }
var fillColorFromGlobalColors6 = function(context) { fillColorFormColors(6, context); }
var fillColorFromGlobalColors7 = function(context) { fillColorFormColors(7, context); }
var fillColorFromGlobalColors8 = function(context) { fillColorFormColors(8, context); }
var fillColorFromGlobalColors9 = function(context) { fillColorFormColors(9, context); }


function fillColorFormColors(index, context) {
  var sketch = require('sketch')

  var Style = sketch.Style
  var document = sketch.getSelectedDocument()

  var selection = document.selectedLayers
  var colors = NSApp.delegate().globalAssets().colors();

  selection.forEach(function(layer) {
    layer.style.fills = [
      {
        color: colors.objectAtIndex(index),
        fill: Style.FillType.Color,
      }
    ]
  })
}
