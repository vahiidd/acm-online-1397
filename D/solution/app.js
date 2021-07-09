let inputStr = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunck) => (inputStr = chunck));

process.stdin.on('end', () => {
  let count = 0;
  let max = 0;
  for (const bit of inputStr) {
    if (bit === '0') {
      count++;
    } else {
      max = count > max ? count : max;
      count = 0;
    }
  }
  console.log(max);
});
