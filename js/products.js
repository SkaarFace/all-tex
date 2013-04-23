$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "productList.xml",
		dataType: "xml",
		success: xmlParser
	});

});

function xmlParser(xml){
	$(xml).find('singleProduct').each(function(){
		var description = $(this).find('description').text();
		var type = $(this).find('type').text();
		var descriptionByID = description.replace(/\s/g, '');
		var typeByID = type.replace(/\s/g, '');
		if($('#' + descriptionByID).length === 0)
		{
			var descriptionElement = '<li><div class = "productCategory" id =' 
				+ descriptionByID + '>' + '<p>' 
				+ description + '</p>' + '</div></li>';
			$(descriptionElement).appendTo('#productList > ul');
		}
		if($('#' + typeByID).length === 0)
		{
			var typeElement = '<div class = "productType" id =' + typeByID + '>' 
				+ '<p>' + type + '</p>' + '</div>';
			$(typeElement).appendTo('#' + descriptionByID);
		}
		var companyString = '<a href = ' + $(this).parent().parent().find('link').text() + '>' 
			+ $(this).parent().parent().find('name').text() + '</a>';
		$(companyString).appendTo('#' + typeByID);
		});
}


