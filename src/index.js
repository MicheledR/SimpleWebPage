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

});
