let numbers = [1, 7, 11, 19, 23, 2, 29, 31, 37, 13, 17, 41, 43, 47, 53, 3, 5, 59, 0, 0];

function bubbleSortAscending(array) {
    for (let i = 0; i < array.length; i++) {
        // const element = array[i];
        for (let j = 0; j < array.length; j++) {
            // const element = array[j];
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }      
    }
    return array;
}

function bubbleSortDescending(array) {
    for (let i = 0; i < array.length; i++) {
        // const element = array[i];
        for (let j = 0; j < array.length; j++) {
            // const element = array[j];
            if (array[j] < array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }      
    }
    return array;
}

const check1 = bubbleSortAscending(numbers);
const check2 = bubbleSortDescending(numbers)
console.log(check1, check2)