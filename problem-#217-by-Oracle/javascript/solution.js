const get_next_sparse = function (num) {

    str_bin = dec2bin(num)
    new_str_bin = ""
    prev_digit = null
    flag = false

    for (var i = 0; i < str_bin.length; i++) {
        var digit = str_bin[i]
        if ((digit == '1') && (prev_digit == '1')) {
            flag = true
        }

        if (flag) {
            let str_zeros = ""
            for (var j=0; j < str_bin.length - i;j++) {
                str_zeros += "0"
            }
            new_str_bin += str_zeros
            break
        } else {
            new_str_bin += digit
        }
        prev_digit = digit
    }

    if (flag) {
        if (new_str_bin[0] === '1') {
            new_str_bin = "10" + new_str_bin.substring(1, new_str_bin.length)
        }

        else {
            new_str_bin = "1" + new_str_bin
        }
    }

    new_num = parseInt(new_str_bin, 2)

    return new_num

}

const dec2bin = function (dec) {
    return (dec >>> 0).toString(2)
}

console.log(get_next_sparse(21))
console.log(get_next_sparse(25))
