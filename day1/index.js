const fs = require('fs');
const data = fs.readFileSync('input.txt', 'UTF-8');
const lines = data.split(/\r?\n/);
const inputs = [];

lines.forEach(line => inputs.push(parseInt(line)));

const checkExpenseReport = (report, target) => {
  const table = {};
  report.forEach((line, i) => table[line] = i);
  
  for (let i = 0; i < report.length; ++i) {
    let diff = target - report[i];
    if (table.hasOwnProperty(diff) && table[diff] !== i) {
      return report[i] * report[table[diff]];
    }
  }
}

console.log(checkExpenseReport(inputs, 2020));
