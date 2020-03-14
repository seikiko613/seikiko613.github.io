//標題半透明效果
/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    if(document.getElementById("tittle_small").innerHTML === "≡"){//如果手機版選單未開啟時
        document.getElementById("header").style.opacity = "0.7";
    }else{
        document.getElementById("header").style.opacity = "1";
    }                                                   
  } else {
    document.getElementById("header").style.opacity = "1";
      
  }
}*/

// URL添加參數

function addParamToURL(key,value){
    var r = document.location.href;
    r = r + "?" + key + "=" + value ;

}

//addParamToURL(sticker,1);