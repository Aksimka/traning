$(document).ready(function(){
	var slideFlag = 0;
	var heights = [];
	$('.btn').on('click', function(){
		var max = 0; 
		if(slideFlag == 0){
			for(var i = 0; i < 5; i++){
				if($('.item')[i].clientHeight > max) {
					max = $('.item')[i].clientHeight; 
				}
				heights[i] = $('.item')[i].clientHeight;
				console.log(heights[i]);
			}
			$('.item').animate({height: max},3000);
			slideFlag = 1;
		}


		else if(slideFlag == 1){

			$.each($('.item'), function(){
				$(this).animate({height: heights},3000);
			})
			slideFlag = 0;
		}
		
	})
});