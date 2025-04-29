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
    header.classList.add(theme1)
    crisa2.classList.add(theme1)
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





const worksButtons = document.querySelectorAll('.book-button');
const moodsButtons = document.querySelectorAll('#moods button');
const recommendation = document.getElementById('recomen');

let selectedWork = null;
let selectedMood = null;

const recommendations = {
  "Ромео и Джульетта": {
    "повеселее": "«Энн из Зеленых Мезонинов  - Люси Мод Монтгомери» — <br> Схожесть: Невинные юношеские чувства и романтические переживания. <br> Описание: Здесь также показаны первые шаги в любви и дружбе, но без трагедии и смертей. Это тёплая, полная оптимизма история взросления, где влюблённость становится частью радостного и светлого пути. | https://avatars.mds.yandex.net/get-mpic/5242010/img_id629997894221281023.jpeg/orig | https://www.litres.ru/book/lusi-mod-montgomeri/anya-iz-zelenyh-mezoninov-29812960/chitat-onlayn/?ysclid=ma1rgff2wv260655453",
    "короче": "«Тристан и Изольда - средневековая легенда» — <br> Схожесть: История трагической любви, обречённой с самого начала. <br> Описание: Легенда о Тристане и Изольде — концентрированная история страстной и невозможной любви, где, как и в «Ромео и Джульетте», влюблённые оказываются жертвами обстоятельств и вражды, но рассказана она в более краткой и эпической форме. | https://avatars.mds.yandex.net/i?id=60c05e27f1c1307d8da368090f2d2881_l-3608991-images-thumbs&n=13 | https://xn----7sbb5adknde1cb0dyd.xn--p1ai/%D0%B1%D0%B5%D0%B4%D1%8C%D0%B5-%D1%82%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BD-%D0%B8-%D0%B8%D0%B7%D0%BE%D0%BB%D1%8C%D0%B4%D0%B0/",
    "счастливый конец": "«Гордость и предубеждение - Джейн Остен» — <br> Схожесть: Преодоление препятствий на пути к любви. <br> Описание: В романе также есть недопонимания, гордость, предубеждения и социальные преграды между влюблёнными, но в отличие от трагического финала Шекспира, здесь любовь побеждает, а герои обретают счастье вместе. | https://avatars.mds.yandex.net/get-mpic/5235295/2a0000018ee62fe1df450b39e7ef16e3c320/orig | https://xn----7sbb5adknde1cb0dyd.xn--p1ai/%D0%B4%D0%B6%D0%B5%D0%B9%D0%BD-%D0%BE%D1%81%D1%82%D0%B8%D0%BD-%D0%B3%D0%BE%D1%80%D0%B4%D0%BE%D1%81%D1%82%D1%8C-%D0%B8-%D0%BF%D1%80%D0%B5%D0%B4%D1%83%D0%B1%D0%B5%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5/",
    "современнее": "«Виноваты здезды - Джон Грин» — <br> Схожесть: История о любви молодых людей на фоне трагедии. <br> Описание: Современная история о двух подростках, чья любовь развивается на фоне смертельной болезни. Как и у Ромео и Джульетты, их чувства искренни и чисты, а финал вызывает слёзы, однако история подана в реалиях XXI века. | https://goods-photos.static1-sima-land.com/items/1820985/0/700.jpg?v=0 | https://books.yandex.kz/books/QJHA2jUc?ysclid=ma1rko9vfy910614826",
    "без драмы": "«Сон в летнюю ночь» — <br> Схожесть: Любовные интриги и недопонимание между влюблёнными. <br> Описание: В этой пьесе тоже много переплетений судеб, влюблённости и неожиданных поворотов, но в отличие от трагедии «Ромео и Джульетта», здесь всё заканчивается счастливо, с примирением и торжеством любви. Атмосфера пьесы полна волшебства, лёгкости и юмора. | https://avatars.mds.yandex.net/i?id=1385ccc9482f95bed7b24548b43dcb53_l-9386274-images-thumbs&n=13 | https://lib.ru/SHAKESPEARE/midsummer.txt"

    
  },
  "Цыганы": {
    "повеселее": "«Дубровский - Пушкина» — <br> Описание: роман Александра Пушкина о благородном мстителе Владимире Дубровском, который, потеряв родовое имение из-за несправедливости, становится предводителем крестьян и борется за честь и любовь. История о свободе, достоинстве и борьбе с произволом. | img/pikovaya-dama.jpg | https://ilibrary.ru/text/479/p.1/index.html?ysclid=ma1eeuuc45651353090",
    "короче": "«Капитанская дочка - Пушкина» — <br> Схожесть: Судьбоносные испытания и романтика. <br> Описание: В этом романе, как и в «Цыганах», есть любовь и сильные чувства на фоне трудных событий, но финал куда более светлый, герои преодолевают испытания и находят счастье вместе. | img/pikovaya-dama.jpg | https://ilibrary.ru/text/480/p.1/index.html?ysclid=ma1efkdd3g550233775",
    "счастливый конец": "«Станционный смотритель - Пушкина» — <br> Описание: рогательная повесть Пушкина о скромном человеке, потерявшем единственное дорогое ему существо — дочь. Это история о любви, одиночестве и тихой, незаметной трагедии маленького человека на фоне равнодушного мира. | img/evgeniy-onegin.jpg | https://ilibrary.ru/text/436/p.2/index.html?ysclid=ma1eg3r2lj979259510",
    "современнее": "«Грозовой перевал - Эмили Бронте» — <br> Описание: Это история о разрушительной страсти и о вечном противостоянии любви и общественных норм. Мир героев «Грозового перевала» наполнен природной яростью, душевной дикостью и внутренней борьбой. Как и в лучших современных романах, здесь сочетаются глубокая психологичность, трагизм человеческой судьбы и мощные эмоции, которые разрушают и возрождают одновременно. Атмосфера готической безысходности переплетается с идеей, что даже за пределами смерти любовь продолжает жить, разрушая время и пространство. | img/dikaya ohota.jpg | https://xn----7sbb5adknde1cb0dyd.xn--p1ai/%D1%8D%D0%BC%D0%B8%D0%BB%D0%B8-%D0%B1%D1%80%D0%BE%D0%BD%D1%82%D0%B5-%D0%B3%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%BE%D0%B9-%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%B0%D0%BB/",
    "без драмы": "«Повести Белкина - Пушкина» — <br> Схожесть: Жизненные истории без тяжёлых трагедий. <br> Описание: Здесь тоже раскрываются темы человеческой судьбы, любви и случайностей жизни, но в более лёгком, спокойном и ироничном ключе, без трагического накала, как в «Цыганах». | img/stancion.jpg | https://predanie.ru/book/220973-povesti-belkina/"
  },
  "Ася": {
    "повеселее": "«Первая любовь - Тургенева» — Схожесть: Лёгкое и романтичное настроение. <br/> Описание: История первого чувства, лёгкая грусть и светлые воспоминания о том, как важно пережить первую любовь. | https://avatars.mds.yandex.net/i?id=ff02451dec5eabcc8db4b8cff06377e3_l-5349727-images-thumbs&n=13 | https://ilibrary.ru/text/1335/p.1/index.html?ysclid=ma1eoc06cf946964503",
    "короче": "«Муму - Тургенева» — <br> Схожесть: Тема любви и трагедии, но в компактной форме. <br> Описание: В «Муму» Тургенев сжато и ярко передает чувства главного героя, которые приводят к трагическому решению. Это произведение содержит ту же грусть и трагедию, как и «Ася», но в гораздо более краткой и лаконичной форме, что позволяет избежать длинных рассуждений и сложных эмоций. | https://main-cdn.sbermegamarket.ru/big1/hlr-system/1573360926/100024727035b0.jpg | https://ilibrary.ru/text/1250/p.1/index.html?ysclid=ma1ep17xq5722663465",
    "счастливый конец": "«Алые паруса - Александра Грина» — <br> Схожесть: Мечта и любовь как основа для счастья. <br> Описание: В «Ася» мечта и любовь играют важную роль, но её финал трагичен. В «Алых парусах» же, несмотря на трудности и испытания, мечта Ассоль сбывается, и она находит своё счастье, что делает эту книгу идеальным выбором для тех, кто ищет счастливый конец. | https://www.ukazka.ru/img/g/uk368981.jpg | https://ilibrary.ru/text/1845/p.1/index.html?ysclid=ma1e13m59w784050162",
    "современнее": "«Норвежский лес - Харуки Мураками» Булгакова — <br> Схожесть: Любовь, взросление и личностные поиски. <br> Описание: «Норвежский лес» погружает читателя в сложный мир любовных отношений и внутренней борьбы, схожий с теми переживаниями, которые описаны в «Асе». Однако действие происходит в современном мире, и подход к теме любви и взросления гораздо более прямолинеен и порой мрачнее. | https://cdn1.ozone.ru/s3/multimedia-5/c600/6728802845.jpg | https://libcat.ru/knigi/proza/sovremennaya-proza/411918-haruki-murakami-norvezhskij-les-litres.html",
    "без драмы": "«Повести Белкина - Пушкина» — <br> Схожесть: Лёгкие, но трогательные истории о любви и жизни. <br> Описание: В «Повестях Белкина» Пушкин также затрагивает темы любви и переживаний, но эти истории полны лёгкости и радости, без трагедий и глубоких переживаний. Это книги, которые можно читать, наслаждаясь простыми радостями жизни. | https://simg.marwin.kz/media/catalog/product/cache/41deb699a7fea062a8915debbbb0442c/4/7/pushkin_a_s_povesti_belkina.jpg | https://predanie.ru/book/220973-povesti-belkina/"
  },
  "Олеся": {
    "повеселее": "«Юнкера - Куприна» — <br> Схожесть: Молодость, веселье, жизненные ситуации. <br> Описание: Несмотря на то, что «Юнкера» касается военной жизни и жестокости, автор использует много юмора и позитивных моментов, которые делают историю гораздо легче и жизнеутверждающей. | https://cdn1.ozone.ru/s3/multimedia-1-e/7127039930.jpg | https://books.yandex.kz/books/NWBE2j5j",
    "короче": "«Суламифь - Куприна» — <br> Схожесть: Лёгкость и короткость повествования. <br> Описание: В отличие от «Олеси», которая более развёрнута, эта повесть концентрируется на быстром, но интенсивном описании любви, которая заканчивается трагически, в гораздо более сжатой форме. | https://cv3.litres.ru/pub/c/cover/50489231.jpg | https://ilibrary.ru/text/1023/p.1/index.html",
    "счастливый конец": "«Алые паруса - Александра Грина» — <br> Схожесть: Романтические мечты и счастливый финал. <br> Описание: Как и в «Олесе», герои мечтают о лучшей жизни, однако в «Алых парусах» мечты сбываются, что даёт читателю более позитивное ощущение, в отличие от грустной судьбы главных героев в произведении Куприна. | https://sun9-79.userapi.com/impg/MgynubxAzOh1Asgf6cmwtPtmS2LtkpBJPK4Wtw/E227GPr7Xng.jpg?size=395x604&quality=96&sign=05cb38ab6d69360f3fda4d18e794fcd1&type=album | https://ilibrary.ru/text/1845/p.1/index.html?ysclid=ma1e13m59w784050162",
    "современнее": "«Там, где заканчивается тротуар - Шелдона» — <br> Схожесть: Тема любви и взросления в современном мире. <br> Описание: Это произведение о сложных отношениях, современной любви и пути героев через трудности жизни, что делает его актуальным в контексте сегодняшнего дня, как и «Олеся» в своём время. | https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/11ec66d5-599b-473b-9814-a1a7dc30febb/1920x",
    "без драмы": "«Гамбринус - Куприна» —  <br> Схожесть: Романтика и лёгкость. <br> Описание: Лёгкая повесть о романтических приключениях и чувствах, что делает её гораздо менее трагичной по сравнению с «Олесей», но в ней также присутствуют элементы любви и человеческих взаимоотношений. | https://cdn.kobo.com/book-images/17f87dee-56aa-47d9-a580-8d9221fbfb98/1200/1200/False/tkoYUz0xdTeRFL6e08mb5g.jpg | https://www.litres.ru/book/aleksandr-kuprin/gambrinus-173454/chitat-onlayn/"
  },
  "Шинель": {
    "повеселее": "«Нос - Гоголя» — <br> Схожесть: Абсурд, ирония, сатира. <br> Описание: В «Носе» Гоголь раскрывает темы абсурда и комического в гораздо более ироничной и веселой форме, чем в «Шинели», где трагизм и глубина раскрытия персонажа более заметны. | https://sun9-60.userapi.com/impg/c858016/v858016403/16519d/yaUyf162FIc.jpg?size=400x541&quality=96&sign=04e7f4cb93a138ab23f1cf7a4a92397c&type=album | https://ilibrary.ru/text/76/p.1/index.html?ysclid=ma1rppet1i413805549",
    "короче": "«Записки сумашедшего - Гоголя» — <br> Схожесть: Интенсивное погружение в психику героя. <br> Описание: Гоголь в своей повести кратко, но мощно передает внутренний мир героя, переживающего кризис, создавая аналогию с разрушением личности в «Шинели». | https://avatars.mds.yandex.net/get-mpic/5221251/img_id7471202487219936045.jpeg/orig | https://ilibrary.ru/text/14/p.1/index.html?ysclid=ma1rqm7s2p962555015",
    "счастливый конец": "«Ревизор - Гоголя» — <br> Схожесть: Социальная сатира, весёлое завершение. <br> Описание: В отличие от трагического завершения в «Шинели», «Ревизор» завершает всё на комической ноте, и это произведение оставляет читателя с улыбкой. | https://avatars.mds.yandex.net/i?id=a33c4cb36e4540c0d63840717df88a65_l-5810659-images-thumbs&n=13",
    "современнее": "«О дивный новый мир - Хаскли» — <br> Схожесть: Сатира на общество. <br> Описание: «О дивный новый мир» также критикует общественные устои, но делает это в антиутопическом контексте, перенаправляя внимание на проблемы современности и на создание идеального, но проблемного общества. | https://cdn1.ozone.ru/s3/multimedia-b/6425867447.jpg | https://omiliya.org/article/o-divnyi-novyi-mir-oldos-leonard-khaksli",
    "без драмы": "«Старосветские помещики - Гоголя» — <br> Схожесть: Лёгкость и юмор. <br> Описание: В «Старосветских помещиках» Гоголь, как и в «Шинели», отображает российскую реальность, но без трагизма, с большим акцентом на ностальгическое и комическое восприятие жизни. | https://static10.labirint.ru/books/66713/cover.jpg | https://books.yandex.kz/books/KINDWe4g?ysclid=ma1rtcm122632187985"
  },
  "Бедные люди": {
    "повеселее": "«Белые ночи - Достоевского» — <br> Схожесть: Грусть, но надежда и светлые моменты. <br> Описание: В этой повести, как и в «Бедных людях», герой переживает одиночество и бедность, но «Белые ночи» более оптимистичны и полны света и нежности. | https://cdn1.ozone.ru/s3/multimedia-1-z/c600/7058747051.jpg | https://ilibrary.ru/text/29/p.1/index.html?ysclid=ma1rua1cpn451684379",
    "короче": "«Неточка Незванова - Достоевского» Толстого — <br> Схожесть: Психологическая глубина и социальная тематика. <br> Описание: Это краткое произведение о трудном детстве и взрослении, но, в отличие от более масштабного сюжета «Бедных людей», оно больше сосредоточено на внутреннем мире героини. | https://proza.ru/pics/2024/02/24/1075.jpg | https://litnet.com/ru/book/netochka-nezvanova-b443963",
    "счастливый конец": "«Старосветские помещики - Гоголя» — <br> Схожесть: Тёплый финал и отсутствие трагедий. <br> Описание: Как и в «Старосветских помещиках», в этом произведении не происходит трагических событий, хотя герои, как и в «Бедных людях», сталкиваются с социальными трудностями. | https://illustrators.ru/uploads/illustration/image/1121369/%D0%A8%D0%BC%D1%83%D1%86_%D0%A1%D1%82%D0%B0%D1%80%D0%BE%D1%81%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B5_%D0%BF%D0%BE%D0%BC%D0%B5%D1%89%D0%B8%D0%BA%D0%B8.jpg | https://books.yandex.kz/books/KINDWe4g?ysclid=ma1rtcm122632187985",
    "современнее": "«Стеклянный зверинец - Уильямса» — <br> Схожесть: Тема бедности и мечт. <br> Описание: В обеих книгах герои мечтают о лучшей жизни, но сталкиваются с суровой реальностью и материальными проблемами, в то время как «Стеклянный зверинец» более фокусируется на личных отношениях и мечтах персонажей. | https://static10.labirint.ru/books/769286/cover.jpg",
    "без драмы": "«Трое в лодке, не считая собаки - Джерома» Тургенева — <br> Схожесть: Лёгкость и комизм. <br> Описание: В отличие от трагического настроя в «Бедных людях», это произведение полно юмора и лёгкости, и герои наслаждаются беззаботным отдыхом. | https://cdn1.ozone.ru/s3/multimedia-1-r/6919050951.jpg | tps://azbyka.ru/fiction/troe-v-lodke-ne-schitaja-sobaki-dzherom-k-dzherom/"
  },
  "После бала": {
    "повеселее": "«Холстомер - Толстого» — <br> Схожесть: Противоположность на фоне личных переживаний. <br> Описание: История о лошади «Холстомер» может быть более мрачной и трагичной, но, как и в «После балу», Толстой исследует столкновение идеалов с реальностью, хотя более глубоко и философски. | https://cdn1.ozone.ru/multimedia/1011389268.jpg | https://azbyka.ru/fiction/holstomer/",
    "короче": "«Евгений Онегин - Пушкина» — быстро и по сути. | https://cdn1.ozone.ru/s3/multimedia-x/6000057993.jpg | https://www.culture.ru/poems/4481/evgenii-onegin",
    "счастливый конец": "«Каштанка - Чехова» — <br> Схожесть: Тема разочарования, но с более оптимистичной концовкой. <br> Описание: В отличие от трагичной ноты в «После балу», «Каштанка» заканчивается более светлым и позитивным образом, несмотря на переживания главных героев. | https://avatars.mds.yandex.net/i?id=ba7b122061d1181deacbd99bb0a47e36_l-10932765-images-thumbs&n=13 | https://ilibrary.ru/text/1146/p.2/index.html",
    "современнее": "«День опричника - Сорокина» — <br> Схожесть: Социальные и личные переживания в реальном мире. <br> Описание: Оба произведения затрагивают темы социальной несправедливости и личных разочарований, но в случае с «Днем опричника» это в более современном и футуристическом контексте. | https://avatars.mds.yandex.net/get-mpic/5234762/img_id5688200903610236853.jpeg/orig | https://www.litres.ru/book/vladimir-sorokin/den-oprichnika-139416/chitat-onlayn/?ysclid=ma1s2qmvdw295167189",
    "без драмы": "«Белый пудель - Куприна» — <br> Схожесть: Лёгкость и романтика. <br> Описание: Куприн, как и Толстой в «После балу», использует романтическую тему, но в более лёгкой и не столь трагичной форме, фокусируясь на чувствах, а не на борьбе с идеалами. . | https://static10.labirint.ru/books/279954/cover.jpg | https://ilibrary.ru/text/1545/p.1/index.html?ysclid=ma1s3r5h5g917244605"
  },
  "Гранатовый браслет": {
    "повеселее": "«Поединок - Куприна» — <br> Схожесть: Интенсивные чувства, но с юмором. <br> Описание: «Поединок» Куприна отличается более тяжёлым эмоциональным фоном, чем «Гранатовый браслет», однако и в нём можно найти моменты лёгкости и юмора. В этой истории речь идет о военной жизни, сильных характерах и мужской дружбе, но темы любви и борьбы за чувства остаются в центре внимания. В отличие от трагичной истории браслета, Куприн позволяет себе добавить лёгкие нотки юмора и светлых переживаний. | https://avatars.mds.yandex.net/i?id=dc453e7edbd26d02fc5112127671896b_l-9858428-images-thumbs&n=13 | https://books.yandex.kz/books/wzLIieek?ysclid=ma1s5jv0vb804795604",
    "короче": "«Суламифь - Куприна» — <br> Схожесть: Короткая, страстная история любви. <br> Описание: «Суламифь» — это лаконичная повесть о любви, которая заканчивается трагически, но с невероятной эмоциональной силой. Как и «Гранатовый браслет», здесь страсть и идеализация любви, но в более сжатом и компактном формате. Главный акцент на чувствах героев, которые развиваются стремительно, а финал потрясает своей жестокой правдой. | https://avatars.mds.yandex.net/i?id=a610c9ab4544b8a0638de307e888a6f5_l-5457573-images-thumbs&n=13",
    "счастливый конец": "«Портрет Дориана Грея - Уайльда» — <br> Схожесть: Идеализация любви и красоты, но с элементами трагедии. <br> Описание: Несмотря на свою трагичность, «Портрет Дориана Грея» может быть воспринят как произведение, где любовь и страсть играют важную роль, как и в «Гранатовом браслете». Уайльд изображает стремление к идеалу и любовь как важные мотивы, но в отличие от Куприна, его герои обречены на разрушение. Несмотря на трагичный сюжет, можно рассматривать роман как идеалистическое восприятие любви, которое противоречит действительности. | https://cdn1.ozone.ru/s3/multimedia-p/6748403893.jpg | https://www.litres.ru/book/oskar-uayld/portret-doriana-greya-130224/?ysclid=ma1s7onmr6260584184",
    "современнее": "«Любовь живет три года - Бегбедера» —  <br> Схожесть: О рефлексии любви и чувствах в современном мире. <br> Описание: Современная книга, которая затрагивает те же темы, что и «Гранатовый браслет», но в контексте XXI века. Бегбедер пишет о том, как люди воспринимают любовь в современном мире, где всё быстро меняется. В отличие от Куприна, в этой книге больше скепсиса, но также присутствуют философские размышления о том, как любовь воспринимается в эпоху потребительства и быстротечности эмоций. | https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/48cad146-d75d-417d-ac20-7a0b3faa1f70/1920x | https://www.livelib.ru/book/170066/readpart-lyubov-zhivet-tri-goda-frederik-begbeder?ysclid=ma1s8tnox5461712497",
    "без драмы": "«Сказки старого Вильнюса - Макса Фрая» — <br> Схожесть: Романтическая атмосфера без тяжёлой драмы. <br> Описание: В «Сказках старого Вильнюса» Макс Фрай создает тёплую атмосферу, в которой любовь изображена без трагедий и драм. Это собрание лёгких и вдохновляющих историй, наполненных волшебными моментами, где главное — чувства и добрые поступки. В отличие от «Гранатового браслета», где любовь заканчивается трагически, здесь персонажи находят гармонию и счастье. Книга дарит радость, не нагружая читателя тяжёлыми переживаниями. | https://cdn1.ozone.ru/s3/multimedia-2/c600/6749535278.jpg | https://librebook.me/skazki_starogo_vilniusa?ysclid=ma1sb1l7v5413733836"
  },
  "Горе от ума": {
    "повеселее": "«Ревизор - Гоголя» — <br> Схожесть: Ирония, абсурдные ситуации и социальная сатира. <br> Описание: Эта комедия в отличие от «Горе от ума» наполнена смехом и высоко оценена за остроумную критику, при этом герой сталкивается с абсурдными ситуациями, порой гораздо более нелепыми, чем в Грибоедове. | https://avatars.mds.yandex.net/i?id=4ed164c9cf56160e662133d1506b81c9_l-3964804-images-thumbs&n=13 | https://ilibrary.ru/text/473/p.1/index.html?ysclid=ma1embd9q5675993779",
    "короче": "«Скупой рыцарь» — <br> Схожесть: Тема человеческих пороков, краткость формы. <br> Описание: В этой пьесе Пушкин остро высмеивает жадность и характер, но делает это в значительно более сжато и доступно, сохраняя элемент юмора. | https://avatars.mds.yandex.net/i?id=332956ab05dbb92bcc49e05f7304bd40_l-4571300-images-thumbs&n=13 | https://ilibrary.ru/text/466/p.1/index.html?ysclid=ma1sc6wav2140713552",
    "счастливый конец": "«Как важно быть серьезным - Оскара Уайльда» — <br> Схожесть: Лёгкость, ирония, но с позитивным завершением. <br> Описание: В отличие от серьёзных и ироничных наблюдений Грибоедова, Уайльд подаёт критику с лёгким юмором, заканчивая свою пьесу положительно, с идеальными решениями для героев. | https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_652d1ec56e626e1158f99071_652d22ffd141d60240220d1c/scale_1200 | https://lib.ru/WILDE/wilde2_5.txt",
    "современнее": "«Театр - Моэма» — <br> Схожесть: Ирония, высмеивание общественных норм. <br> Описание: Моэм в своём произведении также высмеивает общественные структуры, но делает это через более современные реалии и с более глубокими персонажами. | https://cdn1.ozone.ru/s3/multimedia-p/6443694913.jpg | https://www.100bestbooks.ru/files/Moem_Teatr.pdf?ysclid=ma1se2shd222906065",
    "без драмы": "«Трое в лодке, не считая собаки - Джерома» — <br> Схожесть: Лёгкость и беззаботный юмор. <br> Описание: В отличие от «Горе от ума», где злободневные вопросы приводят к более мрачным выводам, здесь герои проводят время на природе, сталкиваясь с комичными ситуациями, но без особых глубоких переживаний. | https://avatars.mds.yandex.net/get-mpic/4860193/img_id8123364727581581562.jpeg/orig"
  },
  "Мертвые души": {
    "повеселее": "«Ревизор - Гоголя» — <br> Схожесть: Социальная сатира и комичные элементы. <br> Описание: «Ревизор» также является комедийным произведением, в котором высмеиваются человеческие пороки и недостатки, но с гораздо более лёгким тоном, чем в «Мёртвых душах». В то время как «Мёртвые души» пронизаны мрачной сатирой и драмой, «Ревизор» предлагает открытые смешные моменты, не столь глубокие, но яркие. | https://static10.labirint.ru/books/875272/cover.jpg | https://ilibrary.ru/text/473/p.1/index.html?ysclid=ma1embd9q5675993779",
    "короче": "«Записки сумашедшего - Гоголя» — <br> Схожесть: Тема деградации личности и отчаяния в компактной форме. <br> Описание: В «Записках сумасшедшего» Гоголь рассказывает о внутреннем разрушении человека, используя минималистичный подход. Эта история не такая масштабная, как «Мёртвые души», но затрагивает схожие темы — отчуждение, бессмысленность жизни, и саморазрушение. | https://img.kitapyurdu.com/v1/getImage/fn:11854985/wh:true/miw:200/mih:200 | https://ilibrary.ru/text/14/p.1/index.html?ysclid=ma1rqm7s2p962555015",
    "счастливый конец": "«Молох - Куприна» — <br> Схожесть: Идеализированное изображение любви и надежды. <br> Описание: В «Светлом лике» Куприна показана история любви, в которой, несмотря на сложности, герои все-таки находят своё счастье. Это произведение противоположно по настроению мрачным и трагическим моментам в «Мёртвых душах», где судьбы персонажей не так благоприятны. | https://avatars.mds.yandex.net/i?id=f0406d9c06fb6870dfdee5cf7d09fb4b_l-4821166-images-thumbs&n=13 | https://www.litres.ru/book/aleksandr-kuprin/moloh-172175/chitat-onlayn/?ysclid=ma1sfb3f1f960313106",
    "современнее": "«Москва-Петушки - Венички» — <br> Схожесть: Сатира и абсурд в контексте социальной реальности. <br> Описание: Как и в «Мёртвых душах», в «Москва-Петушки» Ерофеев рассматривает элементы абсурда и сатиры, но действие происходит в XX веке, где современная реальность накладывает особый отпечаток на восприятие общества и личных драм. | https://cdn1.ozone.ru/s3/multimedia-m/6012667234.jpg | https://www.shinkareff.com/stories/russian-proza/moskva-petushki/",
    "без драмы": "«Собачье сердце - Булгакова» — <br>   Схожесть: Социальная сатира, но без глубоких трагедий. <br> Описание: В «Собачьем сердце» Булгаков высмеивает недостатки общества, но в отличие от «Мёртвых душ», нет столь глубокой трагедии. Это произведение с элементами фантастики и комизма, в котором поднимаются вопросы человеческой природы и экспериментирования. | https://avatars.mds.yandex.net/i?id=b6f182fe6cfb61187e0d5acb51ff1656_l-5233841-images-thumbs&n=13 | https://www.litres.ru/book/mihail-bulgakov/sobache-serdce-133810/?ysclid=ma1shkwvwj507630042"
  }
};
let currentClickHandler = null; // глобально

