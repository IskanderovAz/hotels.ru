'use strict';

{ // Задача № 1
  let a = +prompt('Первое слагаемое','');
  let b = +prompt('Второе слагаемое','');

  alert( a + b );
}

{ // Задача № 3
  const readNumber = () => {
    let number;
    do {
      number = prompt("Введите число", 0);
    } while ( !isFinite(number) );

    if (number === null || number === '') return null;

    alert(+number);
  }
}

{ // Задача № 5
  const random = (min, max) => {
    return min + Math.random() * (max - min);
  }
}

{ // Задача № 6
  const random = (min, max) => {
    let number = min + Math.random() * (max + 1 - min);
    return Math.floor(number);
  }
}