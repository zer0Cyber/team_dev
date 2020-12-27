jQuery(function(){
    $(function(){
        $(".op").fadeOut(1000);
    })


    $("#shopinfo").click(function(){
        swal({
            title: 'ようこそ屋台へ！',
            text: 'よってらっしゃいみてらっしゃい～\n*只今入荷待ちです'
        });
    })
});