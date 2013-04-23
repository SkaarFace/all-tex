$(document).ready(function(){
	alert("running");
	$.ajax({
		type: "GET",
		url: "productList.xml",
		dataType: "xml",
		success: xmlParser
	});

});

function xmlParser(xml){
	$(xml).find("company").each(function()
	{
		$(xml).find('singleProduct').each(function(){
			alert($(this.parent()));
			var description = $(this).find('description').text();
			var type = $(this).find('type').text();
			var descriptionByID = description.replace(/\s/g, '');
			var typeByID = type.replace(/\s/g, '');
			if($('#' + descriptionByID).length === 0)
			{
				var descriptionElement = '<div id =' + descriptionByID + '>' + '<p>' + description + '</p>' + '</div>';
				$(descriptionElement).appendTo('#productList');
			}
			if($('#' + typeByID).length === 0)
			{
				var typeElement = '<div id =' + typeByID + '>' + '<p>' + type + '</p>' + '</div>';
				$(typeElement).appendTo('#' + descriptionByID);
			}
			var companyString = '<a href = ' + $(this).parent().find('link').text() + '>' + $(this).parent().find('name') + '</a>';
			$(companyString).appendTo('#' + typeByID);
			});
	});
}

