
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').innerHTML += 'touh ';
}

// ваше событие здесь!!!
document.querySelector('.div-1').ontouchstart = t1;

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let c = 0;

function t2() {
    c++;
    document.querySelector('.out-2').innerHTML = c;
}

// ваше событие здесь!!!
document.querySelector('.div-2').ontouchstart = t2;

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(e) {
    if (e.target == document.querySelector('.div-3_1')) document.querySelector('.out-3').innerHTML = 1;
    if (e.target == document.querySelector('.div-3_2')) document.querySelector('.out-3').innerHTML = 2;
}

// ваше событие здесь!!!
document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
    document.querySelector('.div-4').ontouchstart = () => {
        document.querySelector('.out-4').innerHTML += 'touch ';
    }
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').ontouchstart = null;
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').innerHTML += 'touchend ';
}

// ваше событие здесь!!!
document.querySelector('.div-4').addEventListener('touchend', t6);

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    this.style.background = 'red';
}

// ваше событие здесь!!!
document.querySelector('.div-7').ontouchstart = t7;

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

function t8() {
    const a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

    function randomColor(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let key = randomColor(0, a8.length - 1);
    this.style.background = a8[key];
}

// ваше событие здесь!!!
document.querySelector('.div-8').ontouchstart = t8;

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
let c1 = 0;

function t9(e) {
    //console.log(e);
    if (e.changedTouches[0].identifier > 0) c1 = c1 + 1;
    document.querySelector('.out-9').innerHTML = c1;
}

// ваше событие здесь!!!
document.querySelector('.div-9').ontouchstart = t9;
//Смартфон - ASUS ZE500KL, Android 5.0

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let w10 = 75;

function t10() {
    w10 = w10 + 1;
    this.style.width = w10 + 'px';
}

// ваше событие здесь!!!
document.querySelector('.div-10').ontouchmove = t10;

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(e) {
    //console.log(e);
    let x = [];

    let y = e.targetTouches[0];
    for (let key in y) {
        if (key == 'radiusX') x.push(y[key]);
        if (key == 'radiusY') x.push(y[key]);
    }

    document.querySelector('.out-11').innerHTML = x;
}

// ваше событие здесь!!!
document.querySelector('.div-11').ontouchstart = t11;

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images
//console.log(images);
const next = document.querySelectorAll('.next');
next[0].onclick = nextFunction;

const prev = document.querySelectorAll('.prev');
prev[0].onclick = prevFunction;

const res = document.querySelector('.reset');
res.onclick = resetFunction;

let div = document.querySelector('.div-12-max img');

function nextFunction() {
    count++;
    div.setAttribute('src', 'img/' + `${count + 1}` + '.png');
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img');
    }
    images[count].classList.add('active-img');

    if (count == images.length - 1) { count = 0 - 1; }
}

function prevFunction() {
    if (count == 0) { count = images.length; }

    count--;
    div.setAttribute('src', 'img/' + `${count + 1}` + '.png');
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img');
    }
    images[count].classList.add('active-img');
}

function resetFunction() {

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img');
    }
    images[0].classList.add('active-img');
    count = 0;
    div.setAttribute('src', 'img/1.png');
}
// ваше событие здесь!!!
if (/Android|webOS|iPhone|iPad|iPod|BlackBarry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    next[0].ontouchstart = nextFunction; next[0].onclick = () => { return false;}
}
if (/Android|webOS|iPhone|iPad|iPod|BlackBarry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    prev[0].ontouchstart = prevFunction; prev[0].onclick = () => { return false;}
}
if (/Android|webOS|iPhone|iPad|iPod|BlackBarry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    res.ontouchstart = resetFunction; res.onclick = () => { return false;}
}
