//document.addEventListener()=>()
$(document).ready(function(){
    $('.met').click(function(){
        console.log("ecco");
        $.ajax(
            {
            //'url':` https://api.openweathermap.org/data/2.5/weather?lat=${latitudine}&long=${longitudine}&appid=0fd24adb757f30dde870736b54dde927`,

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
