function solution(string) {
  let answer = 'YES';
  let tmp = '';
  string = string.toLowerCase();

  for (let i = string.length; i >= 0; i--) {
    tmp += string.charAt(i);
  }
  if (string !== tmp) answer = 'NO';

  return answer;
}

console.log(solution('gooG'));
