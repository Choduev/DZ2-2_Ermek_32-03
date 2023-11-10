// // 1 dz
// var season = prompt('Введите месяц').toLowerCase()
// switch (season){
//     case 'декабрь':
//         alert('Этот месяц относиться к сезону зиме!')
//         break
//     case 'январь':
//         alert('Этот месяц относиться к сезону зиме!')
//         break
//     case 'февраль':
//         alert('Этот месяц относиться к сезону зиме!')
//         break
//     case 'март':
//         alert('Этот месяц относиться к сезону весна!')
//         break
//     case 'апрель':
//         alert('Этот месяц относиться к сезону весна!')
//         break
//     case 'май':
//         alert('Этот месяц относиться к сезону весна!')
//         break
//     case 'июнь':
//         alert('Этот месяц относиться к сезону лета!')
//         break
//     case 'июль':
//         alert('Этот месяц относиться к сезону лета!')
//         break
//     case 'август':
//         alert('Этот месяц относиться к сезону лета!')
//         break
//     case 'сентябрь':
//         alert('Этот месяц относиться к сезону осень!')
//         break
//     case 'октябрь':
//         alert('Этот месяц относиться к сезону осень!')
//         break
//     case 'ноябрь':
//         alert('Этот месяц относиться к сезону осень!')
//         break
//     default:
//         alert('!!Внимание!! вы ввели месяц не правильно')
// }

// 2dz
//
// var array = [[[[[[[[[[[2]]]]]]]]]]]
// console.log(array[0][0][0][0][0][0][0][0][0][0][0])

// 3dz

var num1 = prompt("Введите первое число:");
var operator = prompt("Введите математические действия (+, -, /, *):");
var num2 = prompt("Введите второе число:");

switch (operator) {
    case "+":
        result = Number(num1) + Number(num2);
        break;
    case "-":
        result = num1 - num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    default:
        alert("Вы ввели неверный оператор!");
        break;
}

alert("Результат: " + result);