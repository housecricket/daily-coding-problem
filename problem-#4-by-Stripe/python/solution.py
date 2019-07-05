def solution(list_nums):

    if len(list_nums) == 0:
        return 1

    for i in range(len(list_nums)):
        j = list_nums[i]
        # we don't care
        if j < 0:
            continue
        if j >= len(list_nums):
            continue
        if j == list_nums[j-1]:
            continue
        # put each integer on it's place
		# decrease i, because list_nums[i] is a new integer now and we need to
		# process it one more time
        temp = list_nums[i]
        list_nums[i] = list_nums[j-1]
        list_nums[j-1] = temp
        i = i - 1

    # find first missing
    for i in list_nums:
        if list_nums[i] != i+1:
            return i+1
    
    # all there
    return len(list_nums)+1

def main():
    test_list = [3, 4, -1, 1]
    print(solution(test_list))


if __name__ == '__main__':
    main()
