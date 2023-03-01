'use strict';

{ // Задача № 1
  //Будет ошибка так как значениt this будет пустым
}

{ // Задача № 2
  let calculator = {
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    },

    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    }
  };
}

{ // Задача № 3
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
}
