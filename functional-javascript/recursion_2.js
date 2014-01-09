
function getDependencies(tree) {
    var result = []

    function find(tree){
        if(tree.dependencies) {
            Object.keys(tree.dependencies).forEach(function(ele, id){
                if(tree.dependencies[ele].dependencies) {
                    find(tree.dependencies[ele])
                }

                result.push(ele+"@"+tree.dependencies[ele].version)
            })

        } 
    }

    find(tree)

    return result.reverse()
}

module.exports = getDependencies
