'use strict';

{ // Задача № 1
  let user = {};
  user.name = "John";
  user.surname = "Smith";
  user.name = "Pete";
  delete user.name;
}

{ // Задача № 2
  let schedule = {};
  const isEmpty = obj => {
    for (let key in obj) {
      return false;
    }
    return true;
  }
}

{ // Задача № 3
  //Можно
}

{ // Задача № 4
  let summa = 0;
  for (let key in salaries) {
    summa += salaries[key];
  }
}

{ // Задача № 4
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  const multiplyNumeric = obj => {
    for (let key in obj) {
      if (+obj[key]) 
        obj[key] *= 2;
    }
    return menu;
  }
}