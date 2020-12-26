// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
//  【 画像やDIVのマウス移動 】  http://www.cman.jp
//
//   商用,改変,再配布はすべて自由ですですが、動作保証はありません
//
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    maintenance history
//
//    Ver   Date        contents
//    0.9   2016/6/5    New
//    0.91  2016/6/21   スマートフォン対応
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
//  使用方法
//    移動したいhtmlのタグに以下の設定をしてください
//
//   「 cmanOMat="move" 」or「 cmanOMat="movearea" 」
//
//
//   【注意】
//     引数やユーザ設定内容についてはノーチェックです
//     解析しやすいようにコメントを多く入れています。
//     JavaScriptのファイルサイズを削減する場合は、コメントやスペースを消してください。
//
//
//   詳細は以下でご確認ください
//    https://web-designer.cman.jp/javascript_ref/mouse/move/
//
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


// ----- 初期イベントの登録 --------------------------------------------------------------
if     ( window.addEventListener ){window.addEventListener('load', cmanOM_JS_init, false);}
else if( window.attachEvent )     {window.attachEvent( 'onload', cmanOM_JS_init );}


// ----- 共通変数 ------------------------------------------------------------------------
var cmanOM_VAR    = {};
var cmanOM_Obj    = [];
var cmanOM_OyaObj = [];

// =========================================================================================
//	初期処理（オンロード時）
// =========================================================================================
function cmanOM_JS_init(){

	// 対象のタグ（追加すれば移動対象となる）
	var wTargetTag	= [ 'img', 'div' ];
	var wTagList	= [];
	var wObjAt;

	cmanOM_VAR['moveOn']	= false;


	if ("ontouchstart" in window) {
		cmanOM_VAR['device'] ='mobi';
	}else{
		cmanOM_VAR['device'] ='pc';
	}


	// ----- 対象タグの一覧を配列に格納 --------------------------------------------------
	for(var i = 0; i < wTargetTag.length; i++){

		var wHtmlCollection = document.getElementsByTagName(wTargetTag[i]);

		for(var j = 0; j < wHtmlCollection.length; j++){
			wTagList.push( wHtmlCollection[j] );
		}
	}

	// ----- 対象タグの一覧より対象オブジェクト(cmanOMatの属性あり）を抽出する -----------
	for(var i = 0; i < wTagList.length; i++){

		wObjAt = wTagList[i].getAttribute("cmanOMat");

		if((wObjAt === null)||(wObjAt =='')){
		}else{
			if(wObjAt.toLowerCase().match(/move/)){
				cmanOM_Obj.push( wTagList[i] );	// 移動対象のオブジェクトを保存
			}
		}
	}


	// ----- 対象オブジェクトを移動可能な状態に整備する ----------------------------------
	for(var i = 0; i < cmanOM_Obj.length; i++){

		// ----- absolute以外の場合は、親要素を作成し位置ずれしないように調整 ------------
		if(cmanOM_Obj[i].style.position.toLowerCase() != 'absolute'){

			// 対象オブジェクトのSTYLE
			var wObjStyle = window.getComputedStyle(cmanOM_Obj[i], null);

			// 親要素の作成
			var wOyaDiv = document.createElement("div");
			wOyaDiv.setAttribute("id", "cmanOM_ID_DMY"+i);
			wOyaDiv.style.position		= 'relative';
			wOyaDiv.style.width		= cmanOM_Obj[i].offsetWidth + 'px';	// 大きさとmarginは元オブジェクトよりコピー
			wOyaDiv.style.height		= cmanOM_Obj[i].offsetHeight + 'px';
			wOyaDiv.style.marginTop		= wObjStyle.marginTop
			wOyaDiv.style.marginRight	= wObjStyle.marginRight
			wOyaDiv.style.marginBottom	= wObjStyle.marginBottom
			wOyaDiv.style.marginLeft	= wObjStyle.marginLeft
			if(cmanOM_Obj[i].tagName.toLowerCase() == 'img'){
				wOyaDiv.style.display = 'inline-block';
			}

			// 対象オブジェクトのNodeを取得し、直前に親要素をタス
			var wParentDiv = cmanOM_Obj[i].parentNode;
			wParentDiv.insertBefore(wOyaDiv,  cmanOM_Obj[i]);

			// 対象オブジェクトを一旦複写
			var wCopyNode = cmanOM_Obj[i].cloneNode(true); 

			// コピーしたオブジェクトの設定
			wCopyNode.style.position	= 'absolute';
			wCopyNode.style.top		= 0;
			wCopyNode.style.left		= 0;
			wCopyNode.style.margin		= 0;

			// 登録した親要素の子要素として、対象オブジェクトを複写
			document.getElementById("cmanOM_ID_DMY"+i).appendChild(wCopyNode); 

			// コピー元を削除
			cmanOM_Obj[i].parentNode.removeChild(cmanOM_Obj[i]);

			// 保存の対象オブジェクト一覧をコピー版に入れ替える
			cmanOM_Obj[i] = wCopyNode;
		}


		// ----- movearea（枠内のみ）の場合は、親要素の枠(area)を保存 --------------------
		wObjAt = cmanOM_Obj[i].getAttribute("cmanOMat");

		if(wObjAt.toLowerCase().match(/movearea/)){

			cmanOM_OyaObj[i] = '';
			var wOyaObj = cmanOM_Obj[i];

			for(var j = 0; j < 20; j++){

				wOyaObj = wOyaObj.parentNode;

				if((typeof wOyaObj === 'object')&&(wOyaObj.tagName.toLowerCase() != 'html')){

					wObjAt = wOyaObj.getAttribute("cmanOMat");

					if((wObjAt === null)||(wObjAt =='')){
					}else{
						if(wObjAt.toLowerCase().match(/area/)){
							cmanOM_OyaObj[i] = wOyaObj;
							break;
						}
					}
				}else{
					break;
				}
			}
		}


		// ----- movearea（枠内のみ）の場合は、親要素の枠(area)を保存 --------------------
		if (cmanOM_VAR['device'] == 'mobi') {
			// スマホなど
			cmanOM_Obj[i].ontouchstart	= cmanOM_JS_mdown;
			cmanOM_Obj[i].ontouchend	= cmanOM_JS_mup;
			cmanOM_Obj[i].ontouchmove	= cmanOM_JS_mmove;
		}else{
			// パソコンなど
			cmanOM_Obj[i].onmousedown	= cmanOM_JS_mdown;
			cmanOM_Obj[i].onmouseup		= cmanOM_JS_mup;
			cmanOM_Obj[i].onmousemove	= cmanOM_JS_mmove;
			cmanOM_Obj[i].onmouseout	= cmanOM_JS_mout;
		}


		cmanOM_Obj[i].style.cursor  = "pointer";
		cmanOM_Obj[i].setAttribute("cmanOMno", i);

	}
}

