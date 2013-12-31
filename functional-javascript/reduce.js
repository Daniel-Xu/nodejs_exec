//this is my code
//function countWords(inputWords) {
    //var result = {}
    //return inputWords.reduce(function(pre, cur){
        //if(result[cur] !== undefined) 
            //result[cur] += 1
        //else
            //result[cur] = 1

        //return result
    //}, {})
//}

//after refactoring

function countWords(inputWords) {
    return inputWords.reduce(function(result, cur){
        result[cur] = ++result[cur] || 1
        return result
    }, {})
}

module.exports = countWords
