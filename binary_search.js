let numbers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
 
const target = -47;


const binarySearch = (numbers, target) => {
    let startIndex = 0;
    let lastIndex = numbers.length -1;
    
    while (startIndex <= lastIndex) {
        let midIndex = Math.floor((startIndex + lastIndex )/2)
    
        if (numbers[midIndex] === target) {
            console.log("your target number position is", midIndex);
            return midIndex;
        }
        if (numbers[midIndex] < target) {
             startIndex = midIndex + 1;
        }
        if (numbers[midIndex] > target) {
            lastIndex = midIndex - 1;
       } 
    
    }
    return console.log("your target number is not found");
}

 const index = binarySearch(numbers, target);
 if (index) {
     console.log(index)
 }
 