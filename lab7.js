function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    let userSex = document.getElementById('sex').value;

    let greeting;
    if(userAge <= 17) {
        greeting = 'Здравствуй, ';
        if(userSex == 'female'){
            greeting += 'девочка';
        }
        else{
            greeting += 'мальчик';
        }
    }
    else{
        greeting = 'Здравствуйте, ';
        if(userSex == 'female'){
            greeting += 'госпожа';
        }
        else{
            greeting += 'господин';
        }
    }
    alert(greeting + userName + ' ' + userSurname + '\n'
    + 'Ваш возраст:' + userAge);

    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}
function makeStairs() {
    let stairs = document.querySelector('#stairs');
    let stepCount = 20;
    for(let i = 0; i<stepCount; i++) {
        stairs.innerHTML += '<div class="step"></div>';
    }

    let steps = document.querySelectorAll('.step');
    for(let i = 0; i<steps.length; i++) {
        steps [i].style.left = (30 + 10*i) + 'px';
        steps [i].style.top = (300 + 80*i) + 'px';
        steps [i].innerHTML = 'Блок номер ' + Number (i+1);
    }
}
function makeSnowflake() {
    let snowflake = document.getElementById('snowflake');
    snowflake.style.position = 'relative';
    let snowflakeCount = 35;
    for(let i = 0; i < snowflakeCount; i++){
        snowflake.innerHTML += '<div class="snowflake-top"><img src="snowflake.png"></div>';
    }

    let top = document.getElementsByClassName('snowflake-top');
    for(let i = 0; i<top.length; i++) {
        let size = Math.round(Math.random() * (150 - 40) + 40) + 'px';
        top [i].style.position = 'absolute';
        top [i].style.left = Math.round(Math.random()*(window.innerWidth - 100)) + 'px';
        top [i].style.top = Math.round(Math.random()*window.innerHeight) + 'px';
        top [i].firstChild.style.height = size;
        top [i].firstChild.style.width = size;
    }
}
function makeVerse() {
    let verse = document.getElementsByClassName('verse');
    for (let i = 0; i<verse.length; i++) {
        verse [i].style.fontSize = (17 + (i+1)) + 'px';
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
        let color = 'rgb(' + r + ',' + g + ',' + b + ')';
        verse [i].style.color = color;
        r = Math.round(Math.random()*255);
        g = Math.round(Math.random()*255);
        b = Math.round(Math.random()*255);
        color = 'rgb(' + r + ',' + g + ',' + b + ')';
        verse [i].style.backgroundColor = color;
    }
}