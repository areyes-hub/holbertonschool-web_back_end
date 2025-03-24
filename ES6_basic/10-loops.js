export default function appendToEachArrayValue(array, appendString) {
    let count = 0
    for (let idx of array) {
        let value = idx;
        array[count] = appendString + value;
        count += 1;
    }

    return array;
}
