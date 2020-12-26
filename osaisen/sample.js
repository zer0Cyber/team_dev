var num = 2;
var flg = 0;


function goyenClick(){
  const btn_goen_kieru = document.getElementById("btn_goen");
  btn_goen_kieru.style.display ="none";

  document.getElementById("ex1").innerText = "鈴を振りましょう";

  document.getElementById("btn_suzu").removeAttribute
  ("disabled");
}

function suzuClick(){
  document.getElementById("ex1").innerText = "お願いをしましょう";
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
  console.log("神が舞い降りる");

  let body_color = document.getElementById("body");
  body_color.style.background= "";
}