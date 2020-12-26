$(document).ready(function() {
    console.log("hello");
});

let i=0;
let f=0;

jQuery(function(){
    $("#face1").hide();
    $("#face2").hide();
    $("#face3").hide();
    $(".cover").hide();
    //$(".cover2").hide();

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

    //for(let j=1; j < 10; j++){
        //i++;
        // $("#me"+j).mouseup(function(){
        //     console.log(j);
        //     $(".cover").css('z-index', 1002);
        // }).mousedown(function(){
        //     $(".cover").css('z-index', j);
        //     $(".cover").show();
        // })
        $(".img").mousedown(function(){
            if(i==0){
                $(".cover").show();
            }
            $(".cover").css('z-index', 2);
            i++;
            console.log(i);
        }).mouseup(function(){
            $(".cover").css('z-index', 1002);
            i++;
            console.log(i);
        })
    //}

    $("#finish").click(function(){
        $(".cover").hide();
    })
});

