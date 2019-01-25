$(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });

$(function(){
	$('.navbar a, footer a').on("click", function(event){
		event.preventDefault();
		var hash = this.hash;

		$('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
	});
})

$(function(){

    $(".navbar a, footer a").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
        
    });

})