function updateRecommendation() {
  if (selectedWork && selectedMood) {
    const text = (recommendations[selectedWork] && recommendations[selectedWork][selectedMood])
      || "Пока нет подходящей рекомендации. Попробуй другую комбинацию.";
    
    let link = text.split(' | ') 
    recommendation.innerHTML = `${link[0]}`;
    
    const scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTo({
      top: scrollingElement.scrollHeight,
      behavior: 'smooth'
    });

    const photo = document.getElementById('photo');
    photo.src = link[1];

    if (currentClickHandler) {
      photo.removeEventListener('click', currentClickHandler);
    }

    currentClickHandler = function() {
      window.open(link[2]);
    };

    // Назначаем обработчик
    photo.addEventListener('click', currentClickHandler);
  }
}


worksButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    worksButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedWork = btn.getAttribute('data-work');
    updateRecommendation();
  });
});

moodsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    moodsButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedMood = btn.getAttribute('data-mood');
    updateRecommendation();
  });
});



let burger = document.querySelector('.burger');
let nav = document.getElementById("nav");
burger.addEventListener('click', function(){
    this.classList.toggle('active');
    nav.classList.toggle('open');
});


function get() {
    const inputtt = document.getElementById('inputtt')
    response0 = inputtt.value
    const put = document.getElementById('put')
    fetch(`aurex.pythonanywhere.com/api/${reponse0}`)
    .then(response => response.json())
    .then(data => {
        put.innerHTML = data.recomendation
    })
}
