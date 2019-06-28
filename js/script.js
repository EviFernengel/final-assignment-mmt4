$( "a" ).click(function( event ) {
    event.preventDefault();
});

$(function(){
    $( "#accordion" ).accordion({animate: 1200, heightStyle: "content",collapsible: true, header:".container2 h3"});
    
});

$('#switch').click(function(){
    if($("#switch").hasClass("active")){
        $("#switch").removeClass("active");
        $("body").addClass('darkmode');
        console.log('dark theme');
    }else{
        $("#switch").addClass("active");
        $('body').removeClass('darkmode');
        console.log('light theme');
    };
});

$('video').each(function(){
    var player = videojs(this.id);
    let geklikt = false;

    $(this).parents(".videoContainer").find(".rewind").click(function(){
        player.currentTime(player.currentTime() - 10); 
    });

    $(this).parents('.videoContainer').find('.toggle').click(function(){
        if (!geklikt){
            player.play();
            $('.toggle').addClass('pause');
            geklikt = true;
        }else{
            player.pause();
            $('.toggle').removeClass('pause');
            geklikt = false;
        }
    });

    $(this).parents('.videoContainer').find('.done').click(function(){
        $(this).parents('.container2').find('.done2').css({'display':'inline'});

        $( "#dialog" ).dialog({
            autoOpen: false,
            show: {
              effect: "blind",
              duration: 1000
            },
            hide: {
              effect: "blind",
              duration: 1000
            }
        });
  
        $("#dialog").dialog("open");
    });
});

