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

const countUpToTwoDigits = (number) => {
    if(parseInt(number) <= 20){
        return numberInWords(number)
    }else{
        return ((convertDigitToWords(number[0])) + " " +(number[1] !== "0" ? (numberInWords(number[1])) : ''))
    }
}
const countUpToHunderds = (number) => {
    let lastTwoDig = parseInt(number.slice(1))            
    return `${numberInWords(number[0])} hundred ${lastTwoDig !== 0 ? 
                    "and "+ countUpToTwoDigits(lastTwoDig.toString()) : ''}`
}

/****************************************************************
 *
 * @description
 * currencyInWords gives currency in words upto 9999
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

    let currencyInWords = ""
    switch (number.length) {
        case 1:
            currencyInWords = numberInWords(number)
            break;
        case 2:
            currencyInWords = countUpToTwoDigits(number)
            break;
        case 3:
            currencyInWords = countUpToHunderds(number)
            break;    
        case 4:
            let lastThreeDig = parseInt(number.slice(1)) 
            
            let twoDigits = parseInt(number.slice(1,3))
            let finalNum = function(twoDigits,lastThreeDig){
                if(twoDigits === 0){
                    if(lastThreeDig === 0) return ''
                    return "and "+ numberInWords(lastThreeDig.toString())
                }else if(lastThreeDig.toString().length == 2){
                    return "and " + countUpToTwoDigits(lastThreeDig.toString())
                }else{
                    return "and " + countUpToHunderds(lastThreeDig.toString())
                }
            }

            finalNum = finalNum(twoDigits,lastThreeDig)
            currencyInWords = `${numberInWords(number[0])} thousand ` + finalNum                        
            break;    
        default:
            return false
            break;
    }
    return currencyInWords.trim()
}