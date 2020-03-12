//標題半透明效果
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    if(document.getElementById("tittle_small").innerHTML === "≡"){
        document.getElementById("header").style.opacity = "0.7";
    }else{
        document.getElementById("header").style.opacity = "1";
    }                                                   
  } else {
    document.getElementById("header").style.opacity = "1";
      
  }
}

/*function test(){
    var x = document.getElementById("tittle_link");
    if(x.style.display==="none"){
        x.style.display="block";
    }else{
        x.style.display="none";
    }
}
*/