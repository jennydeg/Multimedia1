$(document).ready(function() {

    $(".bgthumbnail").click(function(){
        var myImage = new Image($(this).attr("width"), $(this).attr("height"));
        myImage.src = $(this).attr("src");

        layer = new Kinetic.Layer();
        var bg = new Kinetic.Image({
          x: 0,
          y: 0,
          image: myImage,
          width: myImage.width,
          height: myImage.height
        });

        // add the shape to the layer
        layer.add(bg);

        // add the layer to the stage
        stage.add(layer);

    });

    $(".objthumbnail").click(function(){
        var myImage = new Image($(this).attr("width"), $(this).attr("height"));
        myImage.src = $(this).attr("src");

        var imgobj = new Kinetic.Image({
          x: 0,
          y: 0,
          image: myImage,
          width: myImage.width,
          height: myImage.height,
          draggable: true
      });

      // add cursor styling
      imgobj.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
      });
      imgobj.on('mouseout', function() {
        document.body.style.cursor = 'default';
      });
      layer.add(imgobj);
      stage.add(layer);

    });

    stage = new Kinetic.Stage({
        container: 'container',
        width: 800,
        height: 600,
      });
});



