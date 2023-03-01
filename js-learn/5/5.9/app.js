'use strict';

{ // Задача № 1
  const sumSalaries = salaries => {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }

    return sum;
  }
}

{ // Задача № 2
  const count = obj => {
  return Object.keys(obj).length;
}
}
