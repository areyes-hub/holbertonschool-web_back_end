export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const idNums = arr.map((obj) => obj.id);
  return idNums;
}
