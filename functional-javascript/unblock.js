
function repeat(operation, num) {
  // modify this so it can be interrupted
    if (num <= 0) return

    if(num % 7 === 0) {
        setTimeout(function(){
            operation()
        }, 1)
    } else {
        repeat(operation, --num)
    }
}

module.exports = repeat

