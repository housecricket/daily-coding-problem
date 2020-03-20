const delta = {
    "N": [0, 1], 
    "NE": [1, 1], 
    "E": [1, 0],
    "SE": [1, -1], 
    "S": [0, -1], 
    "SW": [-1, -1],
    "W": [-1, 0], 
    "NW": [-1, 1]
}

const isValid = function(rules) {

    var retval = true
    // point_name = [x_coord, y_coord]
    var points = {}

    // go through all rules
    for (let index = 0; index < rules.length; index++) {
        
        const rule = rules[index]

        let ruleAnalyzer = rule.split(" ")

        // destination "d", location "loc", source "s" from current rule
        let d = ruleAnalyzer[0]
        let loc = ruleAnalyzer[1]
        let s = ruleAnalyzer[2]   

        // new souces
        if (!Object.keys(points).includes(s)) {
            points[s] = [0, 0]
        } 

        // get coords of source
        let x_s = points[s][0]
        let y_s = points[s][0]

        // locate the distance of destination from source by direction
        let delta_x = delta[loc][0]
        let delta_y = delta[loc][1]

        // calculate destination coords from rule
        x_d = x_s + delta_x 
        y_d = y_s + delta_y

        // check valid

        // new destination
        if (!Object.keys(points).includes(d)) {
            points[d] = [x_d, y_d]
            continue
        } 

        // this destination appeared before 

        // get destination coords calculated from previous rules
        let real_x_d = points[d][0]
        let real_y_d = points[d][1] 

        // coords from previous rule are different from calculation of current rule 
        if ((real_x_d !== x_d) && (real_y_d !== y_d)) {
            retval = false
        }

        // console.log(rule)
        // console.log(ruleAnalyzer) 
        // console.log(points)
        // console.log(x_s, y_s)
        // console.log(delta_x, delta_y)
    }

    return retval
}

console.log(isValid(["A N B", "B NE C", "C N A"]))
console.log(isValid(["A NW B", "A N B"]))

