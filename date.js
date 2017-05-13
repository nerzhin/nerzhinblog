let newDate = new Date();
let day = newDate.getDay();
let formattedDay, formattedMonth;
let month = newDate.getMonth()+1;
let hours = newDate.getHours();
let minutes = newDate.getMinutes();
let seconds = newDate.getSeconds();
switch(day) {
	case 1:
		formattedDay = "Mon";
		break;
	case 2:
		formattedDay = "Tue";
		break;
	case 3:
		formattedDay = "Wed";
		break;
	case 4:
		formattedDay = "Thu";
		break;
	case 5:
		formattedDay = "Fri";
		break;
	case 6:
		formattedDay = "Sat";
		break;
	case 0:
		formattedDay = "Sun";
		break;
					};
switch(month) {
	case 1:
		formattedMonth = "Jan";
		break;
	case 2:
		formattedMonth = "Feb";
		break;
	case 3:
		formattedMonth = "Mar";
		break;
	case 4:
		formattedMonth = "Apr";
		break;
	case 5:
		formattedMonth = "May";
		break;
	case 6:
		formattedMonth = "June";
		break;
	case 7:
		formattedMonth = "July";
		break;
	case 8:
		formattedMonth = "Aug";
		break;
	case 9:
		formattedMonth = "Sept";
		break;
	case 10:
		formattedMonth = "Oct";
		break;
	case 11:
		formattedMonth = "Nov";
		break;
	case 12:
		formattedMonth = "Dec";
		break;
						};
let formattedDate = formattedDay + ' ' + formattedMonth + ' ' + newDate.getDate() + ' ' + newDate.getFullYear() + ' ' + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds() + ' ' + newDate.toString().match(/([A-Z]+[\+-][0-9]+)/)[1];
const timestamp = document.getElementById('timestamp').getElementsByTagName('span')[0].textContent = formattedDate;