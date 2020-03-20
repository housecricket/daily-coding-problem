function isDecodable(message) {
    for (let i = 0; i < message.length; i++) {

        var parsed = parseInt(message[i], 10)

        if (isNaN(parsed)) {
            return false
        }

        if ((parsed > 0 && parsed < 27) != true) {
            return false
        }
    }
    return true
}

function decode_cnt_no_zero(message) {

    let length = message.length

    if (length <=1) {
        return 1
    }

    if (length >=2) {

        var parsed = parseInt(message.substring(0,2),10)

        if (parsed >=0 && parsed <= 26) {
            return (decode_cnt_no_zero(message.substring(1,length)) 
            + decode_cnt_no_zero(message.substring(2, length)))
        }
        return decode_cnt_no_zero(message.substring(1, length))

    }
}


console.log(decode_cnt_no_zero("1"))
console.log(decode_cnt_no_zero("12"))
console.log(decode_cnt_no_zero("123"))
console.log(decode_cnt_no_zero("4123"))