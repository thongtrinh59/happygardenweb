
exports.parseTime = function (timestring) {
    var arr_fromdate = timestring.split(" ");
    var datearr_from = arr_fromdate[0].split("/");
    var timearr_from = arr_fromdate[1].split(":");
    if(parseInt(timearr_from[0]) < 10) {
        hour_from = "0" + timearr_from[0]
    } else {
        hour_from = timearr_from[0]
    }

    var new_fromdate = new Date(datearr_from[2] + "-" + datearr_from[1] + "-" + datearr_from[0] 
                        + "T" + hour_from + ":" + timearr_from[1] + ":" + timearr_from[2] + "Z");


    return new_fromdate.toISOString();
}

exports.parseZero = function (number) {
    var numberstr = "";
    if (number < 10) {
        numberstr = "0" + number
    } else {
        numberstr = number
    }
    return numberstr
}


Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

exports.getDates = function (startDate, stopDate) {
    let dateArray = [];
    // console.log(dateArray.length);
    let currentDate = startDate;
    while (currentDate <= stopDate) {

        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    // console.log(typeof(dateArray));
    return dateArray;
}

// function getDaysInMonth(year, month) {
//     return new Date(year, month, 0).getDate();
//   }

exports.getDaysInMonth = function (year, month) {
    return new Date(year, month, 0).getDate();
}

