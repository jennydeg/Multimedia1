function showHappy()
{

    document.getElementById("sc-sad").style.display="none";
    document.getElementById("sc-love").style.display="none";
    document.getElementById("sc-happy").style.display="block";  
     document.getElementById("container1").style.background="green";    

}
function showSad()
{

    document.getElementById("sc-sad").style.display="block";
    document.getElementById("sc-love").style.display="none";
    document.getElementById("sc-happy").style.display="none";    

}
function showLove()
{

    document.getElementById("sc-sad").style.display="none";
    document.getElementById("sc-love").style.display="block";
    document.getElementById("sc-happy").style.display="none";    

}
$( document ).ready(function() {
	$("#clickinfo").click(function(){
		$( "#info" ).fadeToggle();
		var isVisible = $( "#info" ).is( ":visible" );
		var isHidden = $( "#info" ).is( ":hidden" );
		if(isVisible === true)
			$("#infoimg").css("background", "#FF7F00");
		if(isHidden == true)
			$("#infoimg").css("background", "#bfbebc");
	});
	
});