module.exports = function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
        return  submittedUsers.every(function(ele){
            return goodUsers.some(function(src){
                return src.id === ele.id
            })
        })
    };
}

