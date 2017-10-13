$(document).ready(function(){
	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');

		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		$('.show-item').css('transform','scale(0)');

		function hideProduct(){
			$('.show-item').hide();	
		} setTimeout(hideProduct,200);

		function showProduct(){
			$('.show-item[category="'+catProduct+'"]').show();
			$('.show-item[category="'+catProduct+'"]').css('transform','scale(1)');
		} setTimeout(showProduct,200);
	});
});