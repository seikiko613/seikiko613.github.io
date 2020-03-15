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
$(document).ready(function(){

});
//選單半透明效果
window.onscroll = function() {scrollFunction()};
var w = $(window).width();

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        if( w > 768 ){
            document.getElementById("header").style.opacity = "0.7"; 
        }else{
            document.getElementById("header").style.opacity = "1";
        }
                                                     
  } else {
      document.getElementById("header").style.opacity = "1";
      
  }
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
    
      
  }
}


//menu變化
function menu_phone(){document.getElementById("tittle_link").style.display="none";
document.getElementById("tittle_menu").style.display="block";
//document.getElementById("header").style.opacity = "1";
}
function menu_pc(){document.getElementById("tittle_link").style.display="block";
document.getElementById("tittle_menu").style.display="none";
$("#tittle_menu").removeClass("change");

}

//選單變化

function menu_change()
{
    $("#tittle_menu").toggleClass("change");
    $("#tittle_link").slideToggle();
    //document.getElementById("header").style.opacity="1";
}