$(function(){

    var indiceAtual = 0;
    var indiceMax = $('.carrosel img').length;
    var delay = 14000;
    iniciarSlider();
    clicarSlider();

    console.log(indiceMax);

    function iniciarSlider(){
        for( var i = 0; i < indiceMax; i++){
            if(i == 0){
                $('.slider-buttom').append('<div style="background-color: #004A25;"></div>');
            }else{
                $('.slider-buttom').append('<div></div>');
            }
        }

        $('.carrosel img').eq(0).fadeIn();
        setInterval(function(){
            alternarSlider()}, delay);
    }

    function clicarSlider(){
        $('.slider-buttom div').click(function(){
            $('.carrosel img').eq(indiceAtual).stop().fadeOut(2000);
            indiceAtual = $(this).index();
            $('.carrosel img').eq(indiceAtual).stop().fadeIn(2000);
            $('.slider-buttom div').css('background-color','#caf6cc');
            $(this).css('background-color', '#004A25');
        })
    }

    function alternarSlider(){
        $('carrosel img').eq(indiceAtual).stop().fadeOut(2000);
        indiceAtual += 1;
        if(indiceAtual == indiceMax)
            indiceAtual = 0;
        $('.slider-buttom div').css('background-color','#caf6cc');
        $('.slider-buttom div').eq(indiceAtual).css('background-color','#004A25');
        $('.carrosel img').eq(indiceAtual).stop().fadeIn(2000);
    }

    $('.menu-mobile i').click(function(){
        var el = $('.menu');
        if(el.is(':visible')){
            el.fadeOut(500);
            $('.carrosel').css('margin-top','30px');
        }else{
            el.show(500);
            $('.carrosel').css('margin-top', '100px');
        }
    })
});