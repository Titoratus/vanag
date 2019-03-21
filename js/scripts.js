$(document).ready(function() {

	var tests = [
		[3, 1, 4, 1, 3],
		[2, 1, 1, 2, 4],
		[1, 3, 3, 4],
		[2, 2, 2, 2]
	];

	$(".test form").on("submit", function(e) {
		e.preventDefault();
		var id = $(this).attr("data-id");
		var right = 0;

		$(this).children("input:checked").each(function(index) {
			if ($(this).attr("value") == tests[id-1][index])
				right++;
		});

		var total = right;
		right = right/tests[id-1].length*100;

		if (right >= 80) right = 5;
		else if (right >= 65) right = 4;
		else if (right >= 50) right = 3;
		else right = 2;

		$(".test").addClass("test-result");
		$(".test").html("<h1>Ваша оценка: "+right+"</h1><p class='total'>Верно "+total+" из "+tests[id-1].length+"</p><a class='btn' href='../'>На главную</a>")
	});
});