export default function getStudentIdsSum(students) {
  return students.reduce((acc, currValue) => acc + currValue.id, 0);
}
