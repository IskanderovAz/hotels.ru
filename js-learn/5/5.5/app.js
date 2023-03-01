'use strict';

{ // Задача № 1
  const camelize = str => {
    let arr = str.split('-');
    let newArr = arr.map( (word, index)=> {
       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
   })
    return newArr.join('');
  }
}

{ // Задача № 2
  const filterRange = (arr, a, b) => {
    return arr.filter(item => (a <= item && item <= b));
  }
}

{ // Задача № 3
  const filterRangeInPlace = (arr, a, b) => {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
        if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
}


{ // Задача № 4
  let arr = [5, 2, 1, -10, 8];
  arr.sort((a, b) => b - a);
}

{ // Задача № 5
  const getMaxSubSum = (arr) => {
    let max = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let maxFirst = 0;
      for (let j = i; j < arr.length; j++) {
        maxFirst += arr[j];
        max = Math.max(max, maxFirst);
      }
    }
  
    return max;
  }
}

{ // Задача № 5
  const copySorted = arr => {
    return arr.slice().sort();
  }
}

{ // Задача № 7
    let names = users.map(item => item.name);
}

{ // Задача № 8
  let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));
}

{ // Задача № 9
  const sortByAge = arr => {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
  }
}

{ // Задача № 11
  const getAverageAge = users => {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
}

{ // Задача № 13
  const groupById = array => {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }
}

