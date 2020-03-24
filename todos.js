$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
    var text = $(this).val();
    if(event.which===13){
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + text + "</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();
});