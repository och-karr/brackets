module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let otherBrackets = [];
    let sameBrackets = [];
    bracketsConfig.map(pair => {
        if(pair[0] !== pair[1]){
            otherBrackets.push(pair[0]);
        } else {
            sameBrackets.push(pair[0]);
        }
    })

    for (let i = 0; i < str.length; i++) {
        if (otherBrackets.includes(str[i]) || sameBrackets.includes(str[i])) {
            if (!sameBrackets.includes(str[i])) {
                stack.push(str[i]);
            } else {
                if (stack[stack.length - 1] !== str[i]) {
                    stack.push(str[i]);
                } else {
                    stack.pop();
                }
            }
        }

        else {
            for (let j = 0; j < bracketsConfig.length; j++) {
                let pair = bracketsConfig[j];
                if (pair[0] === stack[stack.length - 1]) {
                    if (pair[1] === str[i]) {
                        stack.pop();
                        break;
                    } else {
                        return false;
                    }
                }
            }
        }
    };


    if (stack.length !== 0) {return false; };
    return true;
}
