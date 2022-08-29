function isPrime(int) {
  if (int === 1) return false;
  for (let i = 2; i <= Math.sqrt(int); i++) {
    if (int % i === 0) return false;
  }
  return true;
}
function solution(int, numbers) {
  let answer = [];
  let cnt = 0;
  for (let n of numbers) {
    let tmp = n;
    while (tmp) {
      cnt = cnt * 10 + (tmp % 10);
      tmp = Math.floor(tmp / 10);
      //floor 대신에 parse int를 해도 무방하다.
    }
    if (isPrime(cnt)) answer.push(cnt);
    cnt = 0;

    // n = parseInt(String(n).split('').reverse().join(''));
    // for (let i = 2; i < 10; i++) {
    //   if (n !== i && n % i === 0) {
    //     tmp++;
    //   }
    // }
    // if (tmp === 0 && n !== 1) answer.push(n);
    // tmp = 0;
  }
  // 이 방법도 간결해보이고 나쁘지않지만 일단 int를 string으로 치환하지않고
  // 하는 방법을 사용하고 루트아래의 수까지만 나누어보아도 답이 나오니
  // 2-9까지 모든 라운드를 돌게 할 필요가 없다.

  return answer;
}

console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));
