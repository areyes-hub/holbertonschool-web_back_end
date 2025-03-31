export default function hasValuesFromArray(set, arr) {
  if (!(set instanceof Set) || !Array.isArray(arr)) {
    return false;
  }
  return arr.every((item) => set.has(item));
}
