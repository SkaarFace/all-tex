
$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "brandList.xml",
		dataType: "xml",
		success: xmlParser

	});

});

function xmlParser(xml){
	$(xml).find("brand").each(function(){
		//alert("<a href = " + "some stuff" + "><img src = " + "some stuff" + " alt = " + "some stuff" + "></img></a> ");
		var element = "<a href = \'" + $(this).find('link').text() + "\'><img src = \'" 
		+ $(this).find('source').text() + "\' alt = \'" 
		+ $(this).find('name').text() + "\' /></a> ";
		$("#brandList").append(element);
});
}