const selectRandomizer = function () {
    let streamCount = 0
    let selected

    const rand = function (stream) {
        for (let i = 0; i < stream.length; i++) {
            streamCount++
            if (streamCount === 0) selected = stream[i]
            else if (Math.random() <= 1 / streamCount) {
                selected = stream[i]
            }
        }
        return selected
    }

    return rand
}
