function solution(int, numbers) {
  let answer = 0;
  let sum1 = 0,
    sum2 = 0,
    sum3 = 0,
    sum4 = 0,
    tmp = int;
  let max = 0;
  for (let i = 0; i < int; i++) {
    for (let j = 0; j < int; j++) {
      sum1 += numbers[i][j];
      sum2 += numbers[j][i];
    }
    sum3 += numbers[i][i];
    sum4 += numbers[i][tmp];
    tmp--;
    if (sum1 > max) max = sum1;
    else if (sum2 > max) max = sum2;
    else if (sum3 > max) max = sum3;
    else if (sum4 > max) max = sum4;
    sum1 = 0;
    sum2 = 0;
  }

  answer = max;

  return answer;
}

console.log(
  solution(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
