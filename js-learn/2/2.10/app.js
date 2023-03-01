'use strict';

{ // Задача № 1
  if ("0") {
    alert( 'Привет' );
  } 

  //  alert выведется т.к. не пустая строка является истинным выражением
}

{ // Задача № 2
  let answer = prompt('Какое «официальное» название JavaScript?', '');

  if (answer === 'ECMAScript') {
    alert('Верно!');
  } else {
    alert('Не знаете?');
  }
}

{ // Задача № 3
  let number = prompt('Введите, пожалуйста, число.', '');

  if (number > 0) {
    alert('1');
  } else if (number < 0) {
    alert('-1');
  } else if (number === 0 ) {
    alert('0');
  }
}

{ // Задача № 4
  /* Требуется переписать в '?'
  let result;

  if (a + b < 4) {
    result = 'Мало';
  } else {
    result = 'Много';
  }
  */

  let result = (a + b < 4) ? 'Мало' : 'Много';
}

{ // Задача № 5
  /* Требуется переписать в '?'
  let message;

  if (login == 'Сотрудник') {
    message = 'Привет';
  } else if (login == 'Директор') {
    message = 'Здравствуйте';
  } else if (login == '') {
    message = 'Нет логина';
  } else {
    message = '';
  }
  */

  let message = (login == 'Сотрудник') ? 'Привет' :
                (login == 'Директор') ? 'Здравствуйте' :
                (login == '') ? 'нет логина' : '';
}