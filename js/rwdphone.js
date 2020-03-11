// 手機RWD
function isMobile() {

  try{ document.createEvent("TouchEvent"); return true; }

  catch(e){ return false;}

}

if(isMobile()){/*....這裡就放入如果是行動裝置的話，要怎麼弄....*/

}else{
    /*....這裡就放入一般正常裝置的程式碼....*/
}