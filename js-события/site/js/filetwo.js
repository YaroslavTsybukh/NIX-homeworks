//Задание 1
let blockFirst = document.querySelector(".block-first")
let pause = false
blockFirst.onclick = function() {
    pause = false
    const container = document.querySelector("#firstTask .container ").clientWidth
    function animation() {
        blockFirst.style.left = parseInt(blockFirst.style.left || 0) + 10 + "px"
        if (parseInt(blockFirst.offsetWidth + parseInt(blockFirst.style.left)) > container) {
            blockFirst.style.left = 0
        }
        if(!pause){
            requestAnimationFrame(animation)
        }
    }
    requestAnimationFrame(animation)
}
let buttonFirst = document.querySelector(".button-first")
    buttonFirst.addEventListener("click",function(e){
        pause = true
    } )

//Задание 2
//     let link = document.querySelector("a[href='#']")
//     let paragraph = document.querySelector("a + div > p")
//     let secondBlock = document.querySelector("a + div")
//     let buttonCancel = document.querySelector(".button")
//     window.addEventListener("load",function(e){
//         paragraph.style.display = "none"
//     })
//     link.addEventListener("click",function func(e) {
//         secondBlock.classList.toggle("none")
//         if (!secondBlock.classList.contains("none")) {
//             paragraph.style.display = "block"
//         }
//         buttonCancel.addEventListener("click", function (e) {
//             link.removeEventListener("click", func)
//         })
//     })
//Задание 3
//     function dayOfWeek(...value){
//         const date = new Date(...value)
//         const day = date.getDay()
//         console.log(day || 7)
//     }
// dayOfWeek(2021,4,23)
//Задание 4
//     function wordFind(str){
//         const arr = str.split(" ")
//         const ul = document.createElement("ul")
//         let sum = 0
//         arr.forEach((item,index) => {
//             const a = item.split("").filter(item=>item.toLowerCase() === "a").length
//             sum +=a
//             const li = document.createElement("li")
//             if(index == 0){
//                 item = item.toUpperCase()
//             }else if(index + 1 === arr.length || index + 1 === arr.length-1){
//               item = item.toLowerCase()
//             }
//             li.innerHTML = item
//             ul.append(li)
//         })
//         document.querySelector(".heading_four").after(ul)
//         alert(sum)
//     }
// console.log(wordFind(prompt("Введите значение")))
