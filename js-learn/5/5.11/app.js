'use strict';

{ // Задача № 1
  let date = new Date(2012, 1, 20, 3, 12);
}

{ // Задача № 2
  const getWeekDay = date => {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
  }
}

{ // Задача № 3
  const getLocalDay = date => {

    let day = date.getDay();
  
    if (day == 0) { 
      day = 7;
    }
  
    return day;
  }
}

{ // Задача № 5
  const getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
}

{ // Задача № 6
  const getSecondsToday = () => {
    let now = new Date();
  
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today; 
    return Math.round(diff / 1000);
  }
}

{ // Задача № 7
  const getSecondsToTomorrow = () => {
    let now = new Date();
  
    // завтрашняя дата
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
  }
}
