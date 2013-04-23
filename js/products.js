$(document).ready(function(){
	alert("running");
	var xmlDoc = loadXMLDoc("productList.xml");
	var x = xmlDoc.getElementsByTagName("singleProduct");
	alert(x[0].childNodes[0].nodeName);
	for(i=0; i<x.length; i++)
	{
		var description = x[i].childNodes[0].nodeValue;
		var type = x[i].childNodes[1].nodeValue;
		alert(description + " " + type);
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

});


