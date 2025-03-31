export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter((obj) => obj.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
