$(document).ready(function() {

	$("#clickinfo, #ok").click(function(){
      $( "#info" ).fadeToggle();
	});
    
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
        width: 750,
        height: 500,
      });

	$("input:radio[name=mood]").click(function() {
    	var value = $(this).val();
		$('.mood').hide();
		$('#'+value).show();
	});
	
	$("#done").click(function() {
    	$('#container').addClass('animate');
		setTimeout(function(){ 
			$('#newButton').addClass('animateButton');
			alert("WOW! You're such an artist. Right click to save the picture and click on the blinking button to start over."); 
		}, 3000);
	});
	
	$("#new").click(function() {
		stage.removeChildren();
		$('#container').removeClass('animate');
		$('#newButton').removeClass('animateButton');
	});
});

