export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const idSum = arr.map((obj) => obj.id).reduce((acc, curr) => acc + curr);
  return idSum;
}
