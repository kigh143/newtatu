var $submit_btn = $("#submit_btn");
var $imagesUpload = $("#imagesUpload");
var $userpost = $("#userpost");
$imagesUpload.on("change", function(element) {
	
	 var countFiles = $(this)[0].files.length;
 
     var imgPath = $(this)[0].value;
     var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
     var image_holder = $("#showupload");
     image_holder.empty();
 
     if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
         if (typeof (FileReader) != "undefined") {
 
             for (var i = 0; i < countFiles; i++) {
 
                 var reader = new FileReader();
                 reader.onload = function (e) {
                     $("<img />", {
                         "src": e.target.result,
                             "style" :"width:120px; height:100px; margin:10px; border:2px solid #eee;"
                     }).appendTo(image_holder);
                 }
 
                 image_holder.show();
                 reader.readAsDataURL($(this)[0].files[i]);
             }
 
         } else {
             alert("It doesn't supports");
         }
     } else {
         alert("Select Only images");
     }
	
});

$(document).on("click", '#likeBtn', function(){
    var $thisElement = $(this);
    var id = $thisElement.attr("data-role");
    var count = $thisElement.find("span").html();
    $.ajax({
        url:"likeUpdate",
        type:"post",
        dataType:"text",
        data:{update_id:id},
        success : function(info)
        {
           if(info == 1)
           {
                $thisElement.removeAttr("id");
                $thisElement.attr("id","dislikeBtn");
                $thisElement.find("i").css({"color":"lime"});
                $thisElement.find("span").html( parseInt(count)+1).css({"color":"lime"});
           }
        }
    })
});

// dislikeBtn

$(document).on("click", '#dislikeBtn', function(){
    var $thisElement = $(this);
    var id = $thisElement.attr("data-role");
    var count = $thisElement.find("span").html();
    $.ajax({
        url:"dislikeUpdate",
        type:"post",
        dataType:"text",
        data:{update_id:id},
        success : function(info)
        {

            $thisElement.removeAttr("id");
            $thisElement.attr("id","likeBtn");
            $thisElement.find("i").css({"color":"grey"});
            $thisElement.find("span").html( parseInt(count)-1).css({"color":"grey"});
        }
    })
});


//var $commentBtn = $("#commentBtn");
var $formtocomment = $("#formtocomment")
$(document).on("focus", "#commentBox", function() {
    var $this = $(this);
    $this.next("button").show();
});

 // var $this = $(this);
 //    var update_id = $this.attr("data-role");
 //    var comment = $this.val();
 //    $.ajax({
 //        url:$formtocomment.attr("action"),
 //        type:"post",
 //        dataType:"text",
 //        data:{update_id:update_id, comment:comment},
 //        success: function(info) 
 //        {
 //            alert(info);
 //        }

 //    });
