// Задача 1
    // let promise = new Promise((resolve,reject)=>{
    //     resolve(4)
    // })
    // promise.then((first) => first * 1)
    // .then((second) => {
    //     alert(second)
    //     return new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve(Math.pow(second,2) )
    //         }, 3000);
    //     })
    // })
    // .then((third) => {
    //     alert(third)
    //     return new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve(Math.pow(third,2) )
    //         }, 3000);
    //     })
    // })
    // .then((fourth) =>{
    //     alert(fourth)
    //     return new Promise((resolve,reject) =>{
    //         setTimeout(() => {
    //             resolve(Math.pow(fourth,2))
    //         }, 3000);
    //     })
    // })
    // .catch((error) => console.log(error))

// Задача 1(модифицировал)
    // let promise = new Promise((resolve,reject)=>{
    //     resolve(4)
    // })
    // promise.then((first) => first * 1)
    // .then((second) => {
    //     alert(second)
    //     return new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve(Math.pow(second,2) )
    //         }, 3000);
    //     })
    // })
    // .then((third) => {
    //     alert(third)
    //     return new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             reject(new Error("Ошибка"))
    //         }, 3000);
    //     })
    // })
    // .then((fourth) =>{
    //     alert(fourth)
    //     return new Promise((resolve,reject) =>{
    //         setTimeout(() => {
    //             resolve(Math.pow(fourth,2))
    //         }, 3000);
    //     })
    // })
    // .catch((error) => console.log(error))

// Задача 2
// const input = document.querySelector(".task-four"),
//     block = document.querySelector(".task-four + div")

//     input.addEventListener("change",function(){
//         const date = new Date() 
//         const dateNow = new Date(date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate())
//         const dateUser = new Date(Date.parse(input.value))   
//         const result = dateUser - dateNow
//         block.innerHTML = (result/(1000*60*60*24))
//     })

// Задача 3
// let arr = [-1,144,-3,49,16 ,-21,-2,64]
// let positiveNumber = arr.filter(item => item > 0)
// function squareFuction(num){
//     let newArr = []
//     let result = num.forEach(elem => {
//         let squareRoot = Math.sqrt(elem)
//             newArr.push(squareRoot)
//     })
//     return newArr
// }
// console.log(squareFuction(positiveNumber))

// Задача 4
    // const promise = new Promise((resolve,reject)=>{
    //     let min = 0
    //     let max = 1
    //     const random = Math.random(min - 0.5 + Math.random() * (max - min + 1))
    //     setTimeout(() => {
    //         if(Math.round(random) == 1){
    //             resolve("done")
    //         }else{
    //             reject(new Error("Ошибка"))
    //         }
    //     }, 5000);
    // })
    // promise.then(result => console.log(result)).catch(error => console.log(error))

// Задача 5
    // let button = document.querySelectorAll(".task-seven > button"),
    //     block = document.querySelector(".task-seven + div")

    //     button.forEach(elem => {
    //         elem.addEventListener("click" , fibonacci())
    //     })
    //         function fibonacci(){
    //             let a = 0
    //             let b = 1 
    //                 return function(){
    //                     let c = a
    //                     a = b
    //                     b = a + c
    //                     block.innerHTML = a
    //                 }
    //         }

// Задача 6
    // let fieldsets = document.querySelectorAll("form[action='#'] > fieldset"),
    //     button = document.querySelector(".task-eight__button")

    // button.addEventListener("click" , function(){
    //    let sum = 0
    //     for(let i = 0; i <  fieldsets.length ; i++ ){
    //         for(let j = 0 ; j < fieldsets[i].elements.length ; j++){
    //             sum += Number(fieldsets[i].elements[j].value)
    //         }
    //     }
    //     console.log(sum)
    // })
   
// Задача 7
    // function Human(age){
    //     this.age = age
    // }
    // let human = new Human(41)
    // let humanTwo = new Human(38)
    // let humanThree = new Human(39)
    // let arr = []
    //     arr.push(human,humanTwo,humanThree)
    // function sortedElem(arr){
    //        let result = arr.sort((a,b) => b.age-a.age)
    //        return result
    //     };
    // console.log(sortedElem(arr))

// Задача 7(модификация)
    // function Human(name , age , surname){
    //     this.name = name
    //     this.age = age  
    //     this.surname = surname
    //     this.fullname = function(){
    //         console.log(this.name + " " + this.surname)
    //     }  
    // }
    // const human = new Human("Yaroslav",16,"Tsybukh")
    // human.course = 2
    // console.log(human)
    // const humanTwo = new Human("Oleg" , 26 , "Krava")
    // humanTwo.universityEnd = function(){
    //     console.log("Я закончил университет")
    // }
    // console.log(humanTwo)
    
