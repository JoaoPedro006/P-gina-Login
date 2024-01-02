$(function(){
    $('.dia').click(function(){
        $('.sessao-noite').css('display','none');
        $('.sessao-dia').css('display','block');
    })

        $('.noite').click(function(){
            $('.sessao-dia').css('display','none');            
            $('.sessao-noite').css('display','block');
        });

    
});