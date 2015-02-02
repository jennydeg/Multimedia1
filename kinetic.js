var highlightWidth = 2;

var stage = new Kinetic.Stage({
    container: 'container1',
    width: 300,
    height: 300
});
var layer = new Kinetic.Layer();
stage.add(layer);


var dropzone = new Kinetic.Stage({
    container: 'container2',
    width: 700,
    height: 300
});
var dropLayer = new Kinetic.Layer();
dropzone.add(dropLayer);


// these must go after the creation of stages & layers
addBackground(stage, layer, dropLayer);
layer.draw();
addBackground(dropzone, dropLayer, layer);
dropLayer.draw();


// get images & then trigger start()
var images = {};
var URLs = {
    house1: 'image/drag2.svg',
    house2: 'https://dl.dropboxusercontent.com/u/139992952/stackoverflow/house204-4.jpg',
    house3: 'https://dl.dropboxusercontent.com/u/139992952/stackoverflow/house204-1.jpg'
};
loadImages(URLs, start);


function start() {
    var house1 = kImage(images.house1, 10, 10, 50, 50, layer);
    var house2 = kImage(images.house2, 75, 10, 50, 50, layer);
    var house3 = kImage(images.house3, 140, 10, 50, 50, layer);
    layer.draw();
}

function swapStagesIfSelected(sourceLayer, destinationLayer, startX, startY) {

    // get all elements on the source layer
    var elements = sourceLayer.get("Image");

    // don't let dropped elements fall off the stage
    var totalWidth = 0;
    var maxHeight = -999;
    var layerWidth = destinationLayer.getStage().getWidth();
    var layerHeight = destinationLayer.getStage().getHeight();
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].isSelected) {
            totalWidth += elements[i].getWidth();
            maxHeight = Math.max(elements[i].getHeight(), maxHeight);
        }
    }
    if (startX + totalWidth > layerWidth) {
        startX = layerWidth - totalWidth - 15;
    }
    if (startY + maxHeight > layerHeight) {
        startY = layerHeight - maxHeight - 15;
    }

    // move all selected images 
    // to the clicked x/y of the destination layer
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.isSelected) {
            var img = element.getImage();
            kImage(img, startX, startY, element.getWidth(), element.getHeight(), destinationLayer);
            startX += element.getWidth() + 10;
            element.remove();
        }
    }
    sourceLayer.draw();
    destinationLayer.draw();
}

// build the specified KineticJS Image and add it to the specified layer
function kImage(image, x, y, width, height, theLayer) {
    var image = new Kinetic.Image({
        image: image,
        x: x,
        y: y,
        width: width,
        height: height,
        //strokeWidth: 0.1,
        //stroke: "green",
        draggable: true
    });
    image.myLayer = theLayer;
    image.isSelected = false;
    image.on("click", function () {
        highlight(this);
        this.myLayer.draw();
    });
    image.myLayer.add(image);
    return (image);
}


// build a background image and add it to the specified stage
function addBackground(theStage, theLayer, otherLayer) {

    var background = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: theStage.getWidth(),
        height: theStage.getHeight(),
        //fill: "white",
        stroke: "green",
        strokeWidth: 1
    });
    background.on("click", function () {
        var pos = theStage.getMousePosition();
        var mouseX = parseInt(pos.x);
        var mouseY = parseInt(pos.y);
        swapStagesIfSelected(otherLayer, theLayer, mouseX, mouseY);
    });
    theLayer.add(background);
}


/////////////  Image loader

function loadImages(URLs, callback) {
    var loaded = 0;
    var needed = 0;
    for (var url in URLs) {
        needed++;
        console.log(url);
    }
    for (var url in URLs) {
        images[url] = new Image();
        images[url].onload = function () {
            if (++loaded >= needed) {
                callback(images);
            }
        };
        images[url].src = URLs[url];
    }
}

/////////////  Toggle Highlighting

function highlight(element, setStrokeWidth) {
    if (setStrokeWidth) {
        element.setStrokeWidth(setStrokeWidth);
    } else {
        if (element.getStrokeWidth() > 5) {
            element.setStrokeWidth(0.1);
            element.isSelected = false;
        } else {
            element.setStrokeWidth(highlightWidth);
            element.isSelected = true;
        }
    }
}