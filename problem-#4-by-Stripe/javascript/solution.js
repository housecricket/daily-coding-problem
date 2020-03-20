

function randomDataSet(size, minValue, maxValue) {
    return new Array(size).fill(0).map(function () {
        return Math.floor(Math.random() * (maxValue - minValue) + minValue)
    });
}

const findFirstMissingPosA = arr =>
    [...Array(Math.max(...arr) + 1).keys()]
        .filter(int => !arr.includes(int + 1))[0] + 1



function findFirstMissingPosB(arr){
    const max = arr.reduce((acc, curr) => curr > acc ? curr : acc) + 1;
    for(let i = 1; i <= max; i++){
      if(!arr.includes(i)) return i;
    }
  }

var input = randomDataSet(10, -3, 20)
console.log("Input: " + input)

console.log(findFirstMissingPosA(input))
console.log(findFirstMissingPosB(input))


