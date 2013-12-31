
module.exports = function getShortMessages(messages) {
    return messages.filter(function(element){
        return element.message.length < 50
    }).map(function(ele){
        return ele.message
    })
}
