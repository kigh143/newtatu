var $fogotForm = $("#fogotForm");
var $fogotbtn = $("#fogotbtn");
var $showError = $("#showError");
var $bigdiv = $("#bigdiv");
$fogotbtn.on("click", function(e) {
	e.preventDefault();
	var email = $fogotForm.serialize();
	$.ajax({
		url:$fogotForm.attr("action"),
		type:"post",
		data: email,
		dataType:'text',
		success:function(info) 
		{
			console.log();
			if(info === "Email was sent") 
			{
				$bigdiv.html("<i>Check your email for the link, click it or copy and load the page in your browser to change your password thanks you for using tatu</i>");
			}
			else
			{
				$showError.html(info);
			}
		} 
	});
	
});