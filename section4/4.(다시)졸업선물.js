function solution(budget, students) {
  let answer = 0;
  let max = 0;
  let tmp = [];
  let sum = 0;

  //   for (let student of students) {
  //     if (student[0] > max) max = student[0];
  //   }
  //   for (let student of students) {
  //     if (max === student[0]) {
  //       student[0] = max / 2;
  //       max = 0;
  //       break;
  //     }
  //   }

  //   for (let student of students) {
  //     tmp.push(student[0] + student[1]);
  //   }
  //   for (let i = 0; i < tmp.length; i++) {
  //     sum += tmp[i];
  //     max++;
  //     for (let j = i + 1; j < tmp.length; j++) {
  //       sum += tmp[j];
  //       if (sum > budget[1]) break;
  //       max++;
  //     }
  //     if (max > answer) answer = max;
  //     sum = 0;
  //     max = 0;
  //   }
  // 내가 푼 방법은 예외가 있음...
  // 아래와 같이 풀어야함..
  let money = budget[1];
  students.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < students.length; i++) {
    money = budget[1] - students[i][0] / 2 + students[i][1];
    let max = 1;
    for (let j = 0; j < students.length; j++) {
      if (j !== i && students[j][0] + students[j][1] <= money) {
        money -= students[j][0] + students[j][1];

        max++;
      }
      if (j !== i && students[j][0] + students[j][1] > money) break;
      else continue;
    }
    if (max > answer) answer = max;
  }

  return answer;
}
console.log(
  solution(
    [5, 28],
    [
      [6, 6],
      [2, 2],
      [4, 3],
      [4, 5],
      [10, 3],
    ]
  )
);
