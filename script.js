$(document).ready(function(){

    $(".ad").hide();

    $("model-viewer").mouseenter(function(){
        $(".ad1").show();
    });

    // $("model-viewer").mouseleave(function(){
    //     $(".ad").hide();
    // });

    // $(".close-btn1").click(function(){
    //     $(".ad2").show();
    // })

    // $(".close-btn2").click(function(){
    //     $(".ad3").show();
    // })

    // $(".close-btn3").click(function(){
    //     $(".ad4").show();
    // })

    // $(".close-btn4").click(function(){
    //     $(".ad").hide();
    // })

    const buttons = [
        {button: ".close-btn1", ad: ".ad2"},
        {button: ".close-btn2", ad: ".ad3"},
        {button: ".close-btn3", ad: ".ad4"},
    ]

    buttons.forEach(({ button, ad}) => {
        $(button).click(function(){
            $(ad).fadeIn(3000);
        })
    })

})