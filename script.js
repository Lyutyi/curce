////перевое задание

let day = 20;

if (day >= 0 && day <= 10){
    console.log('перевая декада');
}

if (day >= 11 && day <= 20){
    console.log('вторая декада');
}

if (day >= 21 && day <= 31){
    console.log('третья декада');
}    

////второе задание

let month = 6;
    
if (month >= 1 && month <= 3){
    console.log('zima');
}

if (month >= 4 && month <= 6){
    console.log('vesna');
}

if (month >= 7 && month <= 9){
    console.log('leto');
}

if (month >= 10 && month <= 12){
    console.log('osen');
}

////третье задание

let str = 'abcde';
if (str[0] == 'а') {
	console.log('Да');
} else {
	console.log('Нет');
}

////четвертое задание

let str = '12345';
if (str[0] == '1' || str[0] == '2' || str[0] == '3') {
	console.log('Да');
} else {
	console.log('Нет');
}

////пятое задание

let str = '567';
let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
    console.log(sum);

////шестое задание

let str = '123456';
let x = Number(str[0]) + Number(str[1]) + Number(str[2]);
let y = Number(str[3]) + Number(str[4]) + Number(str[5]);
if (x==y){
    console.log('Да');
}
else{
    console.log('Нет');
}