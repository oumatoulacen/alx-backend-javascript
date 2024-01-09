/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents)) return [];

  const students = getListStudents.filter((student) => student.location === city);

  // eslint-disable-next-line array-callback-return
  return students
    // eslint-disable-next-line array-callback-return
    .map((student) => {
      const studentGrade = newGrades.find((grade) => student.id === grade.studentId);
      if (!studentGrade) {
        student.grade = 'N/A';
        return student;
      }
      if (!studentGrade.grade) {
        studentGrade.grade = 'N/A';
      }
      student.grade = studentGrade.grade;
      return student;
    });
}
