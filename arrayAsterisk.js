function halfTriangle(height, direction) {
    if (height < 4) {
        return 'minimum height is 4'
    }
    var output2 = []
    for (var i = 0; i < height; i++) {
        var output = []
        for (var j = 0; j < height; j++) {
            if (direction == 'up') {
                if (j >= i) {
                    output[j] = j + 1 + ''
                } else {
                    output[j] = ' '
                }
            } else {
                if (j <= i) {
                    output[j] = j + 1 + ''
                } else {
                    output[j] = ' '
                }
            }
        }
        output2[output2.length] = output
    }
    return output2
}
