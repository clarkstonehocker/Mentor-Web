$("input, select").focus(function(){
    $("input, select").removeClass("focus");
    $(this).addClass("focus");
});