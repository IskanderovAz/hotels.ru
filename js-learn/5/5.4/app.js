'use strict';

{ // Задача № 1
  // Выведится 4
}

{ // Задача № 2
  let styles = ["Джаз", "Блюз"];
  styles.push("Рок-н-ролл");
  styles[Math.floor((styles.length - 1) / 2)] = "Классика";
  alert( styles.shift() );
  styles.unshift("Рэп", "Регги");
}

{ // Задача № 3
  // This обращается к объекту и выводит его
}


{ // Задача № 4
  const sumInput = () => {
    let numbers = [];
  
    while (true) {
      let value = prompt("Введите число", 0);
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
}

{ // Задача № 5
  const getMaxSubSum = (arr) => {
    let maxSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }
}
