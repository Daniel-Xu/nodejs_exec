function repeat(operation, num) {
    if(num !== 1)
        repeat(operation, --num)
    operation()
}

module.exports = repeat
