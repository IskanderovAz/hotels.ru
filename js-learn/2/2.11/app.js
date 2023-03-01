'use strict';

{ // Задача № 1
  alert( null || 2 || undefined ); // 2
}

{ // Задача № 2
  alert( alert(1) || 2 || alert(3) ); // 2
}

{ // Задача № 3
  alert( 1 && null && 2 ); // null
}

{ // Задача № 4
  alert( alert(1) && alert(2) ); // undefined
}

{ // Задача № 5
  alert( null || 2 && 3 || 4 ); // 3
}

{ // Задача № 6
  if (age >= 14 && age <= 90) {}
}

{ // Задача № 7
  if (!(age >= 14 && age <= 90)) {}
  if (age < 14 || age > 90) {}
}

{ // Задача № 8
  if (-1 || 0) alert( 'first' ); //  -1, выполнится
  if (-1 && 0) alert( 'second' ); // 0, не выполнится
  if (null || -1 && 1) alert( 'third' ); // 1, выполнится
}

{ // Задача № 9
  let userName = prompt('Кто там?','');

  if (userName === 'Админ') {
    let password = prompt('Пароль?', '');

    if (password === 'Я главный') {
      alert('Здравствуйте');
    } else if (password === null || !password) {
      alert('Отменено');
    } else {
      alert('Неверный пароль');
    }
  } else if (userName === null || !login) {
    alert('Отменено');
  } else {
    alert('Я вас не знаю');
  }
}