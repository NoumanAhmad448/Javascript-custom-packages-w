 /****************************************************************
     * 
     * getCustomDayDate("year-month-date",2) returns date that comes after
     * two days in the format "year-month-date"
     * 
     * getCustomDayDate("year-month-date",-2) returns date that comes before
     * two days in the format "year-month-date"
     * 
     * return value is a string not date object
     * 
     ***************************************************************/

  const getCustomDayDate = (givenDateFormat, day) => {
        
    if(typeof givenDateFormat !== "string") throw new Error("Date Format first param must be a string format")
    if (typeof day !== "number") throw new Error("second parameter of the function must be number")

    givenDateFormat = givenDateFormat.trim()
    let givenDate = new Date(givenDateFormat)
    let nextDate = new Date(givenDate.setDate(givenDate.getDate()+day))
    nextDate = nextDate.toLocaleDateString()
    let [month,date,year] =  nextDate.split("/")
    return `${year}-${month}-${date}`

}

/****************************************************************
 * 
 * getCustomMonthDate("year-month-date",2) returns date that comes after
 * two month in the format "year-month-date"
 * 
 * getCustomMonthDate("year-month-date",-2) returns date that comes before
 * two month in the format "year-month-date"
 * 
 * return value is a string not date object
 * 
 ***************************************************************/
const getCustomMonthDate = (givenDateFormat, numberOfMonths) => {
    
    if(typeof givenDateFormat !== "string") throw new Error("Date Format must be a string format")
    if (typeof numberOfMonths !== "number") throw new Error("second parameter of the function must be number")

    givenDateFormat = givenDateFormat.trim()
    let givenDate = new Date(givenDateFormat)
    let nextDate = new Date(givenDate.setMonth(givenDate.getMonth()+numberOfMonths))
    nextDate = nextDate.toLocaleDateString()
    let [month,date,year] =  nextDate.split("/")
    return `${year}-${month}-${date}`

}


/****************************************************************
 * 
 * 
 * isDateGreaterThanGivenFormat(year-month-day, 2) compare given date 
 * and current date with given format. 2 represents number while third
 * param is option which refers to m i.e. month. Following checked if 
 * given date is greater or equal to the calculated date or not
 * 
 * isDateGreaterThanGivenFormat(year-month-day, 2,'d') compare given date 
 * and curent date with given format and check if given date is greater 
 * or equal to the calculated date or not
 * 
 ***************************************************************/

 const isDateGreaterThanGivenFormat = (date, number, format = 'm') => {
    if(typeof date !== "string") throw new Error("Date Format must be a string format")
    if(typeof number !== "number") throw new Error("Second param must be number")
    if(typeof format !== "string") throw new Error("Thrid param must be string")

    if(format !== 'm' && format !== 'd'){
        throw new Error("third param is out of the scope. it must be either m or d")
    }

    let calDate;

    switch(format){
        case('m'):
            calDate = getCustomMonthDate(new Date().toLocaleDateString(),number)
        break;
        default:
            calDate = getCustomDayDate(new Date().toLocaleDateString(),number)
        break;
    }
    
    console.log(calDate);

    if(new Date(date).toLocaleDateString() >= new Date(calDate).toLocaleDateString()){
        return true
    }
    return false
 }