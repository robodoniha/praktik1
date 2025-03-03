$(document).ready(function(){
    let totalKorz = 0;

    $('.btnAdd').click(function(){
        const nameProd = $(this).data('product');
        let nubmer = $(this).data('number');
        $('.products').append(
            '<div class="product"><img src="tovar/'+ nameProd +'.png" alt=""><div class="prodText"><h1>'+ opisanie[nubmer - 1] +'</h1><p>'+ names[nubmer - 1] +'</p><button class="removeKorz">Удалить</button></div></div>'
        );
        totalKorz++;
        $('#totalKorz').text(totalKorz);
    });

    $('.products').on('click', '.removeKorz', function(){
        $(this).closest('.product').remove();
        totalKorz--;
        $('#totalKorz').text(totalKorz);
    });
});

const opisanie = [
    'Чертовски тяжелый и дорогой блок',
    'Просто огромный кусок сена',
    'Неразрушаемый блок',
    'Из него получится хороший дом',
    'Красивый блок, с красивыми звуками',
    'Очень тяжелый и очень полезный'
];

const names = [
    'Блок золота',
    'Блок сена',
    'Бедрок',
    'Блок кирпича',
    'Блок аметиста',
    'Блок алмаза'
];