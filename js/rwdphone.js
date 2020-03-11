// 手機RWD
function isMobile() {

  try{ document.createEvent("TouchEvent"); return true; }

  catch(e){ return false;}

}

if(isMobile()){
    /*....這裡就放入如果是行動裝置的話，要怎麼弄....*/

}else{
    /*....這裡就放入一般正常裝置的程式碼....*/
}
var rwd = window.matchMedia("(max-width: 768px)");
rwd.addListener(resizeWidth);
resizeWidth(rwd);

function test1(){document.getElementById("tittle_link").style.display="none";
document.getElementById("tittle_small").style.display="block";
}
function test2(){document.getElementById("tittle_link").style.display="block";
document.getElementById("tittle_small").style.display="none";
}

function resizeWidth(pMatchMedia){
  if (pMatchMedia.matches) {
    //小於768時執行的js
    test1();
    
  }else {
    //大於768時執行的js
    test2();
  }
}