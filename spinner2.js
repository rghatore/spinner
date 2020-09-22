// Refactored spinner
// Repeats every four steps
// Timer increments by 200

let numOfTimes = 9;
let timer = 100;
for (let i = 0; i < numOfTimes; i++) {
  switch ((i + 4) % 4) {
  case 0: setTimeout(() => process.stdout.write('\r|   '), timer); break;
  case 1: setTimeout(() => process.stdout.write('\r/   '), timer); break;
  case 2: setTimeout(() => process.stdout.write('\r-   '), timer); break;
  case 3: setTimeout(() => process.stdout.write('\r\\   '), timer); break;
  default: break;
  }
  timer += 200;
}