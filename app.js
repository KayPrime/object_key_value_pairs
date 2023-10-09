const array1 = [1,2,2,3,3,4,4,5,5,5];

function objectKeyValuePairs(arrayin){
    if (Array.isArray(arrayin)) {
        let obj1 = new Object;
        arrayin.forEach(
            item => {
                if (obj1[item]) {
                    obj1[item]++;
                }
                else {
                    obj1[item] = 1;
                }
            }
        )
        return obj1;
    }
    else {
        return "input is not an Array";
    }
}

console.log(objectKeyValuePairs(array1))
