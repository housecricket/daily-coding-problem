function solution(list_of_numbers, target) {
    var cache = new Set()
    for (let i = 0; i < list_of_numbers.length; i++) {
        if (cache.has(target - list_of_numbers[i])) {
            return true
        } 
        cache.add(list_of_numbers[i])
    }
    return false
}

var test_list = [10, 15, 3, 7]
var k = 17;

console.log(solution(test_list, k))