// Задача 8
    // class Polinom {
    //     constructor(m, n) {
    //         try {
    //             if (!m || !n) {
    //                 throw new Error("Ошибка");
    //             }

    //             this.m = m;
    //             this.n = n;

    //         } catch (error) {
    //             console.log(error.message);
    //         }

    //     }

    //     sum() {
    //         try {
    //             const sum = this.m.reduce((acamulator, value) => acamulator + value ** this.n, 0);

    //             if (isNaN(sum)) {
    //                 throw new Error("Результат не число")
    //             }

    //             return sum;
    //         } catch (error) {
    //             return error.message;
    //         }
    //     }
    // }

    // const test = new Polinom([1, 2, 3, 4], 2);
    //     console.log(test.sum())

// extra.js
// Задача 1
// class Hamburger {
//     constructor(name, price, cal) {
//         try {

//             if (!name || isNaN(price) || isNaN(cal)) {
//                 throw new Error("Пожалуйста введите верные данные")
//             }

//             this.properties = {
//                 name,
//                 price,
//                 cal
//             };
//             this.fillings = [];
//             this.options = {
//                 seasoning: {
//                     price: 15,
//                     cal: 0,
//                     name: "приправа"
//                 },
//                 mayonnaise: {
//                     price: 20,
//                     cal: 5,
//                     name: "майонез"
//                 }
//             }
//         } catch (error) {
//             throw new Error(error.message)
//         }
//     }

//     addFilling(name, price, cal) {
//         try {

//             if (!name || isNaN(price) || isNaN(cal)) {
//                 throw new Error("Пожалуйста введите верные данные")
//             }

//             this.fillings.push({
//                 name,
//                 price,
//                 cal
//             })

//             return true;
//         } catch (error) {
//             throw new Error(error.message)
//         }

//     }

// }

// const smallHamburger = new Hamburger("Маленький", 50, 20);
// const bigHamburger = new Hamburger("Большой", 100, 40);

// smallHamburger.addFilling('кетчуп', 20, 80);
// smallHamburger.addFilling('салат', 20, 5);

// bigHamburger.addFilling('сир', 10, 20);
// bigHamburger.addFilling('кетчуп', 40, 20);
// bigHamburger.addFilling('картошка', 15, 10);

// const hamburgers = new Map();

// hamburgers.set(smallHamburger.properties.name, smallHamburger);
// hamburgers.set(bigHamburger.properties.name, bigHamburger);

// const selectHamburgers = document.querySelector('select[name=hamburgers]');
// const selectFilling = document.querySelector('select[name=seasonings]');
// const seasoning = document.querySelector('#seasoning');
// const mayonnaise = document.querySelector('#mayonnaise');
// const result = document.querySelector('#result');

// function loadHamburger() {

//     for (let hamburger of hamburgers.keys()) {
//         const option = document.createElement('option');

//         option.value = hamburger;
//         option.textContent = hamburger;

//         selectHamburgers.append(option);
//     }

// }

// loadHamburger();

// selectHamburgers.addEventListener('change', (event) => {
//     const currentHamburger = event.target.value;

//     loadSeasonings(currentHamburger);
// })

// loadSeasonings(selectHamburgers.value);

// function loadSeasonings(hamburger) {
//     const currentHamburger = hamburgers.get(hamburger);

//     selectFilling.innerHTML = "";

//     for (let seasoning of currentHamburger.fillings) {
//         const option = document.createElement('option');

//         option.value = seasoning.name;
//         option.textContent = seasoning.name;
//         option.selected = true;

//         selectFilling.append(option)
//     }
// }

// document.querySelector("#hamburger-form").addEventListener('submit', (event) => {
//     event.preventDefault();

//     const selectHamburger = selectHamburgers.value;
//     const hamburger = hamburgers.get(selectHamburger);
//     const filling = hamburger.fillings.find((filling) => filling.name === selectFilling.value)

//     const name = hamburger.properties.name;
//     let price = hamburger.properties.price + filling.price;
//     let calories = hamburger.properties.cal + filling.cal;

//     if (seasoning.checked) {
//         price += hamburger.options.seasoning.price;
//         calories += hamburger.options.seasoning.cal;
//     }

//     if (mayonnaise.checked) {
//         price += hamburger.options.mayonnaise.price;
//         calories += hamburger.options.mayonnaise.cal;
//     }

//     const nameElem = document.createElement('p');
//     const priceElem = document.createElement('p');
//     const caloriesElem = document.createElement('p');

//     nameElem.innerHTML = `Бургер: ${name}`;
//     priceElem.innerHTML = `Цена: ${price}`;
//     caloriesElem.innerHTML = `Калории: ${calories}`;

//     result.innerHTML = '';
//     result.append(nameElem, priceElem, caloriesElem);
// })

// Задача 2
// function MultiplicatorUnitFailure(message) {
// 	this.message = message
// }

// MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
//     function primitiveMultiply(a, b) {
// 	if(Math.random() < 0.5){
//         return a * b
//     }else{
//         throw new MultiplicatorUnitFailure("Выбрасываем исключения")
//     }
// }

// function reliableMultiply(a, b) {
// 	while(true) {
// 		try {
// 			return primitiveMultiply(a, b);
// 		} catch (e) {
// 			if(e instanceof MultiplicatorUnitFailure){
//                 console.log(e.message)
//             }else{   
//                 throw e
//             }
// 		}
// 	}
// }

// console.log(reliableMultiply(8, 8));
