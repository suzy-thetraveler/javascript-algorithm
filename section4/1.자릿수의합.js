function solution(int, numbers) {
  let answer = 0;
  let sum = 0;
  let max = 0;
  let tmp = 0;
  //   for (let a of numbers) {
  //     a = String(a);
  //     for (let s of a) {
  //       sum += parseInt(s);
  //     }
  //     if (sum > max) {
  //       max = sum;
  //       tmp = a;
  //     }
  //     if (sum === max) {
  //       if (a > tmp) tmp = a;
  //     }
  //     sum = 0;
  //   }
  //   answer = tmp;

  /**
   * 위의 방법처럼 int를 string으로 변경시키는 방법보다는
   * int를 10으로 나누고 나머지를 더해주는 방법을 사용한다!
   */
  for (let a of numbers) {
    tmp = a;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = a;
    } else if (sum === max) {
      if (a > answer) {
        answer = a;
      }
    }
    sum = 0;
  }

  return answer;
}

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));
