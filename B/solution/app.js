let inputStr = '';
const _toInt = (x) => +x;
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => (inputStr += chunk));

process.stdin.on('end', () => {
  const [fingers, hands, firstNum, secondNum] = inputStr
    .split('\n')
    .map(_toInt);
  const sum = firstNum + secondNum;
  const mod = sum % (fingers * hands);
  if (mod === 0) {
    console.log(sum === 0 ? 0 : fingers * hands);
  } else {
    console.log(mod);
  }
});
