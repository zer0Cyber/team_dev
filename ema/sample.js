$(document).on('click', '#btn_ema1', function(){
    $('#img_ema2').remove();
    $('#img_ema3').remove();
    $('#btn_ema1').remove();
    $('#btn_ema2').remove();
    $('#btn_ema3').remove();
    $("#setsumei").html("ふつうのうしさんでよろしいですか？");
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_ok1">OK</a>')
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_back">選択画面に戻る</a>')
});
$(document).on('click', '#btn_ema2', function(){
    $('#img_ema1').remove();
    $('#img_ema3').remove();
    $('#btn_ema1').remove();
    $('#btn_ema2').remove();
    $('#btn_ema3').remove();
    $("#setsumei").html("れんあいのうしさんでよろしいですか？");
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_ok2">OK</a>')
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_back">選択画面に戻る</a>')
});
$(document).on('click', '#btn_ema3', function(){
    $('#img_ema1').remove();
    $('#img_ema2').remove();
    $('#btn_ema1').remove();
    $('#btn_ema2').remove();
    $('#btn_ema3').remove();
    $("#setsumei").html("おしごとのうしさんでよろしいですか？");
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_ok3">OK</a>')
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_back">選択画面に戻る</a>')
});
$(document).on('click', '#btn_ema_ok1', function(){
    $('#btn_ema_ok1').remove();
    $('#btn_ema_back').remove();
    $('#img_ema1').remove();
    $('#img_ema2').remove();
    $('#img_ema3').remove();
    $('.img_btn_choice').append('<td><img src="img/ema_normal_ura.png" id="img_ema1"></td>')
    $("#setsumei").html("今年の抱負や願いを書きましょう！");
    $('.ema_box').append('<form name="ematextarea"><textarea name="emabox" class="sample3" cols="40" rows="8"></textarea></form>');
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_kansei">完成！</a>')
});
$(document).on('click', '#btn_ema_ok2', function(){
    $('#btn_ema_ok2').remove();
    $('#btn_ema_back').remove();
    $('#img_ema1').remove();
    $('#img_ema2').remove();
    $('#img_ema3').remove();
    $('.img_btn_choice').append('<td><img src="img/ema_renai_ura.png" id="img_ema2" width="400" height="364"></td>')
    $("#setsumei").html("今年の抱負や願いを書きましょう！");
    $('.ema_box').append('<form name="ematextarea"><textarea name="emabox" class="sample3" cols="40" rows="8"></textarea></form>');
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_kansei">完成！</a>')
});
$(document).on('click', '#btn_ema_ok3', function(){
    $('#btn_ema_ok3').remove();
    $('#btn_ema_back').remove();
    $('#img_ema1').remove();
    $('#img_ema2').remove();
    $('#img_ema3').remove();
    $('.img_btn_choice').append('<td><img src="img/ema_shigoto_ura.png" id="img_ema3" width="400" height="364"></td>')
    $("#setsumei").html("今年の抱負や願いを書きましょう！");
    $('.ema_box').append('<form name="ematextarea"><textarea name="emabox" class="sample3" cols="40" rows="8"></textarea></form>');
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_kansei">完成！</a>')
});
$(document).on('click', '#btn_ema_back', function(){
    window.location.href = "index.html";
});
$(document).on('click', '#btn_ema_kansei', function(){
    const pray = document.ematextarea.emabox.value;
    $('.ema_box').remove();
    $('#btn_ema_kansei').remove();
    $("#setsumei").html("完成しました！");
    $('.ema_box_kansei').append('<p>' + pray + '</p>');
    $('.ema_box_kansei').css("position", "absolute");
    $('.ema_box_kansei').css("text-align", "center");
    $('.ema_box_kansei').css("left", "40%");
    $('.ema_box_kansei').css("bottom", "280px");
    $('.ema_box_kansei').css("width", "200px");
    $('.ema_box_kansei').css("height", "200px");
    $('.ema_box_kansei').css("color", "#333");
    $('.ema_box_kansei').css("font-size", "large");
});