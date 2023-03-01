'use strict';

{ // Задача № 1
  // Да
  let obj = {};

  function A() {obj;}
  function B() {obj;}

  new A() == new B();
}

{ // Задача № 2
  function Calculator() {

    this.read = function() {
      this.a = +prompt('Первое число: ', 0);
      this.b = +prompt('Второе число: ', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
}

{ // Задача № 3
  function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Введите число?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
}
