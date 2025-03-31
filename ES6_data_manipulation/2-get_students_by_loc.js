export default function getStudentsByLocation(arr, city) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const newList = arr.filter((obj) => obj.location === city);
  return newList;
}
