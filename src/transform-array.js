module.exports = function transform(arr) {
    if(!Array.isArray(arr)){
        throw Error();
    }else{
        if(arr.length == 0){
            return arr
        } else {
            let out = [];
            for(let i = 0; i < arr.length; i++){
                if(arr[i] == '--discard-prev'){
                    out.pop();
                } else if(arr[i] == '--discard-next'){
                    i++;
                } else if(arr[i] == '--double-next'){
                    out.push(arr[i+1])
                } else if(arr[i] == '--double-prev'){
                    out.push(arr[i-1])
                } else{
                    out.push(arr[i])
                }
            }
            return out;
        }
    }
    
};

// console.log(transform(3))