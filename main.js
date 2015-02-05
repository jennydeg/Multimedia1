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
	});
});