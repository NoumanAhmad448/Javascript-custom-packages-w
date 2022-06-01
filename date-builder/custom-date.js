 /****************************************************************
     * 
     * @description
     * getCustomDate gives you next or previous date depending upon the
     * number of days your want
     * 
     * @examples 
     * getCustomDate("year-month-date",2) returns date that comes after
     * two days in the format "year-month-date"
     * 
     * getCustomDate("year-month-date",-2) returns date that comes before
     * two days in the format "year-month-date"
     * 
     * @return string
     * @author Nouman Ahmad 
     * 
     ***************************************************************/

  const getCustomDate = (givenDateFormat, day) => {
        
    if(typeof givenDateFormat !== "string") throw new Error("getCustomDate: first param must be a string format")
    if (typeof day !== "number") throw new Error("getCustomDate: second parameter of the function must be number")

    givenDateFormat = givenDateFormat.trim()
    let givenDate = new Date(givenDateFormat)
    let nextDate = new Date(givenDate.setDate(givenDate.getDate()+day))
    nextDate = nextDate.toLocaleDateString()
    let [month,date,year] =  nextDate.split("/")
    return `${year}-${month}-${date}`

}

/****************************************************************
 * 
 * @description 
 * getCustomMonthDate gives you next or previous date depending 
 * upon the number of months you provide 
 * 
 * @examples
 * getCustomMonthDate("year-month-date",2) returns date that comes after
 * two month in the format "year-month-date"
 * 
 * getCustomMonthDate("year-month-date",-2) returns date that comes before
 * two month in the format "year-month-date"
 * 
 * @return string
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
 * @description
 * isDateGreaterThanGivenFormat checks if the given date is greater or equal 
 * to the date = today + number of days/months you provide
 * 
 * @examples 
 * isDateGreaterThanGivenFormat(year-month-day, 2) compare given date 
 * and current date with given format. 2 represents number while third
 * param is option which refers to m i.e. month. Following checked if 
 * given date is greater or equal to the calculated date or not
 * 
 * isDateGreaterThanGivenFormat(year-month-day, 2,'d') compare given date 
 * and curent date with given format and check if given date is greater 
 * or equal to the calculated date or not
 * 
 * 
 * @return Boolean
 ***************************************************************/

 const isDateGreaterThanGivenFormat = (date, number, format = 'm', debug=false) => {
    if(typeof date !== "string") throw new Error("isDateGreaterThanGivenFormat: must be a string format")
    if(typeof number !== "number") throw new Error("isDateGreaterThanGivenFormat: Second param must be number")
    if(typeof format !== "string") throw new Error("isDateGreaterThanGivenFormat: Thrid param must be string")

    if(format !== 'm' && format !== 'd'){
        throw new Error("third param is out of the scope. it must be either m or d")
    }

    if(debug){
        console.log(`given date is: ${date}`)
    }
    let calDate;

    switch(format){
        case('m'):
            calDate = getCustomMonthDate(new Date().toLocaleDateString(),number)
        break;
        default:
            calDate = getCustomDate(new Date().toLocaleDateString(),number)
        break;
    }
    
    if(debug){
        console.log(`next/previous is: ${calDate}`)
    }
    if(new Date(new Date(date).toLocaleDateString()).getTime() >= new Date(new Date(calDate).toLocaleDateString()).getTime()){
        return true
    }else{
        return false
    }
 }



 /****************************************************************
 * 
 * @description
 * getMonth gives you month of the given date in required format
 * 
 * @examples 
 * getMonth("year-month-day", format) 
 * format can be either 'E' or 'N' default is 'N'
 * N stands for number and E stands for English name
 *  
 * 
 * @return Number/String
 ***************************************************************/

  const getMonth = (givenDate,format='N',debug=false) => {
    let allowedFormats = ['N','E']
    let monthName = {
                        0: "January", 1: "February", 2: "March", 3: "April" , 4: "May", 5: "June", 6: "July", 7: "August",
                        8: "September", 9: "October", 10: "November", 11: "December"
                    }

    if(typeof givenDate !== 'string') throw new Error("getMonth: first param must be string")
    if(typeof format !== 'string') throw new Error("getMonth: second param must be string")
    if(debug){
        console.log(`allowed formats are : `)
        console.log(allowedFormats)
        console.log(`Given format is: ${format}`)
    }
    if(allowedFormats.indexOf(format) === -1) throw new Error("getMonth: second param must have N or E value")
    
    let month = new Date(givenDate).getMonth()
    if(format === "N"){
        return month + 1
    }else{
        return monthName[month]
    }
  }


/****************************************************************
 *
 * @description
 * getDay uses to get the day name in english format
 *
 * @examples
 * getDay("year-month-day")
 * 
 *
 * @return String
 ***************************************************************/
 const dayFinder = (dayInNumberFormat) => {
    return {0: 'Sunday', 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thrusday", 5: "Friday", 6: "Saturday" }[dayInNumberFormat]
 }
 const getDay = (givenDate) => {
      if(typeof givenDate !== 'string') throw new Error("givenDate: given date is not in string format")
      try{
          return dayFinder(new Date(givenDate).getDay())
      }catch(err){
          console.error(`getDay: ${err}`)
      }
  }

/****************************************************************
 *
 * @description
 * weekStartDate gives you week start date of provided date
 * week starts with monday
 *
 * @examples
 * weekStartDate("year-month-day")
 *
 *
 * @return String
 ***************************************************************/

 const weekStartDate = (givenDate,debug=false) => {
     if(typeof givenDate !== "string") throw new Error("given date is not in string format")
     let day = new Date(givenDate).getDay()
     if(day != 1){
         if(day === 0){
             return getCustomDate(givenDate,-6,debug)
         }
        return getCustomDate(givenDate,-(day-1),debug)
     }else{
         return givenDate
     }
 }
/****************************************************************
 *
 * @description
 * weekEndDate uses to get the last day date starting week from monday
 *
 * @examples
 * weekEndDate("year-month-day")
 *
 *
 * @return String
 ***************************************************************/
 const weekEndDate = (givenDate,debug=false) => {
    if(typeof givenDate !== "string") throw new Error("given date is not in string format")
    let day = new Date(givenDate).getDay()
    if(day != 0){
       return getCustomDate(givenDate,(7-day),debug)
    }else{
        return givenDate
    }
}
