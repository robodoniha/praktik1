let inpName = document.getElementById('inpName');
let inpFio = document.getElementById('inpFio');
let inpOtch = document.getElementById('inpOthc');
let inpMail = document.getElementById('inpMail');
let inpTel = document.getElementById('inpTel');
let inpBtn = document.getElementById('inpBut');
let sumbit = document.getElementById('sumbit');

setInterval(function () {
    if (inpName.value.includes(' ') == false && String(inpName.value).length != 0 && !/\d/.test(inpName.value)) {
        if (inpFio.value.includes(' ') == false && String(inpFio.value).length != 0 && !/\d/.test(inpFio.value)) {
            if (inpOtch.value.includes(' ') == false && String(inpOtch.value).length != 0 && !/\d/.test(inpOtch.value)) {
                if (inpMail.value.includes('@')) {
                    if ((inpTel.value.includes('+7') && inpTel.value.length == 12) || (inpTel.value.startsWith('8') && inpTel.value.length == 11)) {
                        inpBtn.removeAttribute('disabled');
                        sumbit.style.display = 'none';
                    } else {
                        ubrat();
                    }
                } else {
                    ubrat();
                }
            } else {
                ubrat();
            }
        } else {
            ubrat();
        }
    } else {
        ubrat();
    }
}, 1);

function ubrat() {
    if (!inpBtn.hasAttribute('disabled')) {
        inpBtn.setAttribute('disabled', ''); // Устанавливаем атрибут disabled с пустым значением
        sumbit.style.display = 'flex';
    }
}

inpName.onfocus = function(){
    document.getElementById('idea1').style.display = 'flex'
}
inpName.onblur = function(){
    document.getElementById('idea1').style.display = 'none'
}

inpFio.onfocus = function(){
    document.getElementById('idea2').style.display = 'flex'
}
inpFio.onblur = function(){
    document.getElementById('idea2').style.display = 'none'
}

inpOtch.onfocus = function(){
    document.getElementById('idea3').style.display = 'flex'
}
inpOtch.onblur = function(){
    document.getElementById('idea3').style.display = 'none'
}

inpMail.onfocus = function(){
    document.getElementById('idea4').style.display = 'flex'
}
inpMail.onblur = function(){
    document.getElementById('idea4').style.display = 'none'
}

inpTel.onfocus = function(){
    document.getElementById('idea5').style.display = 'flex'
}
inpTel.onblur = function(){
    document.getElementById('idea5').style.display = 'none'
}