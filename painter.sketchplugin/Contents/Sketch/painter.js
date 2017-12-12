
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
    var doc = context.document;
    var colors = NSApp.delegate().globalAssets().colors();

    if (colors.count() == 0) {
        doc.showMessage("You don't have any Global Colors Palette set yet");
        return false;
    }

    var selection = context.selection;

    if (selection.count() == 0) {
        doc.showMessage("Please select one Shape or Text layer.");
        return false;
    }

    for (var i = 0; i < selection.count(); i++) {
        var layer = selection.objectAtIndex(i);
        if (layer.class() == "MSShapeGroup" || layer.class() == "MSTextLayer") {

            setFillColor(layer, colors.objectAtIndex(index));
        }
    }

}


function setFillColor(layer, color) {

    if (layer.class() == "MSShapeGroup") {
      console.log("Hello!")
        var fills = layer.style().enabledFills();
        if (fills.count() > 0 && fills.lastObject().fillType() == 0) {
            fills.lastObject().setColor(color);
        } else {
            var fill = layer.style().addStylePartOfType(0);
            fill.setFillType(0);
            fills.lastObject().setColor(color);
        }
    }
    if (layer.class() == "MSTextLayer") {
      layer.textColor = MSImmutableColor.colorWithRed_green_blue_alpha(color.red(), color.green(), color.blue(), color.alpha());
    }
}
