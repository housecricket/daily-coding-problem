const minCostHouseColorInitialSolution = function (costs) {
    if (costs.length === 0) return 0;

    const n = costs.length;
    const k = costs[0].length;

    // 2d array with n length and k rows
    const dp = [...Array(n)].map(() => Array(k));

    // fill first row
    for (let col = 0; col < k; col++) {
        dp[0][col] = costs[0][col];
    }

    for (let row = 1; row < n; row++) {
        // Finding the lowest costs for each column in this row
        for (let col = 0; col < k; col++) {
            dp[row][col] = Number.MAX_SAFE_INTEGER;

            for (let numCol = 0; numCol < k; numCol++) {
                // we dont want the same column, as that is 2 houses of same color
                if (numCol !== col) {
                    dp[row][col] = Math.min(
                        dp[row][col],
                        dp[row - 1][numCol] + costs[row][col]
                    );
                }
            }
        }
    }

    let minCost = Number.MAX_SAFE_INTEGER;
    // get minimum of last row in dp table
    for (let col = 0; col < k; col++) {
        minCost = Math.min(minCost, dp[n - 1][col]);
    }

    return minCost;
}

const minCostHouseColorII = function (costs) {
    if (costs.length === 0) return 0;

    const n = costs.length;
    const k = costs[0].length;

    const dp1 = []; // the last row
    const dp2 = []; // the current row

    // start the first row of costs, as the last row, and build from the second row onwards
    for (let i = 0; i < k; i++) {
        dp1[i] = costs[0][i];
    }

    for (let row = 1; row < n; row++) {
        for (let j = 0; j < k; j++) {
            // Finding the lowest costs for each column in this row
            dp2[j] = Number.MAX_SAFE_INTEGER;

            for (let m = 0; m < k; m++) {
                if (m !== j) {
                    dp2[j] = Math.min(dp2[j], dp1[m] + costs[row][j]);
                }
            }
        }

        // copy all the current row to last row
        for (let j = 0; j < k; j++) {
            dp1[j] = dp2[j];
        }
    }

    let minCost = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < k; i++) {
        minCost = Math.min(minCost, dp1[i]);
    }
    return minCost;
}

const minCostHouseColorBest = function(costs) {
    if (costs.length === 0) return 0;
  
    const n = costs.length;
    const k = costs[0].length;
  
    let min1 = 0;
    let min2 = 0;
    let idx1 = -1;
  
    for (let i = 0; i < n; i++) {
      let m1 = Number.MAX_SAFE_INTEGER;
      let m2 = Number.MAX_SAFE_INTEGER;
      let idx2 = -1;
  
      for (let j = 0; j < k; j++) {
        let cost = costs[i][j];
        cost += j === idx1 ? min2 : min1;
  
        if (cost < m1) {
          m2 = m1;
          m1 = cost;
          idx2 = j;
        } else if (cost < m2) {
          m2 = cost;
        }
      }
  
      min1 = m1;
      min2 = m2;
      idx1 = idx2;
    }
  
    return min1;
  }