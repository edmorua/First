function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
		$('#blah')
			.show()
			.attr('src', e.target.result);
		};
		reader.readAsDataURL(input.files[0]);
	}
}

$(function () {
	$('#blah').hide();
	$("div.main").dropzone({ url: "/file/post" });
});