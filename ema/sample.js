$(document).on('click', '#btn_ema1', function(){
    $('#img_ema2').remove();
    $('#img_ema3').remove();
    $('#btn_ema1').remove();
    $('#btn_ema2').remove();
    $('#btn_ema3').remove();
    $("#setsumei").html("ふつうのうしさんでよろしいですか？");
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_ok">OK</a>')
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_back">選択画面に戻る</a>')
});
$(document).on('click', '#btn_ema2', function(){
    $('#img_ema1').remove();
    $('#img_ema3').remove();
    $('#btn_ema1').remove();
    $('#btn_ema2').remove();
    $('#btn_ema3').remove();
    $("#setsumei").html("れんあいのうしさんでよろしいですか？");
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_ok">OK</a>')
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_back">選択画面に戻る</a>')
});
$(document).on('click', '#btn_ema3', function(){
    $('#img_ema1').remove();
    $('#img_ema2').remove();
    $('#btn_ema1').remove();
    $('#btn_ema2').remove();
    $('#btn_ema3').remove();
    $("#setsumei").html("おしごとのうしさんでよろしいですか？");
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_ok">OK</a>')
    $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_back">選択画面に戻る</a>')
});
$(document).on('click', '#btn_ema_ok', function(){
  $('#btn_ema_ok').remove();
  $('#btn_ema_back').remove();
  $('#img_ema1').remove();
  $('#img_ema2').remove();
  $('#img_ema3').remove();
  $('.img_btn_choice').append('<td><img src="img/ema_normal_ura.png" id="img_ema1"></td>')
  $("#setsumei").html("今年の抱負や願いを書きましょう！");
  $('.ema_box').append('<form name="ematextarea"><textarea name="emabox" class="sample3" cols="40" rows="8"></textarea></form>');
  $('.ema_kakunin').append('<a class="btn btn-border-shadow btn-border-shadow--color2" id="btn_ema_kansei">完成！</a>')
});
$(document).on('click', '#btn_ema_back', function(){

});
$(document).on('click', '#btn_ema_kansei', function(){
    const pray = document.ematextarea.emabox.value;
    $('.ema_box').remove();
});