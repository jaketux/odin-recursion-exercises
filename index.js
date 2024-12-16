
function fibRecursive(number, array = [0,1,1]){
    
    if (array.length === number){
        console.log(array)
        return array
    } else if (number <= 0) {
        console.log([]);
        return [];
    } else if (number === 1) {
        console.log([0]);
        return [0];
    }
    if (number === 2) {
        console.log([0, 1]);
        return [0, 1];
    } else {
        let lastNumber = array[array.length-1]
        let previousNumber = array[array.length-2]
        let nextNumber = lastNumber + previousNumber
        array.push(nextNumber)

    }

    fibRecursive(number,array)

} 

console.log("This is Fibonacci working recursively:")

fibRecursive(16)

function mergeSort(array){

    if (array.length <= 1){
        return array}

    let halfwayPoint = Math.floor(array.length / 2)
    let firstHalfArray = array.slice(0, halfwayPoint)
    let secondHalfArray = array.slice(halfwayPoint)

    let sortedFirstHalf = mergeSort(firstHalfArray)
    let sortedSecondHalf = mergeSort(secondHalfArray)
        
    return mergeArray(sortedFirstHalf,sortedSecondHalf)

    }

    function mergeArray(firstHalfArray,secondHalfArray){

        let i = 0
        let j = 0
    
        let finalArray = []
    
        while ((i < firstHalfArray.length) && (j<secondHalfArray.length)){
    
        if (firstHalfArray[i]<secondHalfArray[j]){
            finalArray.push(firstHalfArray[i]);
            i++
        }
        else {
            finalArray.push(secondHalfArray[j])
            j++
        }
    }
        while (i < firstHalfArray.length) {
            finalArray.push(firstHalfArray[i]);
            i++;
        }

        while (j < secondHalfArray.length) {
            finalArray.push(secondHalfArray[j]);
            j++;
        }
        
        return finalArray
    
    }



    let unsortedArray = [2222, 986, 241124, 233, 459, 182, 110];
    let sortedArray = mergeSort(unsortedArray);
    console.log("This is my unsorted array: "+unsortedArray)
    console.log("This is MergeSort working recursively:" + " "+sortedArray);
    


