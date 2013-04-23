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
	xmlDoc = loadXMLDoc("products.xml");
	alert("loaded xml");
	var x = xmlDoc.getElementByTagName("singleProduct");
	for(i=0; i<x.length; i++)
	{
		var description = x[i].childNodes[0].nodeValue;
		var type = x[i].childNodes[1].nodeValue;
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
		var company = x[i].parentNode.parentNode;
		var companyString = '<a href = ' + company.childNode[0] + '>' + company.childNode[1] + '</a>';
		$(companyString).appendTo('#' + typeByID);
	}
}