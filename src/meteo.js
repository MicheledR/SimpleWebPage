//document.addEventListener()=>()
$(document).ready(function(){
    $('.met').click(function(){
        console.log("ecco");
        var celsius;
        var icon;
        var la;
        var lo;
        var citta;
        var img_url='http://openweathermap.org/img/wn/';
        function getLocation() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
              x.innerHTML = "Geolocation is not supported by this browser.";
            }
          }
          
          function showPosition(position) {
            la=position.coords.latitude;
            console.log(la);
            lo=position.coords.longitude;
            const url=` https://api.openweathermap.org/data/2.5/weather?lat=${ la }&lon=${lo}&appid=0fd24adb757f30dde870736b54dde927`;
            $.ajax(
              {
              //'url':` https://api.openweathermap.org/data/2.5/weather?lat=${latitudine}&long=${longitudine}&appid=0fd24adb757f30dde870736b54dde927`,
            
              'url': url,
              'method': 'GET',
              'success': function(risposta){		
                  citta=risposta.name;
                  descrizione=risposta.weather[0].description;
                  icon=risposta.weather[0].icon;
                  celsius= Math.floor(risposta.main.temp - 273.15);
                  console.log(citta);
                  $(".nome_citta").text(citta);
                  $(".icon_meteo").attr("src",img_url+icon+".png")
                  $(".temperatura").html(celsius+"° <i class='fas fas fa-temperature-low'></i>");
                  $(".descrizione_meteo").text(descrizione);
                  console.log(la+"/"+lo);
                 
                  console.log(risposta);
              },
              'error':function(){
                  console.log(url);
                  alert('errore!');
              }
              }
          )
          }
          getLocation();
          console.log("---");
          console.log(citta);
        

    });



});
