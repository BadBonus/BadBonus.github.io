$(document).ready(function() {
$('a.btn[data-filter="all"').bind('click', function()
		{
			$('div.prvka').css("display", "inline-block");
		});

		 $('a.btn[data-filter="cwb"').bind('click', function()
		{
			$('div.prvka[data-filter!="cwv"]').css("display", "none");
			$('div.prvka[data-filter="cwv"]').css("display", "inline-block");
		});

		  $('a.btn[data-filter="pob"').bind('click', function()
		{
			$('div.prvka[data-filter!="pob"]').css("display", "none");
			$('div.prvka[data-filter="pob"]').css("display", "inline-block");
		});

		   $('a.btn[data-filter="fpb"').bind('click', function()
		{
			$('div.prvka[data-filter!="fpb"]').css("display", "none");
			$('div.prvka[data-filter="fpb"]').css("display", "inline-block");
		});

		    $('a.btn[data-filter="db"').bind('click', function()
		{
			$('div.prvka[data-filter!="db"]').css("display", "none");
			$('div.prvka[data-filter="db"]').css("display", "inline-block");
		});

		     $('a.btn[data-filter="mab"').bind('click', function()
		{
			$('div.prvka[data-filter!="mab"]').css("display", "none");
			$('div.prvka[data-filter="mab"]').css("display", "inline-block");
		});
});