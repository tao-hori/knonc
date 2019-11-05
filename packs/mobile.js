(function($){
	// ハンバーガーメニュー
    $(".menu-toggle").on("click", function() {
        $("#top-navbar").slideToggle();
    });
	
	/* トップページのトグルボタン（ピックアップ部分） */
	$.pickupToggle = function(){
		$(".toggle_btn_open").on("click", function() {
			$(this).next().slideToggle();
			$(this).toggleClass("hidden");
			$(this).next().next(".toggle_btn_close").toggleClass("hidden");
		});
		$(".toggle_btn_close").on("click", function() {
			$(this).prev().slideToggle();
			$(this).toggleClass("hidden");
			$(this).prev().prev(".toggle_btn_open").toggleClass("hidden");
		});
	};	
	$(window).on('load', function() {
		$.pickupToggle(100);
	});
	
	/* トップへ戻るボタン*/
	$("#btn-pagetop").click(function () {
			$('body,html').animate({
					scrollTop: 0
			}, 500);
			return false;
	});
})(jQuery);



