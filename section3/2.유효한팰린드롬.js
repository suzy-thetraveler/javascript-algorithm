function solution(string) {
  let answer = 'YES';
  let tmp = '';
  string = string.toLowerCase();
  //   for (let i = string.length; i >= 0; i--) {
  //     tmp += string.charAt(i);
  //   }
  //   if (tmp !== string) answer = 'NO';

  tmp = string.split('').reverse().join('');
  //반복문대신 내장 함수 사용!

  return answer;
}

console.log(solution('found7 time study Yduts emit 7Dnuof'));
