function getDependencies(tree) {
    var result = []

    function find(tree){
        if(tree.dependencies) {
            Object.keys(tree.dependencies).forEach(function(ele, id){
                if(tree.dependencies[ele].dependencies) {
                    find(tree.dependencies[ele])
                }

                var s = ele+"@"+tree.dependencies[ele].version
                if(result.indexOf(s) === -1) {
                    result.push(s)
                }
            })

        } 
    }

    find(tree)

    return result.sort()
}



//console.log(getDependencies(data).length)
//console.log('=====================')
//console.log(getDependencies2(data).length)

module.exports = getDependencies
