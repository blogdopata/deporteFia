$(document).ready(function(){
	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');

		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		$('.product-item').css('transform','scale(0)');

		function hideProduct(){
			$('.product-item').hide();	
		} setTimeout(hideProduct,200);

		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform','scale(1)');
		} setTimeout(showProduct,200);
	});
});