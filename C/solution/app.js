let inputStr = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunck) => (inputStr = chunck));

process.stdin.on('end', () => {
  const number = +inputStr;
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) sum += i;
  }
  if (isPowerOfTwo(sum)) console.log(1);
  else console.log(0);
});

function isPowerOfTwo(x) {
  return x != 0 && (x & (x - 1)) == 0;
}
