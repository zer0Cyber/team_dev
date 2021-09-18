var num = 2;
var flg = 0;


function goyenClick(){

  let audioElm_1 = new Audio('src/osaisen.mp3');
  audioElm_1.play(); // 再生
  audioElm_1.volume = 0.1;

  const btn_goen_kieru = document.getElementById("btn_goen");
  btn_goen_kieru.style.display ="none";

  document.getElementById("ex1").innerText = "鈴を振りましょう";

  var elem = document.getElementById("miko_img");
  elem.src = "img/miko2.png"

  document.getElementById("btn_suzu").removeAttribute
  ("disabled");
}

function suzuClick(){

  // let audioElm_2 = new Audio('src/garagara.mp3');
  // audioElm_2.play(); // 再生
  // audioElm_2.volume = 0.02;

  var elem = document.getElementById("miko_img");
  elem.src = "img/miko.png"

  document.getElementById("ex1").innerText = "神様にご挨拶をしましょう";
  if(flg < 2) {
    document.img.src = "img/tuna" + num + ".png";
    num++;
    if(num > 9) {
      num = 2;
      flg++;
    }
    if(flg == 2) {
      document.img.src = "img/tuna1.png";
      temp();
    }
  }
  setTimeout('suzuClick()',300);
}

function temp(){
  swal({
    content: {
      element: "input",
      attributes: {
        placeholder: "2021年の抱負を教えてください",
      },
    },
  });
}