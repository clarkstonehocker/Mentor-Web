$("#Cancel").click(function(){
   window.location = "Main Page.html"; 
});

$(".RegisterField").hover(function(){
    $(this).addClass("focused");
},
    function(){
        $(this).removeClass("focused");
});

$(".RegisterField, select").focus(function(){
    $(".RegisterField, select").removeClass("inputActive");
    $(this).removeClass("focused");
    $(this).addClass("inputActive");
});

$("#Submit").click(function(){
    window.location = "PersonalProfile.html";
})

