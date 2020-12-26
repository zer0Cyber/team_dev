$(document).ready(function() {
    console.log("hello");
});

let i=0;

jQuery(function(){
    $("#face1").hide();
    $("#face2").hide();
    $("#face3").hide();
    $(".cover").hide();
    $("#finish").hide();

    $("#facea").click(function(){
        $("#face1").show();
        $("#face2").hide();
        $("#face3").hide();
    })
    $("#faceb").click(function(){
        $("#face1").hide();
        $("#face2").show();
        $("#face3").hide();
    })
    $("#facec").click(function(){
        $("#face1").hide();
        $("#face2").hide();
        $("#face3").show();
    })

    /*目隠し機能 */
    $(".img").mousedown(function(){
        if(i==0){
            $(".cover").show();
            $("#finish").show();
        }
        $(".cover").css('z-index', 2);
        i++;
    }).mouseup(function(){
        $(".cover").css('z-index', 1002);
        i++;
    })

    $("#finish").click(function(){
        $(".cover").hide();
    })
});

