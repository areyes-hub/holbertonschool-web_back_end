export default function appendToEachArrayValue(array, appendString) {
  let count = 0;
  for (const idx of array) {
    const value = idx;
    array[count] = appendString + value;
    count += 1;
  }

  return array;
}
