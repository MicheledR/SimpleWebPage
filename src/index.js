//document.addEventListener()=>()
$(document).ready(function(){
    $(".icon").click(function(){
        if($(".navBar").hasClass("active")){
            $(".navBar").removeClass("active");
        }
        else {console.log("eccomi")
        $(".navBar").addClass("active");
        }
    })
    $('.met').click(function(){
        console.log("ecco");
        $.ajax(
            {
            'url':` https://api.openweathermap.org/data/2.5/weather?q=London&appid=0fd24adb757f30dde870736b54dde927`,
            'method': 'GET',
            'success': function(risposta){		
                console.log(risposta);
            },
            'error':function(){
                alert('errore!');
            }
            }
        )
    });

});
