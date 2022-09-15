function solution(row, students) {
  let answer = 0;
  let tmp = [];
  let num = row[1];
  students.sort().reverse();

  for (let i = 0; i < students.length; i++) {
    for (let j = i + 1; j < students.length; j++) {
      for (let k = j + 1; k < students.length; k++) {
        tmp.push(students[i] + students[j] + students[k]);
      }
    }
  }
  answer = tmp[num - 1];

  return answer;
}
console.log(solution([10, 3], [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
