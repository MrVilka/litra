let crisa = document.getElementById("crisa");
let crisa2 = document.getElementById("crisa2");
function removehid() {
    crisa2.classList.add("hidden");
    crisa.classList.remove("hidden");
    crisa.style.display = "flex ";
}

function removehid1() {
    crisa2.classList.remove("hidden");
    crisa.classList.add("hidden");
    crisa.style.display = "none";
}

function addhid() {
    crisa2.classList.add("hidden");
    crisa.classList.add("hidden");
    crisa.style.display = "none";
}

let btnLight = document.getElementById("btn-light");
let btnDark = document.getElementById("btn-dark");
let header = document.getElementById("headerr");
let text = document.getElementById("rezhim");

let theme1 = localStorage.getItem('theme1');
let theme2 = localStorage.getItem('theme2');

if (!theme1) {
    header.classList.add('lightt');
    crisa2.classList.add('lightt');
    crisa.classList.add('lightt');
    localStorage.setItem('theme1', 'lightt');
} else{
    header.classList.add(theme1);
    crisa2.classList.add(theme1);
    crisa.classList.add(theme1)
}

if(!theme2){
    crisa2.classList.add('light');
    crisa.classList.add('light')
    localStorage.setItem('theme2', 'light');
} else {
    crisa2.classList.add(theme2);
    crisa.classList.add(theme2)
}

btnLight.addEventListener('click', function(){
    header.classList.add("lightt");
    header.classList.remove("darkk");

    crisa2.classList.add('lightt');
    crisa2.classList.remove('darkk');
    crisa2.classList.add('light');
    crisa2.classList.remove('dark');

    crisa.classList.add('lightt');
    crisa.classList.remove('darkk');
    crisa.classList.add('light');
    crisa.classList.remove('dark');

    localStorage.setItem('theme1', 'lightt');
    localStorage.setItem('theme2', 'light');
    // localStorage.setItem('theme1', 'light');
});

btnDark.addEventListener('click', function(){
    header.classList.add("darkk");
    header.classList.remove("lightt");

    crisa2.classList.remove('lightt');
    crisa2.classList.add('darkk');
    crisa2.classList.remove('light');
    crisa2.classList.add('dark');

    crisa.classList.remove('lightt');
    crisa.classList.add('darkk');
    crisa.classList.remove('light');
    crisa.classList.add('dark');

    localStorage.setItem('theme1', 'darkk');
    localStorage.setItem('theme2', 'dark'); 
    // localStorage.setItem('theme1', 'dark');
});

// For work with buttons 1-10



let lista = []; 

for (let i = 1; i <= 15; i++) {
    let element = document.getElementById("str" + i);
    if (element !== null) {
        lista.push(element);
    }
}


let glava = document.getElementById("glava");

function open2() {
    closeall();
    // Отображаем только str2
    str2.style.display = "block";
        if(glava!==null) {
            glava.textContent = "2";
        }
}

function open1(){
    closeall();
    // Отображаем только str2
    str1.style.display = "block";
        if(glava!==null) {
            glava.textContent = "1";
        }
}

function open3(){
    closeall();
    // Отображаем только str2
    str3.style.display = "block";
        if(glava!==null) {
            glava.textContent = "3";
        }
}

function open4(){
    closeall();
    // Отображаем только str2
    str4.style.display = "block";
        if(glava!==null) {
            glava.textContent = "4";
        }
}

function open5(){
    closeall();
    str5.style.display = "block";
        if(glava!==null) {
            glava.textContent = "5";
        }
}

function open6(){
    closeall();
    str6.style.display = "block";
        if(glava!==null) {
            glava.textContent = "6";
        }
}

function open7(){
    closeall();
    str7.style.display = "block";
        if(glava!==null) {
            glava.textContent = "7";
        }
}

function open8(){
    closeall();
    str8.style.display = "block";
        if(glava!==null) {
            glava.textContent = "8";
        }
}

function open9(){
    closeall();
    str9.style.display = "block";
        if(glava!==null) {
            glava.textContent = "9";
        }
}

function open10(){
    closeall();
    str10.style.display = "block";
            if(glava!==null) {
                glava.textContent = "10";
            }
}

function open11(){
    closeall();
    str11.style.display = "block";
            if(glava!==null) {
                glava.textContent = "11";
            }
}

function open12(){
    closeall();
    str12.style.display = "block";
            if(glava!==null) {
                glava.textContent = "12";
            }
}

function closeall(){
    for(let i = 0; i < lista.length; i++){
        lista[i].style.display = "none";
        if(glava!==null) {
            glava.textContent = "";
        }
    }
}

let burger = document.querySelector('.burger');
let nav = document.getElementById("nav");
burger.addEventListener('click', function(){
    this.classList.toggle('active');
    nav.classList.toggle('open');
});

// let menu = document.querySelector(".menu")
// if(window.screen.width < 700){
//     menu.style.display = 'block';
// }

// let home = document.querySelector(".home");
// home.addEventListener('click', function(){
//     let aaaaa = '../index.html'
//     window.open(aaaaa, "_self");
// });

let song = document.getElementById("song");
let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrlIcon");

if(song!==null) {
    song.onloadedmetadata = function() {
        progress.max = song.duration;
        progress.value = song.currentTime;
    }
}

function upup() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

function playPause(){
    if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');

    } else {
        song.play();
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
    }
}

if(song!==null) {
    song.onplay = function(){
        setInterval(()=>{
            progress.value = song.currentTime;
        }, 500);
    }
}

if(progress!==null) {
    progress.onchange = function(){
        song.play();
        song.currentTime = progress.value;
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
    }
}
