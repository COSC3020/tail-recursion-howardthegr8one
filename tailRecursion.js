
// generates an array of n Fibonacci numbers
function fibonacciList(n) {
    let start = [0, 1]
    if (n <= 2) {
        if (n == 1)
            return [0]
        return start
    }
    else
        return fibRecursive(n-2, start, 0, 1)
}
function fibRecursive(num, arr, i, j) {
    arr.push(arr[i] + arr[j])
    if (num < 2) 
        return arr
    else
        return fibRecursive(num-1, arr, i+1, j+1)
}
