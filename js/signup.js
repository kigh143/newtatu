var $signup_btn = $("#signup_btn");
var $signup_form = $("#signup_form");
var $errors = $("#errors");
var $loader = $("#loader");
var animate = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
$signup_btn.on("click", function (e) { 
	$signup_btn.html("Creating your Account... Please wait");
	$signup_btn.attr("disabled", "disabled");
	$errors.hide();
	var  formdata = $signup_form.serialize();
	$.ajax({
		url:$signup_form.attr("action"),
		type:"post",
		dataType:"text",
		data:formdata,
		success : function(returnedData)
		{
			if(returnedData === "success")
			{
				window.location = "http://www.tatuapp.com/Verifyuser/index";
			}
			else
			{
				$errors.show().addClass("animated fadeIn").one(animate, function() {
				$(this).html(returnedData);
				$(this).removeClass("fadeIn");
				$loader.html("");
				$signup_btn.removeAttr("disabled", "disabled");
				$signup_btn.html("try again please");
				});
			}

		}
	});
	e.preventDefault();
});

