$(function(){
    $('li').click(function(){
        $(this).toggleClass('active')
        $(this).find('p')
        let this_li = $(this).html()
        
        $('li').each(function(e, li){
            console.log(li.innerHTML, this_li)
            if(li.innerHTML != this_li){
                $(this).removeClass('active')
            }
        })


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
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
    
})