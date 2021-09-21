const argArr = process.argv.slice(2);

if (!Array.isArray(argArr) || argArr.length <= 0) {
  return;
}

for (const arg of argArr) {
  let timeout = Number(arg);
  if (Number.isNaN(timeout) || timeout < 1) {
    console.log(`Invalid arg: ${arg} not a number!`);
    continue;
  }
  timeout *= 1000; // into miliseconds
  console.log(`Setting BEEP after ${arg} seconds.`);
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(`BEEPing after ${timeout} milliseconds.`);
  }, timeout);
}
