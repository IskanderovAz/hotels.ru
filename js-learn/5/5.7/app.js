'use strict';

{ // Задача № 1
  const unique = arr => {
    return Array.from(new Set(arr));
  }
}

{ // Задача № 2
  const aclean = arr => {
    let map = new Map();
  
    for (let word of arr) {
      let sorted = word.toLowerCase().split("").sort().join("");
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
}

{ // Задача № 3
  // map.keys() возвращает итерируемый объект, а не массив
}