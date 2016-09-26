var $searcfm=$('#searcfm');
$('#search').on('keyup',function(e){
	var parameter = $('#search').val();
     if(parameter.length!==0){
    $.ajax({url:$searcfm.attr("action"), type:"post", dataType:"text", data:{"parameter":parameter},success:function(ans){
      
	$('#results').show().html(ans);


}


});

}
else{
$('#results').hide();	
}

});

$('#itag').click(function(){
$('#results').hide();
});