let line1 = document.getElementById('linia1');
let line2 = document.getElementById('linia2');
let btn1 = document.getElementById('btnLine1');
let btn2 = document.getElementById('btnLine2');
let vibor = 1;
let main1 = document.getElementById('main1');
let main2 = document.getElementById('main2');

btn1.onclick = function(){
    vibor = 1;
    change();
}

btn2.onclick = function(){
    vibor = 2;
    change();
}

function change(){
    if (vibor == 1){
        line1.style.opacity = 1;
        line2.style.opacity = 0;
        main1.style.display = 'flex';
        main2.style.display = 'none';
    }
    else if(vibor == 2){
        line1.style.opacity = 0;
        line2.style.opacity = 1;
        main1.style.display = 'none';
        main2.style.display = 'flex';
    }
}

function per(){
    window.location.href = 'play.html';
}