module.exports = function transform(arr) {
    // console.log(arr)
    if(!Array.isArray(arr)){
        throw Error();
    }
    if(arr.length == 0){
        return arr
    } else {
        let out = [];
        for(let i = 0; i < arr.length; i++){
            // console.log(i);

            if(arr[i] == '--discard-prev'){
                out.pop();
            } else if(arr[i] == '--discard-next'){
                i++;
            } else if(arr[i] == '--double-next'){
                if(i+1 >= arr.length){
                    continue;
                    throw new Error('out of range');
                }
                out.push(arr[i+1])
            } else if(arr[i] == '--double-prev'){
                if(i > 1){
                    out.push(arr[i-1])
                }
                
            } else{
                out.push(arr[i])
            }
        }
        // console.log(out);
        return out;
    }
    
};

// console.log(transform(3))