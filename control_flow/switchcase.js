const month = 3

switch(month){
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;

    default:
        console.log("this is by default ")
        break;
}

// this break keyword is important because if it will not be
// there then it will match the case statement and if statement
// got matched then it will all other cases without even matching except default and default is executed if no any case is matched


const newmonth = "april"

switch(newmonth){
    case "jan":
        console.log("january")
        break;
    case "feb":
        console.log("february")
        break;
    case "march":
        console.log("march")
        break;
    case "april":
        console.log("april")
        break;

    default:
        console.log("this is by default ")
        break;
}
