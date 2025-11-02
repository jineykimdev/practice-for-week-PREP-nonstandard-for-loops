function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let oddArray = [];
    for (let i = 1; i < arr.length; i += 2) {
        oddArray.push(arr[i]);
    }
    return oddArray;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let oddArrayReversed = [];
    for (let i = arr.length - 1; i > 0; i--) {
        if (i % 2 === 1) {
            oddArrayReversed.push(arr[i]);
        }
    }
    return oddArrayReversed;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let secondPowerArray = [];
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (i === 2 ** count) {
            secondPowerArray.push(arr[i]);
            count++;
        }
    }
    return secondPowerArray;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let nthPowerArray = [];
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (i === n ** count) {
            nthPowerArray.push(arr[i]);
            count++;
        }
    }
    return nthPowerArray;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let firstHalfArray = [];
    for (let i = 0; i < arr.length / 2; i++) {
        firstHalfArray.push(arr[i]);
    }
    return firstHalfArray;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let secondHalfArray = [];
    if (arr.length % 2 === 0) {
        for (let i = arr.length - 1; i >= arr.length / 2; i--) {
            secondHalfArray.push(arr[i]);
        }
    } else {
        for (let i = arr.length - 1; i > arr.length / 2; i--) {
            secondHalfArray.push(arr[i]);
        }
    }
    return secondHalfArray;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
