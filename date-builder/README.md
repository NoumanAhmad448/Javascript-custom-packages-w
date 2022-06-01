# getCustomDate(String format,Number days) => String 
 format is date format in year-month-date   
 days are number of days you want to increase/decrease 

### @description
- getCustomDate gives you next or previous date depending upon the
 number of days your want

### @examples 
- getCustomDate("year-month-date",2) returns date that comes after
two days in the format "year-month-date"

- getCustomDate("year-month-date",-2) returns date that comes before
two days in the format "year-month-date"

@return string  
@author Nouman Ahmad 



# getDay(String format) => String

 ### @description
 - getDay uses to get the day name in english format
 
 ### @examples
 -  getDay("2022-6-1")  returns Wednesday

@return string

# getCustomMonthDate(String format,Number month) => String
 format is date format in year-month-date
 month is number of month you want to add or remove. Adding negative number will lead you to previous month date

 ### @description
 - getCustomMonthDate gives you next or previous date depending
 upon the number of months you provide
 
 ### @examples
 - getCustomMonthDate("year-month-date",2) returns date that comes after
 two month in the format "year-month-date"

- getCustomMonthDate("year-month-date",-2) returns date that comes before
 two month in the format "year-month-date"

@return string
 
# weekStartDate(String format) => String
 weekStartDate gives you week start date of provided date
 week starts with monday

 ### @description
 - weekStartDate gives you week start date of provided date
   week starts with monday

### @examples
 - weekStartDate("2022-6-1") returns "2022-5-30

@return string
# weekEndDate(String format) => String
  weekEndDate uses to get the last day date starting week from monday

### @description
- weekEndDate uses to get the last day date starting week from monday

### @examples
- weekEndDate("2022-6-1") returns "2022-6-5

@return string
 