$(function(){
    $('li').click(function(){
        $(this).toggleClass('active')
        $(this).find('p')
        let this_li = $(this).html()
        
        $('li').each(function(e, li){

            if(li.innerHTML != this_li){
                $(this).removeClass('active')
            }
        })


    })
    $('li').click(function(){
        
        if(window.innerWidth > 1024){
            $('span.competence_text').html($(this).children('p').html())
        }
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },

            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    })

    $('.interesse_button, .interesse_button_header').click(function(){
        $('.form_container').addClass('active')
    })
    $('#mdiv').click(function(){
        $('.form_container').removeClass('active')
    })
    
    
})