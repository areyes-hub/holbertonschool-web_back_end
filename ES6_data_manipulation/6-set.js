export default function setFromArray(arr) {
  if (!Array.isArray(arr)) {
    return new Set();
  }
  const newSet = new Set(arr);
  return newSet;
}
