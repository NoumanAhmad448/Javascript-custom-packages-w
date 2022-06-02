const numberInWords = function(number){
    number = number.toString()
    if(parseInt(number)>20) return false
    let digitIntoWords = {
        "0" : "zero", "1" : "one", "2": "two", "3" : "three", "4": "four", "5" : "five", "6": "six",
        "7": "seven", "8": "eight", "9": "nine", "10": "ten", "11": "eleven", "12": "tweleve", "13": "thirteen",
        "14": "fourteen", "15": "fifteen", "16": "sixteen", "17": "seventeen", "18": "eighteen", "19": "ninteen", 
        "20": "twenty"
    }
    return digitIntoWords[number]
}

function convertDigitToWords(digit){
    return {"2": "twenty", "3": "thirty", "4": "forty", "5" : "fifty", "6": "sixty", "7": "seventy","8": "eighty", "9": "ninety"}[digit]
}

/****************************************************************
 *
 * @description
 * currencyInWords gives currency in words
 * 
 * @signature
 * currencyInWords(number String|Number) returns String|false
 * false for those cases where things are either unable to handle or wrong input is provided
 * 
 * @examples
 * currencyInWords("2000") returns two thousand
 * currencyInWords(2000) returns two thousand *
 *
 * @return String|false
 ***************************************************************/

const currencyInWords = (number, debug=false) => {
    if(['string','number'].indexOf(typeof number) === -1) throw new Error("number must be in string|number")
    try{
        number = parseInt(number.toString().trim())
    }catch(err){
        console.log("provided number must include digits only😜")
        return false
    }
    number = number.toString()
    if(number === "") return false;

    if(number.length > 13){
        if(debug) console.log("come down, please")
        return false
    }

    switch (number.length) {
        case 1:
            return numberInWords(number)
            break;
        case 2:
            if(parseInt(number) <= 20){
                return numberInWords(number)
            }else{
                return ((convertDigitToWords(number[0])) + " " +(number[1] !== "0" ? (numberInWords(number[1])) : '')).trim()
            }
            break;
        case 3:
            let lastTwoDig = parseInt(number.slice(1))            
            return `${numberInWords(number[0])} hundred ${lastTwoDig < 21  ? (lastTwoDig !== 0 ? "and "+ numberInWords(lastTwoDig.toString()) : '') : 
                    "and "+convertDigitToWords(number[1]) + ' ' + (number[2] === "0" ? "" : numberInWords(number[2]))}`.trim()
            break;    
        default:
            break;
    }
}