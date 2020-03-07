module.exports = function repeater(str, options) {
    if(options['repeatTimes'] === undefined){
        options['repeatTimes'] = 1
    }
    if(options['additionRepeatTimes'] === undefined){
        options['additionRepeatTimes'] = 1
    }

    if(options['addition'] !== undefined){
        let str_add = '';
        if(options['additionRepeatTimes'] === undefined || options['additionRepeatTimes'] == 1){
            str_add = options['addition']
        }
        if(options['additionRepeatTimes'] > 1 && options['additionSeparator'] === undefined){
            options['additionSeparator'] = '+';
        }
        if(options['additionRepeatTimes'] > 1){
            let str_add_array = []
            for (let i = 0; i < options['additionRepeatTimes']; i++) {
                str_add_array.push(String(options['addition']))
            }
            str_add = str_add_array.join(options['additionSeparator'])
        }
        str += str_add
    }

    if(options['repeatTimes'] > 1 && options['separator'] === undefined){
        options['separator'] = '+';
    }
    let out = []
    for(let i =0; i<options['repeatTimes']; i++){
        out.push(String(str))
    }

    return out.join(options['separator'])
};