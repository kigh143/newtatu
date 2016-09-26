var $save=$('#save');
var $form_about_me= $("#form_for_aboutme");

$form_about_me.on('submit',function(e){
	$content=$(this).serialize();
	
	var formData = $(this).serialize();
      var splat = formData.split('=');
      var colname = splat[0];
      var value = splat[1];
    
      $.ajax({url:$form_about_me.attr("action"), type:"post", dataType:"text", data:{"colname":colname, "value":value},success:function(ans){
       showit()
         console.log(ans);
      }
     

    });
       e.preventDefault();
});
$('#input').on('blur',function(e){
	$content=$(this).serialize();
 
	var formData = $(this).serialize();
      var splat = formData.split('=');
      var colname = splat[0];
      var value = splat[1];
    
      $.ajax({url:$form_about_me.attr("action"), type:"post", dataType:"text", data:{"colname":colname, "value":value},success:function(ans){
       showit()
        console.log(ans);
      }
     

    });
       e.preventDefault();
});


$('#bd').on('focusout',function(e){
	$content=$(this).serialize();
  
	var formData = $(this).serialize();
      var splat = formData.split('=');
      var colname = splat[0];
      var value = splat[1];
    
      $.ajax({url:$form_about_me.attr("action"), type:"post", dataType:"text", data:{"colname":colname, "value":value},success:function(ans){
        showit()
        console.log(ans);
      }
     

    });
       e.preventDefault();
});

$('select').on('blur',function(e){
	$content=$(this).serialize();
	
	var formData = $(this).serialize();
      var splat = formData.split('=');
      var colname = splat[0];
      var value = splat[1];
    
      $.ajax({url:$form_about_me.attr("action"), type:"post", dataType:"text", data:{"colname":colname, "value":value},success:function(ans){
        showit()
         console.log(ans);
      }
     

    });
       e.preventDefault();
});
$('#in').on('focusout',function(e){
  $content=$(this).serialize();
  
  var formData = $(this).serialize();
      var splat = formData.split('=');
      var colname = splat[0];
      var value = splat[1];
    
      $.ajax({url:$form_about_me.attr("action"), type:"post", dataType:"text", data:{"colname":colname, "value":value},success:function(ans){
        showit()
        console.log(ans);
      }
     

    });
       e.preventDefault();
});
      
$('#em').on('focusout',function(e){
  $content=$(this).serialize();
  
  var formData = $(this).serialize();
      var splat = formData.split('=');
      var colname = splat[0];
      var value = splat[1];
    
      $.ajax({url:$form_about_me.attr("action"), type:"post", dataType:"text", data:{"colname":colname, "value":value},success:function(ans){
        showit()
        console.log(ans);
      }
     

    });
       e.preventDefault();
});

function showit(){
  $('#saved').show().addClass('animated bounceInLeft').delay(3000).one("webkitAnimationEnd mozAnimationEnd MSanimationEnd oanimationend animationend", function(){
        $(this).removeClass('bounceIntLeft');
      $(this).addClass('bounceOutLeft').one("webkitAnimationEnd mozAnimationEnd MSanimationEnd oanimationend animationend", function(){
        $(this).removeClass('bounceOutLeft').hide();
      });
  })
}