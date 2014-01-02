module.exports = function Spy(target, method){
    
    var srcFun = target[method]
    var result = {
        count: 0 
    }


    target[method] = function(){
        //add new functionality
        ++result.count
        //keep the original functionality
        return srcFun.apply(target, arguments)
    }
    return result
}
