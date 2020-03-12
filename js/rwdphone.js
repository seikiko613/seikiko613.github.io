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

//JS判斷螢幕大小
var rwd = window.matchMedia("(max-width: 768px)");
rwd.addListener(resizeWidth);
resizeWidth(rwd);

function resizeWidth(pMatchMedia){
  if (pMatchMedia.matches) {
    //小於768時執行的js
    menu_phone();
    
    
  }else {
    //大於768時執行的js
    menu_pc();
    window.onscroll = function() {scrollFunction()};
      
  }
}

//menu變化
function menu_phone(){document.getElementById("tittle_link").style.display="none";
document.getElementById("tittle_small").style.display="block";
document.getElementById("header").style.opacity = "1";
}
function menu_pc(){document.getElementById("tittle_link").style.display="block";
document.getElementById("tittle_small").style.display="none";
document.getElementById("tittle_small").innerHTML = "≡";
}

//選單變化

function menu_change()
{
    var ts = document.getElementById("tittle_small");
    var tl = document.getElementById("tittle_link");
    var hd =document.getElementById("header");
    
    if(ts.innerHTML === "≡"){
        ts.innerHTML = "X";
        ts.style.padding="0 6px";
        tl.style.display="block";
        hd.style.opacity="1";
    }else{
        ts.innerHTML = "≡";
        ts.style.padding="0 7px";
        tl.style.display="none";
    }
}