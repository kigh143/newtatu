// var $followUser = $("#followUser");
// var $closeUser = $("#closeUser");
var animationend = 'webkitAnimationEnd mozAnimationEnd MSanimationEnd oanimationend animationend';
$(document).on("click", "#closeUser",  function() {
	$(this).parents("#singleperson").addClass("animated bounceOutDown").one(animationend, function(){
		$(this).hide();
		$(this).removeClass("animated bounceOutDown");
	});
});

$(document).on("click", "#followUser", function(){
	var $this= $(this);
	var persion_id = $this.attr("data-role");
	var url        = $this.attr("rel");
	$.ajax({
		url:url,
		type:"post",
		dataType:"text",
		data:{persion_id:persion_id},
		success: function(data){
			if(data === "following")
			{	
				$this.removeClass("btn-info");
				$this.html("<i class='zmdi zmdi-walk'></i> following").addClass("btn-success");
				setTimeout( 
					$this.parents("#singleperson").delay(1000).addClass("animated flipOutX").one(animationend, function(){
						$(this).hide();
					}), 30000
				);
			}
		}
	});
});