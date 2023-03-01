'use strict';

{ // Задача № 1
  let i = 3;

  while (i) {
    alert( i-- );
  } // 1, при i = 0 цикл прерывается, так как 0 ложное значение;
}

{ // Задача № 2
  let i = 0;
  while (++i < 5) alert( i );
  /* 
    i = 1; результат: 1
    i = 2; результат: 2
    i = 3; результат: 3
    i = 4; результат: 4
    i = 5; цикл прерывается
  */
 // ---------------------------------

{
  let i = 0;
  while (i++ < 5) alert( i );
}
  /* 
    i = 1; результат: 1
    i = 2; результат: 2
    i = 3; результат: 3
    i = 4; результат: 4
    i = 5; цикл прерывается
  */
}

{ // Задача № 3
  for (let i = 0; i < 5; i++) alert( i );
  /* 
    i = 0; результат: 0
    i = 1; результат: 1
    i = 2; результат: 2
    i = 3; результат: 3
    i = 4; результат: 4
    i = 5; цикл прерывается
  */
 // ---------------------------------

{
  for (let i = 0; i < 5; ++i) alert( i );
}
  /* 
    i = 0; результат: 0
    i = 1; результат: 1
    i = 2; результат: 2
    i = 3; результат: 3
    i = 4; результат: 4
    i = 5; цикл прерывается
  */
}

{ // Задача № 4
  for (let i = 2; i <= 10; i++) {
    if (!(i % 2 == 0)) continue
    alert(i);
  }
}

{ // Задача № 5
  let i = 0;
  while (i < 3) {
      alert(`number ${i}!`);
      i++;
  }
}

{ // Задача № 6
  let number;
  while (!(+number > 100 || number === null)) {
    number = prompt('Введите число больше 100','');
  }
}

{ // Задача № 7
  let number = prompt('Введите число','');

  next:
  for (let j = 2; j <= number; j++) {
    for (let i = 2; i < j; i++) {
        if (j % i == 0) continue next;
    }
    alert(j);
  }
}