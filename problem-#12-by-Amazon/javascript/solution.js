const climb_stairs_1 = function (stairs) {
    if (stairs === 1) return 1;
    if (stairs === 2) return 2;

    let prev = 1;
    let curr = 2;
    for (let i = 2; i < stairs; i++) {
        const sum = prev + curr;
        prev = curr;
        curr = sum;
    }
    return curr;
}

const climb_stairs_2 = function (stairs, nums) {
    const dp = Array(stairs + 1).fill(0);

    for (let i = 1; i <= stairs; i++) {
        // get the total f(i - x) where x is every number in nums
        let total = 0;
        for (let j = 0; j < nums.length; j++) {
            const num = nums[j];

            // check in range
            if (i - num > 0) total += dp[i - num];
        }
        dp[i] += total;

        // if i is in nums, then increment
        if (nums.indexOf(i) !== -1) dp[i] += 1;
    }
    // get last number in dp
    return dp[dp.length - 1];
}


console.log(climb_stairs_2(4, [1, 3, 5]))
