$(".ScheduleApt").click(function(){
    $(this).prev().show();
    $(this).hide();
});
$(".AptCancel").click(function(){
    $(".example").hide();
    $(".ScheduleApt").show();
});
$(".chatIcon").hover(function(){
    $(this).addClass("hover");
}, function(){
    $(this).removeClass("hover");
});

$(".chatIcon").click(function(){
   window.location = "MentorChat.html"; 
});

$("#ProfileEdit").hover(function(){
    $(this).addClass("hover");
}, function(){
    $(this).removeClass("hover");
});

$("#ProfileEdit").click(function(){
    window.location = "ProfileEdit.html";
});

$("#AddMentors").click(function(){
    window.location = "MentorsSearch.html";
});