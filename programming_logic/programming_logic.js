const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
let temp_array = [];
let result = [];
let my_logic = (arr) => {
    new_array = arr.sort((a, b) => a - b);
    console.log(new_array)
    for (let i = 0; i < new_array.length + 1; i++) {
        if ((i === 0) || (new_array[i] === new_array[i - 1] )) {
            temp_array.push(new_array[i]);
        } else {
            result.push(temp_array);
            temp_array = [];
            temp_array.push(new_array[i]);
        }
    }
    return result
}

console.log(my_logic(array))

