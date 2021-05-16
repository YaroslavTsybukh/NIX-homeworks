//Popover
$(function () {
    $('[data-toggle="popover"]').popover({
        'placement': 'right',
        'template': '<div class="popover" role="tooltip"><div class="arrow"></div><span class="close btn float-right pop-close">&times;</span><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
    const hideHandler = function(){
        $('[data-toggle="popover"]').popover("hide")
    }
    $('[data-toggle="popover"]').on('shown.bs.popover', function () {
        $(".close").on("click", hideHandler)
    })
    $('[data-toggle="popover"]').on('hidden.bs.popover', function () {
        $(".close").off("click", hideHandler)
    })
})
//Задание 1
window.addEventListener("scroll" , function(){
    let scrollBar = document.querySelector(".progress-bar")
    let scroll = document.documentElement.scrollTop
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrolled = scroll / height * 100
    scrollBar.style.width = scrolled + "%"
})
//Задание 4
document.addEventListener("copy",function(e){
    e.preventDefault()
    alert("Копирование запрещено")
    })
document.addEventListener("contextmenu",function(e){
    e.preventDefault()
})
document.addEventListener("keydown", function(e){
    if(e.code == "KeyU" && (e.ctrlKey || e.metaKey) ){
        e.preventDefault()
    }
})
//Задание 5

//Задание 6
function get_name_browser(){
    let ua = navigator.userAgent;
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox' + navigator.appVersion;
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    return 'Не определен';
}
let browser = get_name_browser();
let browserInfo = document.querySelector(".browsers-info")
    browserInfo.textContent = browser
