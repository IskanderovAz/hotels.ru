'use strict';

{ // Задача № 1
  const capitalize = str => {
    if (str) {
      return str[0].toUpperCase() + str.slice(1);
    }
  }
}

{ // Задача № 2
  const checkSpam = str => {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
}

{ // Задача № 3
  const truncate = (str, maxlength) => {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }
}

{ // Задача № 4
  const extractCurrencyValue = str => {
    return +str.slice(1);
  }
}