def solution(message): 
    return decode_cnt_no_zero(list(message))

def decode_cnt_no_zero(msg_list):
    if len(msg_list) <= 1:
        return 1

    if len(msg_list) >= 2:
        if 1 <= int(''.join(msg_list[0:2])) <= 26:
            return  (decode_cnt_no_zero(msg_list[1:]) +
                        decode_cnt_no_zero(msg_list[2:]))
        return decode_cnt_no_zero(msg_list[1:])

def main():
    msg = '111'
    print(solution(msg))

if __name__ == '__main__':
    main()