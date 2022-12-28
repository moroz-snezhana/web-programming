function clickMe(button){
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';
}
function clickName(button){
    if(button.innerHTML == 'Снежана')
        button.innerHTML = 'Мороз';
    else
        button.innerHTML = 'Снежана';
}
function clickMe2(button){
    if( button.innerHTML == 'Нажми меня'){
        button.innerHTML = 'Ещё раз нажми';
        button.style.color = 'DarkSlateBlue';
    }
    else if( button.innerHTML == 'Ещё раз нажми'){
        button.innerHTML = 'Ещё';
        button.style.color = 'Brown';}
    else if( button.innerHTML == 'Ещё'){
        button.innerHTML = 'Начать сначала';
        button.style.color = 'Biege';}
    else if( button.innerHTML == 'Начать сначала'){
        button.innerHTML = 'Нажми меня';
        button.style.color = 'Dark';}
    else
        button.innerHTML = 'Нажми меня';
}
function showCoords(event){
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY + ' ' + 
    (event.ctrlKey? '<b>Ctrl</b>': '<s>Ctrl</s>') + ' ' + (event.shiftKey? '<b>Shift</b>': '<s>Shift</s>') + ' ' + (event.altKey? '<b>Alt</b>': '<s>Alt</s>');
}
window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove', showCoords);
});
