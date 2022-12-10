/Перепишите код, заменив цикл for на while, без изменения поведения цикла.
 let i = 0 ;
        while (1 < 3) {
        i += 1 ;
        alert( `number ${i}!` );
        }
        
        
 /Перепишите код с использованием тернарного оператора
 let country = 'Sweden';
    let access = (country == 'Sweden')? 'true' : 'false' ;
    alert (access) ; 
    
 /Создайте функцию findPositiveNumbers(). Она принимает массив в качестве параметра и возвращает новый массив, в котором содержатся только положительны элементы.
/Проверьте работу функции на примере массивов:
 const nums = [5, 4, 3, -3, -10, -1, 8, -20, 0]
     const numbers = [443, -39, 0, -105, -21, 38, -20, 3, 90].
     function findPositiveNumbers( nums , numbers) {
        for ( var i = 0 ; i >= 0 ; i++){
            i == nums, numbers
        }
      return nums, numbers ;  
     }
     
/Определите массив, например let arr = [5, 4, 3, 8, 0].
/Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.
function filterFor (arr, a) {
            let arr = [5, 4, 3, 8, 0];
            for ( var i = 0 ; i >= a ; i++){
             i = arr;  
            }
        return arr ;
        }
       console.log (filterFor (arr, 0)) ;
      
 /Написать функцию получения случайного цвета. Это будет строка вида "rgb(10,55,250)"
/Здесь у вас будет две функции: одна ваша - с названием getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max.
function getRandomRGBv() {
 return `rgb(${Math.random()*256<<0}, ${Math.random()*256<<0}, ${Math.random()*256<<0})`;
}

/Написать функцию, которая выводит в консоль квадраты чисел из заданного диапазона (от min до max), где значения min и max передаются в функцию как параметры.
 function sumSquares(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) sum += i * i;
    return sum;
}
 
console.log(sumSquares(1, 3));


/Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.
/Для проверки, целое ли число, вам понадобится опеатор % 
 function isInteger(x) {
            if (Number.isInteger(x % 0)) {
    return 'true';
  }
  return 'false';
}

        
