$("#Close, .ChatAvailable").hover(function(){
    $(this).addClass("hover");
}, function(){
    $(this).removeClass("hover");
});

$("#Close").click(function(){
   $("#ChatBox").hide(); 
});

$("#messageEntry").focusin(function(){
    $(this).addClass("focus");
});
$("#messageEntry").focusout(function(){
    $(this).removeClass("focus");
});


/*
$(document).ready(function () {
        setInterval(function () {
            //var bottomOfTextArea = $('#textArea');
            $.ajax({
                type: "GET",
                url: "/default1/List",
                success: function (msg) {
                    var psconsole = $('#textArea');
                    psconsole.text(msg);
                    psconsole.scrollTop(
                        psconsole[0].scrollHeight - psconsole.height()
                    );
                }
            });
        }, 5000); //5 seconds

$("#messageBtn").click(function () {
    $.ajax({
        type: "GET",
        url: "/default1/Insert?msg=" + $("#messageEntry").val(),
        success: function (msg) {
            //Make the ajax db query a function and place it here
            //$("#textArea").append(msg);
            }
        });
    });  
});*/