// =========================================================================================
//	マウス DOWN
// =========================================================================================
function cmanOM_JS_mdown(e){

	cmanOM_VAR['moveOn']	= false;


	// ----- 対象判定 ----------------------------------------------------------------
	var wTarget = e.target || e.srcElement;
	var wObjAt = wTarget.getAttribute("cmanOMat");		// DIVなどの場合、DIV内のタグは対象外

	if((wObjAt === null)||(wObjAt =='')){
	}else{
		if(wObjAt.toLowerCase().match(/move/)){
			cmanOM_VAR['moveOn']	= true;
		}
	}

	if(!cmanOM_VAR['moveOn']){return;}


	// ----- 画像の重ね合せ（前景／後景）の整理 --------------------------------------
	for(var i = 0; i < cmanOM_Obj.length; i++){
		if(cmanOM_Obj[i].style.zIndex != 1){
			cmanOM_Obj[i].style.zIndex	= 1;
		}
	}

	// ----- 対象オブジェクトの情報保存 ----------------------------------------------
	cmanOM_VAR['objNowImg']	= wTarget;									// 対象オブジェクト

	if (cmanOM_VAR['device'] == 'mobi') {
		cmanOM_VAR['sPosX']	= e.touches[0].pageX;							// マウスがクリックされた位置
		cmanOM_VAR['sPosY']	= e.touches[0].pageY;							// マウスがクリックされた位置
	}else{
		cmanOM_VAR['sPosX']	= e.pageX;								// マウスがクリックされた位置
		cmanOM_VAR['sPosY']	= e.pageY;								// マウスがクリックされた位置
	}

	if(cmanOM_VAR['objNowImg'].style.top == ''){
		cmanOM_VAR['sTop']	= 0;
	}else{
		cmanOM_VAR['sTop']	= parseInt(cmanOM_VAR['objNowImg'].style.top.replace("px", ""));	// 対象オブジェクトのTop
	}
	if(cmanOM_VAR['objNowImg'].style.left == ''){
		cmanOM_VAR['sLeft']	= 0;
	}else{
		cmanOM_VAR['sLeft']	= parseInt(cmanOM_VAR['objNowImg'].style.left.replace("px", ""));	// 対象オブジェクトのLeft
	}

	cmanOM_VAR['objNowImg'].style.zIndex	= 2;

	return false;
}

