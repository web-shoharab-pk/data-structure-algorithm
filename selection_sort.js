let numbers = [11, 71, 19, 23, 29, 31, -37, 13, 17, 41, -43, 47, 53, 15, 59];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

const sorted = selectionSort(numbers);
console.log(sorted)