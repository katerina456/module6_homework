function Prost(chislo) {
  if (chislo > 1000 || typeof(chislo) != 'number' || chislo < 0) {
    return 'Данные неверны';
  } 
  else if (chislo == 0) {
    return 'Вы ввели 0. Ноль не является натуральным числом и, соответственно, не является простым';
  } 
  else if (chislo == 1) {
    return 'Вы ввели 1. Единица не является простым числом т.к. все простые числа имеют ровно два делители (само число и 1)';
  } 
  else {
    for (let i = 2; i < chislo; i++) {
      if (chislo % i == 0){
        return `Число ${chislo} - составное`;
      }
    }
    return `Число ${chislo} - простое`;
  }
}

let a = 883;

console.log (Prost(a));