$(function(){
	
    var stage = new Kinetic.Stage({
        container: 'canvas',
        width: 700,
        height: 300
    });

	var layer = new Kinetic.Layer();
	
 	var myImage = new Image(764,430);
	myImage.src="Landscape_01.jpg";
	
	var background = new Kinetic.Image({
		x:0,
		y:0,
		image:myImage, 
		width: myImage.width,
		height: myImage.height
	});
	
	console.log(background);
	layer.add(background);
	stage.add(layer);
	
  });
