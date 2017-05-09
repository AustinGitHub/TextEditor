function compile(){

	var input = document.getElementById('form').value;
	var search1 = input.includes("<b>");
	var search2 = input.includes("<i>");

	// Font sizes
	var search3 = input.includes("<h1>");
	var search4 = input.includes("<h2>");
	var search5 = input.includes("<h3>");
	var search6 = input.includes("<h4>");
	var search7 = input.includes("<h5>");
	var search8 = input.includes("<h6>");
	// Tables
	var search9 = input.includes("<table>");
	var search10 = input.includes("<td>");
	var search11 = input.includes("<tr>");
	var search12 = input.includes("<th>");
	var search13 = input.includes("<br />");
	var search14 = input.includes("<hr>");
	var search15 = input.includes("<ui>");
	var search16 = input.includes("<li>");
	var search17 = input.includes("<body>");
	var search18 = input.includes("<html>");
	var search19 = input.includes("<p>");
	var search20 = input.includes("<style>");
	var search21 = input.includes("<script>");
	var search22 = input.includes("<marquee>");
	var search23 = input.includes("<textarea>");
	var search24 = input.includes("<form>");
	var search25 = input.includes("<button>");
	var search26 = input.includes("<u>");
	var search27 = input.includes("border=1");
	var search28 = input.includes("<font color=''>");

	




	if(input == input){
		document.getElementById('paste').innerHTML = input;
	}

	if(search1 == "<b>"){
		document.getElementById('paste').innerHTML =  input + "</b>";
	} else {
		return false;
	}


	if(search27 == "<font color=''>"){
		document.getElementById('paste').innerHTML = input + "</font>";
	} else {
		return false;
	}


	if(search21 == "<script>"){
		document.getElementById('paste').innerHTML = input;
	} else {
		return false;
	}


	if(search2 == "<i>"){
		document.getElementById('paste').innerHTML =  input + "</i>";
	} else {
		return false;
	}
	
	if(search10 == "<td>"){
		document.getElementById('paste').innerHTML =  input + "</td>";
	} else {
		return false;
	}	

	if(search22 == "<marquee>"){
		document.getElementById('paste').innerHTML =  input + "</marquee>";
	}	else {
		return false;
	}

	if(search9 == "<table>"){
		document.getElementById('paste').innerHTML =  input + "</table>";
	} else {
		return false;
	}	

	if(search27 == "border=1"){
			document.getElementById('paste').innerHTML =  input + "</table>";
		} else {
			return false;
		}


	if(search3 == "<h1>"){
		document.getElementById('paste').innerHTML =  input + "</h1>";
	}	else {
		return false;
	}


if(search11 == "<tr>"){
		document.getElementById('paste').innerHTML =  input + "</tr>";
	} else {
		return false;
	}



}

function colorcode(){
	if(input == "<a"){
		input.style.color = 'purple';
	}
}




