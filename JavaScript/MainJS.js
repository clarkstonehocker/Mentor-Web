$("#Login").click(function(){
    $('#LoginInfo').show("slow");
});
$("#LoginCancel").click(function(){
    $('#LoginInfo').hide("slow");
});
$("#LoginConfirm").click(function(){
   var user = $("#ID").val();
   var pass = $("#pass").val();
   if(user == "clark" && pass == "1234")
        window.location = "PersonalProfile.html";
});
$(".primaryButton").hover(function(){
    $(this).addClass("primaryHover");
    },
    function(){
        $(this).removeClass("primaryHover");
    });

$(".secondaryButton").hover(function(){
    $(this).addClass("secondaryHover");
    },
    function(){
        $(this).removeClass("secondaryHover");
    });

$("#BM").click(function(){
    window.location = "Register.html";
});