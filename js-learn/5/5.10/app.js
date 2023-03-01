'use strict';

{ // Задача № 1
  let {name, years: age, isAdmin = false} = user;
}

{ // Задача № 2
  const topSalary = salaries => {

    let max = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }
}