// =========================================================================================
//	マウス UP
// =========================================================================================
function cmanOM_JS_mup(e){

	cmanOM_VAR['moveOn']	= false;

}

// =========================================================================================
//	マウス OUT
// =========================================================================================
function cmanOM_JS_mout(e){

	cmanOM_VAR['moveOn']	= false;

}

// =========================================================================================
//	マウスMOVE
// =========================================================================================
function cmanOM_JS_mmove(e){

	if(!cmanOM_VAR['moveOn']){return;}


	// ----- 対象オブジェクトのSTYLE -----------------------------------------------------
	var wObjStyle = window.getComputedStyle(cmanOM_VAR['objNowImg'].parentNode, null);

	var wObjNo	= -1;
	var wObjAt = cmanOM_VAR['objNowImg'].getAttribute("cmanOMno");
	if((wObjAt === null)||(wObjAt =='')){
	}else{
		wObjNo = parseInt(wObjAt);
	}


	// ----- 移動位置を計算して設定 ------------------------------------------------------
	if (cmanOM_VAR['device'] == 'mobi') {
		cmanOM_VAR['objNowImg'].style.top  = cmanOM_VAR['sTop']  - ( cmanOM_VAR['sPosY'] - e.touches[0].pageY) + 'px';
		cmanOM_VAR['objNowImg'].style.left = cmanOM_VAR['sLeft'] - ( cmanOM_VAR['sPosX'] - e.touches[0].pageX) + 'px';
	}else{
		cmanOM_VAR['objNowImg'].style.top  = cmanOM_VAR['sTop']  - ( cmanOM_VAR['sPosY'] - e.pageY) + 'px';
		cmanOM_VAR['objNowImg'].style.left = cmanOM_VAR['sLeft'] - ( cmanOM_VAR['sPosX'] - e.pageX) + 'px';
	}


	// ----- 枠内のみ移動可能なオブジェクトは、はみ出していないかチェック＆位置補正 ------
	if(wObjNo < 0){
	}else{
		if( typeof cmanOM_OyaObj[wObjNo]  == "object"){

			var wOyaRect = cmanOM_OyaObj[wObjNo].getBoundingClientRect();
			var wObjRect = cmanOM_VAR['objNowImg'].getBoundingClientRect();

			var wTop  = 0;
			var wLeft = 0;

			if(wOyaRect.top > wObjRect.top){
				wTop  +=  wOyaRect.top - wObjRect.top;
			}

			if(wOyaRect.left > wObjRect.left){
				wLeft += wOyaRect.left - wObjRect.left;
			}

			if((wOyaRect.top + wOyaRect.height) < (wObjRect.top + wObjRect.height)){
				wTop  +=  (wOyaRect.top + wOyaRect.height) - (wObjRect.top + wObjRect.height);
			}

			if((wOyaRect.left + wOyaRect.width) < (wObjRect.left + wObjRect.width)){
				wLeft +=  (wOyaRect.left + wOyaRect.width) - (wObjRect.left + wObjRect.width);
			}


			if(wTop  != 0){cmanOM_VAR['objNowImg'].style.top  = parseInt(cmanOM_VAR['objNowImg'].style.top.replace("px", ""))  + wTop  + 'px';}
			if(wLeft != 0){cmanOM_VAR['objNowImg'].style.left = parseInt(cmanOM_VAR['objNowImg'].style.left.replace("px", "")) + wLeft + 'px';}

		}
	}

	return false;

}
