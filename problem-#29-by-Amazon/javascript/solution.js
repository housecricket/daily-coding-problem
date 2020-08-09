const encoding_string = function (string) {

    if (string.length === 0) return ''

    let currChar = string.charAt(0)
    let count = 1
    let encoding = ''

    for (let i = 1; i < string.length; i++) {
        const char = string.charAt(i)
        if (char === currChar) count++
        else {
            encoding += count + currChar

            // reset
            count = 1
            currChar = char
        }
    }

    encoding += count + currChar

    return encoding

}



const decoding_string = function (string) {
    if (string.length === 0) return '';
    let currCount = 0;
    let i = 0;
    let decoding = '';

    while (i < string.length) {
        const char = string.charAt(i);
        if (isNumber(char)) {
            const num = Number(char);
            currCount = currCount * 10 + num;
        } else {
            decoding = addCountAmount(decoding, char, currCount);
            currCount = 0;
        }

        i++;
    }

    return decoding;
}

function isNumber(str) {
    return /^\d+$/.test(str);
}

const addCountAmount = function (string, char, count) {
    for (let i = 1; i <= count; i++) {
        string += char;
    }

    return string;
}


console.log(encoding_string("AAAABBBCCDAA"))
console.log(decoding_string("4A3B2C1D2A"))
