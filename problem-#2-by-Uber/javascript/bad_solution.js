function solution(list_of_numbers) {
    var cache = new Array()
    for (let i = 0; i < list_of_numbers.length; i++) {
        var item = 1
        for (let j = 0; j <  list_of_numbers.length ; j++) {
            if (j != i) {
                item = item * list_of_numbers[j]
            } else {
            }
        }
        cache.push(item)
    }
    return cache
}

var test_list = [3,2,1]

console.log(solution(test_list))