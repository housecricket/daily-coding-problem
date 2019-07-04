def solution(list_nums):

    # Without using division, you have to create a (k,v) dictionary to store the index
    # and the multiplication result to the left of each num we see in first scan.
    # Then create the new list by go from right to left in second run. At the same
    # time, the multiplication to the right need to be stored.

    mul_left = dict()
    mul_right = dict()

    # use None to init
    retval = [None] * len(list_nums)

    mul_left[-1] = 1
    for i in range(len(list_nums)-1):
        mul_left[i] = list_nums[i] * mul_left[i-1]

    mul_right[len(list_nums)] = 1
    for j in reversed(range(len(list_nums))[1:]):
        mul_right[j] = list_nums[j] * mul_right[j+1]
    
    for k in range(len(list_nums)):
        retval[k] = mul_left[k-1] * mul_right[k+1]

    return retval

def main():
    test_list = [1, 2, 3, 4, 5]
    print(solution(test_list))


if __name__ == '__main__':
    main()