$(document).ready(function(){
	var slideFlag = 0;
	var heights = [];
	var i
	$('.btn').on('click', function(){
		max = 0; 
		if(slideFlag == 0){
			$('.item').each(function(i, elem){
				if($(this).height() > max) {
					max = $(this).height(); 
				}
				if(heights[i] == null){
					heights[i] = $(this).height()
				}
			})
			$('.item').stop().animate({height: max},500);
			slideFlag = 1;
		}

		else if(slideFlag == 1){
			$('.item').each(function(i, elem){
				$(this).stop().animate({height: heights[i]},500);
				console.log(heights[i])
			})
			slideFlag = 0;
		}
	})
});