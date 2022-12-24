
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

