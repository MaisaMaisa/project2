$(document).ready(function(){
    $('.ad').hide();

    $('.3d').mouseenter(function(){
        $('.ad1').show();
    })

    // $('.3d').mouseleave(function(){
    //     $('.ad').hide();
    // })

    // $('.3d').mouseenter(function(){
    //     $('.ad').toggle();
    // })

    $('.close-btn').click(function(){
        $('.ad2').fadeIn(500);
    })

    $('.close-btn2').click(function(){
        $('.ad3').fadeIn(500);
    })

    $('.close-btn3').click(function(){
        $('.ad4').fadeIn(500);
    })

    //each button is treated as an object that has two parameters button and an ad
    const buttons = [
        {button: '.close-btn', ad: 'ad2'},
        {button: '.close-btn2', ad: 'ad3'},
        {button: '.close-btn3', ad: 'ad4'}
    ]
    
    buttons.forEach(({button, ad}) => {
        $(button).click(function(){
            $(ad).fadeIn(500);
        })
    })

    // const buttons = [
    //     { button: 'close-btn', ad: '.ad2'},
    //     { button: 'close-btn2', ad: '.ad3'},
    //     { button: 'close-btn3', ad: '.ad4'}
    // ]

    // buttons.forEach(({ button, ad }) => {
    //     $(button).click(function(){
    //         $(ad).fadeIn(500);
    //     });
    // });

    // $('.close-btn4').click(function(){
    //     $('.ad4').fadeIn(500);
    // })

    // const buttons = [
    //     { button: '.close-btn', ad: '.ad2'},
    //     { button: '.close-btn2', ad: '.ad3'},
    //     { button: '.close-btn3', ad: '.ad4'},
    //     { button: '.close-btn4' }
    // ]

    // buttons.forEach(({ button, ad }) => {
    //     $(button).click(function(){
    //         $(ad).fadeIn(500);
    //     });
    // });

})