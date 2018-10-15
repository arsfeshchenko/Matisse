
var fillColorFromGlobalColors0 = function(context) { fillColorFormColors(0); }
var fillColorFromGlobalColors1 = function(context) { fillColorFormColors(1); }
var fillColorFromGlobalColors2 = function(context) { fillColorFormColors(2); }
var fillColorFromGlobalColors3 = function(context) { fillColorFormColors(3); }
var fillColorFromGlobalColors4 = function(context) { fillColorFormColors(4); }
var fillColorFromGlobalColors5 = function(context) { fillColorFormColors(5); }
var fillColorFromGlobalColors6 = function(context) { fillColorFormColors(6); }
var fillColorFromGlobalColors7 = function(context) { fillColorFormColors(7); }
var fillColorFromGlobalColors8 = function(context) { fillColorFormColors(8); }
var fillColorFromGlobalColors9 = function(context) { fillColorFormColors(9); }


function fillColorFormColors(index) {
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
